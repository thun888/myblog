---
# layout: wiki
wiki: fcloud
title: 数据安全
order: 10
updated: 2023-05-01 13:55:32
---


我认为可以分为客户端和服务端两方面来阐述

First，对与玩家而言，可以接触到的无非3个方面：`游戏，Q群，网站`

在游戏内，我们使用Authme插件，保障玩家的账号安全，且密码均加密存储

Q群，机器人的一言一行均以QQ号作为唯一依据，他人（即便是管理员）无法代替您管理自己的账号

> 管理员不会主动索取您的隐私数据，请不要无意泄露

网站，管理部分与机器人挂钩，设置了严格的token机制。~~（尽管目前前端没上线）~~



Second，对与服务端而言，数据安全不仅包括`不被泄露`，还有`丢失`。

在内部api调用流程中，也有复杂的控制方法，不展开叙述。

至于数据丢失，在一次硬件故障+人为失误中，我们丢失了部分关键存档数据和所有配置文件，一度暂停整个项目。目前我们使用syncthing实现数据实时同步，以及每月的onedrive的数据存档。实现了两地三中心的容灾架构，~~数据安全得很~~

~~好，吹完水了~~
