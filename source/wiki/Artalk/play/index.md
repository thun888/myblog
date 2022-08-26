---
layout: wiki
wiki: Artalk-doc # 这是项目名
title: 娱乐向
order: 5
---

#### 怎 样 设 置 不 输 入 邮 箱 即 可 评 论

> From [Artalk DEMO](https://artalk.js.org/)

![image-20210805234614312](https://k.thun888.xyz/2022/08/18/62fde6c58f094.png)

emm，首先这样邮件提醒就没用了，回复也及时不了了

> 仅提供思路

干啥都好，别改后端－O－

更改artalk.js，把email的`<input>`删了，var email的变量为一个定值

#### 自动备份

在后端`/public`下新建个xxx.php（xxx一定要换）

![image-20210806123453298](https://k.thun888.xyz/2022/08/18/62fde6d2ee293.png)

在xxx.php里写上

```php
<?php

$pass = empty($​_GET['pass']) ? "" : $_GET['pass'];
if($pass=="pass"){
$file = fopen("../data/comments.data.json", "r");
$b=fread($file,132100000);
echo $b;
}else{
	return '';
}
fclose($​file);
?>
```

把pass修改为自己的密码，然后通过/xxx.php?pass=xxx来调用

然后去cf开个worker，get然后保存到kv,代码自己写U•ェ•\*U