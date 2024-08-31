---
title: 为Stellar主题添加HPP的"说说"功能
date: 2021-07-15 20:09:32
tags: Blog
cover: https://blog.hzchu.top/img/post/7392db97e9d8cea0eb0a6a60656695b5.png
description: HPP,即`HexoPlusPlus`,其中自带了"说说"功能，但我正在用的Stellar不支持，那就自己加吧
updated: 2021-07-15 20:09:32
last: 2021-07-15 20:09:32
---

HPP,即`HexoPlusPlus`,其中自带了"说说"功能，但我正在用的Stellar不支持，那就自己加吧

> 与某个页面合并了

#### 选址

纵观全局，我看到了左侧栏的"文章"，加了进去，却成了这个鸟样子（橙框为我手动框出来的）

![image-20210715185701431](https://raw.hzchu.top/thun888/tuku/master/img/image-20210715185701431.png)

再品，放这里不就好了😎

![image-20210715185830748](https://raw.hzchu.top/thun888/tuku/master/img/image-20210715185830748.png)

#### 开工

因为主题在不同语言时有不同显示，所以先从语言文件下手

![image-20210715190020030](https://raw.hzchu.top/thun888/tuku/master/img/image-20210715190020030.png)

找到"归档"对应的是`archives`，再用`everything`在主题文件中搜索

![image-20210715190202563](https://raw.hzchu.top/thun888/tuku/master/img/image-20210715190202563.png)

前4个是语言文件，第5个是生成归档页面的，那第6个就有很大嫌疑了，打开看看

![image-20210715190356447](https://raw.hzchu.top/thun888/tuku/master/img/image-20210715190356447.png)

啊没错，就是它，而且类名也对的上（当初直接查类名更快啊＞﹏＜）

格式就像这样

```
    <% if (site.posts && site.posts.length > 0) { %>
      <% if (is_archive()) { %>
        <a class='active' href='<%- url_for(config.archive_dir) %>'><%- __('btn.archives') %></a>
      <% } else { %>
        <a href='<%- url_for(config.archive_dir) %>'><%- __('btn.archives') %></a>
      <% } %>
    <% } %>
```

添加上去后把所有`archives`给替换成了`htalk`,但是一运行那报错和放鞭炮没什么不同(。﹏。)

![image-20210715203736270](https://raw.hzchu.top/thun888/tuku/master/img/image-20210715203736270.png)

从代码上说，这句是判断当前是什么页面的，我翻了亿下没找到它的定义在哪个文件，就先改回posts（只是影响了按钮底色，问题不大(❁´◡\`❁)）

在`\themes\stellar\layout`下新建`htalk.ejs`,从隔壁`tag.ejs`借鉴点代码过来，除了site.tags.length其他都改为htalk

![image-20210715204525167](https://raw.hzchu.top/thun888/tuku/master/img/image-20210715204525167.png)

可以看出第11行到21行都是页面中可以显示出来的部分\~\~（不太严谨的样子\~\~

把HPP文档中的"引入部分"插到里面

![image-20210715205153957](https://raw.hzchu.top/thun888/tuku/master/img/image-20210715205153957.png)

¯\_(ツ)\_/¯

![image-20210715204930656](https://raw.hzchu.top/thun888/tuku/master/img/image-20210715204930656.png)

加个题目

```html
<h1 class='list-title h3'>说说（瞎扯）</h1>
```

![image-20210715205203844](https://raw.hzchu.top/thun888/tuku/master/img/image-20210715205203844.png)

------

承 接 前 文，看着"说说"按钮选中时没有底色还是有点不爽，回到前面

把判定部分~~都删了~~删到只剩下一个基础的判定（虽然没用但删了就报错），给它加上`id="nav-bb"`的属性

![image-20210715210320086](https://raw.hzchu.top/thun888/tuku/master/img/image-20210715210320086.png)

再在htalk.ejs中加上

```html
  <script>document.getElementById('nav-bb').className='active'</script>
```

( •̀ ω •́ )✧

![image-20210715205705037](https://raw.hzchu.top/thun888/tuku/master/img/image-20210715205705037.png)

#### 最终代码

![image-20210715205828548](https://raw.hzchu.top/thun888/tuku/master/img/image-20210715205828548.png)

!!!  warning
1\.记得使用`hexo new page htalk`并在`layout`中改为`htalk`<br>
2\.在博客根目录下的`_config.yml`中要指明`htalk_dir: htalk`