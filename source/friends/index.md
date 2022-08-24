---
robots: noindex,nofollow
sitemap: false
menu_id: more
seo_title: 友链
toc_title: 友链索引
header: false
---

{% friends %}

## 我可以交换友链吗？

您的网站还应满足以下条件：

- 合法的、非营利性、无商业广告

- 有实质性原创内容

须知：

- 内容不能违反中国大陆法律{% psw 对于一些##字眼尽量少出现 %}

  如果存在大量`违法色情`信息（包括但不限于）经举报/检查发现后永久移除

- 如果您的网站超过15天无法以https方式访问我方将移动您的友链至`待恢复`分类中，达到30天会移除

- 如果友链信息有变更可以在下方留言

## 如何自助添加友链？

{% timeline %}

<!-- node 第一步：新建 Issue -->

新建 [GitHub Issue](https://github.com/xaoxuu/friends/issues/) 按照模板格式填写并提交。

{% folding child:codeblock open:false color:yellow 为了提高图片加载速度，建议优化头像： %}

1. 打开 [压缩图](https://www.yasuotu.com/) 上传自己的头像，将图片尺寸调整到 `96px` 后下载。

2. 使用webp格式

{% endfolding %}

<!-- node 第二步：添加友链并等待管理员审核 -->

请添加本站到您的友链中，如果您也使用 issue 作为友链源，只需要告知您的友链源仓库即可。

{% codeblock lang:yaml %}
title: thun888's Blog
avatar: https://k.thun888.xyz/2022/08/21/63019c1179f9f.webp
url: https://blog.thun888.xyz
screenshot: https://asstes.thun888.xyz/file/pic-bed/2021/11/blog.thun888.xyz.png
description: 夏日当空,心如深渊
{% endcodeblock %}

待管理员审核通过，添加了 `active` 标签后，回来刷新即可生效。

{% endtimeline %}

如果您需要更新自己的友链，请直接修改 issue 内容，大约 3 分钟内生效，无需等待博客更新。如果无法修改，可以重新创建一个。

<HR width="95%" color=#987cb9 SIZE=3>
<a id="artalkup" href="javascript:load();" style="text-align: center;display:block;background-color:var(--link-hover-bg-color);font-size:20px">(o゜▽゜)o点击加载留言</a><span id="fileup" style="text-align: center;display:block;"></span>
<HR width="95%" color=#987cb9 SIZE=3>
<div id="Comments"></div>
<link href="https://cdn.bootcdn.net/ajax/libs/artalk/2.3.4/Artalk.min.css" rel="stylesheet">
<script src="https://cdn.bootcdn.net/ajax/libs/artalk/2.3.4/Artalk.js"></script>
<script>
function load(){var script=document.createElement("script");script.type="text/javascript";script.src='/js/artalkconfig.js';document.body.appendChild(script)}
</script>