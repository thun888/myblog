---
title: GitHub打不开的临时方法
date: 2021-04-05 14:03:30
updated: 2021-04-05 14:03:30
layout: wiki
wiki: 杂物间
order: 11
---

#### 起因

先看看github在国内的访问情况

<img src="https://raw.hzchu.top/thun888/tuku/master/img/image-20210405140926865.png" alt="image-20210405140926865" style="zoom:80%;" />

挺好的，但我有时就死活打不开/加载不出来/慢（今年开始的，估计是墙加高了），过了几个小时又可以了，甚烦也

<img src="https://raw.hzchu.top/thun888/tuku/master/img/image-20210405141149140.png" alt="image-20210405141149140" style="zoom:67%;" />

![image-20210405141843803](https://raw.hzchu.top/thun888/tuku/master/img/image-20210405141843803.png)

而平时开飞机也不会一直开着，用镜像源替换也很麻烦，故有此计

#### How

因为我平时只是在Github查东西等不需要账号登录的操作，所以把发往github.com的请求全部重定向到hub.fastgit.org这个镜像源就ok了

先安装[Header Editor](https://share.hzchu.top/%E8%BD%AF%E4%BB%B6/HeaderEditor.zip)下载解压安装到浏览器就好

![image-20210405142037440](https://raw.hzchu.top/thun888/tuku/master/img/image-20210405142037440.png)

点到上面的‘导出于导入’，再在‘下载规则’一栏中1填

```url
https://share.hzchu.top/%E8%BD%AF%E4%BB%B6/github%E9%87%8D%E5%AE%9A%E5%90%91.json
```

点右边的下载箭头，再点下面的保存就好

![image-20210405142528347](https://raw.hzchu.top/thun888/tuku/master/img/image-20210405142528347.png)

#### 结果

![image-20210405142707436](https://raw.hzchu.top/thun888/tuku/master/img/image-20210405142707436.png)

（当然，别用它来登账号）