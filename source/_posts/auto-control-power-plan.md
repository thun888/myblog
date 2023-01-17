---
title: Windows下的电源计划自动控制
date: 2023-01-17 19:07:20
tags: Windows
cover: https://onep.thun888.xyz/mount/pic/2023/01/17/63c688a01cf89.webp
updated: 2023-01-17 19:38:20
description: 之前搞了一套E5扔在角落里吃灰，这几天想起来准备当nas用。不过在最高频率下运行功率实在恐怖（140w+），在Windows下限制CPU频率心理有频率最简单的就是电源计划了
---

### 代码部分

之前搞了一套E5扔在角落里吃灰，这几天想起来准备当nas用。不过在最高频率下运行功率实在恐怖（140w+），在Windows下限制CPU频率最简单的就是电源计划了，话不多说{% emoji blobcat ablobcatattentionreverse %}

```python
import subprocess
import psutil
import time

BALANCE='381b4222-f694-41f0-9685-ff5bb260df2e'
HIGH_PERFORMANCE='8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c'
ENERGY_SAVER='a1841308-3541-4fab-bc81-f71556f20b4a'
def change_power_plan(plan):
    subprocess.run(f'powercfg /S {plan}')
    
def get_power_plan():
    output = subprocess.run("powercfg /GETACTIVESCHEME", shell=True, stdout=subprocess.PIPE).stdout.decode("GBK")
    return output.split(" ")[-3]

while True:
    cpu_percent = psutil.cpu_percent(interval=1)
    current_time = time.localtime().tm_hour
    plan = get_power_plan()
    #print(plan)
    if current_time >= 23 or current_time <= 6:
        if plan != ENERGY_SAVER:
            print(current_time+"：切换到节能模式")
            change_power_plan(ENERGY_SAVER)
    elif cpu_percent > 90:
        if plan != HIGH_PERFORMANCE:
            print(current_time+"：切换到高性能模式")
            change_power_plan(HIGH_PERFORMANCE)
    else:
        if plan != BALANCE:
            print(current_time+"：切换到平衡模式")
            change_power_plan(BALANCE)
    time.sleep(60)

```

其中，这一部分需要自己获取

```python
BALANCE='381b4222-f694-41f0-9685-ff5bb260df2e'
HIGH_PERFORMANCE='8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c'
ENERGY_SAVER='a1841308-3541-4fab-bc81-f71556f20b4a'
```

使用`powercfg /GETACTIVESCHEME`获取电源计划GUID并填入

![image-20230117191532293](https://onep.thun888.xyz/mount/pic/2023/01/17/63c685e3ca534.webp)

当时间晚于11点或早于6点时，设置为节能

当CPU占用大于90时，调为高性能

其余时间为平衡

### 效果

为了演示，这里将时间间隔调整为1s

![1113.gif](https://onep.thun888.xyz/mount/pic/2023/01/17/63c6873160cb1.gif)

有负载时

![1114.gif](https://onep.thun888.xyz/mount/pic/2023/01/17/63c6873d0f2cb.gif)

PS：电源计划中限制频率的方法

![1673955297733.webp](https://onep.thun888.xyz/mount/pic/2023/01/17/63c687e21db58.webp)
