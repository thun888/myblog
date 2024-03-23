---
# layout: wiki
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

4.传送

- `/back`：返回传送前的位置（可用于传送回死亡位置）

**其他**

- ~~`/fly` 开关飞行模式~~
- `/workbench`：打开工作台(类似于随身工作台)
- `/enderchest`：打开自己的未影箱
- `/wastebin` 打开垃圾桶

### HTM（箱子锁）

1. 检查：

- `/htm flag`：运行命令后，敲击箱子检查容器是否公开

2. 设置：

- `/htm set PUBLIC`：运行命令后，敲击选择把容器设为公开。
- `/htm set PRIVATE`：运行命令后，敲击选择把容器设为私有，私有状态下只有你授权的玩家可以打开容器。
- `/htm set KEY`：运行命令后，拿着任意物品敲击容器，其他人打开容器时需使用敲击时的物品作为钥匙才能打开容器。

3. 信任和取消信任：

- `/htm trust 玩家名 global`：允许玩家打开你的容器。
- `/htm untrust 玩家名 global`：取消玩家打开你容器的权限。


4. 移除保护：

- `/htm remove`：移除该容器的保护。

5. 转移权限：

- `/htm transfer 玩家名`：把敲击容器的保护权转移给其他玩家，转移后该容器就是别人的了，你将无法打开和破坏该容器。

6. 持续模式：

- `/htm persist`：打开或关闭持续模式，打开后输入指令，即可一次敲击多个容器执行这个指令。

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

![1711180191392.webp](https://onep.hzchu.top/mount/pic/2024/03/23/65fe89a1aaffe.webp)

### Carpet

**生物检测**

1.检测能否生成生物

```
/spawn list <pos>
```

该命令将检测`<pos>`所指定的坐标是否能够生成生物，并在聊天栏中输出结果。每一行将显示生物类别、名称、刷怪权重、刷怪尝试次数、能否刷怪、空间是否足够、以及刷怪概率。

![1682926112618.webp](https://onep.hzchu.top/img/2023/05/01/644f6a22a95a6.webp)

2.检查总生物量

```
/spawn entities <type> 
```

该命令会检查各类生物的数量以及它们是否达到刷怪上限。

未指定`<type>`时，将显示每个生物分类的刷怪上限以及已有生物数量。

指定`<type>`时，将显示该分类下所有占用刷怪上限的生物及其位置。若有权限，点击聊天栏中的坐标会把你传送到那个生物的位置。

`<type>`可以是ambient（环境生物，即蝙蝠）、axolotls（美西螈）、creature（动物）、misc（其他不占生物上限的生物）、monster（怪物）、underground_water_creature（洞穴水生生物）、water_ambient（水生环境生物，即鱼）、water_creature（水生动物，即海豚和鱿鱼）。

![1682926630428.webp](https://onep.hzchu.top/img/2023/05/01/644f6c26e2651.webp)

```
/spawn mobcaps <dimension>
```

作用与/spawn entities类似，但可以通过参数`<dimension>`指定要检查的维度。

![1682926663964.webp](https://onep.hzchu.top/img/2023/05/01/644f6c47e1300.webp)

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
> mod有很多命令 ，这里只整理对普通玩家有用的部分
