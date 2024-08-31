---
title: 更便利地操控表彰大会--AHK
date: 2022-12-25 14:44:07
tags: AHK
updated: 2022-12-25 14:44:07
description: 在尴尬了3个小时后，为了应对期中后表彰大会同样的情况，还是要想个对策
---

#### 前言

前几个月考完月考，第1次月考的时候因为主持人不懂按ppt.经过我舍友一番吹水，给我拉了上去，虽然威风，但我只负责按下一页和播放颁奖曲。{% emoji blobcat blobcatsadreach %}

然鹅，放歌的重任着实有点难为我手上的翻页笔，导致我只能反反复复地从后台门旁跑到电脑旁，毕竟不能挡着队伍的道（谢天谢地，那台笔记本的键盘还有多媒体键{% emoji blobcat blobcatbox %}）

{% image https://onep.hzchu.top/mount/pic/2022/12/25/63a7f3c180d9b.webp?fmt=avif download:https://onep.hzchu.top/mount/pic/2022/12/25/63a7f3c180d9b.webp img %}

那么，在尴尬了3个小时后，为了应对期中后表彰大会同样的情况，还是要想个对策

#### 思考

翻页笔，说白了就是个小键盘（宏），上下翻页自然是上下键，“黑屏”即为B键，再高级的就不是单纯的键盘了。当然，我手上这支来自于我勤俭持家的英语老师，只有下图这几个键

{% image https://onep.hzchu.top/mount/pic/2022/12/25/63a7f3afa43d8.webp?fmt=avif download:https://onep.hzchu.top/mount/pic/2022/12/25/63a7f3afa43d8.webp img %}

> 图片在某宝找了个同款

环顾一圈，只有Enter键是用不上的，那不就可以搞一波按键映射，让它成为播放/暂停键

#### 实践

按键映射还得是老大哥*——*Autohotkey(AHK)

根据AHK的语法，下面的“句子”便可以实现，复制写入一个文档里并改后缀名为.ahk，导入即可

```
Enter::Media_Play_Pause
```

我这里为了方便将其导出为一个独立程序

{% image https://onep.hzchu.top/mount/pic/2022/12/25/63a7f3994f0f5.webp?fmt=avif download:https://onep.hzchu.top/mount/pic/2022/12/25/63a7f3994f0f5.webp img %}

事实证明，效果不错，让我还能在里面摸鱼{% emoji blobcat ablobcatrainbow %}
