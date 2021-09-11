---
layout: wiki
wiki: Artalk-doc # 这是项目名
title: 安装（PHP）
keywords: 安装artalk,Artalk,配置Artalk
order: 0
---

!!! warning 注意
    本页面最后编辑时间为2021/7/21，在日后的版本中可能不再适用，请以仓库为准

#### 补全依赖

##### 通过[Goorm](https://ide.goorm.io/)

先[登录](https://accounts.goorm.io/login)

![image-20210626201756022.png](https://bu.dusays.com/2021/07/16/5709679bc5e10.png)

新建容器

![image-20210626204541312](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20210626204541312.png)

仓库地址{% copy https://github.com/ArtalkJS/Artalk-API-PHP %}

![image-20210626205315342](https://cdn.jsdelivr.net/gh/thun888/tuku@master//img/image-20210626205315342.png)

完成后在代码框中依次输入

1.安装composer

{% copy curl -sS https://getcomposer.org/installer | php %}

{% copy mv composer.phar /usr/local/bin/composer %}

2.安装php扩展库

{% copy apt update -y %}

{% copy apt install php7.3-gd php7.3-curl php7.3-mbstring -y %}

3.安装依赖

{% copy composer install %}

4.下载到本地

- 压缩

  ```bash
  cd ../
  zip -q -r Artalk.zip /workspace/Artalk-API-PHP
  ```

  注:/workspace/Artalk-API-PHP根据实际修改

  ![image-20210708204807295](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20210708204807295.png)

- 再取得ssh连接地址，端口及私钥

![](https://cdn.jsdelivr.net/gh/thun888/tuku@master//img/image-20210627103209657.png)

- 然后用wincsp连接上，下载

![](https://cdn.jsdelivr.net/gh/thun888/tuku@master//img/image-20210627103531802.png)

##### wsl

- {% copy sudo apt install git php7.4-cli %}

![image-20210712160743536](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20210712160743536.png)

（如果出现如图问题执行`sudo apt-get update`)

- {% copy curl -sS https://getcomposer.org/installer | php %}

- {% copy sudo mv composer.phar /usr/local/bin/composer %}

- {% copy sudo apt install php7.4-gd php7.4-curl php7.4-mbstring -y %}

-  {% copy git clone https://github.com/ArtalkJS/Artalk-API-PHP %}

- {% copy cd Artalk-API-PHP/ %}

- {% copy composer install %}

- 最后去它的运行目录就可以找到了（上传记得压缩）

  ![im](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20210712162253307.png)

##### Github
>不与[别的文章](https://blog.csdn.net/qq_36227473/article/details/108980651)重复
#### 部署

因为Artalk用php作为后端，所以我们需要找个能运行php的虚拟主机

这里我用的是酷友的[御文云 (i.rr.rw)](https://i.rr.rw/)

注册登录购买不必多说

新开通的像这样

![image-20210708205806499](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20210708205806499.png)

点`控制台：一键登录`跳到`文件管理`，把原来有的文件删除

![image-20210708205924595.png](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20210708205924595.png)

上传(完成后点下右上角的刷新)

![image-20210708210045772](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20210708210045772.png)

解压后将文件移动到根目录 （可以删掉workspace和artalk.zip了>_）

![mxtm8-p22e5](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/mxtm8-p22e5.gif)

修改运行目录为`/public`

![image-20210708212155981](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20210708212155981.png)

启用PHP

![image-20210708212334576](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20210708212334576.png)

此时在基本功能-域名绑定里可以访问送的二级域名来看看了>_<

![image-20210708212905641](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20210708212905641.png)

what?!啊没错，你还要编辑配置文件

#### 站点配置

返回文件管理中编辑`Config.example.php`

![image-20210708212619901](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20210708212619901.png)

配置

![image-20210708213916199](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20210708213916199.png)

> 用户名和邮箱很重要~

![](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20210708213519073.png)

![image-20210708213725447](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20210708213725447.png)

![image-20210708214938127](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20210708214938127.png)

保存后重命名为`Config.php`

![](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20210709080426615.png)![](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20210709080444423.png)

#### 前端插入

```html
 <div id="ArtalkComments"></div>
  <!-- ... -->
  <script src="https://cdn.jsdelivr.net/gh/ArtalkJS/Artalk@master/dist/Artalk.js"></script>
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/ArtalkJS/Artalk@master/dist/Artalk.css">
  <script>
  new Artalk({
    el: '#ArtalkComments', // 元素选择
    placeholder: '来啊，快活啊 ( ゜- ゜)', // 占位符
    noComment: '快来成为第一个评论的人吧~', // 无评论时显示
    pageKey: '[页面唯一标识]',
    serverUrl: 'https://artalk.thun888.xyz/',  //改为刚刚送的二级域名h
    readMore: { // 阅读更多配置
      pageSize: 15, // 每次请求获取评论数
      autoLoad: true // 滚动到底部自动加载
    }
  });
  </script>
```

like this