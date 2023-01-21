---
title: hexo更新pages出错应急方法
date: 2020-12-25 18:53:16
updated: 2020-12-25 18:53:16
layout: wiki
wiki: 杂物间
order: 10
---

- 背景

  一天，我像往常一样更新，但却哪里不对劲

![image-20201225185519095](https://raw.hzchu.top/thun888/tuku/master/img/image-20201225185519095.png)

输过账号密码后就闪退了，但还是有办法的

- The way

  先装上GitHub Desktop

  ![image-20201225185853225](https://raw.hzchu.top/thun888/tuku/master/img/image-20201225185853225.png)

把仓库fork到本地

![image-20201225185950616](https://raw.hzchu.top/thun888/tuku/master/img/image-20201225185950616.png)

记下这个文件夹的名字和路径后删了它
来到你hexo部署的文件夹里找到`.deploy_git`文件夹

复制路径



![image-20201225190647497](https://raw.hzchu.top/thun888/tuku/master/img/image-20201225190647497.png)

打开cmd

输入`mklink /d "先前fork下来的仓库的路径" "刚刚hexo部署的路径"`

eg：`mklink /d "f:/thun888.github.io" "G:\BLOG\.deploy_git"`

![image-20201225191032161](https://raw.hzchu.top/thun888/tuku/master/img/image-20201225191032334.png)

这时候再打开GitHub Desktop同步文件即可



![image-20201225191125949](https://raw.hzchu.top/thun888/tuku/master/img/image-20201225191125949.png)
