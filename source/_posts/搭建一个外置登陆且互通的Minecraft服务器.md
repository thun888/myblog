---
title: 搭建一个外置登陆且互通的MC服务器
date: 2024-07-18 20:22:42
updated: 2024-07-18 20:22:42
tags: MC
cover: https://dolphinsbukets.s3.bitiful.net/article-cover/cover-9.png?fmt=avif
banner: https://dolphinsbukets.s3.bitiful.net/article-cover/cover-9.png?fmt=avif&q=50
description: 我服务器是离线登录的，一直以来都是本地打mod来实现显示皮肤。昨天有人折腾了半天，仔细想想要不整个外置登录吧，然后一步一个坑，记录一下。
categories: 技术类
references:
 - '[安装指南 | Blessing Skin 用户手册](https://blessing.netlify.app/setup.html)'
 - '[外置登录 | MineStar Studio 文档 (minestarofficial.github.io)](https://minestarofficial.github.io/guide/authlib-injector/)'
 - '[最新的 Minecraft Bedrock 不支持使用 Mojang 账号登录，故无法借助 Geyser 和本项目实现基岩版用户外置登录 · Issue #230 · yushijinhun/authlib-injector (github.com)](https://github.com/yushijinhun/authlib-injector/issues/230)'
 - '[让 Geyser 用上外置登录（使用 Authlib-Injector） | SharwOrange の Blog 小屋 (hope-now.top)](https://blog.hope-now.top:8443/posts/20230902142755)'
---

## 前言

我服务器是离线登录的，一直以来都是本地打mod来实现显示皮肤。昨天有人折腾了半天，仔细想想要不整个外置登录吧，然后一步一个坑{% emoji blobcat blobcatsaitama %}，记录一下

## 搭建

### Blessing Skin

#### 修改环境配置

官方不建议用面板类程序部署，因为会禁用某些php函数，启用就好。在`禁用函数`或在`php.ini`里面的`disable_functions`里去掉以下函数

- `symlink`
- `readlink`
- `putenv`
- `realpath`

同时，安装必需的 PHP （<8.2）扩展：

{% folders %}
<!-- folder 折叠啦 -->

- OpenSSL >= 1.1.1 (TLS 1.3)
- PDO
- Mbstring
- Tokenizer
- GD
- XML
- Ctype
- JSON
- fileinfo
- zip

{% endfolders %}

#### 本体

