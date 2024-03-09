---
title: 用Gemini，实现AI摘要
date: 2024-03-09 19:31:16
updated: 2024-03-09 19:31:16
tags: [Blog,Stellar]
cover: https://dolphinsbukets.s3.bitiful.net/article-cover/cover-4.png?fmt=webp
banner: https://dolphinsbukets.s3.bitiful.net/article-cover/cover-4.png?fmt=webp&q=50
description: 使用Cloudflare Worker，借助Gemini，平替TianliGPT
---

## 前言

很久之前，我网上surfing的时候发现好多网站都有「AI摘要」，了解了一下发现是「[TianliGPT](https://docs_s.tianli0.top/)」，好是好，~~但两位数的价格还是打动不了我当时勉强三位数的存款。~~所以，我使用了一种笨方法~~（为了撑场子不考虑太多）~~，手动向「BingAI」发送摘要文本，获取摘要后存储在kv中，通过cfw返回。可行，但太痛苦了（这也是它叫DolGPT的原因之一），前几天看到Gemini开放了api可以免费调用，这不直接起飞{% emoji blobcat ablobcatrainbow %}

{% note color:yellow 注意：Stellar在新版本（1.27.0或者是#88f16fc）中将AI摘要从Post-Abstract-AI改为了Post-Summary-AI，目前暂无计划同步至新版本，在新版中使用需自行修改主题或前端程序代码。 %}

## 获取GEMINI_KEY

首先登录[ai.google.dev](https://ai.google.dev/)，左上角点击`Get API key`，再在中间点`Create API key`，随便选个项目即可

{% folding 没听懂就看图片吧 color:yellow %}
![Snipaste_2024-03-09_10-17-37.webp](https://onep.hzchu.top/mount/pic/2024/03/09/65ec523988ddc.webp)
![Snipaste_2024-03-09_10-18-14.webp](https://onep.hzchu.top/mount/pic/2024/03/09/65ec523fecbfa.webp)
![Snipaste_2024-03-09_10-22-37.webp](https://onep.hzchu.top/mount/pic/2024/03/09/65ec523933f1c.webp)
![Snipaste_2024-03-09_10-23-59.webp](https://onep.hzchu.top/mount/pic/2024/03/09/65ec523a4e8b3.webp)
![Snipaste_2024-03-09_10-22-25.webp](https://onep.hzchu.top/mount/pic/2024/03/09/65ec52371bf18.webp)
{% endfolding %}

## 后端程序

因为Stellar已经配置了TianliGPT的css了，所以我也懒得另起炉灶，直接按TianliGPT的格式返回，所以理论上讲和其它的使用TianliGPT的服务也兼容

仓库：

{% ghcard thun888/ai-summary %}

新建一个`Cloudflare Worker`，复制[/src/index.js](https://github.com/thun888/ai-summary/blob/master/src/index.js)的代码粘贴进去

随后修改环境变量，填入可信来源（即只有这个域名才能调用ai摘要，如不需要可设置为`*`）（`ALLOWED_ORIGINS`）以及你的key（`GEMINI_KEY`）

![1709985925369.webp](https://onep.hzchu.top/mount/pic/2024/03/09/65ec508eb0684.webp)

接着新建一个kv，并绑定到程序上

> kv的名字随意，但**Variable name** 必须为 `KV`

![1709987402272.webp](https://onep.hzchu.top/mount/pic/2024/03/09/65ec565254bdb.webp)

最后可以尝试访问，有输出且刷新不变即为成功

![1709986972903.webp](https://onep.hzchu.top/mount/pic/2024/03/09/65ec54a03e7a9.webp)

{% note color:yellow 该程序只实现了ai摘要生成，对于其他网站矩阵之类的功能，其实自己用哪里要得上这么多功能嘛 %}

## 前端程序修改

{% note color:red 警告：因为一开始使用新版本调试时，遇见了程序原有的bug，所以我干脆滚到了0.13版本进行修改，因此在使用新版本时，极大概率出现问题，自行修改吧 %}

理论上，直接替换summary.tianli0.top为你对应域名即可。

这是我修改后的程序，可以参考

```js /js/tianli_gpt.js
console.log("\n %c Post-Abstract-AI 开源博客文章摘要AI生成工具 %c https://github.com/zhheo/Post-Abstract-AI \n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;")

function tianliGPT(usePjax) {
  var tianliGPTIsRunning = false;

  function insertAIDiv(selector) {
    // 首先移除现有的 "post-TianliGPT" 类元素（如果有的话）
    removeExistingAIDiv();
    
    // 获取目标元素
    const targetElement = document.querySelector(selector);
  
    // 如果没有找到目标元素，不执行任何操作
    if (!targetElement) {
      return;
    }
  
    // 创建要插入的HTML元素
    const aiDiv = document.createElement('div');
    aiDiv.className = 'post-TianliGPT';
  
    const aiTitleDiv = document.createElement('div');
    aiTitleDiv.className = 'tianliGPT-title';
    aiDiv.appendChild(aiTitleDiv);
  
    const aiIcon = document.createElement('i');
    aiIcon.className = 'tianliGPT-title-icon';
    aiTitleDiv.appendChild(aiIcon);
  
    // 插入 SVG 图标
    aiIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48px" height="48px" viewBox="0 0 48 48">
    <title>机器人</title>
    <g id="&#x673A;&#x5668;&#x4EBA;" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <path d="M34.717885,5.03561087 C36.12744,5.27055371 37.079755,6.60373651 36.84481,8.0132786 L35.7944,14.3153359 L38.375,14.3153359 C43.138415,14.3153359 47,18.1768855 47,22.9402569 L47,34.4401516 C47,39.203523 43.138415,43.0650727 38.375,43.0650727 L9.625,43.0650727 C4.861585,43.0650727 1,39.203523 1,34.4401516 L1,22.9402569 C1,18.1768855 4.861585,14.3153359 9.625,14.3153359 L12.2056,14.3153359 L11.15519,8.0132786 C10.920245,6.60373651 11.87256,5.27055371 13.282115,5.03561087 C14.69167,4.80066802 16.024865,5.7529743 16.25981,7.16251639 L17.40981,14.0624532 C17.423955,14.1470924 17.43373,14.2315017 17.43948,14.3153359 L30.56052,14.3153359 C30.56627,14.2313867 30.576045,14.1470924 30.59019,14.0624532 L31.74019,7.16251639 C31.975135,5.7529743 33.30833,4.80066802 34.717885,5.03561087 Z M38.375,19.4902885 L9.625,19.4902885 C7.719565,19.4902885 6.175,21.0348394 6.175,22.9402569 L6.175,34.4401516 C6.175,36.3455692 7.719565,37.89012 9.625,37.89012 L38.375,37.89012 C40.280435,37.89012 41.825,36.3455692 41.825,34.4401516 L41.825,22.9402569 C41.825,21.0348394 40.280435,19.4902885 38.375,19.4902885 Z M14.8575,23.802749 C16.28649,23.802749 17.445,24.9612484 17.445,26.3902253 L17.445,28.6902043 C17.445,30.1191812 16.28649,31.2776806 14.8575,31.2776806 C13.42851,31.2776806 12.27,30.1191812 12.27,28.6902043 L12.27,26.3902253 C12.27,24.9612484 13.42851,23.802749 14.8575,23.802749 Z M33.1425,23.802749 C34.57149,23.802749 35.73,24.9612484 35.73,26.3902253 L35.73,28.6902043 C35.73,30.1191812 34.57149,31.2776806 33.1425,31.2776806 C31.71351,31.2776806 30.555,30.1191812 30.555,28.6902043 L30.555,26.3902253 C30.555,24.9612484 31.71351,23.802749 33.1425,23.802749 Z" id="&#x5F62;&#x72B6;&#x7ED3;&#x5408;" fill="#444444" fill-rule="nonzero"></path>
    </g>
    </svg>`;
  
    const aiTitleTextDiv = document.createElement('div');
    aiTitleTextDiv.className = 'tianliGPT-title-text';
    aiTitleTextDiv.textContent = 'AI摘要';
    aiTitleDiv.appendChild(aiTitleTextDiv);
  
    const aiTagDiv = document.createElement('div');
    aiTagDiv.className = 'tianliGPT-tag';
    aiTagDiv.id = 'tianliGPT-tag';
    aiTagDiv.textContent = 'Gemini';
    aiTitleDiv.appendChild(aiTagDiv);
  
    const aiExplanationDiv = document.createElement('div');
    aiExplanationDiv.className = 'tianliGPT-explanation';
    aiExplanationDiv.innerHTML = '生成中...' + '<span class="blinking-cursor"></span>';
    aiDiv.appendChild(aiExplanationDiv); // 将 tianliGPT-explanation 插入到 aiDiv，而不是 aiTitleDiv
  
    // 将创建的元素插入到目标元素的顶部
    targetElement.insertBefore(aiDiv, targetElement.firstChild);
  }
  
  function removeExistingAIDiv() {
    // 查找具有 "post-TianliGPT" 类的元素
    const existingAIDiv = document.querySelector(".post-TianliGPT");
  
    // 如果找到了这个元素，就从其父元素中删除它
    if (existingAIDiv) {
      existingAIDiv.parentElement.removeChild(existingAIDiv);
    }
  }
  
  var tianliGPT = {
    //读取文章中的所有文本
    getTitleAndContent: function() {
      try {
        const title = document.title;
        const container = document.querySelector(tianliGPT_postSelector);
        if (!container) {
          console.warn('[Gemini]找不到文章容器。请尝试将引入的代码放入到文章容器之后。如果本身没有打算使用摘要功能可以忽略此提示。');
          return '';
        }
        const paragraphs = container.getElementsByTagName('p');
        const headings = container.querySelectorAll('h1, h2, h3, h4, h5');
        let content = '';
    
        for (let h of headings) {
          content += h.innerText + ' ';
        }
    
        for (let p of paragraphs) {
          // 移除包含'http'的链接
          const filteredText = p.innerText.replace(/https?:\/\/[^\s]+/g, '');
          content += filteredText;
        }
    
        const combinedText = title + ' ' + content;
        let wordLimit = 1000;
        if (typeof tianliGPT_wordLimit !== "undefined") {
          wordLimit = tianliGPT_wordLimit;
        }
        const truncatedText = combinedText.slice(0, wordLimit).replace('本文采用 署名-非商业性使用-相同方式共享 4.0 国际 许可协议，转载请注明出处。', '');
        return truncatedText;
      } catch (e) {
        console.error('[Gemini]错误：可能由于一个或多个错误导致没有正常运行，原因出在获取文章容器中的内容失败，或者可能是在文章转换过程中失败。', e);
        return '';
      }
    },
    
    fetchTianliGPT: async function(content) {
      if (!tianliGPT_key) {
        return "没有获取到key，代码可能没有安装正确。如果你需要在tianli_gpt文件引用前定义tianliGPT_key变量。详细请查看文档。";
      }
    
      if (tianliGPT_key === "5Q5mpqRK5DkwT1X9Gi5e") {
        return "请购买 key 使用，如果你能看到此条内容，则说明代码安装正确。";
      }
      
      var currentPath = window.location.pathname;
      var url = "https://blog.hzchu.top" + currentPath;
      if (currentPath === "/friends/") {
        return "欢迎各位申请友链~";
      }
      //禁用的路径
      disablePaths = ["/big/"];
      if (disablePaths.includes(currentPath)) {
        document.querySelectorAll('.post-TianliGPT').forEach(el => {
          el.style.display = 'none';
        })
        return
      }
      // use get method to avoid CORS check
      const apiUrl = `https://dolgpt.hzchu.top/?content=${encodeURIComponent(content)}&key=${encodeURIComponent(tianliGPT_key)}&url=${encodeURIComponent(url)}`;
      const timeout = 20000; // 设置超时时间（毫秒）

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);
        const response = await fetch(apiUrl, { signal: controller.signal });
        if (response.ok) {
          const data = await response.json();
          if (data["summary"].startsWith("当前文章")){
            tianliGPT_typingAnimate = false;
          }
          return data.summary;
        } else {
          if (response.status === 402) {
            document.querySelectorAll('.post-TianliGPT').forEach(el => {
              el.style.display = 'none';
            });
          }
          throw new Error('[Gemini]余额不足，请充值后请求新的文章');
        }
      } catch (error) {
          if (error.name === 'AbortError') {
              if (window.location.hostname === 'localhost') {
                  console.warn('警告：请勿在本地主机上测试 API 密钥。');
                  return '获取文章摘要超时。请勿在本地主机上测试 API 密钥。';
              } else {
                  console.error('请求超时');
                  return '获取文章摘要超时。当你出现这个问题时，可能是key或者绑定的域名不正确。也可能是因为文章过长导致的 AI 运算量过大，您可以稍等一下然后刷新页面重试。';
              }
          } else {
              console.error('请求失败：', error);
              return '获取文章摘要失败，请稍后再试。';
          }
      }
    },
    
  
    aiShowAnimation: function (text) {
      const element = document.querySelector(".tianliGPT-explanation");
      if (!element) {
        return;
      }
  
      if (tianliGPTIsRunning) {
        return;
      }
  
      // 检查用户是否已定义tianliGPT_typingAnimate并且其值为false
      if (typeof tianliGPT_typingAnimate !== "undefined" && !tianliGPT_typingAnimate) {
        // 如果用户已定义tianliGPT_typingAnimate并且其值为false，则立即显示完整文本
        element.innerHTML = text;
        return;
      }
  
      tianliGPTIsRunning = true;
      const typingDelay = 25;
      const waitingTime = 1000;
      const punctuationDelayMultiplier = 6;
  
      element.style.display = "block";
      element.innerHTML = "生成中..." + '<span class="blinking-cursor"></span>';
  
      let animationRunning = true;
      let currentIndex = 0;
      let initialAnimation = true;
      let lastUpdateTime = performance.now();
  
      const animate = () => {
        if (currentIndex < text.length && animationRunning) {
          const currentTime = performance.now();
          const timeDiff = currentTime - lastUpdateTime;
  
          const letter = text.slice(currentIndex, currentIndex + 1);
          const isPunctuation = /[，。！、？,.!?]/.test(letter);
          const delay = isPunctuation ? typingDelay * punctuationDelayMultiplier : typingDelay;
  
          if (timeDiff >= delay) {
            element.innerText = text.slice(0, currentIndex + 1);
            lastUpdateTime = currentTime;
            currentIndex++;
  
            if (currentIndex < text.length) {
              element.innerHTML =
                text.slice(0, currentIndex) +
                '<span class="blinking-cursor"></span>';
            } else {
              element.innerHTML = text;
              element.style.display = "block";
              tianliGPTIsRunning = false;
              observer.disconnect();// 暂停监听
            }
          }
          requestAnimationFrame(animate);
        }
      }
  
      // 使用IntersectionObserver对象优化ai离开视口后暂停的业务逻辑，提高性能
      const observer = new IntersectionObserver((entries) => {
        let isVisible = entries[0].isIntersecting;
        animationRunning = isVisible; // 标志变量更新
        if (animationRunning && initialAnimation) {
          setTimeout(() => {
            requestAnimationFrame(animate);
          }, 200);
        }
      }, { threshold: 0 });
      let post_ai = document.querySelector('.post-TianliGPT');
      observer.observe(post_ai);//启动新监听
  
    },
  }
  
  function runTianliGPT() {
    insertAIDiv(tianliGPT_postSelector);
    const content = tianliGPT.getTitleAndContent();
    if (content) {
      console.log('[Gemini]本次提交的内容为：' + content);
      // 获取字数
      wordcount = content.length;
      console.log('[Gemini]本次提交的字数为：' + wordcount);
    }
    tianliGPT.fetchTianliGPT(content).then(summary => {
      tianliGPT.aiShowAnimation(summary);
    })
  }
  
  function checkURLAndRun() {
    if (typeof tianliGPT_postURL === "undefined") {
      runTianliGPT(); // 如果没有设置自定义 URL，则直接执行 runTianliGPT() 函数
      return;
    }
  
    try {
      const wildcardToRegExp = (s) => {
        return new RegExp('^' + s.split(/\*+/).map(regExpEscape).join('.*') + '$');
      };
  
      const regExpEscape = (s) => {
        return s.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
      };
  
      const urlPattern = wildcardToRegExp(tianliGPT_postURL);
      const currentURL = window.location.href;
  
      if (urlPattern.test(currentURL)) {
        runTianliGPT(); // 如果当前 URL 符合用户设置的 URL，则执行 runTianliGPT() 函数
      } else {
        console.log("Gemini：因为不符合自定义的链接规则，我决定不执行摘要功能。");
      }
    } catch (error) {
      console.error("Gemini：我没有看懂你编写的自定义链接规则，所以我决定不执行摘要功能", error);
    }
  }
  
  if (usePjax) {
    checkURLAndRun();
  }else {
    document.addEventListener("DOMContentLoaded", function () {
      checkURLAndRun();
    });
  }
  
}


tianliGPT(false);

document.addEventListener('pjax:complete', function () {
  tianliGPT(true);
})
```

在日后合并到新版本后，我打算再支持下语音朗读，目前计划是用谷歌翻译的接口来实现，用我自己之前留下来的服务的话向`gtts-api.hzchu.top/?text=xxx`发送请求即可（目前无CORS限制）

## 效果演示

![1709988135166.webp](https://onep.hzchu.top/mount/pic/2024/03/09/65ec592aba762.webp)

## 结语

其表现我个人感觉跌宕起伏，有时不如ChatGPT，有时有吊打Bing，反正免费的要什么自行车{% emoji blobcat blobcatmeltthumb %}

记得之前看还叫Bard，还不支持中文，没想到现在这么厉害了{% emoji blobcat ablobcatreachrev %}

文章一时兴起写的，截了一堆素材没用上，以后再润色下
