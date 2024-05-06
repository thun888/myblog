---
title: 使用Typora_plugin增强Stellar写作体验
date: 2024-05-02 12:47:19
updated: 2024-05-02 12:47:19
tags: [Stellar,Typora]
cover:
banner:
description: 打标签打累了？试试自动补齐
categories: 瞎折腾
---

## 前言

我觉得`Stellar`有一个极强的优势——丰富的标签组件，{% mark 但 color:red %}有个{% wavy 小问题 %}——所有标签加起来30多个，而且重复手打`{% ... %}`多多少少有点难受。{% emoji blobcat  blobcatcry %}

早上翻issue突然发现`Typora Plugin`这个好东西，这不直接用起来{% emoji blobcat blobcatnomblobcat %}

{% link https://github.com/obgnail/typora_plugin %}

## 安装Typora Plugin

`Typora Plugin`仓库里写的已经很详细了，这里略过{% emoji blobcat blobcatpeek2 %}

## 添加配置

现阶段主要用的是`slash_commands`来实现`快捷插入片段`。

修改`settings.user.toml`：

```toml Typora\resources\plugin\global\settings\settings.user.toml
[slash_commands]
# 命令列表
#  - enable:    是否启用
#  - type:      snippet/command。前者表示在调用时插入文字片段，后者表示在调用时执行逻辑命令
#  - icon(可选): 使用emoji作为图标
#  - hint(可选): 提示信息
#  - keyword:   关键词
#  - callback:  若type=snippet，则填入需要插入的文字片段，若type=command，则填入回调函数的字符串
COMMANDS = [
    { enable = true, type = "snippet", icon = "😺", hint = "插入表情标签", keyword = "emoji", callback = "{% emoji  %}" },
    { enable = true, type = "snippet", icon = "🪄", hint = "插入标记标签", keyword = "mark", callback = "{% mark  color: %}" },
    { enable = true, type = "snippet", icon = "🏷️", hint = "插入hashtag标签", keyword = "hashtag", callback = "{% hashtag  color: %}" },
    { enable = true, type = "snippet", icon = "📷", hint = "插入image图片标签", keyword = "image", callback = "{% image  download: width: padding: bg: %}" },
    { enable = true, type = "snippet", icon = "🧇", hint = "插入quot引用标签", keyword = "quot", callback = "{% quot  icon:hashtag %}" },
    { enable = true, type = "snippet", icon = "🦉", hint = "插入poetry诗词标签", keyword = "poetry", callback = "{% poetry 游山西村 author:陆游 footer:诗词节选 %}\n{% endpoetry %}" },
    { enable = true, type = "snippet", icon = "📃", hint = "插入note备注块标签", keyword = "note", callback = "{% note [title] content color: %}" },
    { enable = true, type = "snippet", icon = "🔗", hint = "插入link链接卡片标签", keyword = "link", callback = "{% link href [title] [icon:src] [desc:true/false] %}" },
    { enable = true, type = "snippet", icon = "▶", hint = "插入button按钮标签", keyword = "button", callback = "{% button text url [icon:key/src] [color:color] [size:xs] %}" },
    { enable = true, type = "snippet", icon = "🎯", hint = "插入okr目标管理标签", keyword = "okr", callback = "{% okr o1 %}\n{% endokr %}" },
    { enable = true, type = "snippet", icon = "📚", hint = "插入copy复制行标签", keyword = "copy", callback = "{% copy [code] prefix:$ %}" },
    { enable = true, type = "snippet", icon = "🔘", hint = "插入radio单选标签", keyword = "radio", callback = "{% radio checked:true [name] %}" },
    { enable = true, type = "snippet", icon = "☑️", hint = "插入checkbox复选标签", keyword = "radio", callback = "{% checkbox symbol: color: checked: [name] %}" },
    { enable = true, type = "snippet", icon = "🎶", hint = "插入audio音频标签", keyword = "audio", callback = "{% audio  %}" },
    { enable = true, type = "snippet", icon = "📽️", hint = "插入video视频标签", keyword = "video", callback = "{% video  %}" },
    { enable = true, type = "snippet", icon = "🧭", hint = "插入navbar导航栏标签", keyword = "navbar", callback = "{% navbar active:/wiki/ [文章](/) [项目](/wiki/) %}" },
    { enable = true, type = "snippet", icon = "📅", hint = "插入timeline时间线标签", keyword = "timeline", callback = "{% timeline %}\n<!-- node [text] -->\n{% endtimeline %}" },
    { enable = true, type = "snippet", icon = "📁", hint = "插入folders文件夹/折叠容器标签", keyword = "folders", callback = "{% folders %}\n<!-- folder 题目1 -->\n{% endfolders %}" },
    { enable = true, type = "snippet", icon = "👥", hint = "插入friends友链标签", keyword = "friends", callback = "{% friends [name] %}" },
    { enable = true, type = "snippet", icon = "🌐", hint = "插入sites站点标签", keyword = "sites", callback = "{% sites 分组名 %}" },
    { enable = true, type = "snippet", icon = "📝", hint = "插入md标签,渲染外部 markdown 文件", keyword = "md", callback = "{% md [url] %}" },
    { enable = true, type = "snippet", icon = "📚", hint = "插入toc文档目录树标签", keyword = "toc", callback = "{% toc wiki:xxx [open:true] [display:mobile] title %}" },
    { enable = true, type = "snippet", icon = "📦", hint = "插入box盒子容器标签", keyword = "box", callback = "{% box [title] [color:color] [child:codeblock/tabs] %}\n{% endbox %}" },
    { enable = true, type = "snippet", icon = "🔖", hint = "插入tabs分栏容器标签", keyword = "tabs", callback = "{% tabs active: align:center %}\n<!-- tab [name] -->\n{% endtabs %}" },
    { enable = true, type = "snippet", icon = "🔲", hint = "插入grid标签", keyword = "grid", callback = "{% grid bg:box/card %}\n<!-- cell -->\n{% endgrid %}" },
    { enable = true, type = "snippet", icon = "🖼️", hint = "插入gallery图库容器标签", keyword = "gallery", callback = "{% gallery %}\n{% endgallery %}" },
    { enable = true, type = "snippet", icon = "📚", hint = "插入albums专辑容器标签", keyword = "albums", callback = "{% albums [group_id] %}" },
    { enable = true, type = "snippet", icon = "🖼️", hint = "插入posters海报容器标签", keyword = "posters", callback = "{% posters [group_id] %}" },
    { enable = true, type = "snippet", icon = "🖼️", hint = "插入banner横幅容器标签", keyword = "banner", callback = "{% banner [name] bg: %}\n{% endbanner %}" },
    { enable = true, type = "snippet", icon = "📸", hint = "插入swiper轮播容器标签", keyword = "swiper", callback = "{% swiper effect:cards %}\n\n{% endswiper %}" },
    { enable = true, type = "snippet", icon = "👤", hint = "插入ghcard标签", keyword = "ghcard", callback = "{% ghcard [name] %}" },
    { enable = true, type = "snippet", icon = "🌙", hint = "插入ghcard标签（暗黑主题）", keyword = "ghcard-dark", callback = "{% ghcard [name] theme:dark %}" },
    { enable = true, type = "snippet", icon = "🔐", hint = "插入psw密码标签", keyword = "psw", callback = "{% psw 密码 %}" },
    { enable = true, type = "snippet", icon = "🔽", hint = "插入u下划线标签", keyword = "u", callback = "{% u 下划线 %}" },
    { enable = true, type = "snippet", icon = "🔆", hint = "插入emp着重号标签", keyword = "emp", callback = "{% emp 着重号 %}" },
    { enable = true, type = "snippet", icon = "🌊", hint = "插入wavy波浪线标签", keyword = "wavy", callback = "{% wavy 波浪线 %}" },
    { enable = true, type = "snippet", icon = "❌", hint = "插入del删除线标签", keyword = "del", callback = "{% del 删除线 %}" },
    { enable = true, type = "snippet", icon = "🔺", hint = "插入sup上角标标签", keyword = "sup", callback = "{% sup 上角标 %}" },
    { enable = true, type = "snippet", icon = "🔻", hint = "插入sub下角标标签", keyword = "sub", callback = "{% sub 下角标 %}" },
    { enable = true, type = "snippet", icon = "⌨️", hint = "插入kbd键盘样式标签", keyword = "kbd", callback = "{% kbd ⌘ %}" }
]
```

{% note Tips 如有需要，可自行调整顺序 color:yellow %}

## 效果

{% image https://onep.hzchu.top/mount/pic/myself/2024/05/66331f9949059.gif %}

{% image https://onep.hzchu.top/mount/pic/myself/2024/05/66331fa8bd7a7.gif %}



## 更进一步

`Typora Plugin`远不止于此，~~但我不会了~~，研究下先，试试看能否实现以下功能{% emoji blobcat blobcatcoffee %}：

{% checkbox 实时渲染Stellar自有标签 %}

{% checkbox symbol:plus color:green checked:true 表情标签支持直接从列表里选择输入 %}

进度：

{% timeline %}

<!-- node 完成表情面板 -->

![](https://onep.hzchu.top/mount/pic/myself/2024/05/66358cab33787.gif)

{% endtimeline %}
