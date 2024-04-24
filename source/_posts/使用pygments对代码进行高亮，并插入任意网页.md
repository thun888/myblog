---
title: 使用pygments对代码进行高亮，并嵌入任意网页
date: 2024-04-21 14:20:02
updated: 2024-04-21 14:20:02
tags: [Vercel,python]
cover: https://dolphinsbukets.s3.bitiful.net/article-cover/cover-7.png?fmt=webp
banner: https://dolphinsbukets.s3.bitiful.net/article-cover/cover-7.png?fmt=webp&q=50
description: 将长段代码Embed到你的博客里吧
categories: 技术分享
---

## 前言
一直以来我都面临着一个问题：我要在文章中引用一段大几百行的代码，一眼看去md文件里5/6都是英文，要是有改动还得找到代码快开始的地方从头覆盖到尾。

前一阵子发现gist，对他的Embed爱不释手，但是我所引用的文件大部分都是在Github仓库上的，而对于普通文件并没有Embed功能。如果说直接用gist的话文件发生改动时我又要手动将更改覆盖到gist上，屮，太痛了。{% emoji blobcat blobcatcomftears %}

## 思路

从解决痛点问题出发，我认为需要具备以下功能。{% emoji blobcat blobcatthink %}

1. 类似gist可以嵌入到页面中

2. 自动同步改动

对gist提供嵌入的js分析了一下，发现它包括两部分：

1. 插入代码区，这部分包括已进行高亮的代码

2. 引入css

那接下来就好办了，我们只需要将文件内容获取下来，进行高亮后显示即可。

然后从网上搜了一下，能进行代码高亮的库，发现了`highlight(js)`以及`pygments(py)`。 对于纯静态博客而言，肯定是使用`highlight`直接在前端处理好，但是这可能产生跨域问题以及因为网络问题无法获取到文件内容。况且现在无服务器函数遍地走了，那就直接pass掉吧。翻了下`pygments`的文档，嗯，懂了，开整。{% emoji blobcat blobcatbox %}

## 部署🎇

因为我是直接用Vercel的cli进行部署的，所以这一步需要先安装一下

> 也可以试一下fork仓库然后在vercel的面板里直接部署

{% copy npm install -g vercel prefix:$ %}

然后登录

{% copy vercel login prefix:$ %}

再ckone下仓库到本地，你可以打开`api\main.py`来修改一下提供者信息

{% copy git clone https://github.com/thun888/hightlight-code-api prefix:$ %}

{% image https://onep.hzchu.top/mount/pic/myself/2024/04/66249b3e5bb80.webp %}

如有需要，可在`verlcel.json`里配置可信来源，防止滥用

上传

{% copy vercel --prod prefix:$ %}

随后引用即可

```html
<script src="https://{yourdomain}/api/v1/generate?url={fileurl}&lang={language}"></script>
```

> {fileurl}为所需引入文件的链接，{language}为对应语言（自动识别我试了下精准度堪忧，只好手动指定

可传入参数：

| 参数名    | 默认值 | 解释                   |
| --------- | ------ | ---------------------- |
| *code*    | \      | 需要的高亮的代码       |
| *url*     | \      | 需要的高亮的代码的链接 |
| *lang*    | python | 语言                   |
| *withcss* | true   | 是否附带css            |

## 效果

该处引用本程序代码

```html
<script src="https://hightlight-code-api.hzchu.top/api/v1/generate?url=https://raw.githubusercontent.com/thun888/hightlight-code-api/main/api/main.py&lang=python"></script>
```

<script src="https://hightlight-code-api.hzchu.top/api/v1/generate?url=https://raw.githubusercontent.com/thun888/hightlight-code-api/main/api/main.py&lang=python"></script>
