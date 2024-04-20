---
title: 解决Cloudflare Wrangler无法获取授权
date: 2021-07-29 18:18:05
tags: Cloudflare
updated: 2021-07-29 18:18:05
last: 2021-07-29 18:18:05
---

#### 前言

昨天，因为要本地提交点东西到worker就装了Wrangler，没想到啊，它就这么卡着不动了（在waiting for api token那里我等了半个世纪）![Snipaste_2021-07-26_20-36-47](https://k.hzchu.top/2022/08/18/62fde84075a94.png)

#### 方法

- 在刚刚的授权页面点击`API令牌`

  ![llll](https://k.hzchu.top/2022/08/18/62fde825cdbed.png)

- 点`投放`--`copy`

  ![Snipaste_2021-07-26_20-38-00](https://k.hzchu.top/2022/08/18/62fde5fd96553.png)

  ![Snipaste_2021-07-26_20-38-15](https://k.hzchu.top/2022/08/18/62fde60f90dc8.png)

- 输入`wrangler config`,粘贴刚刚copy的token

![Snipaste_2021-07-26_20-37-15](https://k.hzchu.top/2022/08/18/62fde61b32b17.png)

- 回车后看到sucess就好了

  ![Snipaste_2021-07-26_20-38-30](https://k.hzchu.top/2022/08/18/62fde62d8262c.png)

#### 后

写的时侯为了截图换了个账号，然后它能用了\~\~\~\~

![Snipaste_2021-07-29_18-26-37](https://k.hzchu.top/2022/08/18/62fde6529a01d.png)