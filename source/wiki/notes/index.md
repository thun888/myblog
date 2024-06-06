---
wiki: notes
title: 笔记
order: -1
updated: 2024-06-06 19:05:32
---

## 折腾

### 小米路由器

#### 开启SSH

使用[acecilia/OpenWRTInvasion](https://github.com/acecilia/OpenWRTInvasion)

{% image https://pic.hzchu.top/i/myself/2024/06/66617cbaa8704.webp %}

{% image https://pic.hzchu.top/i/myself/2024/06/6661854c448b7.webp%}

#### 允许外网访问

在`/etc/config/firewall`中添加

```bash
config redirect 'wan10081rdr1'
        option proto 'tcp'
        option src_dport '10081'
        option dest_ip '192.168.31.1'
        option dest_port '80'
        option src 'wan'
        option name 'WEB10081'
        option target 'DNAT'
        option ftype '1'
        option dest 'lan'
```

将自身80端口映射到10081端口上

来自[急需小米AX1800路由器设置端口转发远程登陆WEB管理页-恩山无线论坛 (right.com.cn)](https://www.right.com.cn/forum/thread-4043354-1-1.html)
