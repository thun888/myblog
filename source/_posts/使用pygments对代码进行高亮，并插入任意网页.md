---
title: 这是...动态代码框？
date: 2024-04-21 14:20:02
updated: 2024-04-21 14:20:02
tags: [Vercel,python]
cover: https://dolphinsbukets.s3.bitiful.net/article-cover/cover-7.png?fmt=avif
banner: https://dolphinsbukets.s3.bitiful.net/article-cover/cover-7.png?fmt=avif&q=50
description: 使用pygments对代码进行高亮，将长段代码Embed到你的博客里吧
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

## 写code

这简单，跳过了{% emoji blobcat blobcatsnapped %}

## 部署🎇

因为我是直接用Vercel的cli进行部署的，所以这一步需要先安装一下

> 也可以直接部署: [Develop To Vercel](https://vercel.com/import/project?template=https://github.com/thun888/hightlight-code-api)

{% copy npm install -g vercel prefix:$ %}

然后登录

{% copy vercel login prefix:$ %}

再clone下仓库到本地，你可以打开`api\main.py`来修改一下/删除提供者信息

{% copy git clone https://github.com/thun888/hightlight-code-api.git prefix:$ %}

{% image https://onep.hzchu.top/mount/pic/myself/2024/04/66249b3e5bb80.webp %}

如有需要，可在`vercel.json`里配置可信来源，防止滥用

部署到生产环境

{% copy vercel --prod prefix:$ %}

> 若出现Vercel报错`Error: Unable to find any supported Python versions.`记得把项目的node版本改成 `18.x`

随后引用即可

```html
<script src="https://{yourdomain}/api/v1/generate?url={fileurl}&lang={language}"></script>
```

> {fileurl}为所需引入文件的链接，{language}为对应语言（自动识别我试了下精准度堪忧，只好手动指定

可传入参数：

| 参数名    | 默认值                 | 解释                                  |
| --------- | ---------------------- | ------------------------------------- |
| *code*    | \                      | 需要的高亮的代码                      |
| *url*     | \                      | 需要的高亮的代码的链接                |
| *lang*    | [为空时根据后缀名判断] | 语言                                  |
| *withcss* | true                   | 是否附带css                           |
| json      | false                  | 是否以json形式返回({"result": "..."}) |

## 扩展

### 更便捷的使用

受[@星日语](https://weekdaycare.cn/)的启发，我做了个插件：`hexo-dynamic-codeblock`

安装：{% copy npm install hexo-dynamic-codeblock prefix:$ %}

配置：

```yaml _config.yml
dynamic_codeblock:
  loading: true
  showsupporter: true
  api: https://{yourdomain}/api/v1/generate
  css: https://jsd.hzchu.top/gh/thun888/asstes@master/files/pygments-css/default.css
```

> **loading只针对Stellar主题**。同时，为使copycode正常工作，你需要将/js/plugins/copycode.js修改为[这样](/js/plugins/copycode.js)

使用：

```markdown
{% coding [url] [lang] %}
```

在其它主题中的表现：

![landscape](https://onep.hzchu.top/mount/pic/myself/2024/05/6632074ebf0a9.webp)

从传统方式迁移：

​	使用正则表达式，将`<script src="https://hightlight-code-api\.hzchu\.top/api/v1/generate\?url=(.*)&lang=(.*)"></script>`替换为`{% coding $1 $2 %}`

## Todo

- [ ] 添加 `/preview`

## 效果

该处引用本程序代码

```html
<script src="https://hightlight-code-api.hzchu.top/api/v1/generate?url=https://raw.githubusercontent.com/thun888/hightlight-code-api/main/api/main.py&lang=python"></script>
```

{% coding https://raw.githubusercontent.com/thun888/hightlight-code-api/main/api/main.py python %}
