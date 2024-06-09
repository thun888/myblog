---
title: Stellar表情集
date: 2024-06-09 13:45:40
updated: 2024-06-09 13:45:40
tags:
cover:
banner:
description:
categories: 技术分享
---

d

## 起因

之前在折腾[使用Typora_plugin增强Stellar写作体验](https://blog.hzchu.top/2024/使用Typora-plugin增强Stellar写作体验/)的时候写了个「表情面板」，不过局限性太大，只能在typora里用，现在独立出来。

## 展示



## 用法

由于stellar的配置中`aru`和`aru-l`混为一体，需要先修改配置文件

```yaml _config.stellar.yml
tag_plugins:
  emoji:
    default: https://gcore.jsdelivr.net/gh/cdn-x/emoji/qq/{name}.gif
    twemoji: https://gcore.jsdelivr.net/gh/twitter/twemoji/assets/svg/{name}.svg
    qq: https://gcore.jsdelivr.net/gh/cdn-x/emoji/qq/{name}.gif
    aru: https://gcore.jsdelivr.net/gh/cdn-x/emoji/aru/{name}.png
    aru-l: https://gcore.jsdelivr.net/gh/cdn-x/emoji/aru-l/{name}.gif
    tieba: https://gcore.jsdelivr.net/gh/cdn-x/emoji/tieba/{name}.png
    blobcat: https://gcore.jsdelivr.net/gh/norevi/waline-blobcatemojis@1.0/blobs/{name}.png
```

