---
title: 使用Homebox实现家用物品管理
date: 2024-02-12 22:41:07
updated: 2024-02-17 9:30:07
tags: [Homebox,家用]
cover: https://onep.hzchu.top/mount/pic/2024/02/17/65d0d5665e055.webp
banner: https://onep.hzchu.top/mount/pic/2024/02/17/65d0d5665e055.webp
description: 唉，家里太乱了，该整理一下了
references:
 - '[Home - Homebox (hay-kot.github.io)](https://hay-kot.github.io/homebox/)'
---

## 前言

很久之前，家里面有三把电动螺丝刀，然而前些阵子我想找一把来用都得找半天……  {% emoji blobcat blobcatcaged %}

假期回家，桌面太乱了一直被我妈批斗…… {% emoji blobcat blobcatflip %}

思来想去这样也不行啊，上网找一下，发现了「[Homebox](https://github.com/hay-kot/homebox)」这个程序，开始干活吧。

## 安装

仓库中也有二进制文件，我这里直接用Docker部署

```bash
# Run the image
$ docker run -d \
  --name homebox \
  --restart unless-stopped \
  --publish 3100:7745 \
  --env TZ=Europe/Bucharest \
  --volume /path/to/data/folder/:/data \
  ghcr.io/hay-kot/homebox:latest
```

或用`Docker-Compose`	

```yaml
version: "3.4"

services:
  homebox:
    image: ghcr.io/hay-kot/homebox:latest
#   image: ghcr.io/hay-kot/homebox:latest-rootless
    container_name: homebox
    restart: always
    environment:
    - HBOX_LOG_LEVEL=info
    - HBOX_LOG_FORMAT=text
    - HBOX_WEB_MAX_UPLOAD_SIZE=10
    volumes:
      - homebox-data:/data/
    ports:
      - 3100:7745

volumes:
   homebox-data:
     driver: local
```

因为还有可能给家里人用，干脆就nginx一条龙服务安排上，搭配家里面ADG上dns重写，家里人直接访问`wms.hzchu.top`就ok了

{% grid %}

 <!-- cell -->

![1708142670501.webp](https://onep.hzchu.top/mount/pic/2024/02/17/65d0304ed4e06.webp)

 <!-- cell -->

![1708145094118.webp](https://onep.hzchu.top/mount/pic/2024/02/17/65d039c6a395f.webp)

{% endgrid %}

> 部署完成进去后注册一个账号登录即可

## HomeBox简单介绍

知道它的功能才好干活嘛

相比于「GreaterWMS」，「ModernWMS」等专门用于仓库管理的软件，「[Homebox](https://github.com/hay-kot/homebox)」主打一个家用，因此它的操作也简单不少，在进去后可以看到这样的页面

![1708159306854.webp](https://onep.hzchu.top/mount/pic/2024/02/17/65d0714ba9aca.webp)

### Create--创建

在点开那个{% mark 抹茶绿 color:green %}的按钮后，可以看到里面包括 `Item/Asset`,`Location`,`Label` 三个选项

{% grid %}
<!-- cell -->

**Item/Asset：**`新建物品`，即存入物品相关信息到程序里，里面包括以下填充项

> 在填写完成后，若只新建单个物品，则会跳转至对应物品详情，可以做详细修改

<!-- cell -->

![1708161509640.webp](https://onep.hzchu.top/mount/pic/2024/02/17/65d079ec36954.webp)

{% endgrid %}

{% grid %}
<!-- cell -->

**Location：** `新建位置`，即存入某个物品存放处（如书桌）的相关信息到程序里，里面包括以下填充项

在“父位置”中，可以设置其它已新建的”位置“，表示该位置属于某位置，比如这样
![1708162255778.webp](https://onep.hzchu.top/mount/pic/2024/02/17/65d07cd0526a0.webp)

<!-- cell -->

![1708162163736.webp](https://onep.hzchu.top/mount/pic/2024/02/17/65d07c7458c53.webp)

{% endgrid %}

{% grid %}
<!-- cell -->

**Label：**`新建类别`，即存入某个物品类别（如电子产品）的相关信息到程序里，里面包括以下填充项

<!-- cell -->

![1708162409464.webp](https://onep.hzchu.top/mount/pic/2024/02/17/65d07d6a352db.webp)

{% endgrid %}

### Home--主页

在加载完成时便是主页了，图片上面有，主要显示了`物品总金额`，`物品、位置、类别总数`，`近期添加的5个物品`，`位置、类别列表`

### Locations--位置（树）

{% grid %}
<!-- cell -->

根据创建物品/位置时的父位置，程序会构建出一个层级树，简明地展现出它们之间的从属关系

<!-- cell -->

![1708165497793.webp](https://onep.hzchu.top/mount/pic/2024/02/17/65d0897a5f3d3.webp)

{% endgrid %}

### Search--搜索

顾名思义

### Profile--用户设置

直接上图片

{% swiper %}

![1708167438646.webp](https://onep.hzchu.top/mount/pic/2024/02/17/65d0910f6ac67.webp)

![1708167851852.webp](https://onep.hzchu.top/mount/pic/2024/02/17/65d092acdc522.webp)

{% endswiper %}

### Tools--工具

包括`标签生成器`，`生成BOM表`，导`入导出CSV`及一些`修复工具`

我主要用的是`标签生成器`，可以直接生成二维码贴在物品表面

{% grid %}

 <!-- cell -->

![1708182617875.webp](https://onep.hzchu.top/mount/pic/2024/02/17/65d0cc5ba2019.webp)

 <!-- cell -->

![1708168353440.webp](https://onep.hzchu.top/mount/pic/2024/02/17/65d094a2d831a.webp)

{% endgrid %}

> 调好参数右键打印即可

### 物品详情

很详细，但我除了数量和描述都用不上

{% swiper %}
![1708185435353.webp](https://onep.hzchu.top/mount/pic/2024/02/17/65d0d75c667cc.webp)
![1708185441662.webp](https://onep.hzchu.top/mount/pic/2024/02/17/65d0d762bef44.webp)
![1708185450333.webp](https://onep.hzchu.top/mount/pic/2024/02/17/65d0d76b8cc90.webp)
{% endswiper %}

> 存在页面切换bug，刷新即可解决

## 基本逻辑

 为了能准确快速地找到对应存放处，我定了一套基本原则：

1. 将几个房间用A/B...大写英文字母命名
2. 存放处使用所属房间加数字命名
3. 以房间门为起点，向右统计入库
4. 对应垂直堆叠的存放处，从上往下（优先）

对应物品本体：

1. 对与中等大小物品，使用上文提到的二维码标签，
2. 小物品用一维码标签，
3. 再小就不贴标签，改用荧光笔加胶布或直接跳过
4. 整理时从俯视角度，按入库顺序从左往右，从上到下排列（可选）
5. 对已有唯一标识码（sn码）的物品直接使用

程序内列了四个类别（感觉除了日后忘了物品名称关键词，用来筛选物品外其实没啥用）：大物件，小物件，收纳盒，电子产品

## 实际实施

  因为一开始没发现自带的`标签生成器`，所以用了「[E-Label](http://www.yi-label.com/)」来生成一维码，单页85个标签

其中，A/B...表示该物品原属房间

标签内容填入物品描述中

{% link https://pan.hzchu.top/s/q8SJ 相关文件 desc:true %}

> 还可以把文字缩掉，但考虑到一维码水平方向易被损坏还是留着吧

{% grid %}

 <!-- cell -->

![1708179344734.webp](https://onep.hzchu.top/mount/pic/2024/02/17/65d0bf9185724.webp)

 <!-- cell -->

![1708180607272.webp](https://onep.hzchu.top/mount/pic/2024/02/17/65d0c4802d0ff.webp)

{% endgrid %}

{% grid %}

 <!-- cell -->

打印完标签贴到物品上，我这里先用胶布凑合以下，注意要同时覆盖字符及一部分条形码（如图片荧光标准所示）

> 注：图示条形码为第一版

 <!-- cell -->

![1708179885315.webp](https://onep.hzchu.top/mount/pic/2024/02/17/65d0c2b702e65.webp)

{% endgrid %}

{% grid %}

 <!-- cell -->

不过还是太麻烦，所以我打算用这种带有不干胶的纸替代，不过因为春节还没到货{% emoji blobcat blobcatcry %}

 <!-- cell -->

![1708180983135.webp](https://onep.hzchu.top/mount/pic/2024/02/17/65d0c6028e723.webp)

{% endgrid %}


## 总结

​	那么，工期呢？要对小到一颗纽扣电池进行统计本身就不是一件快事，整理一个小时才勉强整理完一张桌子，想全部整理完必然是一个大工程，慢慢来。但全部整理一次确实大有益处，比如我就找到了8年前在某购物广场办的会员卡（前一天才因为没有实体会员卡不给兑积分{% emoji blobcat blobcatangry %}，这波雪中送炭），因为中途方案改变，要等这个打印纸，就先搁置下来了，~~才不是因为帕鲁太好玩了~~

![导弹喵](https://onep.hzchu.top/mount/pic/2024/02/17/65d0cbae30c5d.webp)
