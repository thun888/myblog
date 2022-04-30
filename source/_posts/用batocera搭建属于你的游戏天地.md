---
title: 用Batocera搭建属于你的游戏天地
date: 2020-11-14 17:42:35
tags: linux
updated: 2020-11-14 17:42:35
last: 2020-11-14 17:42:35
---

batocera,是一个以linux为基础，运行在电脑上的一个模拟上古游戏机的系统。

为了使用它，首先我们需要以下物品

#### 准备

- 手和脑子
- U盘（最好3.0，不过2.0也能运行）
- 电脑
- balenaEtcher（选用）（安装方法一）
- Ventoy（选用）（安装方法二）

#### 安装方法一

**声明**：这种方法会**丢失U盘全部数据**，**需要备份**

安装好balenaEtcher

打开来是这个样子

![image-20201114175521447](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20201114175521447.png)

下载好[batocera](https://batocera.org/)（它的服务器对国内挺不友好，可以从[这里](https://pan.miaoent.com/#/s/JOUo)下载）

点击flash from file,选择刚刚下载好的镜像

![image-20201114175955744](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20201114175955744.png)

点击 Select target,选择你准备好的U盘

![image-20201114180210307](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20201114180210307.png)

**确认选择无误**后点击 Flash！ 即可完成

![image-20201114190128591](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20201114190128591.png)



#### 安装方法二

**声明**：这种方法会**丢失U盘全部数据**，**需要备份**（但相比第一种还可以用来存文件~)

下载[ventoy](https://www.ventoy.net/cn/index.html)解压后点Ventoy2Disk.exe运行

![image-20201114180544409](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20201114180544409.png)

next，

![image-20201114180821706](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20201114180821706.png)

![image-20201114180853314](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20201114180853314.png)

![image-20201114180937948](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/image-20201114180937948.png)

然后将刚刚下载后的镜像复制进U盘里（最大的那个分区）即可

#### 

#### 后：

- 在一些电脑上要按F12选择从U盘启动
- 它将全部机能分配在游戏运行上，相比模拟器性能好许多，对老电脑友好