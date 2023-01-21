---
title: 搭建Teambition网盘的目录索引
date: 2021-01-01 09:39:47
tags: web
updated: 2021-01-01 09:39:47
last: 2021-01-01 09:39:47
---

github链接：[TeambitionShare](https://github.com/FlxSNX/TeambitionShare)

#### 文章已过期！

#### 准备

- Teambition账号

- 一台云服务器/支持PHP的虚拟主机

#### 安装

这里以宝塔面板为例

先创建

![image-20210101095911579](https://raw.hzchu.top/thun888/tuku/master/img/image-20210101095911579.png)

从github把源码下载后上传然后解压

![image-20210101100249006](https://raw.hzchu.top/thun888/tuku/master/img/image-20210101100249006.png)

进到/TeambitionShare-master里把源码拉出来

gif:![20210101100433](https://onep.hzchu.top/mount/pic/2021/09/5f5c8175d7b846cfe33f818b4b7e0791.webp)

然后配置伪静态（不设置会404）

Nginx

```
#根目录伪静态
location / {
  if (!-e $request_filename){
    rewrite ^(.*)$ /index.php/?s=$1;
  }
}
#二级目录伪静态，自行修改pan为你的二级目录名字
location /pan {
  if (!-e $request_filename){
    rewrite ^/pan/(.*)$ /pan/index.php/?s=$1;
  }
}
```

Apache

```yaml
<IfModule mod_rewrite.c>
  Options +FollowSymlinks -Multiviews
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteRule ^(.*)$ index.php/?s=$1 [QSA,PT,L]
</IfModule>
```

![image-20210101101126292](https://raw.hzchu.top/thun888/tuku/master/img/image-20210101101126292.png)

在www.teambition.com上登录账号

![image-20210101101410967](https://raw.hzchu.top/thun888/tuku/master/img/image-20210101101410967.png)

新建一个项目（**更多**里）（**不创建项目网盘中的所有的内容都会展示出来**）

![20210101101526](https://raw.hzchu.top/thun888/tuku/master/img/20210101101526.gif)

获取项目id

![image-20210101102115026](https://raw.hzchu.top/thun888/tuku/master/img/image-20210101102115026.png)

获取cookie

![image-20210101111420025](https://raw.hzchu.top/thun888/tuku/master/img/image-20210101111420025.png)

访问刚刚部署的网站，把cookie和项目id填好

![image-20210101111500122](https://raw.hzchu.top/thun888/tuku/master/img/image-20210101111500122.png)

（如果出现500可以删除/config/app.cfg.php重来）

#### ok

![image-20210101111805262](https://raw.hzchu.top/thun888/tuku/master/img/image-20210101111805262.png)