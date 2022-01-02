---
title: 把玩intel的开发服务器
date: 2021-08-08 13:59:03
tags: Intel
cover: https://vkceyugu.cdn.bspapp.com/VKCEYUGU-35c12a92-e00c-4a70-8ef5-7bc728310bb5/ac4aac48-a984-46cf-b326-df2b780a7515.webp
updated: 2021-08-08 13:59:03
description: 如今，人们白嫖起了牙膏厂~
---

#### 获取

打开[Intel® DevCloud](https://software.intel.com/content/www/us/en/develop/tools/devcloud.html)，有账号登录，没账号注册，

![image-20210808145043855](https://asstes.thun888.xyz/file/pic-bed/2021/09/ef46bbe0629c26f319994291f15ffd7d.webp)

拉下来找到`Intel® DevCloud for the Edge`点进去

![zi'aiziai](https://asstes.thun888.xyz/file/pic-bed/2021/09/e841141c1c3607d209f5f304ee6c66f8.webp)

> 注意邮箱

![image-20210808145254426](https://asstes.thun888.xyz/file/pic-bed/2021/09/ba8c1d1d603b115415bab41adecb89b5.webp)

![image-20210808145347119](https://asstes.thun888.xyz/file/pic-bed/2021/09/f0a5d66164ab31df9391789ece645c39.webp)

![image-20210808145438494](https://asstes.thun888.xyz/file/pic-bed/2021/09/9f73af78b9012faf311e0f89ad66c844.webp)

![image-20210808145505189](https://asstes.thun888.xyz/file/pic-bed/2021/09/852d775017db5b8422066e61947b875e.webp)

![image-20210808145523053](https://asstes.thun888.xyz/file/pic-bed/2021/09/4c76da099f1acc95ab57c02b2343a02b.webp)

在看到`Server not running`这个话前基本都500错误或者点了没反应，等半个小时就好(也可以切换网络环境等)

{% swiper width:25 %}
![Snipaste_2021-08-07_17-49-13](https://asstes.thun888.xyz/file/pic-bed/2021/08/6cb96eb2096f29a09853a404dc1f503f.webp)
![Snipaste_2021-08-07_18-35-16](https://asstes.thun888.xyz/file/pic-bed/2021/08/af67af93cf0930982014779af16e3fbb.webp)
{% endswiper %}



![image-20210808145540103](https://asstes.thun888.xyz/file/pic-bed/2021/09/ff14d0acd34b753b4db1982ba29a55b5.webp)

打开终端

![Snipaste_2021-08-07_18-11-33](https://asstes.thun888.xyz/file/pic-bed/2021/08/481501951a14dd2878ffc24041159847.png)

然后就可以~~为所欲为了~~{% u 没有root %}的啦{% emoji aru 11 %}

#### 配置

80核，256g( ‵▽′)ψ，（共用）

![Snipaste_2021-08-07_18-21-17](https://asstes.thun888.xyz/file/pic-bed/2021/09/c17e77e93eb1345670b437862da0d8ea.webp)

![Snipaste_2021-08-07_18-28-07](https://asstes.thun888.xyz/file/pic-bed/2021/09/e3e8744bbd18b55ecf68bd7f7b13bd6a.webp)

proot容器内测试

![image-20210808150809533](https://asstes.thun888.xyz/file/pic-bed/2021/09/e2eb75975a18902b1b388cfc9116b8b2.webp)

#### 网速

Asia

![image-20210808151147629](https://asstes.thun888.xyz/file/pic-bed/2021/09/fe71087f9bb8efe3880c4c05cfeb471e.webp)

Another

![image-20210808151132419](https://asstes.thun888.xyz/file/pic-bed/2021/09/8758a70509e83b3e05ebfebd5287ac18.webp)

![image-20210808151201095](https://asstes.thun888.xyz/file/pic-bed/2021/09/85c8fd28052bceea467090cc84e5709a.webp)



#### 伪获取root权限

在终端内复制粘贴以下命令

```bash
wget https://share.thun888.xyz/%E8%BD%AF%E4%BB%B6/root.sh
chmod 777 root.sh
./root.sh
```

![image-20210808140827984](https://asstes.thun888.xyz/file/pic-bed/2021/09/1fabbd48980280fd587ca78e7b95afbd.webp)

当$变为#就ok

不过wget,curl这些都没有，所以还要自行安装

PS:可以开新一个终端下载一些必要依赖包（deb）再离线安装

> https://packages.debian.org

![image-20210808143134070](https://asstes.thun888.xyz/file/pic-bed/2021/09/ee233bc3f9e26963348624942c45da8c.webp)

> 该服务器使用时间只有10小时，但10小时后还可以再来一次{% emoji aru 51 %}



