---
title: 关于
date: 2021-07-29 19:00:02
layout: about
---

{% about avatar:https://vkceyugu.cdn.bspapp.com/VKCEYUGU-35c12a92-e00c-4a70-8ef5-7bc728310bb5/c69734e0-f836-44b3-916a-77e618c57c70.webp height:80px %}

<img height="42px" alt="logo" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-35c12a92-e00c-4a70-8ef5-7bc728310bb5/b4b1c874-e3bf-42da-94cd-1968d4dfa5bc.svg">

咸鱼一条

{% navbar [文章](/) [项目](/wiki/) [GitHub](https://github.com/thun888/) [友链](/friends/) [留言](/say/) %}

{% endabout %}
{% tabs hobbies active:2 align:center %}

<!-- tab 技能 -->

~~废物~~,在学Go

<!-- tab 联系方式 -->

- [哔哩哔哩](https://space.bilibili.com/451090261)

- [酷安](https://www.coolapk.com/u/2399850)

- [GitHub](https://www.github.com/thun888)

- [QQ邮箱](mailto:thun888@qq.com)

<!-- tab 游戏 -->

Minecraft，缺氧，戴森球计划,~~Wallpaper Engine~~......

<!-- tab Todo -->
{% checkbox 中考考个好成绩，进到实验班 %}

c今年广东考了个屁

 {% endtabs %}

### 关于本站.

#### 初衷

一开始只是想要学习html吧，现在主要是为了记录自己折腾过的时光

#### 来历&历程

建于网课时光，当时是自己写(自信如我)加\*.github.io，后面陆续采用Gridea+github page和wp+樱花frp的方案，最后确认使用hexo+thun888.xyz这个域名,中途换过三次主题{% psw <del>都是升级升炸的qwq</del> %}，两次评论系统,现阶段使用的Stellar和Artalk肯定是不会变的了

#### 部署方式

我=>提交到Github=>GA进行构建并发布到gh-pages=>Vercel
如果网站因为种种原因而无法打开可以访问[Cloudflare](https://cfblog.thun888.xyz/)镜像

#### 所用到的部分资源

[Github](https://github.com/) 提供博客文件和图片存储
[Vercel](https://vercel.com/) 提供静态网页托管及部分对子站点的反向代理,提供js,css等静态资源及图片加速
[Cloudflare](https://www.cloudflare.com/) 提供cdn,dns
[~~雨云~~](http://redirect.rainyun.cn/?ref=15366) ~~提供主站CDN服务~~

#### 运行状况

*您可以在*[*监控站*](https://status.thun888.xyz/)*中查看更多历史运行状况*

**粗体**为`blog.thun888.xyz`所依赖的必须资源

{% folding child:codeblock open:false color:yellow 状况 %}

- **主站**: <span class="tag-plugin emoji"><img style="height:1.5em" src="https://img.shields.io/website?url=https://blog.thun888.xyz"></span>

- **Github_raw_proxy**:<span class="tag-plugin emoji"><img style="height:1.5em" src="https://img.shields.io/website?url=https://raw.thun888.xyz/thun888/myblog/gh-page/img/satus.png"></span>

- Backblaze:<span class="tag-plugin emoji"><img style="height:1.5em" src="https://img.shields.io/website?url=https://asstes.thun888.xyz/file/pic-bed/2021/08/24a2870127c3be646bf6acdd80dcc83f.png"></span>

- Cloudflare镜像:<span class="tag-plugin emoji"><img style="height:1.5em" src="https://img.shields.io/website?url=https://cfblog.thun888.xyz"></span>

- 统计服务器:<span class="tag-plugin emoji"><img style="height:1.5em" src="https://img.shields.io/website?url=https://record.thun888.xyz"></span>

{% endfolding %}

#### 统计信息

数据基于[Umami](https://record.thun888.xyz/share/KlXk1pgS/Blog)

#### 捐赠

我并不认为我目前能接受捐赠~~太菜了~~，不过如果您愿意也可以请我喝杯奶茶{% emoji aru 50 %}

|Alipay|Wechat|
|-|-|
|<img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-35c12a92-e00c-4a70-8ef5-7bc728310bb5/f8de3cd8-3c97-4c20-a8e2-c5f921a1af99.webp" style="zoom:42.5%;" />|<img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-35c12a92-e00c-4a70-8ef5-7bc728310bb5/1388167e-adb3-4302-8a8e-f206e4601795.png" style="zoom:50%;" />|

![](/img/post/5b73a4a33f9bb3df5e1236b4021492fe.gif)

<HR width="95%" color=#987cb9 SIZE=3>
<a id="artalkup" href="javascript:load();" style="text-align: center;display:block;background-color:var(--link-hover-bg-color);font-size:20px">(o゜▽゜)o点击加载留言</a><span id="fileup" style="text-align: center;display:block;"></span>
<HR width="95%" color=#987cb9 SIZE=3>
<div id="Comments"></div>
<link href="https://cdn.bootcdn.net/ajax/libs/artalk/2.3.4/Artalk.min.css" rel="stylesheet">
<script src="https://cdn.bootcdn.net/ajax/libs/artalk/2.3.4/Artalk.js"></script>

<script>
function load(){var script=document.createElement("script");script.type="text/javascript";script.src='/js/artalkconfig.js';document.body.appendChild(script)}
</script>