---
robots: noindex,nofollow
sitemap: false
menu_id: more
seo_title: 友链
toc_title: 友链索引
header: false
---
{% raw %}
{% friends %}

{% noteblock color:yellow 友链更新通知 %}

由于近期对友链系统进行了重做，原链接失效的小伙伴请按照下方交换友链的步骤进行填写。在新的友链系统中，您随时可以对自己的信息进行修改而无需等待博主更新。

{% endnoteblock %}
{% endraw %}
## 我可以交换友链吗？

您的网站还应满足以下条件：
{% raw %}
{% folding child:codeblock open:false color:yellow 大部分情况您的站点都是ok的 %}

- 合法的、非营利性、无商业广告
- 有实质性原创内容的 `HTTPS` 站点
- ~~建立时间不小于3个月~~

{% endfolding %}
{% endraw %}
须知：

- 内容不能违反中国大陆法律<span class="heimu">对于一些##字眼尽量少出现</span>

  如果存在大量`违法`色情信息（包括但不限于）经举报/检查发现后永久移除并与网警深切交流♂

- 如果您的网站超过15天无法以https方式访问我方将移动您的友链至`待恢复`分类中，达到30天会移除

- 如果友链信息有变更可以在下方留言

- 自助添加的属于异步渲染，无 SEO ，勿刷

## 如何自助添加友链？
{% raw %}
{% timeline %}

<!-- node 第一步：新建 Issue -->

新建 [GitHub Issue](https://github.com/xaoxuu/friends/issues/) 按照模板格式填写并提交。

{% folding child:codeblock open:false color:yellow 为了提高图片加载速度，建议优化头像： %}

1. 打开 [压缩图](https://www.yasuotu.com/) 上传自己的头像，将图片尺寸调整到 `96px` 后下载。
2. 将压缩后的图片上传到 [去不图床](https://7bu.top/) 并使用此图片链接作为头像。
3. 使用webp格式

{% endfolding %}

<!-- node 第二步：添加友链并等待管理员审核 -->

请添加本站到您的友链中，如果您也使用 issue 作为友链源，只需要告知您的友链源仓库即可。

{% codeblock lang:yaml %}
title: thun888's Blog
avatar: https://asstes.thun888.xyz/file/pic-bed/2021/07/3c09905fa076d1e9c2a0f216d68bc47f.webp
url: https://blog.thun888.xyz
screenshot: https://asstes.thun888.xyz/file/pic-bed/2021/07/a8c9547c3d14bcacc07eeae683a5f4a5.webp
{% endcodeblock %}

待管理员审核通过，添加了 `active` 标签后，回来刷新即可生效。

{% endtimeline %}
{% endraw %}
如果您需要更新自己的友链，请直接修改 issue 内容，大约 3 分钟内生效，无需等待博客更新。如果无法修改，可以重新创建一个。

<HR width="95%" color=#987cb9 SIZE=3>
  <a id="artalkup" href="javascript:load();" style="text-align: center;display:block;background-color:var(--link-hover-bg-color);font-size:20px">(o゜▽゜)o点击加载留言</a><span id="fileup" style="text-align: center;display:block;"></span>
  <HR width="95%" color=#987cb9 SIZE=3>
  <div id="ArtalkComments"></div>
  <script src="https://cdn.jsdelivr.net/npm/jquery-pjax@2.0.1/jquery.pjax.min.js"></script>
  <script type="text/javascript">
  $(document).pjax('a', '#ArtalkComments', {
    fragment: '.main' 
  })
  </script>
  <!-- ... -->
  <script src="https://cdn.jsdelivr.net/gh/thun888/tuku@latest/js/Artalk.min.js"></script>
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/ArtalkJS/Artalk@master/dist/Artalk.min.css">
  <script>
function load(){var script=document.createElement("script");script.type="text/javascript";script.src='/js/artalkconfig.js';document.body.appendChild(script)}
  </script>