---
title: 使用Python半自动生成Altium原理图封装
date: 2022-07-14 12:29:32
tags: python
cover: https://onep.hzchu.top/mount/pic/2023/02/05/63df2d8b52d38.webp
updated: 2022-07-14 12:29:32
description: 直接一套组合拳
---

### 前言

放长假了，想搞点钱，对我而言来钱最快的就是帮别人画原理图PCB图了。{% emoji aru 87 %}

不过画了几天发现一个问题：一直以来都自己画自己的，而现在帮别人画，客户发的很多原理图的封装都没有，基本上每画一个图都要画两三个，碰到一些小的还好几分钟就能画完，碰到一些大点的芯片引脚多的很的，自己画一个（配上电脑拉跨debuff）还要十几分钟，在立创EDA上面找的又经常有错，很是不爽{% emoji aru 34 %}

不过得益于AD高版本可以以成文本形式保存原理图文件，使用程序完成任务也就成为了可能。

### 历程

随便新建一个原理图以ASCII保存。打开来可以看见这么一份”模板“，
![](https://k.hzchu.top/2022/08/23/63043cea7eada.webp)
{% folding child:codeblock open:false color:yellow 模板 %}

```javascript
|HEADER=Protel for Windows - Schematic Capture Ascii File Version 5.0|WEIGHT=38
|ISBOC=T|RECORD=31|VISIBLEGRIDON=T|VISIBLEGRIDSIZE=10|DISPLAY_UNIT=4|CUSTOMY=950|BORDERON=T|HOTSPOTGRIDON=T|CUSTOMX=1500|CUSTOMMARGINWIDTH=20|SIZE1=10|SHEETNUMBERSPACESIZE=4|CUSTOMYZONES=4|USEMBCS=T|FONTIDCOUNT=1|SNAPGRIDSIZE=10|SHEETSTYLE=5|SYSTEMFONT=1|HOTSPOTGRIDSIZE=4|FONTNAME1=Times New Roman|TITLEBLOCKON=T|AREACOLOR=16317695|SNAPGRIDON=T|CUSTOMXZONES=6
|RECORD=41|ISHIDDEN=T|NAME=CurrentTime|OWNERPARTID=-1|COLOR=8388608|TEXT=*|READONLYSTATE=1|UNIQUEID=WFYPTBEC|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=CurrentDate|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=1|COLOR=8388608|READONLYSTATE=1|UNIQUEID=KRGPTHWR|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=Time|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=2|COLOR=8388608|READONLYSTATE=1|UNIQUEID=APNVELVY|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=Date|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=3|COLOR=8388608|READONLYSTATE=1|UNIQUEID=DOFGRYNH|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=DocumentFullPathAndName|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=4|COLOR=8388608|READONLYSTATE=1|UNIQUEID=XTILODYM|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=DocumentName|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=5|COLOR=8388608|READONLYSTATE=1|UNIQUEID=CIXOCUKW|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=ModifiedDate|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=6|COLOR=8388608|READONLYSTATE=1|UNIQUEID=CYVLOLHC|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=ApprovedBy|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=7|COLOR=8388608|READONLYSTATE=1|UNIQUEID=UKLMMPSH|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=CheckedBy|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=8|COLOR=8388608|READONLYSTATE=1|UNIQUEID=LGBVFHBI|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=Author|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=9|COLOR=8388608|READONLYSTATE=1|UNIQUEID=NNMPOPVS|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=CompanyName|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=10|COLOR=8388608|READONLYSTATE=1|UNIQUEID=ROXAGALI|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=DrawnBy|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=11|COLOR=8388608|READONLYSTATE=1|UNIQUEID=GSEQEJEE|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=Engineer|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=12|COLOR=8388608|READONLYSTATE=1|UNIQUEID=NMEAIFPG|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=Organization|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=13|COLOR=8388608|READONLYSTATE=1|UNIQUEID=CHTRTWQS|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=Address1|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=14|COLOR=8388608|READONLYSTATE=1|UNIQUEID=SLYDDXDR|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=Address2|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=15|COLOR=8388608|READONLYSTATE=1|UNIQUEID=JNHWHKQI|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=Address3|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=16|COLOR=8388608|READONLYSTATE=1|UNIQUEID=MIQKOJUC|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=Address4|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=17|COLOR=8388608|READONLYSTATE=1|UNIQUEID=TBHPRINX|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=Title|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=18|COLOR=8388608|READONLYSTATE=1|UNIQUEID=JRIVAVFH|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=DocumentNumber|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=19|COLOR=8388608|READONLYSTATE=1|UNIQUEID=SJJFVEJY|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=Revision|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=20|COLOR=8388608|READONLYSTATE=1|UNIQUEID=TPPALWNV|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=SheetNumber|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=21|COLOR=8388608|READONLYSTATE=1|UNIQUEID=IXCDWQOY|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=SheetTotal|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=22|COLOR=8388608|READONLYSTATE=1|UNIQUEID=WLJMRBEM|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=Rule|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=23|COLOR=8388608|READONLYSTATE=1|UNIQUEID=SGMPJKTU|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=ImagePath|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=24|COLOR=8388608|READONLYSTATE=1|UNIQUEID=CDHEMVMP|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=ProjectName|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=25|COLOR=8388608|READONLYSTATE=1|UNIQUEID=FMWVHCEF|FONTID=1
|HEADER=Icon storage
|HEADER=Protel for Windows - Schematic Capture Ascii File Version 5.0
```

{% endfolding %}

> 文本是OLE复合文档,有开发需要可以在这个仓库里查看。

{% link https://github.com/vadmium/python-altium/blob/master/format.md "Altium schematic file format" icon:/img/icons/08a41b181ce68.svg %}
测试放置一个3PIN可以看到多了这么一部分

```javascript
|RECORD=1|PARTIDLOCKED=T|COLOR=128|SOURCELIBRARYNAME=Miscellaneous Devices.SchLib|OWNERPARTID=-1|DISPLAYMODECOUNT=1|INDEXINSHEET=26|DESIGNITEMID=3PIN|PARTCOUNT=2|LIBREFERENCE=3PIN|LIBRARYPATH=*|LOCATION.X=440|AREACOLOR=11599871|TARGETFILENAME=*|CURRENTPARTID=1|LOCATION.Y=450|UNIQUEID=JDTBOSLP
|RECORD=14|ISNOTACCESIBLE=T|LOCATION.X=440|CORNER.Y=450|ISSOLID=T|OWNERPARTID=1|OWNERINDEX=27|CORNER.X=470|COLOR=128|AREACOLOR=11599871|LOCATION.Y=410
|DESIGNATOR=1|RECORD=2|NAME=1|LOCATION.X=440|PINLENGTH=20|OWNERPARTID=1|PINCONGLOMERATE=42|ELECTRICAL=4|OWNERINDEX=27|FORMALTYPE=1|LOCATION.Y=440|SWAPIDPIN=1
|ISHIDDEN=T|RECORD=41|LOCATION.X=440|NAME=PinUniqueId|OWNERPARTID=-1|OWNERINDEX=29|TEXT=BNSVPWEQ|COLOR=8388608|LOCATION.Y=440|FONTID=1
|DESIGNATOR=2|RECORD=2|NAME=2|LOCATION.X=440|PINLENGTH=20|OWNERPARTID=1|PINCONGLOMERATE=42|ELECTRICAL=4|OWNERINDEX=27|FORMALTYPE=1|LOCATION.Y=430|SWAPIDPIN=2
|ISHIDDEN=T|RECORD=41|LOCATION.X=440|NAME=PinUniqueId|OWNERPARTID=-1|OWNERINDEX=30|TEXT=DQCSMDTO|COLOR=8388608|LOCATION.Y=430|FONTID=1
|DESIGNATOR=3|RECORD=2|NAME=3|LOCATION.X=440|PINLENGTH=20|OWNERPARTID=1|PINCONGLOMERATE=42|ELECTRICAL=4|OWNERINDEX=27|FORMALTYPE=1|LOCATION.Y=420|SWAPIDPIN=3
|ISHIDDEN=T|RECORD=41|LOCATION.X=440|NAME=PinUniqueId|OWNERPARTID=-1|OWNERINDEX=31|TEXT=TFWBGGDS|COLOR=8388608|LOCATION.Y=420|FONTID=1
|RECORD=34|LOCATION.X=440|NAME=Designator|TEXT=P?|OWNERINDEX=27|OWNERPARTID=-1|COLOR=8388408|INDEXINSHEET=-1|READONLYSTATE=1|LOCATION.Y=450|FONTID=1
|RECORD=41|LOCATION.X=440|NAME=Comment|TEXT=3PIN|OWNERINDEX=27|OWNERPARTID=-1|COLOR=8388608|INDEXINSHEET=-1|UNIQUEID=SIFBYFRD|LOCATION.Y=400|FONTID=1
|OWNERINDEX=27|RECORD=44
```

可以看出

```javascript
RECORD = 
1：器件开始
2: 引脚
14：长方形（背景）
34：元件标号
41：脚注
44：器件结束
DESIGNATOR：管脚标号
```

还有像xy坐标，NAME，COLOR等不必多说

接着就是写个python脚本把它们拼起来辣

```python
import os
import sys
import random
import string

head2 = '''|ISBOC=T|RECORD=31|VISIBLEGRIDON=T|VISIBLEGRIDSIZE=10|DISPLAY_UNIT=4|CUSTOMY=950|BORDERON=T|HOTSPOTGRIDON=T|CUSTOMX=1500|CUSTOMMARGINWIDTH=20|SIZE1=10|SHEETNUMBERSPACESIZE=4|CUSTOMYZONES=4|USEMBCS=T|FONTIDCOUNT=1|SNAPGRIDSIZE=10|SHEETSTYLE=8|SYSTEMFONT=1|HOTSPOTGRIDSIZE=4|FONTNAME1=Times New Roman|TITLEBLOCKON=T|AREACOLOR=16317695|SNAPGRIDON=T|CUSTOMXZONES=6
|RECORD=41|ISHIDDEN=T|NAME=CurrentTime|OWNERPARTID=-1|COLOR=8388608|TEXT=*|READONLYSTATE=1|UNIQUEID=WFYPTBEC|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=CurrentDate|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=1|COLOR=8388608|READONLYSTATE=1|UNIQUEID=KRGPTHWR|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=Time|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=2|COLOR=8388608|READONLYSTATE=1|UNIQUEID=APNVELVY|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=Date|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=3|COLOR=8388608|READONLYSTATE=1|UNIQUEID=DOFGRYNH|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=DocumentFullPathAndName|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=4|COLOR=8388608|READONLYSTATE=1|UNIQUEID=XTILODYM|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=DocumentName|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=5|COLOR=8388608|READONLYSTATE=1|UNIQUEID=CIXOCUKW|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=ModifiedDate|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=6|COLOR=8388608|READONLYSTATE=1|UNIQUEID=CYVLOLHC|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=ApprovedBy|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=7|COLOR=8388608|READONLYSTATE=1|UNIQUEID=UKLMMPSH|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=CheckedBy|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=8|COLOR=8388608|READONLYSTATE=1|UNIQUEID=LGBVFHBI|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=Author|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=9|COLOR=8388608|READONLYSTATE=1|UNIQUEID=NNMPOPVS|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=CompanyName|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=10|COLOR=8388608|READONLYSTATE=1|UNIQUEID=ROXAGALI|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=DrawnBy|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=11|COLOR=8388608|READONLYSTATE=1|UNIQUEID=GSEQEJEE|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=Engineer|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=12|COLOR=8388608|READONLYSTATE=1|UNIQUEID=NMEAIFPG|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=Organization|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=13|COLOR=8388608|READONLYSTATE=1|UNIQUEID=CHTRTWQS|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=Address1|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=14|COLOR=8388608|READONLYSTATE=1|UNIQUEID=SLYDDXDR|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=Address2|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=15|COLOR=8388608|READONLYSTATE=1|UNIQUEID=JNHWHKQI|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=Address3|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=16|COLOR=8388608|READONLYSTATE=1|UNIQUEID=MIQKOJUC|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=Address4|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=17|COLOR=8388608|READONLYSTATE=1|UNIQUEID=TBHPRINX|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=Title|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=18|COLOR=8388608|READONLYSTATE=1|UNIQUEID=JRIVAVFH|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=DocumentNumber|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=19|COLOR=8388608|READONLYSTATE=1|UNIQUEID=SJJFVEJY|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=Revision|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=20|COLOR=8388608|READONLYSTATE=1|UNIQUEID=TPPALWNV|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=SheetNumber|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=21|COLOR=8388608|READONLYSTATE=1|UNIQUEID=IXCDWQOY|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=SheetTotal|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=22|COLOR=8388608|READONLYSTATE=1|UNIQUEID=WLJMRBEM|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=Rule|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=23|COLOR=8388608|READONLYSTATE=1|UNIQUEID=SGMPJKTU|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=ImagePath|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=24|COLOR=8388608|READONLYSTATE=1|UNIQUEID=CDHEMVMP|FONTID=1
|RECORD=41|ISHIDDEN=T|NAME=ProjectName|TEXT=*|OWNERPARTID=-1|INDEXINSHEET=25|COLOR=8388608|READONLYSTATE=1|UNIQUEID=FMWVHCEF|FONTID=1
'''

def main():
    Component_overname =input("输入元件标号(eg:U)：")
    Component_name = input("输入设元件名称(eg:3PIN)：")
    Component_pin = int(input("输入元件引脚数量(eg:30)："))
    Component_size = input("输入元件宽度(eg:5)：")
    Component_rightpin = input("是否使用右侧引脚(y/n)：")
    if Component_size == '':
        Component_size = 5
    if Component_rightpin == '':
        Component_rightpin = 'y'
    if Component_rightpin == "y" or Component_rightpin == "Y":
        Component_rightpin = "y"
        Component_pintype=input("选择放置类型И/凵/Z(输1为И，2为凵，3为Z)：")
        if Component_pintype != "1" and Component_pintype != "2" and Component_pintype != "3":
            print("输入错误，请重新输入")
            Component_pintype = input("选择放置类型И/凵(输1为И，2为凵)：")
    if Component_pin >= 35:
        Constants = 930
    else:
        Constants = 450
    x1 = Constants-int(Component_size)*10
    if Component_rightpin == "y" :
        y = Constants+Component_pin*5+10
    else:
        y = Constants+Component_pin*10+10
    #print(x1)
    #print(y)
    body1 = '|RECORD=1|PARTIDLOCKED=T|COLOR=128|SOURCELIBRARYNAME=thisprogrambythun888.SchLib|OWNERPARTID=-1|DISPLAYMODECOUNT=1|INDEXINSHEET=26|DESIGNITEMID='+str(Component_name)+'|PARTCOUNT=2|LIBREFERENCE='+str(Component_name)+'|LIBRARYPATH=*|LOCATION.X='+str(x1)+'|AREACOLOR=11599871|TARGETFILENAME=*|CURRENTPARTID=1|LOCATION.Y='+str(Constants)+'|UNIQUEID='+str(uniqueid())+'\n'
    body2 ='|RECORD=14|ISNOTACCESIBLE=T|LOCATION.X='+str(Constants)+'|CORNER.Y='+str(Constants)+'|ISSOLID=T|OWNERPARTID=1|OWNERINDEX=27|CORNER.X='+str(x1)+'|COLOR=128|AREACOLOR=11599871|LOCATION.Y='+str(y)+'\n'
    body3 =''
    for i in range(Component_pin):
        pin_num = i+1
        pin_name = input("输入第"+str(pin_num)+"个pin的名称(eg:TX)：")
        if pin_name =="":
            pin_name = pin_num
        pin_y = y-pin_num*10
        index = i*2+27
        if Component_rightpin == "y":
            if Component_pintype =="1":
                if pin_num<= Component_pin/2:
                    body3 = body3+'|DESIGNATOR='+str(pin_num)+'|RECORD=2|NAME='+str(pin_name)+'|LOCATION.X='+str(x1)+'|PINLENGTH=20|OWNERPARTID=1|PINCONGLOMERATE=58|ELECTRICAL=4|OWNERINDEX=27|FORMALTYPE=1|LOCATION.Y='+str(pin_y)+'\n'
                    body3 = body3+'|ISHIDDEN=T|RECORD=41|LOCATION.X='+str(Constants)+'|NAME=PinUniqueId|OWNERPARTID=-1|OWNERINDEX='+str(index)+'|TEXT='+str(uniqueid())+'|COLOR=8388608|LOCATION.Y='+str(pin_y)+'|FONTID=1\n'
                else:
                    pin_y = delete_extra_zero(pin_y+Component_pin/2*10)
                    #print(pin_y)
                    body3 = body3+'|DESIGNATOR='+str(pin_num)+'|RECORD=2|NAME='+str(pin_name)+'|LOCATION.X='+str(Constants)+'|PINLENGTH=20|OWNERPARTID=1|PINCONGLOMERATE=56|ELECTRICAL=4|OWNERINDEX=27|FORMALTYPE=1|LOCATION.Y='+str(pin_y)+'\n'
                    body3 = body3+'|ISHIDDEN=T|RECORD=41|LOCATION.X='+str(Constants)+'|NAME=PinUniqueId|OWNERPARTID=-1|OWNERINDEX='+str(index)+'|TEXT='+str(uniqueid())+'|COLOR=8388608|LOCATION.Y='+str(pin_y)+'|FONTID=1\n'                
            elif Component_pintype =="2":
                if pin_num<= Component_pin/2:
                    body3 = body3+'|DESIGNATOR='+str(pin_num)+'|RECORD=2|NAME='+str(pin_name)+'|LOCATION.X='+str(x1)+'|PINLENGTH=20|OWNERPARTID=1|PINCONGLOMERATE=58|ELECTRICAL=4|OWNERINDEX=27|FORMALTYPE=1|LOCATION.Y='+str(pin_y)+'\n'
                    body3 = body3+'|ISHIDDEN=T|RECORD=41|LOCATION.X='+str(Constants)+'|NAME=PinUniqueId|OWNERPARTID=-1|OWNERINDEX='+str(index)+'|TEXT='+str(uniqueid())+'|COLOR=8388608|LOCATION.Y='+str(pin_y)+'|FONTID=1\n'
                else:
                    pin_y = delete_extra_zero(y-Component_pin/2*10+(pin_num-Component_pin/2-1)*10)
                    #print(pin_y)
                    body3 = body3+'|DESIGNATOR='+str(pin_num)+'|RECORD=2|NAME='+str(pin_name)+'|LOCATION.X='+str(Constants)+'|PINLENGTH=20|OWNERPARTID=1|PINCONGLOMERATE=56|ELECTRICAL=4|OWNERINDEX=27|FORMALTYPE=1|LOCATION.Y='+str(pin_y)+'\n'
                    body3 = body3+'|ISHIDDEN=T|RECORD=41|LOCATION.X='+str(Constants)+'|NAME=PinUniqueId|OWNERPARTID=-1|OWNERINDEX='+str(index)+'|TEXT='+str(uniqueid())+'|COLOR=8388608|LOCATION.Y='+str(pin_y)+'|FONTID=1\n'
            
            elif Component_pintype =="3":
                if (pin_num & 1) == 0: 
                    pin_y = y-pin_num*5 #/2*10
                    body3 = body3+'|DESIGNATOR='+str(pin_num)+'|RECORD=2|NAME='+str(pin_name)+'|LOCATION.X='+str(Constants)+'|PINLENGTH=20|OWNERPARTID=1|PINCONGLOMERATE=56|ELECTRICAL=4|OWNERINDEX=27|FORMALTYPE=1|LOCATION.Y='+str(pin_y)+'\n'
                    body3 = body3+'|ISHIDDEN=T|RECORD=41|LOCATION.X='+str(x1)+'|NAME=PinUniqueId|OWNERPARTID=-1|OWNERINDEX='+str(index)+'|TEXT='+str(uniqueid())+'|COLOR=8388608|LOCATION.Y='+str(pin_y)+'|FONTID=1\n'
                else:
                    pin_y = y-(pin_num+1)*5 #/2*10
                    body3 = body3+'|DESIGNATOR='+str(pin_num)+'|RECORD=2|NAME='+str(pin_name)+'|LOCATION.X='+str(x1)+'|PINLENGTH=20|OWNERPARTID=1|PINCONGLOMERATE=58|ELECTRICAL=4|OWNERINDEX=27|FORMALTYPE=1|LOCATION.Y='+str(pin_y)+'\n'
                    body3 = body3+'|ISHIDDEN=T|RECORD=41|LOCATION.X='+str(x1)+'|NAME=PinUniqueId|OWNERPARTID=-1|OWNERINDEX='+str(index)+'|TEXT='+str(uniqueid())+'|COLOR=8388608|LOCATION.Y='+str(pin_y)+'|FONTID=1\n'
        
        else:
            body3 = body3+'|DESIGNATOR='+str(pin_num)+'|RECORD=2|NAME='+str(pin_name)+'|LOCATION.X='+str(x1)+'|PINLENGTH=20|OWNERPARTID=1|PINCONGLOMERATE=58|ELECTRICAL=4|OWNERINDEX=27|FORMALTYPE=1|LOCATION.Y='+str(pin_y)+'\n'
            body3 = body3+'|ISHIDDEN=T|RECORD=41|LOCATION.X='+str(x1)+'|NAME=PinUniqueId|OWNERPARTID=-1|OWNERINDEX='+str(index)+'|TEXT='+str(uniqueid())+'|COLOR=8388608|LOCATION.Y='+str(pin_y)+'|FONTID=1\n'
        head1 = '|HEADER=Protel for Windows - Schematic Capture Ascii File Version 5.0|WEIGHT='+str(index+10)+'\n'
    body4='|RECORD=34|LOCATION.X='+str(Constants)+'|NAME=Designator|TEXT='+str(Component_overname)+'|OWNERINDEX=27|OWNERPARTID=-1|COLOR=8388608|INDEXINSHEET=-1|READONLYSTATE=1|LOCATION.Y='+str(Constants)+'|FONTID=1\n'
    body5 = '|RECORD=41|LOCATION.X='+str(Constants)+'|NAME=Comment|TEXT='+str(Component_name)+'|OWNERINDEX=27|OWNERPARTID=-1|COLOR=8388608|INDEXINSHEET=-1|UNIQUEID='+str(uniqueid())+'|LOCATION.Y='+str(Constants-10)+'|FONTID=1\n'
    body6= '''|OWNERINDEX=27|RECORD=44
|HEADER=Icon storage
|HEADER=Protel for Windows - Schematic Capture Ascii File Version 5.0
    '''
    allofthem = head1+head2+body1+body2+body3+body4+body5+body6
    filename = Component_name+".SchDoc"
    with open(filename,"w") as f:
        f.write(allofthem)
    print("生成成功，文件名为"+filename)
    os.system("start "+filename)
    return filename




def uniqueid():
    """生成8位随机大写字母=>uniqueid!"""
    return ''.join(random.sample(string.ascii_uppercase, 8))
def delete_extra_zero(n):
    """删除小数点后多余的0"""
    n = '{:g}'.format(n)
    n = float(n) if '.' in n else int(n)
    return n

if __name__ == "__main__":
    os.system("start "+main())
    sys.exit()
```

{% ghcard thun888/altium-helper theme:dark %}

再生成原理图库复制到自己的库就行了

![Snipaste_2022-07-17_09-13-24](https://k.hzchu.top/2022/08/23/63043a58d9141.webp)

### 小说明

#### 放置类型

|И|凵(常用)|Z|
|-|-|-|
|![Snipaste_2022-07-15_12-01-30](https://k.hzchu.top/2022/08/23/63043a2dd7177.webp)|![Snipaste_2022-07-15_12-02-37](https://k.hzchu.top/2022/08/23/63043a72e7aa3.webp)|![Snipaste_2022-07-15_12-03-26](https://k.hzchu.top/2022/08/23/63043a851122a.webp)|

### 执行效果

![Snipaste_2022-07-14_19-18-29](https://k.hzchu.top/2022/08/22/6303717c45a8a.webp)

### 值得注意的点

1\. 在“模板”的头部中，`WEIGHT`代表着剩余的部件量，如果设置的太小当AD读取完后就不会往下读了，就会导致缺这缺那

```javascript
|HEADER=Protel for Windows - Schematic Capture Ascii File Version 5.0|WEIGHT=38
```

2\.同样在“模板”的头部中，第二行中包括了纸张大小等的定义，如果遇到🐞可以适当修改

![image](https://k.hzchu.top/2022/08/23/63043a9b1224c.webp)3.引脚方向依据`PINCONGLOMERATE`的值，连接方向向右时为56，从此每逆时针旋转90°加一

![Snipaste_2022-07-14_08-55-25](https://k.hzchu.top/20  22/08/23/63043af131a4c.webp)4.xy坐标必须为不带小数的整数，不然ad立马扑街给你看{% emoji aru 160 %}

### 参考资料

1. [Python删除小数点后多余的0_XerCis的博客](https://blog.csdn.net/lly1122334/article/details/108770141)

2. [Altium schematic file formatn88](https://github.com/vadmium/python-altium/blob/master/format.md)