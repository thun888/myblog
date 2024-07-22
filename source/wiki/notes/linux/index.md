## 报错类

### dpkg

```bash
dpkg: warning: 'ldconfig' not found in PATH or not executable
dpkg: warning: 'start-stop-daemon' not found in PATH or not executable
dpkg: error: 2 expected programs not found in PATH or not executable
Note: root's PATH should usually contain /usr/local/sbin, /usr/sbin and /sbin
```

**（临时）更新`PATH`环境变量**: 

```bash
export PATH=$PATH:/usr/local/sbin:/usr/sbin:/sbin
```

**缺少依赖**：

```bash
sudo apt-get install -f
```

`-f`选项会尝试修复系统上未满足的依赖关系。









## PVE

 使用本地时间进行RTC: `timedatectl set-local-rtc yes`