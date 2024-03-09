---
title: 记一次排查js文件后门
date: 2024-03-08 20:49:57
updated: 2024-03-08 20:49:57
tags: Blog
cover:
banner:
description: 被bootcdn捅了一刀
---

## 起因

今天调试博客时猛地发现电脑卡的不像样，排除后发现是控制台的问题，再一看控制台里全是网络请求，这可不是好事啊

![](https://onep.hzchu.top/mount/pic/2024/03/08/65eb0a705f003.webp)

![Snipaste_2024-03-08_20-40-38.webp](https://onep.hzchu.top/mount/pic/2024/03/08/65eb0a8cca150.webp)

## 过程

起初，因为我回档了所有更改依然有这种情况，我猜是浏览器插件问题，但关闭了所有插件后依然如此

然后，我查看了异常js引入的时间点，并往上挨个检查

![Snipaste_2024-03-08_20-37-33.webp](https://onep.hzchu.top/mount/pic/2024/03/08/65eb0b8bee889.webp)

最初的异常引入在`sdk.html`，随后在js文件里依次搜索，最后定位到`lazyload.min.js`

![Snipaste_2024-03-08_20-37-04.webp](https://onep.hzchu.top/mount/pic/2024/03/08/65eb0c1adbc32.webp)

但是嘛，当我`在新标签页里打开`时，显示的又是正常的js，对比发现请求ip不同，在改hosts后成功获取到带后门的js文件

{% grid %}
<!-- cell -->
**不正常的**

![Snipaste_2024-03-08_20-39-35.webp](https://onep.hzchu.top/mount/pic/2024/03/08/65eb0c872af1b.webp)
<!-- cell -->
**正常的**

![Snipaste_2024-03-08_20-39-25.webp](https://onep.hzchu.top/mount/pic/2024/03/08/65eb0c89ba6b9.webp)
{% endgrid %}

![Snipaste_2024-03-08_20-42-50.webp](https://onep.hzchu.top/mount/pic/2024/03/08/65eb0c88232e2.webp)

## 解决方法

{% grid %}
<!-- cell -->

将`https://cdn.bootcdn.net/ajax/libs`全部替换为`https://cdn.staticfile.net`

<!-- cell -->

![Snipaste_2024-03-08_20-48-17.webp](https://onep.hzchu.top/mount/pic/2024/03/08/65eb0d141a263.webp)

{% endgrid %}
