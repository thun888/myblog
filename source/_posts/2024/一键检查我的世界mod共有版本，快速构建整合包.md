---
title: 一键检查我的世界MOD共有版本，快速构建整合包
date: 2024-06-09 12:22:53
updated: 2024-06-09 12:22:53
tags: [MC,python]
description: 从Modrinth和Curseforge获取mod版本，取交集查看共有版本
categories: 瞎折腾
---

## 起因

之前看了下我的世界版本已经更新到1.20.6，自己服务器还在1.20.1，遂写一物查看能否更新{% emoji blobcat blobcatt %}

{% ghcard thun888/check_mc_mods_update %}

{% coding https://raw.githubusercontent.com/thun888/check_mc_mods_update/main/main.py python %}

## 使用方法

**配置文件**

```yaml
modrinth:
  - tabtps
  - easyauth
  - Debugify
  - carpet
  - ...... # 一行一个名称，须在modrinth里面找，进入mod页面后在链接中截取

curseforge:
  smoothchunk: 582327
  chunksending-fabric: 831663 
  ...... # curseforge 通过id获取，需要进入mod页面后在页面右侧获取。为提高辨识度，采用kv形式
special:
  - github.com/MCTeamPotato/MCMOD
  - commandspy
  - ...... # 特殊类，起到提示作用
config:
  curseforgeApiKey: $2a****************************************************Kv6sq
  showAlpha: true #匹配测试版本 
```

{% image https://onep.hzchu.top/mount/pic/myself/2024/06/6665313f438d6.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/06/6665313f438d6.png 获取Modrinth项目名 %}

{% image https://onep.hzchu.top/mount/pic/myself/2024/06/6665312991e6a.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/06/6665312991e6a.png 获取Curseforge项目ID %}

获取CurseforgeApiKey：[CurseForge for Studios](https://console.curseforge.com/?#/api-keys)

配置完成后运行py文件即可

## 输出

{% image https://onep.hzchu.top/mount/pic/myself/2024/06/666532128d166.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/06/666532128d166.png %}

好好好，一个没有{% emoji aru-l 0171 %}

## 不足

1. 部分mod不规范，可能出现误判
2. Curseforge无法获取支持的所有版本，只能获取最近的版本，可能出现误判
3. 不支持下载，{% psw 我k我当时写完一运行直接沉默了，直接摆了 %}
4. 对于某个mod不支持时无法定位。可以添加输入期望版本然后输出不支持的mod
