---
title: 把玩intel的开发服务器
date: 2021-08-08 13:59:03
tags: Intel
cover: https://mp-b9758f71-20f5-4584-a594-df1c04cfa0a0.cdn.bspapp.com/cloudstorage/72fa4209-5254-439c-be79-0caf8d921c4b.webp
updated: 2021-08-08 13:59:03
last: 2021-08-08 13:59:03
description: 如今，人们白嫖起了牙膏厂~
---

#### 获取

打开[Intel® DevCloud](https://software.intel.com/content/www/us/en/develop/tools/devcloud.html)，有账号登录，没账号注册，

![image-20210808145043855](https://k.hzchu.top/2022/08/18/62fddfdb4a480.png)

拉下来找到`Intel® DevCloud for the Edge`点进去

![62fddff130630](https://k.hzchu.top/2022/08/18/62fddff130630.png)

> 注意邮箱

![image-20210808145254426](https://k.hzchu.top/2022/08/18/62fde00c0c138.png)

![image-20210808145347119](https://k.hzchu.top/2022/08/18/62fde01dcd877.png)

![image-20210808145438494](https://k.hzchu.top/2022/08/18/62fde02c21ac7.png)

![image-20210808145505189](https://k.hzchu.top/2022/08/18/62fde03a076a0.png)

![image-20210808145523053](https://k.hzchu.top/2022/08/18/62fde04eb6364.png)

在看到`Server not running`这个话前基本都500错误或者点了没反应，等半个小时就好(也可以切换网络环境等)

{% swiper width:25 %}
![Snipaste_2021-08-07_17-49-13](https://k.hzchu.top/2022/08/18/62fde05e2fbdc.png)
![Snipaste_2021-08-07_18-35-16](https://k.hzchu.top/2022/08/18/62fde0a76a277.png)
{% endswiper %}

![image-20210808145540103](https://k.hzchu.top/2022/08/18/62fde0b9b553c.png)

打开终端

![Snipaste_2021-08-07_18-11-33](https://k.hzchu.top/2022/08/18/62fde0c967b48.png)

然后就可以~~为所欲为了~~{% u 没有root %}的啦{% emoji aru 11 %}

#### 配置

80核，256g( ‵▽′)ψ，（共用）

![Snipaste_2021-08-07_18-21-17](https://k.hzchu.top/2022/08/18/62fde0d94e6ff.png)

![Snipaste_2021-08-07_18-28-07](https://k.hzchu.top/2022/08/18/62fde0e87a505.png)

proot容器内测试

![image-20210808150809533](https://k.hzchu.top/2022/08/18/62fde0f84f77e.png)

#### 网速

Asia

![image-20210808151147629](https://k.hzchu.top/2022/08/18/62fde10b1cf7b.png)

Another

![image-20210808151132419](https://k.hzchu.top/2022/08/18/62fde11867eea.png)

![image-20210808151201095](https://k.hzchu.top/2022/08/18/62fde16b1e5df.png)

#### 伪获取root权限

在终端内复制粘贴以下命令

```bash
wget https://share.thun888.xyz/%E8%BD%AF%E4%BB%B6/root.sh
chmod 777 root.sh
./root.sh
```

![image-20210808140827984](https://k.hzchu.top/2022/08/18/62fde19fc8cae.png)

当$变为#就ok

不过wget,curl这些都没有，所以还要自行安装

PS:可以开新一个终端下载一些必要依赖包（deb）再离线安装

> https://packages.debian.org

![image-20210808143134070](https://k.hzchu.top/2022/08/18/62fde1ab782d3.png)

> 该服务器使用时间只有10小时，但10小时后还可以再来一次{% emoji aru-l 0180 %}