从[Releases](https://github.com/bs-community/blessing-skin-server/releases)下载程序包并解压，设置`运行目录`为`/public`，或在配置文件里设置`root /{yourwebsitespath}/public;`

设置伪静态：

```nginx
location / {
      try_files $uri $uri/ /index.php?$query_string;
}
```

若开启了防跨站安全设置需关闭

#### 安装

配置完伪静态后，直接访问对应的域名就能跳转到安装页面了，在完成基本的安装后，在插件市场里安装`Yggdrasil API`并启用

{% image https://onep.hzchu.top/mount/pic/myself/2024/07/669a07c0d161d.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/07/669a07c0d161d.png image-20240719142918745 %}

{% image https://onep.hzchu.top/mount/pic/myself/2024/07/669a07d69727e.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/07/669a07d69727e.png image-20240719142941137 %}



最后可以尝试访问`//{yourwebsites}/api/yggdrasil`看看有无类似以下输出

{% image https://onep.hzchu.top/mount/pic/myself/2024/07/669a085710b06.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/07/669a085710b06.png image-20240719143149605 %}

#### 扩展

为更方便的管理玩家，可以在安装邀请码插件来避免多次/外部人员注册

#### 常见问题

1. 图片无法显示/页面混乱

   请检查你的 Nginx 规则配置中是否有这类控制浏览器缓存的规则，删除即可：

   ```nginx
   location ~ .*\.(gif|jpg|jpeg|png|bmp|swf|flv|ico)$ {
       expires 30d;
       access_log off;
   }
   ```

2. 插件市场无法使用

   在`.env`里添加`PLUGINS_REGISTRY=https://d2jw1l0ullrzt6.cloudfront.net/registry_{lang}.json`

3. 验证邮箱地址报403 Forbidden，无效的链接：参阅[验证邮箱地址报403 Forbidden，无效的链接](https://github.com/bs-community/blessing-skin-server/issues/636)

4. 报错：`Lcobucci\JWT\Signer\Key\InMemory::plainText(): Argument #1 ($contents) must #21 10.08 be of type string, null given`：

   在`.env`里添加`JWT_SECRET=...`值与`APP_KEY`一致

### 游戏服务端

这是原本的游玩路径

{% image https://onep.hzchu.top/mount/pic/myself/2024/07/669a0b070bc7f.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/07/669a0b070bc7f.png image-20240719144316520 %}

可见有一些不足：玩家每一次登录都要敲密码，新玩家还要手动加白名单，但使用了外置登陆后这些都可以丢掉了。`authlib-injector`通过“劫持”官方的正版验证接口，实现了一种特殊的认证，与正版无异。只需要一个账户就可以畅玩服务器。

{% image https://onep.hzchu.top/mount/pic/myself/2024/07/669a0c508209b.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/07/669a0c508209b.png image-20240719144846911 %}

#### 游戏服务端

下载[authlib-injector](https://authlib-injector.yushi.moe/)到服务端同级目录

在启动命令的`-jar`参数前加上`-javaagent:authlib-injector-1.xx.xx.jar=https://{yourwebsites}/api/yggdrasil`，注意更改版本号和网站为对应的

由于是“劫持”官方的正版验证接口，还需要开启正版验证（`online-mode`设置为`true`）

尝试启动看看日志输出类似文本即可

{% image https://onep.hzchu.top/mount/pic/myself/2024/07/669a0e8284223.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/07/669a0e8284223.png image-20240719145808855 %}

尝试连接吧~

#### 常见问题

1. 无效对话：设置`prevent-proxy-connections = false`
2. 无法使用游戏内聊天，由于个人信息公钥丢失，聊天已被禁用。请尝试重新连接：设置`enforce-secure-profile=false`
3. 无法验证玩家用户名：检查皮肤站是否正常运行，在`.env`中打开调试模式（APP_DEBUG），检查`./storage/logs`中的日志内容

#### Geyser

由于是“劫持”官方的正版验证接口（梅花三弄），对于独立版同样需要外挂`authlib-injector`，

只需要找到对应的下载下来，参考游戏服务端的运行方式就可以了......吗？

在高版本的Geyser中，已经[移除了Mojang账户的登录接口](https://github.com/GeyserMC/Geyser/commit/7983448ce637656db1fca95eb65344a8c6d90de3)，很不巧的是这里就要用到它，所以你还要把它加回来。

> 如果只需要最新版看这里就好：[Shanwer/Geyser](https://github.com/Shanwer/Geyser)

1. fork [Geyser](https://github.com/GeyserMC/Geyser) 到自己账号，再clone到本地

2. 因为我的服务器版本不是最新的，还要找到适合的版本，可以在[GameProtocol.java](https://github.com/GeyserMC/Geyser/commits/master/core/src/main/java/org/geysermc/geyser/network/GameProtocol.java)里面找，如我要编译适合1.20.1的版本，先找到drop掉的前一个commit，复制commit id

   {% image https://onep.hzchu.top/mount/pic/myself/2024/07/669a15cc38e84.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/07/669a15cc38e84.png image-20240719152914544 %}

   {% image https://onep.hzchu.top/mount/pic/myself/2024/07/669a15eddee91.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/07/669a15eddee91.png image-20240719152948254 %}

3. 执行 {% copy git checkout {CommitId} prefix:$ %}切换到对应版本，新建一个分支，如`build`

   {% copy git checkout -b build prefix:$ %}

4. 参考[这里](https://github.com/thun888/Geyser/pull/1/files)来进行修改代码，修改完毕后推送到新分支

   > 本地化处理：
   >
   > 原仓库对于外置登录做了些文本上的调整，运行以下命令切换
   >
   > ```bash
   > git rm --cached "core/src/main/resources/languages"
   > git submodule add https://github.com/Silverteal/geyser-languages-for-custom-yggdrasil.git core/src/main/resources/languages
   > ```
   >
   > 

   {% copy git push --set-upstream origin build prefix:$ %}

5. 随后启用action并在action选择对应的分支构建

{% image https://onep.hzchu.top/mount/pic/myself/2024/07/669a174387943.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/07/669a174387943.png image-20240719153529593 %}

6. 在构建完成后下载（我这里是独立版，插件版操作类似

   {% image https://onep.hzchu.top/mount/pic/myself/2024/07/669b1140da0bb.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/07/669b1140da0bb.png 在action页面里找到刚刚完成的构建 %}

   {% image https://onep.hzchu.top/mount/pic/myself/2024/07/669a198d353ed.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/07/669a198d353ed.png 下载到本地 %}

7. 运行并调整配置即可

#### 常见问题

1. 此服务器需要一个付费的Java账号：因为 Geyser 本身的问题，无法使用有多角色的外置登录解决方案，也就是说皮肤站内有多个角色时无法登录

## 效果

{% image https://onep.hzchu.top/mount/pic/myself/2024/07/669a29db14036.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/07/669a29db14036.png 皮肤共通 %}

## 后

一天啊，总算整好了~{% emoji blobcat blobcatsadreach %}
