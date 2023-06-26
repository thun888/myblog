---
layout: wiki
wiki: fcloud
title: 实用命令
order: 6
updated: 2023-05-01 14:01:32
---

### Essential Commands

**传送相关**

1.玩家间tp

- `/tpa <目标玩家>` ：请求传送到xxx玩家
- `/tpahere <目标玩家>`：请求玩家传送到你这儿
- `/tpaccept <目标玩家>`：接受传送请求
- `/tpdeny <目标玩家>`：拒绝传送请求

2.与家相关（/home)

- `/home set <名称>`：设置家
- `/home list`：显示所有已保存位置的家
- `/home tp <名称>`：传送至家（注：如果只设置了一个家，可以不写家的名称这个参数）
- `/home delete <名称>`：删除家

3./spawn类

> 与Carpet重复，暂不使用

- `/spawn set`：设置传送点（只能设置一个）
- ~~`/spawn`：传送至设置的传送点~~

4.其他

- `/back`：返回传送前的位置（可用于传送回死亡位置）

**其他**

- ~~`/fly` 开关飞行模式~~
- `/workbench`：打开工作台(类似于随身工作台)
- `/enderchest`：打开自己的未影箱
- `/wastebin` 打开垃圾桶

### Dynmap

> 详细参阅[命令 ·webbukkit/dynmap Wiki (github.com)](https://github.com/webbukkit/dynmap/wiki/Commands)
>

**隐藏和显示玩家**

- `/dynmap hide`：在地图上隐藏自己。
- `/dynmap show` ：在地图上显示自己。

**标记**

- `/dmarker add <labelname> icon:<icon> set:<set-id>`：在玩家的当前位置添加一个新标记，具有`标签名字`，`（可选）图标`，`（可选）标记集`参数
- `/dmarker update <label> icon:<newicon> newlabel:<newlabel>`：更新与给定标签匹配的第一个标记的图标或标签

- `/dmarker delete <labelname>`：删除标记
- `/dmarker listsets`：列出所有标记

 {% folding 附录 %}

| anchor                                                       | bank                                                         | basket                                                       | bed                                                          | beer                                                         | bighouse                                                     | blueflag                                                     | bomb                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://onep.hzchu.top/mount/pic/dynmap_markers/anchor.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/bank.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/basket.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/bed.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/beer.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/bighouse.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/blueflag.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/bomb.png) |
| bookshelf                                                    | bricks                                                       | bronzemedal                                                  | bronzestar                                                   | building                                                     | cake                                                         | camera                                                       | cart                                                         |
| ![](https://onep.hzchu.top/mount/pic/dynmap_markers/bookshelf.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/bricks.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/bronzemedal.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/bronzestar.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/building.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/cake.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/camera.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/cart.png) |
| caution                                                      | chest                                                        | church                                                       | coins                                                        | comment                                                      | compass                                                      | construction                                                 | cross                                                        |
| ![](https://onep.hzchu.top/mount/pic/dynmap_markers/caution.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/chest.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/church.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/coins.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/comment.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/compass.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/construction.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/cross.png) |
| cup                                                          | cutlery                                                      | default                                                      | diamond                                                      | dog                                                          | door                                                         | down                                                         | drink                                                        |
| ![](https://onep.hzchu.top/mount/pic/dynmap_markers/cup.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/cutlery.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/default.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/diamond.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/dog.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/door.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/down.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/drink.png) |
| exclamation                                                  | factory                                                      | fire                                                         | flower                                                       | gear                                                         | goldmedal                                                    | goldstar                                                     | greenflag                                                    |
| ![](https://onep.hzchu.top/mount/pic/dynmap_markers/exclamation.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/factory.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/fire.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/flower.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/gear.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/goldmedal.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/goldstar.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/greenflag.png) |
| hammer                                                       | heart                                                        | house                                                        | key                                                          | king                                                         | left                                                         | lightbulb                                                    | lighthouse                                                   |
| ![](https://onep.hzchu.top/mount/pic/dynmap_markers/hammer.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/heart.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/house.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/key.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/king.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/left.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/lightbulb.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/lighthouse.png) |
| lock                                                         | minecart                                                     | offlineuser                                                  | orangeflag                                                   | pin                                                          | pinkflag                                                     | pirateflag                                                   | pointdown                                                    |
| ![](https://onep.hzchu.top/mount/pic/dynmap_markers/lock.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/minecart.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/offlineuser.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/orangeflag.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/pin.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/pinkflag.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/pirateflag.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/pointdown.png) |
| pointleft                                                    | pointright                                                   | pointup                                                      | portal                                                       | purpleflag                                                   | queen                                                        | redflag                                                      | right                                                        |
| ![](https://onep.hzchu.top/mount/pic/dynmap_markers/pointleft.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/pointright.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/pointup.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/portal.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/purpleflag.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/queen.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/redflag.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/right.png) |
| ruby                                                         | scales                                                       | shield                                                       | sign                                                         | silvermedal                                                  | silverstar                                                   | skull                                                        | star                                                         |
| ![](https://onep.hzchu.top/mount/pic/dynmap_markers/ruby.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/scales.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/shield.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/sign.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/silvermedal.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/silverstar.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/skull.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/star.png) |
| sun                                                          | temple                                                       | theater                                                      | tornado                                                      | tower                                                        | tree                                                         | truck                                                        | up                                                           |
| ![](https://onep.hzchu.top/mount/pic/dynmap_markers/sun.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/temple.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/theater.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/tornado.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/tower.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/tree.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/truck.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/up.png)  |
| walk                                                         | warning                                                      | world                                                        | wrench                                                       | yellowflag                                                   |                                                              |                                                              |                                                              |
| ![](https://onep.hzchu.top/mount/pic/dynmap_markers/walk.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/warning.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/world.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/wrench.png) | ![](https://onep.hzchu.top/mount/pic/dynmap_markers/yellowflag.png) |                                                              |                                                              |                                                              |

{% endfolding %}

### Carpet

**生物检测**

1.检测能否生成生物

```
/spawn list <pos>
```

该命令将检测`<pos>`所指定的坐标是否能够生成生物，并在聊天栏中输出结果。每一行将显示生物类别、名称、刷怪权重、刷怪尝试次数、能否刷怪、空间是否足够、以及刷怪概率。

![1682926112618.webp](https://onep.hzchu.top/mount/pic/2023/05/01/644f6a22a95a6.webp)

2.检查总生物量

```
/spawn entities <type> 
```

该命令会检查各类生物的数量以及它们是否达到刷怪上限。

未指定`<type>`时，将显示每个生物分类的刷怪上限以及已有生物数量。

指定`<type>`时，将显示该分类下所有占用刷怪上限的生物及其位置。若有权限，点击聊天栏中的坐标会把你传送到那个生物的位置。

`<type>`可以是ambient（环境生物，即蝙蝠）、axolotls（美西螈）、creature（动物）、misc（其他不占生物上限的生物）、monster（怪物）、underground_water_creature（洞穴水生生物）、water_ambient（水生环境生物，即鱼）、water_creature（水生动物，即海豚和鱿鱼）。

![1682926630428.webp](https://onep.hzchu.top/mount/pic/2023/05/01/644f6c26e2651.webp)

```
/spawn mobcaps <dimension>
```

作用与/spawn entities类似，但可以通过参数`<dimension>`指定要检查的维度。

![1682926663964.webp](https://onep.hzchu.top/mount/pic/2023/05/01/644f6c47e1300.webp)

**速度控制**

> 若不合理使用会被封禁

```
/tick warp <ticks> <tail comman>
```

该命令可以让游戏在`<ticks>`游戏刻内以最高速度运行，实现跳转到一定时间后的效果。例如，/tick warp 72000 可以让游戏快速运行到1小时之后。

可以在命令末尾添加`<tail command>`命令，这样carpet会在游戏快速运行结束后执行它。例如，/tick warp 72000 say done 可以让游戏快速运行到1小时之后，随后执行命令/say done。

在游戏加速运行时，不可以重复执行/tick warp命令。但游戏加速运行时执行 /tick warp 或 /tick warp 0 可以停止加速，让游戏恢复正常速度。

```
/tick freeze
```

暂停游戏

```
/tick step <ticks>
```

在游戏暂停时执行此命令，可以使游戏正常运行`<ticks>`个游戏刻后再次暂停。在游戏正常运行时执行此命令没有效果。

```
/tick superHot
```

该命令会让游戏在玩家移动时运行，在玩家静止时暂停。

```
/tick rate <rate>
```

该指令会直接修改游戏的TPS（每秒游戏刻数），从而调整游戏的速度，默认的TPS为20。

**资源监视**

```
/tick health <ticks>
```

该指令可以根据执行后一段时间内的游戏运行状况，汇总每游戏刻每个维度中各类东西平均占用的计算时长，包括网络、自动存档、游戏刻外任务、刷怪、区块加载、区块卸载、方块更新、实体运算、方块实体运算、村民与袭击、环境、其他这几项。

默认分析100个游戏刻（5秒）的游戏运行状况，也可以通过`<ticks>`参数自定义，但不得低于20。

```
/tick entities <ticks>
```

该指令只会汇总执行后一段时间内的游戏内实体和方块实体的运算时长，并列出时长占用最高的10类实体。

默认分析100个游戏刻（5秒）的游戏运行状况，也可以通过`<ticks>`参数自定义，但不得低于20。

**生成假玩家**

参阅[/player - Carpet - MC百科](https://www.mcmod.cn/item/670880.html)



> 该页面引用[MC百科](https://www.mcmod.cn/)
>
> mod有很多命令 ，这里只整理对普通玩家有用的部分s
