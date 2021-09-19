---
title: 解决VSCode安装Go扩展报错
date: 2021-07-26 18:37:56
tags: Go
cover: https://do-cloud.oss-cn-guangzhou.aliyuncs.com/img/caff7cce9e3327236c326bc55185a31d79ebb65c.png?x-oss-process=blog
updated: 2021-07-26 18:37:56
---

不多哔哔，直入主题

先转到新建环境变量这里（图示为win11

![](https://asstes.thun888.xyz/file/pic-bed/2021/07/70d23cfa483b297e2dd987502cc7e683.webp)

新建2个（如图）

![image-20210726184350014](https://asstes.thun888.xyz/file/pic-bed/2021/09/ad8580f69486b02efda6957d9714ddd7.webp)

| 变量名      | 变量值             |
| ----------- | ------------------ |
| GOPROXY     | https://goproxy.io |
| GO111MODULE | on                 |

点确定后**重启**再进VSCode里选择`install all`安装就好

