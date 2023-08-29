---
title: Mirouterui简要部署指南
date: 2023-08-28 15:25:56
tags: Mirouterui
cover: https://onep.hzchu.top/mount/pic/2023/08/24/64e705d20ab65.webp
description: 基于小米路由器API的展示面板
updated: 2023-08-28 15:25:56
---

## 前言

该项目是由于我厌倦了管理后台和APP的卡顿而写的，因此项目开发之初就**不考虑集成在管理后台**，做成一个**独立**的页面，并实现跨平台。

并且，调用的都是小米路由器**独有**的api，与Openwrt**完全不兼容**，我手头也没设备，~~还没时间~~，**不会考虑成为Openwrt的插件**。

用于测试的只有r1d和r4a，对于别的型号的支持，还得看大家的反馈才能完善。

感谢`YSC6666，黑衣剑士z，Super丶聪`(@bilibili)的帮助

代码开源在 https://github.com/Mirouterui/ ，欢迎 star&提prヾ(≧▽≦*)o

{% ghcard Mirouterui/mirouter-ui theme:white %}

## 面板展示

{% tabs active:1 align:center %}
<!-- tab 首页 -->
![首页](https://onep.hzchu.top/mount/pic/2023/08/29/64eda7065545f.webp)
<!-- tab 路由器详情 -->
![路由器详情](https://onep.hzchu.top/mount/pic/2023/08/29/64eda5d44eefa.webp)
<!-- tab 设备列表 -->
![设备列表](https://onep.hzchu.top/mount/pic/2023/08/29/64eda5d0ed93e.webp)
<!-- tab 设备详情 -->
![设备详情](https://onep.hzchu.top/mount/pic/2023/08/29/64eda5d396d7e.webp)
<!-- tab 温度显示（仅支持部分设备） -->
![温度显示](https://onep.hzchu.top/mount/pic/2023/08/29/64eda75443b5e.webp)

{% endtabs %}

## 部署

> 小米路由器是基于Openwrt的，故下文Openwrt仅指小米路由器
> 附：
> ​![](https://onep.hzchu.top/mount/pic/2023/08/28/64ec662280acf.webp)

{% tabs active:1 align:center %}
<!-- tab Windows -->


从[Release](https://github.com/thun888/mirouter-ui/releases/)下载对应的架构的发行版

> 64位：amd64，32位：i386，arm: arm
>
> 可访问[镜像站](https://mrui-api.hzchu.top/down/)以获取更快的速度

然后运行，程序会自动下载配置文件，在其中填上密码即可。配置文件中其它条目在下面

![](https://onep.hzchu.top/mount/pic/2023/08/29/64ed9a2394601.gif)



再次运行，等待下载页面静态文件，若能支持获取token即为成功

![](https://onep.hzchu.top/mount/pic/2023/08/29/64ed9a23945b0.gif)

> 部分设备出现无法运行&无法找到配置文件可使用“不使用upx压缩”版本（即带`_noupx`后缀的版本）
>

<!-- tab Openwrt -->

从[Release](https://github.com/thun888/mirouter-ui/releases/)复制对应的架构的发行版的下载链接

> 使用`uname –a`查看架构（如果为`armv7l`，考虑使用`armv5`版本）

![R1D](https://onep.hzchu.top/mount/pic/2023/08/29/64ed9b78dbe91.webp)

运行：

> curl –L yourlink –o mirouterui
>
> chmod 777 mirouterui
>
> ./mirouterui

程序会自动下载配置文件，在其中填上密码即可。配置文件中其它条目在下面。.

再次运行，等待下载页面静态文件

若能支持获取token即为成功

**常见问题：**

1. 无法下载配置文件，~~路由器太老了~~

![](https://onep.hzchu.top/mount/pic/2023/08/29/64ed9e59288c3.webp)

> 使用 `curl https://mruiapi.hzchu.top/downloadconfig -o config.json` 手动下载

2. 无法下载配置文件

从[Mirouterui/static: 前端静态文件 (github.com)](https://github.com/Mirouterui/static)下载，并解压到`static`目录

![](https://onep.hzchu.top/mount/pic/2023/08/29/64eda04788f04.webp)

<!-- tab Docker -->

命令：

> docker run -d --restart=always --name=mrui -p 6789:6789 -v $(pwd):/app/data thun888/mirouter-ui

新建一个文件夹，并在该文件夹里运行上述命令，程序会在该文件夹里生成配置文件，修改即可

修改完成后重启该容器（或等待自动重启）

{% endtabs %}

最后命令窗口中会显示网页的访问端口，使用设备的`ip地址+端口号(6789)`访问面板



### 常见问题

1. 密码正确，但无法登陆：尝试获取自己路由器的key&iv，可参考[视频](https://www.bilibili.com/video/BV1BF411f79J)或使用[自动工具](https://github.com/Mirouterui/MiKVIVator)

2. CPU占用为0： 受api限制，新版路由器无法正常获取，可尝试将其部署在路由器上

3. 温度显示： 目前API模式只支持R1D,R2D,命令模式只支持红米AX6和R1D

4. 设备显示不全： 当设备过多时，首页只会显示当前有网络活动的设备，请进入设备详细列表查看

5. 在线前端无法使用： 受浏览器安全限制，需关闭访问私有ip限制

![Chrome](https://onep.hzchu.top/mount/pic/2023/08/29/64eda267463b1.webp)

![Edge](https://onep.hzchu.top/mount/pic/2023/08/29/64eda26a747a5.webp)



### 配置项

| 配置名     | 默认值                           | 解释                                                         |
| ---------- | -------------------------------- | ------------------------------------------------------------ |
| password   |                                  | 路由器管理后台密码                                           |
| key        | a2ffa5c9be07488bbb04a3a47d3c5f6a | 路由器管理后台key                                            |
| iv         | 64175472480004614961023454661220 | 路由器管理后台iv                                             |
| ip         | 192.168.31.1                     | 路由器IP                                                     |
| tiny       | false                            | 启用后，不再下载静态文件，需搭配[在线前端](http://mrui.hzchu.top:8880/)使用 |
| routerunit | false                            | 启用后，启用部分路由器上运行才能用的功能                     |
| port       | 6789                             | 网页页面端口号                                               |
| debug      | true                             | debug模式，建议在测试正常后关闭                              |

### 后台运行

自行参考：

[Linux命令后台运行_后台运行命令_拉普拉斯妖1228的博客-CSDN博客](https://blog.csdn.net/caesar1228/article/details/118853871)

[windows守护进程工具--nssm详解 - 与f - 博客园 (cnblogs.com)](https://www.cnblogs.com/fps2tao/p/16433588.html)

## Stars~

[![Stars~](https://starchart.cc/mirouterui/mirouter-ui.svg)](https://starchart.cc/mirouterui/mirouter-ui)

## 更新日志
{% timeline api:https://cfproxy.hzchu.top/https://api.github.com/repos/Mirouterui/mirouter-ui/releases?per_page=3 %}{% endtimeline %}