---
# layout: wiki
wiki: Artalk-doc # 这是项目名
title: FAQ
keywords: Artalk一直转圈
order: 4
updated: 2022-02-12 22:33:00
---

- Q:使用Artalk时一直转圈无法加载

  - A:打开artalk.js，搜索5e3，5e3即5x10³，5000对应5s，把它改为6e4即60s
  
- Q:提交评论卡死

  - A:[Issue #6 · ArtalkJS/Artalk (github.com)](https://github.com/ArtalkJS/Artalk/issues/6)
  
    ![](https://bu.dusays.com/2021/07/29/b577b44674270.png)
  
    > 如果禁用pcntl_fork()函数会导致无法发信及评论完成页面不刷新

- Q:CORS跨域问题？

  - A:检查配置文件中的博客名称中是否有`‘`，如果没有就检查下配置文件有没有哪里有问题，~~如果不是Artalk的问题就去百度~~

- Q:”传送门“跳转到404
  ![image-20210803115954976](https://raw.hzchu.top/thun888/tuku/master/img/image-20210803115954976.png)

  - A:打开/email-tpl/default.html，在第6行{{reply_link}}前加上自己的博客链接
  
    ![image-20210803120135574](https://raw.hzchu.top/thun888/tuku/master/img/image-20210803120135574.png)



（内容待补充）

