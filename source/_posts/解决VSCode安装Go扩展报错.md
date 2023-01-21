---
title: 解决VSCode安装Go扩展报错
date: 2021-07-26 18:37:56
tags: Go
cover: https://mp-b9758f71-20f5-4584-a594-df1c04cfa0a0.cdn.bspapp.com/cloudstorage/36cf18f6-18ee-4680-995d-eb5c5af19286.png
updated: 2021-07-26 18:37:56
last: 2021-07-26 18:37:56
---

不多哔哔，直入主题

先转到新建环境变量这里（图示为win11

![](https://k.hzchu.top/2022/08/18/62fde67a827da.png)

新建2个（如图）

![image-20210726184350014](https://k.hzchu.top/2022/08/18/62fde685a8fe8.png)

|变量名|变量值|
|-|-|
|GOPROXY|https://goproxy.io|
|GO111MODULE|on|

点确定后**重启**再进VSCode里选择`install all`安装就好