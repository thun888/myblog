---
layout: wiki
wiki: fcloud
title: 疑难解答
order: 8
updated: 2023-05-01 13:55:32
---

> 有更多疑问，欢迎反馈

1.无法连接到服务器

​	eg:未知的主机，连接重置等

​	A：由于动态公网的问题，且在连接量过大时可能会被强行下线并更换IP，一般情况下需要5~7min。您可以关注[服务器状态](https://mcweb.hzchu.top/status/)

2.在绑定成功后仍显示无白名单（You are not white-listed on this server!）

​	A：问题在于你的id存在对应的正版用户，或你的正版账号登录出现问题，以离线的方式进入服务器，两者的UUID不相同。

例如在访问`http://tools.glowingmines.eu/convertor/nick/lrx`时，返回了

```json
{"nick":"Lrx","uuid":"b67b9cdfba2740869f53150b96f01a33","splitteduuid":"b67b9cdf-ba27-4086-9f53-150b96f01a33","offlineuuid":"bf2bd774012d3c30a1de15b487ce700e","offlinesplitteduuid":"bf2bd774-012d-3c30-a1de-15b487ce700e","haspaid":"true"}
```

可以看到同时存在`uuid`和`offlineuuid`，默认情况下，白名单会优先使用正版的uuid，从而无法进入游戏。

> 在群内发送“**离线账号修复**”可解决

