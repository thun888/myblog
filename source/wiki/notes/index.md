---
wiki: notes
title: 笔记
order: -1
updated: 2024-06-06 19:05:32
---

## 折腾

### 小米路由器

#### 开启SSH

使用[acecilia/OpenWRTInvasion](https://github.com/acecilia/OpenWRTInvasion)，注意路由器要处于非中继情况下并连接外网

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

#### 刷breed

1. 开启SSH

2. 查看路由器分区表

   ```bash R4A
   root@XiaoQiang:~# cat /proc/mtd
   dev:    size   erasesize  name
   mtd0: 01000000 00010000 "ALL"
   mtd1: 00030000 00010000 "Bootloader"
   mtd2: 00010000 00010000 "NULL"
   mtd3: 00010000 00010000 "Bdata"
   mtd4: 00010000 00010000 "Factory"
   mtd5: 00010000 00010000 "crash"
   mtd6: 00010000 00010000 "cfg_bak"
   mtd7: 00100000 00010000 "overlay"
   mtd8: 00d00000 00010000 "OS1"
   mtd9: 00b30000 00010000 "rootfs"
   mtd10: 00170000 00010000 "disk"
   mtd11: 00010000 00010000 "Config"
   ```

   

3. 备份分区，留意factory跟BootLoader对应的mtd分区，需要备份的是factory和BootLoader

  ```bash
  root@XiaoQiang:~# dd if=/dev/mtd4 of=/tmp/eeprom.bin
  128+0 records in
  128+0 records out
  65536 bytes (64.0KB) copied, 0.032859 seconds, 1.9MB/s
  root@XiaoQiang:~# dd if=/dev/mtd1 of=/tmp/Bootloader.bin
  384+0 records in
  384+0 records out
  196608 bytes (192.0KB) copied, 0.095421 seconds, 2.0MB/s
  ```

  

4. 下载到本地

  {% image https://onep.hzchu.top/mount/pic/myself/2024/07/66923e5fa8718.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/07/66923e5fa8718.png image-20240713164411960 %}

{% image https://onep.hzchu.top/mount/pic/myself/2024/07/66923ea45261a.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/07/66923ea45261a.png image-20240713164520809 %}

5. 下载breed

  ```bash
  cd /tmp && wget  http://121.5.163.108/download/breed-mt7621-pbr-m1.bin && mv breed-mt7621-pbr-m1.bin breed.bin
  ```

6. 刷入

  ```bash
  mtd write breed.bin Bootloader
  ```

  

7. 重启按住复位键一段时间后访问`192.168.1.1`，备份编程器固件，多备份几次

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

## Blog

### 批量替换图片链接为Stellar格式

正则表达式：`!\[(.*?)\]\((https:\/\/onep\.hzchu\.top[^\?\)]+)(\?fmt=avif)?\)`

替换内容：`{% image $2$3 download:$2 $1 %}`

> 注意：gallery内部只能填写 md 格式的图片

## MCSM

### 节点无法找到主机java环境

```bash
nano /etc/systemd/system/mcsm-daemon.service
修改Environment字段，添加主机java路径（eg:/opt/jdk/bin）
systemctl daemon-reload
systemctl restart mcsm-daemon
```

## Git

### 报错:error: You have not concluded your merge (MERGE_HEAD exists).

{% copy git commit prefix:$ %}

### 无权限写入组织仓库（GitHub）

1. 完成组织权限设置

   {% image https://onep.hzchu.top/mount/pic/myself/2024/07/6691d1fd89683.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/07/6691d1fd89683.png Snipaste_2024-07-13_08-25-06 %}

2. 新建一个`New fine-grained personal access token`，`Resource owner`选择组织，权限处给予`contents`的读写权限

3. 如果组织权限设置中开启了批准，则需回去在`Pending requests`里面启用

4. 在本地仓库中运行

   {% copy git remote set-url origin https://{token}@github.com/{user}/{repo}.git prefix:$ %}



## Upgit

### 添加lskypro2上传扩展

```toml \extensions\lskypro2.jsonc
{
    "meta": {
        "id": "lskypro2",
        "name": "LskyPro2 Uploader",
        "type": "simple-http-uploader",
        "version": "2.0.1",
        "repository": ""
    },
    "http": {
        "request": {
            "url": "$(ext_config.host)/api/v1/upload",
            "method": "POST",
            "headers": {
                "Content-Type": "multipart/form-data",
                "Authorization": "$(ext_config.token)",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36"
            },
            "body": {
                "file": {
                    "type": "file",
                    "value": "$(task.local_path)"
                },
                "strategy_id": {
                    "type": "string",
                    "value": "$(ext_config.strategy_id)"
                }
            }
        }
    },
    "upload": {
        "rawUrl": {
            "from": "json_response",
            "path": "data.links.url"
        }
    }
}
```

```toml UPGIT 配置
# =============================================================================
# UPGIT 配置
# =============================================================================

# 默认上传器
default_uploader = "lskypro2"

...

[uploaders.lskypro2]
host = "https://pic.hzchu.top"
token = "Bearer 1|0JWtJ222222222222222222222222222222222MM"
strategy_id = "3"
```

## Flask

### 设置的定时任务会重复执行两次函数

**原因**：在调试模式下（debug），Flask的重新加载器将加载应用程序两次。因此flask总共有两个进程，重新加载器监视文件系统的更改并在不同的进程中启动真实应用程序。
**解决办法**：禁用重新加载器。在启动flask程序的run语句中，将添加use_reloader=False参数即可禁用重新加载器
关闭调试模式。同样地，在启动flask程序的run语句中，将debug=True改为debug=False即可关闭debug模式，在部署后真实的运行场景中都会关闭调试模式。

```python
if __name__ == "__main__":
启动flask程序
    # 直接启动，use_reloader=False禁用重新加载器
    app.run(host="127.0.0.1", port=5000, debug=True, use_reloader=False)  # 只能本机访问
    # app.run(host="0.0.0.0", port=5000, debug=True, use_reloader=False)    # 外网可以访问
    # 以命令行方式启动
    # manager.run()
```



原文链接：https://blog.csdn.net/qq_47527477/article/details/122904551

## PY

## hashlib

安装报错：

```bash
ERROR: Ignored the following yanked versions: 20081119
ERROR: Could not find a version that satisfies the requirement hashlib (from versions: none)
ERROR: No matching distribution found for hashlib
```

根本不用装
