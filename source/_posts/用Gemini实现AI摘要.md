---
title: 用Gemini，实现AI摘要
date: 2024-03-09 19:31:16
updated: 2024-03-09 19:31:16
tags: [Blog,Stellar,CFW]
cover: https://dolphinsbukets.s3.bitiful.net/article-cover/cover-4.png?fmt=avif
banner: https://dolphinsbukets.s3.bitiful.net/article-cover/cover-4.png?fmt=avif&q=50
description: 使用Cloudflare Worker，借助Gemini，平替TianliGPT
categories: 技术类
---

## 前言

很久之前，我网上surfing的时候发现好多网站都有「AI摘要」，了解了一下发现是「[TianliGPT](https://docs_s.tianli0.top/)」，好是好，~~但两位数的价格还是打动不了我当时勉强三位数的存款。~~本着能省就省的原则，我使用了一种笨方法~~（为了撑场子没考虑太多）~~，手动向「BingAI」发送摘要文本，获取摘要后存储在kv中，通过cfw返回。可行，但太痛苦了（这也是它叫DolGPT的原因之一），前几天看到Gemini开放了api可以免费调用，这不直接起飞{% emoji blobcat ablobcatrainbow %}

## 获取GEMINI_KEY

首先登录[ai.google.dev](https://ai.google.dev/)，左上角点击`Get API key`，再在中间点`Create API key`，随便选个项目即可

{% folding 没听懂就看图片吧 color:yellow %}
{% image https://onep.hzchu.top/mount/pic/2024/03/09/65ec523988ddc.webp?fmt=avif download:https://onep.hzchu.top/mount/pic/2024/03/09/65ec523988ddc.webp Snipaste_2024-03-09_10-17-37.webp %}
{% image https://onep.hzchu.top/mount/pic/2024/03/09/65ec523fecbfa.webp?fmt=avif download:https://onep.hzchu.top/mount/pic/2024/03/09/65ec523fecbfa.webp Snipaste_2024-03-09_10-18-14.webp %}
{% image https://onep.hzchu.top/mount/pic/2024/03/09/65ec523933f1c.webp?fmt=avif download:https://onep.hzchu.top/mount/pic/2024/03/09/65ec523933f1c.webp Snipaste_2024-03-09_10-22-37.webp %}
{% image https://onep.hzchu.top/mount/pic/2024/03/09/65ec523a4e8b3.webp?fmt=avif download:https://onep.hzchu.top/mount/pic/2024/03/09/65ec523a4e8b3.webp Snipaste_2024-03-09_10-23-59.webp %}
{% image https://onep.hzchu.top/mount/pic/2024/03/09/65ec52371bf18.webp?fmt=avif download:https://onep.hzchu.top/mount/pic/2024/03/09/65ec52371bf18.webp Snipaste_2024-03-09_10-22-25.webp %}
{% endfolding %}

## 后端程序

因为Stellar已经配置了TianliGPT的css了，所以我也懒得另起炉灶，直接按TianliGPT的格式返回，所以理论上讲和其它的使用TianliGPT的服务也兼容

仓库：[thun888/ai-summary](https://github.com/thun888/ai-summary/)

{% ghcard thun888/ai-summary %}

新建一个`Cloudflare Worker`，复制[/src/index.js](https://github.com/thun888/ai-summary/blob/master/src/index.js)的代码粘贴进去

随后修改环境变量，填入可信来源（即只有这个域名才能调用ai摘要，如不需要可设置为`*`）（`ALLOWED_ORIGINS`）以及你的key（`GEMINI_KEY`）

{% image https://onep.hzchu.top/mount/pic/2024/03/09/65ec508eb0684.webp?fmt=avif download:https://onep.hzchu.top/mount/pic/2024/03/09/65ec508eb0684.webp 1709985925369.webp %}

接着新建一个kv，并绑定到程序上

> kv的名字随意，但**Variable name** 必须为 `KV`

{% image https://onep.hzchu.top/mount/pic/2024/03/09/65ec565254bdb.webp?fmt=avif download:https://onep.hzchu.top/mount/pic/2024/03/09/65ec565254bdb.webp 1709987402272.webp %}

最后可以尝试访问，有输出且刷新不变即为成功

{% image https://onep.hzchu.top/mount/pic/2024/03/09/65ec54a03e7a9.webp?fmt=avif download:https://onep.hzchu.top/mount/pic/2024/03/09/65ec54a03e7a9.webp 1709986972903.webp %}

{% note color:yellow 该程序只实现了ai摘要生成，对于其他网站矩阵之类的功能，其实自己用哪里要得上这么多功能嘛 %}

## 前端程序修改


理论上，直接替换summary.tianli0.top为你对应域名即可，但在很多情况下，你还需要额外删减一些无关api调用，如openid生成

这是我修改后的程序，可以参考

{% coding https://raw.githubusercontent.com/thun888/myblog/main/source/js/chuckle-post-ai.js js %}

修改完后引入到主题

> 以下为针对Stellar主题

```yaml config.yml
  # AI 摘要
  # https://github.com/qxchuckle/Post-Summary-AI
  tianli_gpt: 
    enable: true
    js: /js/chuckle-post-ai.js #改为对应路径
    field: post 
    key: 5Q5mpqRK5DkwT1X9Gi5e
    total_length: 3500 
    typewriter: true
    summary_directly: true 
    rec_method: all 
    hide_shuttle: true 
    summary_toggle: false
    interface:
      name: AI摘要
      introduce: '我是文章辅助AI: Gemini，点击下方的按钮，让我生成本文简介、推荐相关文章等。'
      version: Gemini
      button: ["介绍自己", "推荐文章", "生成摘要", "矩阵穿梭"]
```

> 如果无效可以自己在`\stellar\layout\_partial\plugins\tianli_gpt.ejs`里修改

## 效果演示

{% image https://onep.hzchu.top/mount/pic/2024/04/05/660f969dca9d3.webp?fmt=avif download:https://onep.hzchu.top/mount/pic/2024/04/05/660f969dca9d3.webp 1712297627948.webp %}

## 结语

其表现我个人感觉跌宕起伏，有时不如ChatGPT，有时有吊打Bing，反正免费的要什么自行车{% emoji blobcat blobcatmeltthumb %}

记得之前看还叫Bard，还不支持中文，没想到现在这么厉害了{% emoji blobcat ablobcatreachrev %}
