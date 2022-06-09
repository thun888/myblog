---
title: VM虚拟机安装甜糖及配置教程
date: 2021-02-07 10:05:21
tags: 甜糖
updated: 2021-02-07 10:05:21
last: 2021-02-07 10:05:21
cover: https://asstes.thun888.xyz/file/pic-bed/2021/12/54gdf56g4f653g.jpg
---

#### 背景

一开始我是在电脑上挂网心，但这玩意儿写入缓存不仅多（以至于写掉盘了），钱还给的少。而甜糖在恩山论坛上面的都是Linux下操作的，对我这docker小白很不友好，今天就总结一下最简单的方法

*以下内容建议使用FinalShell操作*

#### 准备工作

1. 映像包（[500g/100g](https://share.thun888.xyz/ali/%E6%96%87%E4%BB%B6/ttnode/))(在我写的时候又有新版了<img src="https://raw.thun888.xyz/thun888/jian@master/coolapk_emotion_58_dogeyuanliangta.png" style="zoom:25%;" />)

2. vmware

#### 安装

1. 安装vmware(废话)

2. 解压压缩包后。点击后缀为vmx的文件导入

![image-20210207111610777](https://raw.thun888.xyz/thun888/tuku@master/img/image-20210207111610777.png)

![image-20210207111650865](https://raw.thun888.xyz/thun888/tuku@master/img/image-20210207111650865.png)

然后点击网络适配器一来生成新的MAC地址（避免用uid重复）

![image-20210207111823559](https://raw.thun888.xyz/thun888/tuku@master/img/image-20210207111823559.png)

点击开启虚拟机

![image-20210207111851540](https://raw.thun888.xyz/thun888/tuku@master/img/image-20210207111851540.png)

![image-20210207112026798](https://raw.thun888.xyz/thun888/tuku@master/img/image-20210207112026798.png)

当然开起成功后就可以通过甜糖app绑定了

<img src="https://raw.thun888.xyz/thun888/tuku@master/img/Screenshot_2021-02-07-11-22-10-647_com.tt.turbo.jpg" alt="Screenshot_2021-02-07-11-22-10-647_com.tt.turbo" style="zoom:33%;" />

当然有时候如果你的网络环境比较复杂搜不到就要在ssh里面查看。

使用ssh连接(账号密码都是root)

![image-20210207112118813](https://raw.thun888.xyz/thun888/tuku@master/img/image-20210207112118813.png)

![image-20210207112607312](https://raw.thun888.xyz/thun888/tuku@master/img/image-20210207112607312.png)

输入(进入容器)

```sh
docker exec -it ttnode /bin/bash
/usr/node/ttnode -p /mnts 
```

![image-20210207112818753](https://raw.thun888.xyz/thun888/tuku@master/img/image-20210207112818753.png)

用[二维码生成工具](http://2v.dedecms.com/)，把uid生成二维码再用手机扫码绑定.

如果它显示未配置网络的话就继续看吧

<script>
new Artalk({
el: '#ArtalkComments', // 元素选择
placeholder: '来啊，快活啊 ( ゜- ゜)', // 占位符
noComment: '快来成为第一个评论的人吧\~', // 无评论时显示
serverUrl: 'https://artalk.thun888.xyz/',
readMore: { // 阅读更多配置
pageSize: 15, // 每次请求获取评论数
autoLoad: true // 滚动到底部自动加载
}
});
</script>

输入

```
netstat -tnlp 
```

![image-20210207121851667](https://raw.thun888.xyz/thun888/tuku@master/img/image-20210207121851667.png)

除计下出65432和22以外的三个端口后在路由器后台设置端口转发这里，以小米路由器为例

![image-20210207122326918](https://raw.thun888.xyz/thun888/tuku@master/img/image-20210207122326918.png)

等上十几二十分钟甜糖后台同步后即可。

这样甜糖就做好了，但是还有很多东西也可以搞

1\.自动领取星愿

保持在容器内不要退出

输入

```shell
apt update
apt install wget curl sudo -y
```

```shell
wget https://dachui.co/ttnode/node2.sh && sh node2.sh
```

![image-20210207120438729](https://raw.thun888.xyz/thun888/tuku@master/img/image-20210207120438729.png)

输入no后回车(第2步输入y回车即可)

![image-20210207120714379](https://raw.thun888.xyz/thun888/tuku@master/img/image-20210207120714379.png)

这里面还有很多功能，但我用到的只是5，有需求的可以把都搞上(除了1.2<img src="https://raw.thun888.xyz/thun888/jian@master/coolapk_emotion_58_dogeyuanliangta.png" style="zoom:25%;" />)

选择5后回车

输入手机号码

![image-20210207120856494](https://raw.thun888.xyz/thun888/tuku@master/img/image-20210207120856494.png)

输入验证码即可

![image-20210207121007656](https://raw.thun888.xyz/thun888/tuku@master/img/image-20210207121007656.png)

如果还要用到微信通知就继续

在server酱的官网用登录+微信关注后取得sckey填入

![image-20210207121247337](https://raw.thun888.xyz/thun888/tuku@master/img/image-20210207121247337.png)

成功以后

<img src="https://raw.thun888.xyz/thun888/tuku@master/img/Screenshot_2021-02-07-12-14-30-735_com.tencent.mm.jpg" alt="image-20210207121352264" style="zoom: 33%;" />

3\.网速监控

虽然FinalShell自带网速监控，<img src="C:\\Users\\22383\\AppData\\Roaming\\Typora\\typora-user-images\\image-20210207130000887.png" alt="image-20210207130000887" style="zoom: 67%;" />但也不总是每天都在电脑旁

输入

```shell
apk add nload
```

然后就可以通过nload eth0来监控了

<img src="https://raw.thun888.xyz/thun888/tuku@master/img/image-20210207130443674.png" alt="image-20210207130443674" style="zoom: 67%;" />

#### Q&A

1. Q:明明什么都设置好了，但就是获取不了IP。

   ![屏幕截图 2021-02-05 123641](https://raw.thun888.xyz/thun888/tuku@master/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202021-02-05%20123641.png)

   A:(该问题常见于多网卡的情况)

<img src="https://raw.thun888.xyz/thun888/tuku@master/img/ada.png"/>

2\.Q:为什么收不到验证码？

​    A:再来一次(如果你一天内已经错了14次的话，就明天再做吧)

3\.Q:输指令报错 xxx not found

A:缺啥补啥，在容器外用apk add xxx ,容器内用apt install xxx

more....

#### 所参考资料

[\[2021-01-27\]让软路由来赚钱ESXi/X86上跑dock甜糖/一键导入简单无脑，小白，懒人专属](https://www.right.com.cn/forum/thread-4063192-1-2.html)

[【非op套娃】x86以ubuntu为底层跑docker甜糖服务](https://www.right.com.cn/forum/thread-4052765-1-1.html)

[迄今为止最小的甜糖(ttnode)docker镜像](https://www.right.com.cn/forum/thread-4059329-1-1.html)

[爱快虚拟机甜糖镜像及pve,esxi等虚拟机安装轻量化Linux详细安装甜糖教程](https://www.right.com.cn/forum/thread-4060057-1-1.html)