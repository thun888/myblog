---
title: 把玩intel的开发服务器
date: 2021-08-08 13:59:03
tags: Intel
cover: https://i0.hdslb.com/bfs/album/f26f600ba60fc65aac6c46680e76326b6a2dca36.jpg@.webp
updated: 2021-08-08 14:59:03
description: 如今，人们白嫖起了牙膏厂~
---

#### 获取

打开[Intel® DevCloud](https://software.intel.com/content/www/us/en/develop/tools/devcloud.html)，有账号登录，没账号注册，

![image-20210808145043855](https://i0.hdslb.com/bfs/album/70ab0fa7d6b78c00113e4fdf509ed90e33d8f85b.png@.webp)

拉下来找到`Intel® DevCloud for the Edge`点进去

![zi'aiziai](https://i0.hdslb.com/bfs/album/0efa1d202fcd93523b4b47df66f8ffd5b42fac86.png)

> 注意邮箱

![image-20210808145254426](https://i0.hdslb.com/bfs/album/909555a4dfb0cca2a3b2028e679a32127540e58e.png)

![image-20210808145347119](https://i0.hdslb.com/bfs/album/b4a0c24276c0000ba7f57ecea1a6715ea658e37b.png)

![image-20210808145438494](https://i0.hdslb.com/bfs/album/5ffac9ce9ba7e01cfbc1e8f75e04aa06ca74c337.png@.webp)

![image-20210808145505189](https://i0.hdslb.com/bfs/album/d7a29cac823190098cd7f7539ae0039c6de14f43.png)

![image-20210808145523053](https://i0.hdslb.com/bfs/album/cda894a709a5768591ba1b476ba5378889982f10.png@.webp)

在看到`Server not running`这个话前基本都500错误或者点了没反应，等半个小时就好(也可以切换网络环境等)

{% swiper width:25 %}
![Snipaste_2021-08-07_17-49-13](https://asstes.thun888.xyz/file/pic-bed/2021/08/6cb96eb2096f29a09853a404dc1f503f.webp)
![Snipaste_2021-08-07_18-35-16](https://asstes.thun888.xyz/file/pic-bed/2021/08/af67af93cf0930982014779af16e3fbb.webp)
{% endswiper %}



![image-20210808145540103](https://i0.hdslb.com/bfs/album/64382e008a7370faf48fbe86fa9e4a7e2e0cc981.png)

打开终端

![Snipaste_2021-08-07_18-11-33](https://asstes.thun888.xyz/file/pic-bed/2021/08/481501951a14dd2878ffc24041159847.png)

然后就可以~~为所欲为了~~{% u 没有root %}的啦{% emoji aru 11 %}

#### 配置

80核，256g( ‵▽′)ψ，（共用）

![Snipaste_2021-08-07_18-21-17](https://i0.hdslb.com/bfs/album/66be24a1d2241fd55f07cb6a57da3e62e10d9edd.png)

![Snipaste_2021-08-07_18-28-07](https://i0.hdslb.com/bfs/album/96b7ae52860621cc64505f85ab157e27ba4cb645.png)

proot容器内测试

![image-20210808150809533](https://i0.hdslb.com/bfs/album/2f59a92fde2ababeba2875c0e633bcf79507f2c4.png@.webp)

#### 网速

Asia

![image-20210808151147629](https://i0.hdslb.com/bfs/album/025702cd24eb25032b72130b0b2f7338a6f9887a.png@.webp)

Another

![image-20210808151132419](https://i0.hdslb.com/bfs/album/5ab9b54d5b2e132c830cde770ff2da63e1a687ba.png@.webp)

![image-20210808151201095](https://i0.hdslb.com/bfs/album/66f9de085b4020a6cdf9d5b92a5190011440080e.png@.webp)



#### 伪获取root权限

在终端内复制粘贴以下命令

```bash
wget https://share.thun888.xyz/%E8%BD%AF%E4%BB%B6/root.sh
chmod 777 root.sh
./root.sh
```

![image-20210808140827984](https://i0.hdslb.com/bfs/album/6619c36a9f57e6322a0e125d93130accc2cf34f2.png)

当$变为#就ok

不过wget,curl这些都没有，所以还要自行安装

PS:可以开新一个终端下载一些必要依赖包（deb）再离线安装

> https://packages.debian.org

![image-20210808143134070](https://i0.hdslb.com/bfs/album/d5cc376d6bed2cfab939795ca8aa69244f8dae21.png)

> 该服务器使用时间只有10小时，但10小时后还可以再来一次{% emoji aru 51 %}



