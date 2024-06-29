---
title: Go中使用ImageMagick转换图片格式，实现全站图片“Avif”
date: 2024-06-08 13:58:16
updated: 2024-06-08 13:58:16
tags: [Go,网站]
cover: https://dolphinsbukets.s3.bitiful.net/article-cover/cover-8.png?fmt=avif
banner: https://dolphinsbukets.s3.bitiful.net/article-cover/cover-8.png?fmt=avif&q=50
description: 改进了下之前写的“CDN”程序，使其支持在边缘转换图片格式
categories: 技术类
---

## 前言

前几天不经意间看了[实现全站图片使用avif格式，替代臃肿的webp教程 | 张洪Heo (zhheo.com)](https://blog.zhheo.com/p/6a933575.html)，才发现现在BiliBili全部是avif格式的图片了

我：{% image https://onep.hzchu.top/mount/pic/myself/2024/06/6663fa70369ee.jpg?fmt=avif %}

哇，这压缩率真的炸裂。{% emoji blobcat blobcatyandere %}

{% image https://onep.hzchu.top/mount/pic/myself/2024/06/6664331d1bd30.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/06/6664331d1bd30.png %}



如今，各大浏览器基本都支持avif图像格式了，可以考虑一下跟上时代的步伐了{% emoji blobcat blobcatbox %}

{% image https://onep.hzchu.top/mount/pic/myself/2024/06/6664289b4a3b0.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/06/6664289b4a3b0.png %}

在开始之前，先看看目前的图片上传&用户访问路径

{% image https://onep.hzchu.top/mount/pic/myself/2024/06/66642e26bf612.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/06/66642e26bf612.png%}

**可见有三个问题**：

1. `lsky pro ` **不支持**avif格式，使用avif无法与之前的框架完美契合
2. 当用户的浏览器不支持webp格式时，无法查看图片{% del （包劝退的 %}
3. 对于已上传的图片无法平滑过渡

因此，不如将转换格式的任务交由节点处理，保存图片源文件，随用随转{% emoji blobcat blobcatcoffee %}

## 思路

我站图片存储的架构可参考[基于Onedrive的高可用性图床](https://blog.hzchu.top/2023/photoononedrive/)，不过因为我后来装依赖装吐了遂用go重写了整个程序。因此，我要面临的问题是，我要怎么在go中完成图片格式的转换？{% emoji blobcat blobcatthink %}

为了偷懒，我直接用Imagick了，反正它发行了apt软件包，安装也不费事{% emoji blobcat blobcatbox %}

- 为与外部Imagick交互，我使用了[gographics/imagick](https://github.com/gographics/imagick)库来处理
- 为与之前的程序兼容，我打算在「返回本地文件」处做文章

{% image https://onep.hzchu.top/mount/pic/myself/2024/06/666432881daf3.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/06/666432881daf3.png %}

## 完善程序

```go 图片转换函数
func TransformImage(inputPath string, outputFormat string, quality uint) (string, error) {
	// logrus.Info(inputPath, outputFormat)
	if outputFormat == "" {
		return inputPath, nil
	}

	// 构造新的文件路径
    // 文件命名：原始文件名_质量.格式
	newPath := filepath.Join("transformed", strings.Replace(inputPath, filepath.Ext(inputPath), "_"+strconv.Itoa(int(quality))+"."+outputFormat, 1))
	dir := filepath.Dir(newPath)
	err := os.MkdirAll(dir, 0755)
	checkErr(err)
	// 如果文件已经存在，返回现有的路径
	if _, err := os.Stat(newPath); err == nil {
		return newPath, nil
	}

	// 初始化
	imagick.Initialize()
	defer imagick.Terminate()
	mw := imagick.NewMagickWand()
	defer mw.Destroy()

	// 读取原始图像
	err = mw.ReadImage(inputPath)
	checkErr(err)

	// 获取原始图像的色彩空间和色彩深度
	//originalColorspace := mw.GetImageColorspace()
	//originalDepth := mw.GetImageDepth()
	//logrus.Info("originalColorspace:", originalColorspace, "originalDepth:", originalDepth)
    
	// 设置新的格式
	err = mw.SetImageFormat(outputFormat)
	checkErr(err)

	// 在转换格式后，恢复原始图像的色彩空间和色彩深度
	// err = mw.SetImageColorspace(originalColorspace)
	// checkErr(err)
	// err = mw.SetImageDepth(originalDepth)
	// checkErr(err)

	// 设置图片质量
	err = mw.SetImageCompressionQuality(quality)
	checkErr(err)

	// 写入新图像
	err = mw.WriteImage(newPath)
	checkErr(err)
	// logrus.Info(newPath)

	return newPath, nil
}
```

{% note 注意 需开启CGO color:red %}

```go 清除缓存函数
func delCache() {
	tmp_size := getDirectorySize("tmp")
	transformedtmp_size := getDirectorySize("transformed")
	if tmp_size > 5368709120 {
		clearOldFiles("tmp", 60)
		logrus.Info("tmp folder cleaned")
	}
	if transformedtmp_size > 5368709120 {
		clearOldFiles("transformed", 30)
		logrus.Info("transformed folder cleaned")
	}
}
```

```go 主路由函数
func nodeReturnFile(c *gin.Context) {
	...
	fmt := c.Query("fmt")
	quality, _ := strconv.ParseUint(c.Query("q"), 10, 32)

	if quality == 0 {
		quality = 95
	}
	...
	transformedpath, err := TransformImage(cachePath, fmt, uint(quality))
	checkErr(err)
	extstatus, extype := getContentType(filepath.Ext(transformedpath))
	if extstatus {
		c.Header("Content-Type", extype)
	}
	c.File(transformedpath)
	return
}
```

## 效果对比

右下查看源文件

{% grid bg:card %}

**原图（jpg,3.32MB）**

{% image https://onep.hzchu.top/mount/pic/myself/2024/06/66640ec45f704.jpg 压缩比：100%(～￣▽￣)～ download:https://onep.hzchu.top/mount/pic/myself/2024/06/66640ec45f704.jpg %}

<!-- cell -->

**AVIF（185KB,avif时质量参数无效）**

{% image https://onep.hzchu.top/mount/pic/myself/2024/06/66640ec45f704.jpg?fmt=avif 压缩比：5.52% download:https://onep.hzchu.top/mount/pic/myself/2024/06/66640ec45f704.jpg?fmt=avif %}

<!-- cell -->

**WEBP（925KB,q=95%）**

{% image https://onep.hzchu.top/mount/pic/myself/2024/06/66640ec45f704.jpg?fmt=webp 压缩比：27.26% download:https://onep.hzchu.top/mount/pic/myself/2024/06/66640ec45f704.jpg?fmt=webp %}

<!-- cell -->

**WEBP（925KB,q=50%）**

{% image https://onep.hzchu.top/mount/pic/myself/2024/06/66640ec45f704.jpg?fmt=webp&q=50 压缩比：7.28% download:https://onep.hzchu.top/mount/pic/myself/2024/06/66640ec45f704.jpg?fmt=webp&q=50 %}

<!-- cell -->

**HEIF（1.43MB,q=95%）**

{% image https://onep.hzchu.top/mount/pic/myself/2024/06/66640ec45f704.jpg?fmt=heif 压缩比：43.24% download:https://onep.hzchu.top/mount/pic/myself/2024/06/66640ec45f704.jpg?fmt=heif %}

<!-- cell -->

**HEIF（402KB,q=50%）**

{% image https://onep.hzchu.top/mount/pic/myself/2024/06/66640ec45f704.jpg?fmt=heif&q=50 压缩比：11.86% download:https://onep.hzchu.top/mount/pic/myself/2024/06/66640ec45f704.jpg?fmt=heif&q=50 %}

{% endgrid %}

{% grid bg:card %}

**原图（WEBP,334KB,q=100%）**

{% image https://onep.hzchu.top/mount/pic/2023/07/16/64b3d29485703.webp 压缩比：100%(～￣▽￣)～ download:https://onep.hzchu.top/mount/pic/2023/07/16/64b3d29485703.webp %}

<!-- cell -->

**AVIF（120KB,avif时质量参数无效）**

{% image https://onep.hzchu.top/mount/pic/2023/07/16/64b3d29485703.webp?fmt=avif 压缩比：36.90% download:https://onep.hzchu.top/mount/pic/2023/07/16/64b3d29485703.webp?fmt=avif %}

<!-- cell -->

**WEBP（130KB,q=50%）**

{% image https://onep.hzchu.top/mount/pic/2023/07/16/64b3d29485703.webp?fmt=webp&q=50 压缩比：39.28% download:https://onep.hzchu.top/mount/pic/2023/07/16/64b3d29485703.webp?fmt=webp&q=50 %}

{% endgrid %}

## 前端处理

为了照顾不支持avif的浏览器，我打算直接在前端处理，替换为.webp或原始文件

```javascript 不太漂亮，大佬轻喷
document.addEventListener('DOMContentLoaded', function() {
    // 从页面中提取第一个AVIF图片链接
    // function getFirstPictureUrl(type) {
    //   const images = document.querySelectorAll('img');
    //   for (let img of images) {
    //     if (img.getAttribute("data-src") && img.getAttribute("data-src").includes('fmt=',type)) {
    //       return img.getAttribute("data-src");
    //     }
    //   }
    //   return null;
    // }
  
    // 检测浏览器是否支持AVIF格式
    function supportCheck(type, url) {
      return new Promise(resolve => {
        // 先从localStorage中获取结果
        const result = localStorage.getItem("support_" + type);
        if (result !== null) {
          // 如果结果存在，就直接返回
          console.log(type, "support status loaded from localStorage:", result === "true");
          resolve(result === "true");
        } else {
          // 如果结果不存在，就进行检测
          const image = new Image();
          image.src = url;
          image.onload = () => {
            console.log(type, "supported");
            // 将结果保存到localStorage
            localStorage.setItem("support_" + type, "true");
            resolve(true);
          };
          image.onerror = () => {
            console.log(type, "not supported");
            // 将结果保存到localStorage
            localStorage.setItem("support_" + type, "false");
            // 显示提示消息
            hud.toast(`当前浏览器不支持使用${type}，已降级为使用其他格式`, 2500);
            resolve(false);
          };
        }
      });
    }
    
  
    // 替换图片URL中的avif为webp
    function replacepicture(from, to) {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        let attr = img.src.startsWith('data') ? 'data-src' : 'src';
        if (img.getAttribute(attr) && img.getAttribute(attr).includes('fmt=' + from)) {
          if (to == "") {
            console.log("Replacing ", from, " with origin ext for image:", img.getAttribute(attr));
            img.setAttribute(attr, img.getAttribute(attr).replace('fmt=' + from, ''));
          } else {
            console.log("Replacing ", from, " with ", to, " for image:", img.getAttribute(attr));
            img.setAttribute(attr, img.getAttribute(attr).replace('fmt=' + from, 'fmt=' + to));
          }
        }
      });
    }
    
  
    const firstAvifUrl = "/img/check/status.avif"; // 第一个AVIF图片链接
    if (firstAvifUrl) {
      // 使用第一个AVIF图片链接进行检测
      supportCheck("AVIF",firstAvifUrl).then(supported => {
        if (!supported) {
            replacepicture("avif","webp");
            const firstWebpUrl = "/img/check/status.webp"; // 第一个WEBP图片链接
            supportCheck("WEBP",firstWebpUrl).then(supported => {
                if (!supported) {
                    // hud.toast("当前浏览器不支持使用webp，已降级为使用原始图片", 2500);
                    // replacepicture("webp","");
                    replacepicture("webp","png");
                }else{
                    console.log("Webp images will be used.");
                }
            });
        } else {
          console.log("AVIF images will be used.");
        }
      });
    } else {
      console.log("No AVIF images found on the page.");
    }
  });
```

基于[@Heo](https://blog.zhheo.com/p/6a933575.html)修改，支持了懒加载及stellar的toast，facybox还有点问题{% emoji blobcat blobcatfacepalm %}

## 迁移工作

使用vscode进行正则替换：`(https://onep\.hzchu\.top/.*\.webp)`，`$1?fmt=avif`

{% image https://onep.hzchu.top/mount/pic/myself/2024/06/66652b99e69be.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/06/66652b99e69be.png %}

## 优缺

### 优点

1. 契合先前架构，对以往图片可以直接迁移
2. 提升了使用旧设备访客的体验
3. 配合stellar支持直接查看原图
4. {% del by the way，因为缤纷云也使用`fmt=*`的格式，故该前端代码也可以作用于缤纷云上的图片 %}大意了，它自己支持自动降级导致程序出错{% emoji blobcat blobcatfacepalm %}

### 缺点

1. 增加存储成本。主要是{% wavy 节点端 %}（OD可以忽略不计），按目前的来流程一张图片可能会在本地产生多个副本，使{% u 存储占用翻几番%}

2. 需要外部安装ImageMagick组件，程序不再轻量

3. 在转换为avif过程中，部分图片可观测到部分色彩丢失。不过也可以使用webp替代

   {% image https://onep.hzchu.top/mount/pic/myself/2024/06/66646dd4657ab.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/06/66646dd4657ab.png %}

4. 缓存命名不具备可复用性。但目前不计划添加任何参数，加上数据量小倒也没影响{% emoji blobcat blobcatt %}



## 实际测试

{% image https://onep.hzchu.top/mount/pic/myself/2024/06/66650d94031f6.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/06/66650d94031f6.png Safari15.5(thx appetize.io) %}

{% image https://onep.hzchu.top/mount/pic/myself/2024/06/66651159c2473.png?fmt=avif download:https://onep.hzchu.top/mount/pic/myself/2024/06/66651159c2473.png Chrome69 %}

在旧版本中，程序均能正常运行，但在chrome的旧版本中因stellar的原因无法加载{% emoji blobcat blobcatsadreach %}
