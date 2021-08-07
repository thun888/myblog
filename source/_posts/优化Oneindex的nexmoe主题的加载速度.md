---
title: 优化Oneindex的nexmoe主题的加载速度
date: 2021-06-10 14:37:59
tags: [oneindex,web]
description: 在一些带宽小的机子上部署Oneindex又用nexmoe主题，在学校开来给同学下电影开了十几秒愣是没加载出来
updated: 2021-06-10 14:37:59
---



在一些带宽小的机子上部署Oneindex又用nexmoe主题，就算套了cdn也慢（深有体会）

在学校开来给同学下电影开了十几秒愣是没加载出来<img src="https://cdn.jsdelivr.net/gh/thun888/jian@master/coolapk_emotion_42_diaoxie.png" style="zoom:25%;" />

#### 方法

定位到网址目录下的/view/nexmoe

![image-20210610144610288](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/20210610144611.png)

将框选的（第7行的第11行）

进行替换

![image-20210610145355484](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/20210610145355.png)

第7行

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/mdui@1.0.1/dist/css/mdui.min.css">
```

第11行

```html
<script src="//cdn.jsdelivr.net/gh/thun888/tuku@master/img/mdui.min.js"></script>
```

like this 

![image-20210610145809885](https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/20210610145809.png)

#### 结果

修改前

<img src="https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/20210610150256.png" alt="image-20210610150255933" style="zoom:67%;" />

修改后

<img src="https://cdn.jsdelivr.net/gh/thun888/tuku@master/img/20210610150015.png" alt="image-20210610150015253" style="zoom:67%;" />

