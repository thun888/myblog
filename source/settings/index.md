---
title: 设置
date: 2021-07-10 19:06:52
description: 要设置一下吗？
layout: post
comments: false
useai: false
---

## Umami统计

默认启用

当前状态：<span id="umami-status">loading</span>

[访问数据统计](https://seeyou.hzchu.top/share/ogbqAPd0BGm5J2KS/blog.hzchu.top)

{% button 禁用/启用 javascript:stitchumami() %}

## 黑夜模式

默认跟随系统

{% button 切换 javascript:switchTheme(); %}

## 图片节点优选

默认启用

当前状态：<span id="selectFastNode-status">loading</span>

节点：<span id="selectFastNode-nodeinfo">loading</span>

{% button 禁用/启用 javascript:switchselectFastNode(); %}

{% button 更新节点信息 javascript:selectFastNode(true); %}

## Ai摘要

默认禁用

当前状态：<span id="aisummary-status">loading</span>


{% button 禁用/启用 javascript:switchaisummary(); %}


<script src="/js/settings.js"></script>