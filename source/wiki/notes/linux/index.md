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



## 维护

```bash
#换源：https://mirrors.tuna.tsinghua.edu.cn/help/debian/
nano /etc/apt/sources.list
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm main contrib non-free non-free-firmware
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm main contrib non-free non-free-firmware

deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-updates main contrib non-free non-free-firmware
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-updates main contrib non-free non-free-firmware

deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-backports main contrib non-free non-free-firmware
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-backports main contrib non-free non-free-firmware

# 以下安全更新软件源包含了官方源与镜像站配置，如有需要可自行修改注释切换
deb https://mirrors.tuna.tsinghua.edu.cn/debian-security bookworm-security main contrib non-free non-free-firmware
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security bookworm-security main contrib non-free non-free-firmware


#安装部分系统工具
apt install wget curl unzip sudo -y
#给予sudo权限
nano /etc/sudoers

#安装管理面板
HAOZI_DL_URL="https://dl.cdn.haozi.net/panel"; curl -sSL -O ${HAOZI_DL_URL}/install_panel.sh && curl -sSL -O ${HAOZI_DL_URL}/install_panel.sh.checksum.txt && sha256sum -c install_panel.sh.checksum.txt && bash install_panel.sh || echo "Checksum 验证失败，文件可能被篡改，已终止操作"

安装插件 系统工具箱
安装插件 Podman
安装插件 Supervisor
安装插件 Redis
安装插件 MySQL-5.7
安装插件 PHP-8.1
安装插件 OpenResty
安装插件 phpMyAdmin（需等待前者完毕）
安装插件 Pure-FTPd

#安装DDNS—GO
wget https://cfproxy.hzchu.top/https://github.com/jeessy2/ddns-go/releases/download/v6.7.0/ddns-go_6.7.0_linux_x86_64.tar.gz
tar xzvf ddns-go_6.7.0_linux_x86_64.tar.gz 
./ddns-go -s install
#面板内放行9876端口

#安装onep
#放行60181端口
sudo apt-get install libmagickwand-dev
mkdir /opt/onep
cd /opt/onep
wget http://192.168.1.52:51515/main
wget http://192.168.1.52:51515/config.yaml

#安装探针

#配置转发Cloudreve

#安装Cloudflare tunnel

#安装tailscale
curl -fsSL https://tailscale.com/install.sh | sh
tailscale up --exit-node=
#安装docker
curl -fsSL https://get.docker.com | bash -s docker
#安装CloudflareSpeedtest
docker run -d --restart=always --name CloudflareSpeedtest-Slave \
-e MAX_MBPS=600 \
dp.rtc.ovh/genshinminecraft/cloudflarespeedtest-slave:v0.0.6

#安全性调优 https://dusays.com/737/
```

