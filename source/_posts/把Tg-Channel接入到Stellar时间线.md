---
title: 把Tg Channel接入到Stellar时间线
date: 2024-02-25 13:19:01
updated: 2024-02-25 14:43:01
tags: Stellar
cover: https://onep.hzchu.top/mount/pic/2024/02/25/65dadc3ca6e74.webp?fmt=avif
banner: https://onep.hzchu.top/mount/pic/2024/02/25/65dadc3ca6e74.webp?fmt=avif
description: 使用Cloudflare Worker，获取Tg频道内容，并接入到Stellar时间线
categories: 技术类
---

## 前言

之前调CW时发现[Cyan](https://blog.eurekac.cn/)加上了TG频道说说，因为已经有`Memos`了所以没有在意，昨天在[Stellar 探索号](https://xaoxuu.com/wiki/stellar/articles.html)看到有[stellar主题集成Telegram Channel说说](https://blog.lvbyte.top/posts/11214/)的教程，忽然灵光一闪，这拿来放草稿/想法挺合适的嘛



## 正文

首先新建一个频道，并记下频道ID

![1708839745065.webp](https://onep.hzchu.top/mount/pic/2024/02/25/65dad341bacfd.webp?fmt=avif)

新建一个`Cloudflare Worker`，复制下面的代码粘贴进去

> 为了兼容Stellar的时间线，我在lvbyte的基础上改了点代码

<script src="https://faster-gist.hzchu.top/thun888/67d8cdf1296d8dc252e9fc5607e4daf6.js"></script>

并修改顶部配置

```js
const ChannelNameList = ['thun888sthinks']; //频道ID，可添加多个
const deniedRegion = [""]; 屏蔽区域，如CN,US
const baseproxyurl="https://get-tg-channel-api.hzchu.top/?proxy=" //将中间域名替换为你为worker绑定的域名
```

随后按照使用Memos时间线形式使用即可

## 可传入参数

| 参数        | 参数名           | 默认值     | 描述                                                         |
| ----------- | ---------------- | ---------- | ------------------------------------------------------------ |
| cid         | 频道id           | 0          | 指在代码里配置的第n个频道，并不是上文所述频道id              |
| mid         | 信息id           | /          | 指定后只返回该信息，信息id可在发送后查看                     |
| **tag**     | 标签名           | DefaultTag | 筛选传入的标签返回                                           |
| limit       | 获取条数         | /          | /                                                            |
| offset | 获取信息偏移量     | /          | 如果有一条信息`id`为`80`的信息，那么当传入`80`时将返回这条信息之前的所有信息 |
| showtag     | 是否展示标签     | true       | /                                                            |
| showview    | 是否展示访问量   | false | 启用时会在末尾附上(views:number)                             |
| usemd       | 是否使用Markdown | true       | 开启后返回未被tg解析过的md语法                               |
| usetgclassification | 是否使用tg自带的分类 | false | 开启后使用tg自带的分类来进行标签筛选，防止过久导致无法显示。但注意会有缓存 |

> 众所周知，`0`是第一个自然数，所以cid传入`0`时表示获取第1个频道
>
>  tag为空时默认返回#DefaultTag的数据，可在代码中自行更改
>
> `tag`原版是`#SFCN`,一开始没想明白是什么意思，现在明白了：Suitable For China，可以有别的玩法o(￣▽￣)ｄ

## 在Stellar中的使用

{% tabs active:1 align:center %}
<!-- tab 在独立页面内使用 -->

{% grid %}
<!-- cell -->

{% timeline user:thun888sthinks api:https://get-tg-channel-api.hzchu.top/?tag=DTA&limit=3 type:memos %}

{% endtimeline %}

<!-- cell -->

**代码：**

```markdown
{% timeline user:thun888sthinks api:https://get-tg-channel-api.hzchu.top/?tag=DTA&limit=3 type:memos %}

{% endtimeline %}
```

user为频道ID，api为你为CFW绑定的域名，type填memos

碍于篇幅限制，只展示前3条

{% endgrid %}

<!-- tab 添加为小部件 -->

```yaml /source/_data/widgets.yml
timeline:
  layout: timeline
  title: 近期动态
  api: https://get-tg-channel-api.hzchu.top/?tag=DTA&limit=3
  type: memos
  hide: user,footer	
```

<!-- tab 进阶（使用数据服务插件） -->

有一些功能在默认的设计下不能很好的实现，但是通过数据插件就可以实现了，比如动态加载更多内容，回应显示，访问量显示等

有空再写（挖坑.webp

{% endtabs %}

## 其它用法

{% tabs active:1 align:center %}
<!-- tab 获取其它频道 -->
{% grid %}
<!-- cell -->

{% timeline user:Thun888sDraftArticles api:https://get-tg-channel-api.hzchu.top/?cid=1&tag=DTA&limit=3 type:memos %}

{% endtimeline %}

<!-- cell -->

**代码：**

```markdown
{% timeline user:Thun888sDraftArticles api:https://get-tg-channel-api.hzchu.top/?cid=1&tag=DTA&limit=3 type:memos %}

{% endtimeline %}
```

{% endgrid %}
<!-- tab 指定获取某条信息 -->
{% grid %}
<!-- cell -->

{% timeline user:Thun888sDraftArticles api:https://get-tg-channel-api.hzchu.top/?cid=1&tag=Test&mid=52&showtag=false type:memos %}

{% endtimeline %}

<!-- cell -->

**代码：**

```markdown
{% timeline user:Thun888sDraftArticles api:https://get-tg-channel-api.hzchu.top/?cid=1&tag=Test&mid=52&showtag=false type:memos %}

{% endtimeline %}
```

可以用在很多地方获取某些信息，作为某种接口来使用。在这一基础上，你甚至可以修改代码，改为只返回图片，在某种意义上实现图床的效果，不过滥用可不太好啊{% emoji blobcat blobcatpolice %}


{% endgrid %}

<!-- tab 展示访问量 -->
{% grid %}
<!-- cell -->

{% timeline user:Thun888sDraftArticles api:https://get-tg-channel-api.hzchu.top/?cid=1&tag=Test&showview=true type:memos %}

{% endtimeline %}

<!-- cell -->

**代码：**

```markdown
{% timeline user:Thun888sDraftArticles api:https://get-tg-channel-api.hzchu.top/?cid=1&tag=Test&showview=true type:memos %}

{% endtimeline %}
```

{% endgrid %}

<!-- tab 使用Markdown -->
{% grid %}
<!-- cell -->

{% timeline user:Thun888sDraftArticles api:https://get-tg-channel-api.hzchu.top/?cid=1&tag=Test&usemd=true type:memos %}

{% endtimeline %}

<!-- cell -->

**代码：**

```markdown
{% timeline user:Thun888sDraftArticles api:https://get-tg-channel-api.hzchu.top/?cid=1&tag=Test&usemd=true type:memos %}

{% endtimeline %}
```

在默认情况下，tg会解析md语法，对于不支持的语法会转义，从而导致前端无法正常解析md语法，在使用该参数后程序会将解析后的文本还原为正常md语法并返回。默认开启

{% endgrid %}

{% endtabs %}
相关配置：

```js
const ChannelNameList = ['thun888sthinks','Thun888sDraftArticles'];
```

## 变体

### 反向筛选

将`if (MessageTextMatch && (!denied && MessageTextMatch[0].includes('#' + tagname))) {`修改为`if (MessageTextMatch && (!denied || MessageTextMatch[0].includes('#' + tagname))) {`

### 文本筛选

将`MessageTextMatch[0].includes('#' + tagname)`修改为`MessageTextMatch[0].includes('yourtext')`

## Todo

- [x] 可在请求时选择过滤哪个tag
- [x] 完善Emoji支持
- [x] 前端传入标签名
- [x] 可选显示标签名及访问量
- [x] 获取指定信息
- [x] 多频道支持
- [ ] 表情包标签解析
- [ ] 自定义是否显示引用
- [ ] 可传入需要返回的名称
- [x] 可选使用tg自带分类

## 结语

它可以使静态博客进一步动态化，加强可玩性，也可在很多地方使用。

如果你有一些像`多频道融合`，`多标签获取`的功能建议，那就大可不必了，毕竟它一开始只是一个说说程序啊{% emoji blobcat ablobcatrainbow %}

