---
wiki: study-notes
title: 概念
updated: 2024-06-07 7:13:32
---

## 虚数

$$
z = ax+bi
$$

实数a和b分别被称为复数的{% emp 实部 %}和{% emp 虚部 %}

当且仅当a=0,b≠0时，$z$为{% emp 纯虚数 %}
$$
|z| = \sqrt{a^2+b^2}
$$

## 百分位数

### 计算第*p*百分位数

1. 以递增顺序{% u 排列 %}原始数据

2. 计算 $i＝np%$

3. ①若 $i$ {% u 不是 %}整数，将 $i$ 向上取整．大于$i$的比邻整数即为第$p$百分位数的位置；

   ②若$i${% u 是 %}整数，则第$p$百分位数是第$i$项与第$(i＋1)$项数据的{% u 平均值%}。

### 各种百分位数

{% image https://onep.hzchu.top/mount/pic/myself/avif/20240607080828.avif?fmt=avif %}

## 均值不等式

$$
\frac{2}{\frac{1}{a} + \frac{1}{b}} \leq \sqrt{ab} \leq \frac{a + b}{2} \leq \sqrt{\frac{a^2 + b^2}{2}}
$$
分别为：调和平均数，几何平均数，算术平均数，平方平均数

> 当前仅当a等于b时取等号
