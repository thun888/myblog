---
title: 为小米路由器加上屏幕
date: 2024-04-20 15:11:40
updated: 2024-04-20 15:11:40
tags: Mirouterui
cover: https://dolphinsbukets.s3.bitiful.net/article-cover/cover-6.png?fmt=avif&q=50
description: 通过MRUI构造网络请求来用小电视(SD2)监控小米路由器
banner: https://dolphinsbukets.s3.bitiful.net/article-cover/cover-6.png?fmt=avif&q=50
categories: 技术类
---

## 前言

之前在`bbs.hzchu.top`写过，不过没多少人看，迁回博客里

## 流程

### 搭建MRUI

顺手集成到自己项目里了，自己用起来也方便{% emoji blobcat blobcatcoffee %}

搭建参阅[Mirouterui简要部署指南](/2023/howtorunmrui/)

### 修改部分程序代码

由于默认获取一次信息间隔太短，会对路由器造成不小的负担，最好改为5s获取一次
{% image https://onep.hzchu.top/mount/pic/2024/01/12/65a10d998d683.webp?fmt=avif download:https://onep.hzchu.top/mount/pic/2024/01/12/65a10d998d683.webp 1705053582589.webp %}
同时程序不支持http0.1,要把发送请求处代码修改为http1.1
{% image https://onep.hzchu.top/mount/pic/2023/12/31/6590caaa36915.webp?fmt=avif download:https://onep.hzchu.top/mount/pic/2023/12/31/6590caaa36915.webp 1703987881404.webp %}

## 展示

{% swiper effect:cards %}

{% image https://onep.hzchu.top/mount/pic/2023/12/31/6590c9dc1e6f1.webp?fmt=avif download:https://onep.hzchu.top/mount/pic/2023/12/31/6590c9dc1e6f1.webp IMG_20231230_103045.webp %}
{% image https://onep.hzchu.top/mount/pic/2023/12/31/6590cbaed9f8a.webp download:https://onep.hzchu.top/mount/pic/2023/12/31/6590cbaed9f8a.webp IMG_20231230_103045.webp %}{% image https://onep.hzchu.top/mount/pic/2023/12/31/6590cb5e87c0b.webp?fmt=avif download:https://onep.hzchu.top/mount/pic/2023/12/31/6590cb5e87c0b.webp 1703988060977.webp %}

{% endswiper %}

## 扩展

### 自定义显示

你可以参照下面的图片中的“传感器”名称，对代码中获取传感器数据的地方进行修改。如我就将温度改为了在线设备数

### HA

同时兼容HA的netdata集成
{% image https://onep.hzchu.top/mount/pic/2024/01/01/659222d20746e.webp?fmt=avif download:https://onep.hzchu.top/mount/pic/2024/01/01/659222d20746e.webp 1704075984628.webp %}
{% image https://onep.hzchu.top/mount/pic/2024/01/01/659223056c85c.webp?fmt=avif download:https://onep.hzchu.top/mount/pic/2024/01/01/659223056c85c.webp 1704076036821.webp %}
示例配置：
{% image https://onep.hzchu.top/mount/pic/2024/01/01/6592231bdd188.webp?fmt=avif download:https://onep.hzchu.top/mount/pic/2024/01/01/6592231bdd188.webp 1704076059450.webp %}

## 后记

感觉他程序有点不如人意，特别是我照着readme写完时发现用的api已经弃用了，重写完发现每秒发送5个请求直接把路由器的cpu占用干到80%+的时候{% emoji blobcat blobcatneutral %}

当然也有我的锅，现在调用netdata的api默认会有两秒的缓存
