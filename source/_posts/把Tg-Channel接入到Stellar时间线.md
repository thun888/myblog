---
title: 把Tg Channel接入到Stellar时间线
date: 2024-02-25 13:19:01
updated: 2024-02-25 14:43:01
tags: Stellar
cover: https://onep.hzchu.top/mount/pic/2024/02/25/65dadc3ca6e74.webp
banner: https://onep.hzchu.top/mount/pic/2024/02/25/65dadc3ca6e74.webp
description: 使用Cloudflare Worker，将Tg Channel接入到Stellar时间线
---

## 前言

之前调CW时发现[Cyan](https://blog.eurekac.cn/)加上了TG频道说说，因为已经有`Memos`了所以没有在意，昨天在[Stellar 探索号](https://xaoxuu.com/wiki/stellar/articles.html)看到有[stellar主题集成Telegram Channel说说](https://blog.lvbyte.top/posts/11214/)的教程，忽然灵光一闪，这拿来放草稿/想法挺合适的嘛



## 正文

首先新建一个频道，并记下频道ID

![1708839745065.webp](https://onep.hzchu.top/mount/pic/2024/02/25/65dad341bacfd.webp)

新建一个Cloudflare Worker，复制下面的代码粘贴进去

> 为了兼容Steller的时间线，我在lvbyte的基础上改了点代码

<script src="https://cfproxy.hzchu.top/https://gist.github.com/thun888/67d8cdf1296d8dc252e9fc5607e4daf6.js"></script>

并修改顶部配置

```js
const ChannelName = 'Thun888sDraftArticles'; //频道ID
const deniedRegion = [""]; 屏蔽区域，如CN,US
const baseproxyurl="https://get-tg-channel-api.hzchu.top/?proxy=" //将中间域名替换为你为worker绑定的域名
```

由于开启了标签过滤，带上`#DTA`标签（Draft Article）的才会显示，可在代码里搜索并替换为自己想要的

> 原版是#SFCN,一开始没想明白是什么意思，现在明白了：Suitable For China，可以有别的玩法o(￣▽￣)ｄ

随后按照使用Memos时间线形式使用即可

## 样式展示

{% grid %}
<!-- cell -->

{% timeline user:Thun888sDraftArticles api:https://get-tg-channel-api.hzchu.top/?limit=3 type:memos %}

{% endtimeline %}

<!-- cell -->

**代码：**

```markdown
{% timeline user:Thun888sDraftArticles api:https://get-tg-channel-api.hzchu.top/ type:memos %}

{% endtimeline %}
```

user为频道ID，api为你为CFW绑定的域名，type填memos

碍于篇幅限制，只展示前3条

{% endgrid %}

## Todo

- [ ] 可在请求时选择过滤哪个tag（没需求先鸽着
- [ ] 完善Emoji支持

