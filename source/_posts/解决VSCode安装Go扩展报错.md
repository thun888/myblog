---
title: 解决VSCode安装Go扩展报错
date: 2021-07-26 18:37:56
tags: Go
cover: https://i0.hdslb.com/bfs/album/caff7cce9e3327236c326bc55185a31d79ebb65c.png@.webp
updated: 2021-07-26 18:37:56
---

不多哔哔，直入主题

先转到新建环境变量这里（图示为win11

![](https://asstes.thun888.xyz/file/pic-bed/2021/07/70d23cfa483b297e2dd987502cc7e683.webp)

新建2个（如图）

![image-20210726184350014](https://i0.hdslb.com/bfs/album/705b3a231b995cd3ac7ed8dd103075fdb024fa43.png@.webp)

| 变量名      | 变量值             |
| ----------- | ------------------ |
| GOPROXY     | https://goproxy.io |
| GO111MODULE | on                 |

点确定后**重启**再进VSCode里选择`install all`安装就好

