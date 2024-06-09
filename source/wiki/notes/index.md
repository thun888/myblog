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

### nginx反代使用内容替换无法替换js内容

```nginx
sub_filter_types *;
```

sub_filter_types指令：sub_filter_types * 用于指定需要被替换的MIME类型,默认为“text/html”，如果制定为*，那么所有的都处理；

来自[nginx替换响应内容 - kenwar - 博客园 (cnblogs.com)](https://www.cnblogs.com/kenwar/p/8296508.html)

## mysql

将MySQL8.0生成的sql文件，导入MySQL5.7版本时`Unknown collation: 'utf8mb4_0900_ai_ci'`

使用Navicat进行数据传输，并在选项中设置不包含字符集

{% image https://onep.hzchu.top/mount/pic/myself/2024/06/66656d63620c6.png?fmt=avif %}

{% image https://onep.hzchu.top/mount/pic/myself/2024/06/66656d955266f.png?fmt=avif %}

[Unknown collation: ‘utf8mb4_0900_ai_ci‘ 的解决方案-CSDN博客](https://blog.csdn.net/weixin_45953673/article/details/124873321)
