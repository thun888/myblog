---
title: 解决Cloudflare Wrangler无法获取授权
date: 2021-07-29 18:18:05
tags: Clouddlare
updated: 2021-07-29 18:18:05
---

#### 前言

昨天，因为要本地提交点东西到worker就装了Wrangler，没想到啊，它就这么卡着不动了（在waiting for api token那里我等了半个世纪）![Snipaste_2021-07-26_20-36-47](https://asstes.thun888.xyz/file/pic-bed/2021/09/d3eb68ed7fb7175f3ba36fa0969e7808.webp)

#### 方法

- 在刚刚的授权页面点击`API令牌`

  ![llll](https://asstes.thun888.xyz/file/pic-bed/2021/07/2d2f0a22ca9bbbcc3e07c41ff6377fe0.png)

- 点`投放`--`copy`

  ![Snipaste_2021-07-26_20-38-00](https://asstes.thun888.xyz/file/pic-bed/2021/07/a7e09112785852a85b04d6f90895fe20.png)

  ![Snipaste_2021-07-26_20-38-15](https://asstes.thun888.xyz/file/pic-bed/2021/07/a70b057f822616bcebe746fcf8f76f0c.png)

- 输入`wrangler config`,粘贴刚刚copy的token

![Snipaste_2021-07-26_20-37-15](https://asstes.thun888.xyz/file/pic-bed/2021/07/8e9a0559716dfe77abe44b9c755c4c2d.png)

- 回车后看到sucess就好了

  ![Snipaste_2021-07-26_20-38-30](https://asstes.thun888.xyz/file/pic-bed/2021/07/e9a3460d8ba6bd5c1b2593db4c7de141.png)

#### 后

写这篇时为了截图换了个账号，然后它能用了~~~~

![Snipaste_2021-07-29_18-26-37](https://asstes.thun888.xyz/file/pic-bed/2021/09/cfc4d441f6daf3a7fcfb6b8913761440.webp)
