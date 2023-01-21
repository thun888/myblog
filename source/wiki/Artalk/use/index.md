---
layout: wiki
wiki: Artalk-doc # 这是项目名
title: 使用
keywords: 使用artalk,Artalk,配置artalk
order: 2
---

#### 管理

- 当评论区被人灌水时

  ![](https://raw.hzchu.top/thun888/tuku/master/img/image-20210709084310460.png)



在评论区的`昵称`中填入自己刚刚填的用户名和邮箱

![image-20210709084629741](https://raw.hzchu.top/thun888/tuku/master/img/image-20210709084629741.png)

在弹出的`对话框`内输入`密码`

![image-20210709084654770](https://raw.hzchu.top/thun888/tuku/master/img/image-20210709084654770.png)

( •̀ ω •́ )✧

![image-20210709084812420](https://raw.hzchu.top/thun888/tuku/master/img/image-20210709084812420.png)

#### 设置邮箱提醒

与前面有点重复(^_-)

这里用的是SMTP模式

以qq邮箱为例

- 登陆qq邮箱（网页版）--设置--账户--POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务

![image-20210709085046252](https://raw.hzchu.top/thun888/tuku/master/img/image-20210709085046252.png)

- 开启POP3/SMTP服务,取得授权码
- 从`帮助中心`取得smtp服务器相关信息（其它大同小异）
![image-20210709090441319](https://raw.hzchu.top/thun888/tuku/master/img/image-20210709090441319.png)

- 填入配置文件

  ![image-20210708214938128](https://raw.hzchu.top/thun888/tuku/master/img/image-20210708214938128.png)

像这样

![image-20210709091157394](https://raw.hzchu.top/thun888/tuku/master/img/image-20210709091157394.png)

有消息来时

![](https://raw.hzchu.top/thun888/tuku/master/img/20210709084140.png)

![image-20210709091316445](https://raw.hzchu.top/thun888/tuku/master/img/image-20210709091316445.png)

#### 自动填写pagekey

- 第一种（推荐）

  - 将`pageKey:' ',`改为`pageKey: location.pathname,`
  - 发出去的请求像这样
  
  ![image-20210709154144957](https://raw.hzchu.top/thun888/tuku/master/img/image-20210709154144957.png)
  
  >  ps:如果你的文章题目常常有大量中文可以考虑使用MD5/时间戳/decode(location.pathname)
  
- 第二种

  - 将`pageKey:' ',`改为`pageKey: window.location.href,`

  - 发出去的请求像这样

    ![image-20210709153509010](https://raw.hzchu.top/thun888/tuku/master/img/image-20210709153509010.png)

  

  PS：因为pagekey有点长，所以可能会一直转圈圈（超过5秒没加载完），参考FAQ

