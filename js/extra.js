/* 烟花特效 */
(function webpackUniversalModuleDefinition(root,factory){if(typeof exports==='object'&&typeof module==='object')module.exports=factory();else if(typeof define==='function'&&define.amd)define([],factory);else if(typeof exports==='object')exports["POWERMODE"]=factory();else root["POWERMODE"]=factory()})(this,function(){return(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="";return __webpack_require__(0)})([function(module,exports,__webpack_require__){'use strict';var canvas=document.createElement('canvas');canvas.width=window.innerWidth;canvas.height=window.innerHeight;canvas.style.cssText='position:fixed;top:0;left:0;pointer-events:none;z-index:999999';window.addEventListener('resize',function(){canvas.width=window.innerWidth;canvas.height=window.innerHeight});document.body.appendChild(canvas);var context=canvas.getContext('2d');var particles=[];var particlePointer=0;POWERMODE.shake=true;function getRandom(min,max){return Math.random()*(max-min)+min}function getColor(el){if(POWERMODE.colorful){var u=getRandom(0,360);return'hsla('+getRandom(u-10,u+10)+', 100%, '+getRandom(50,80)+'%, '+1+')'}else{return window.getComputedStyle(el).color}}function getCaret(){var el=document.activeElement;var bcr;if(el.tagName==='TEXTAREA'||(el.tagName==='INPUT'&&el.getAttribute('type')==='text')){var offset=__webpack_require__(1)(el,el.selectionStart);bcr=el.getBoundingClientRect();return{x:offset.left+bcr.left,y:offset.top+bcr.top,color:getColor(el)}}var selection=window.getSelection();if(selection.rangeCount){var range=selection.getRangeAt(0);var startNode=range.startContainer;if(startNode.nodeType===document.TEXT_NODE){startNode=startNode.parentNode}bcr=range.getBoundingClientRect();return{x:bcr.left,y:bcr.top,color:getColor(startNode)}}return{x:0,y:0,color:'transparent'}}function createParticle(x,y,color){return{x:x,y:y,alpha:1,color:color,velocity:{x:-1+Math.random()*2,y:-3.5+Math.random()*2}}}function POWERMODE(){{var caret=getCaret();var numParticles=5+Math.round(Math.random()*10);while(numParticles--){particles[particlePointer]=createParticle(caret.x,caret.y,caret.color);particlePointer=(particlePointer+1)%500}}{if(POWERMODE.shake){var intensity=1+2*Math.random();var x=intensity*(Math.random()>0.5?-1:1);var y=intensity*(Math.random()>0.5?-1:1);document.body.style.marginLeft=x+'px';document.body.style.marginTop=y+'px';setTimeout(function(){document.body.style.marginLeft='';document.body.style.marginTop=''},75)}}};POWERMODE.colorful=false;function loop(){requestAnimationFrame(loop);context.clearRect(0,0,canvas.width,canvas.height);for(var i=0;i<particles.length;++i){var particle=particles[i];if(particle.alpha<=0.1)continue;particle.velocity.y+=0.075;particle.x+=particle.velocity.x;particle.y+=particle.velocity.y;particle.alpha*=0.96;context.globalAlpha=particle.alpha;context.fillStyle=particle.color;context.fillRect(Math.round(particle.x-1.5),Math.round(particle.y-1.5),3,3)}}requestAnimationFrame(loop);module.exports=POWERMODE},function(module,exports){(function(){var properties=['direction','boxSizing','width','height','overflowX','overflowY','borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth','borderStyle','paddingTop','paddingRight','paddingBottom','paddingLeft','fontStyle','fontVariant','fontWeight','fontStretch','fontSize','fontSizeAdjust','lineHeight','fontFamily','textAlign','textTransform','textIndent','textDecoration','letterSpacing','wordSpacing','tabSize','MozTabSize'];var isFirefox=window.mozInnerScreenX!=null;function getCaretCoordinates(element,position,options){var debug=options&&options.debug||false;if(debug){var el=document.querySelector('#input-textarea-caret-position-mirror-div');if(el){el.parentNode.removeChild(el)}}var div=document.createElement('div');div.id='input-textarea-caret-position-mirror-div';document.body.appendChild(div);var style=div.style;var computed=window.getComputedStyle?getComputedStyle(element):element.currentStyle;style.whiteSpace='pre-wrap';if(element.nodeName!=='INPUT')style.wordWrap='break-word';style.position='absolute';if(!debug)style.visibility='hidden';properties.forEach(function(prop){style[prop]=computed[prop]});if(isFirefox){if(element.scrollHeight>parseInt(computed.height))style.overflowY='scroll'}else{style.overflow='hidden'}div.textContent=element.value.substring(0,position);if(element.nodeName==='INPUT')div.textContent=div.textContent.replace(/\s/g,"\u00a0");var span=document.createElement('span');span.textContent=element.value.substring(position)||'.';div.appendChild(span);var coordinates={top:span.offsetTop+parseInt(computed['borderTopWidth']),left:span.offsetLeft+parseInt(computed['borderLeftWidth'])};if(debug){span.style.backgroundColor='#aaa'}else{document.body.removeChild(div)}return coordinates}if(typeof module!="undefined"&&typeof module.exports!="undefined"){module.exports=getCaretCoordinates}else{window.getCaretCoordinates=getCaretCoordinates}}())}])});
POWERMODE.colorful=true;POWERMODE.shake=false;document.body.addEventListener('input',POWERMODE);
/* 运行时间 */
var now=new Date();function createtime(){var grt=new Date("07/8/2021 23:30:00");now.setTime(now.getTime()+250);days=(now-grt)/1000/60/60/24;dnum=Math.floor(days);hours=(now-grt)/1000/60/60-(24*dnum);hnum=Math.floor(hours);if(String(hnum).length==1){hnum="0"+hnum}minutes=(now-grt)/1000/60-(24*60*dnum)-(60*hnum);mnum=Math.floor(minutes);if(String(mnum).length==1){mnum="0"+mnum}seconds=(now-grt)/1000-(24*60*60*dnum)-(60*60*hnum)-(60*mnum);snum=Math.round(seconds);if(String(snum).length==1){snum="0"+snum}document.getElementById("timeDate").innerHTML="已运行&nbsp"+dnum+"&nbsp天";document.getElementById("times").innerHTML=hnum+"&nbsp小时&nbsp"+mnum+"&nbsp分&nbsp"+snum+"&nbsp秒"}setInterval("createtime()",250);
//复制提醒
document.addEventListener('copy',function(){hud.toast("复制成功，转载请注明出处", 2500);})
// link-icon
document.addEventListener('DOMContentLoaded',function(){const links=document.querySelectorAll('article.md-text.content p a, footer.page-footer.footnote a:not(div.sitemap a)');links.forEach(function(link){const parentClasses=['tag-plugin.users-wrap','tag-plugin.sites-wrap','tag-plugin.ghcard','tag-plugin.link.dis-select','tag-plugin.colorful.note','social-wrap.dis-select'];let skip=false;parentClasses.forEach(pc=>{if(link.closest(`div.${pc}`)){skip=true}});if(!skip){const href=link.getAttribute('href');if(href&&(href.startsWith('http')||href.startsWith('/'))){link.innerHTML+=`<span style="white-space: nowrap;" id="link-icon"><svg width=".7em"height=".7em"viewBox="0 0 21 21"xmlns="http://www.w3.org/2000/svg"><path d="m13 3l3.293 3.293l-7 7l1.414 1.414l7-7L21 11V3z"fill="currentColor"/><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"fill="currentColor"></svg></span>`}}})});
// 插入字数统计
document.getElementById("all-posts-count").innerHTML = allpostscount;
document.getElementById("all-post-words").innerHTML = allpostswords;
// 过期提醒
if (gtime_days > 180) {
    document.getElementById('gtime').innerHTML = `<div class="tag-plugin colorful note" color="orange"><div class="title"><strong>提醒</strong></div><div class="body"><p>本文最后更新于 ${gtime_days} 天前，其中某些信息可能已经过时，请谨慎使用！<br>如果发现内容有误，请在评论区告知。</p></div></div>`;
}

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
    

  const firstAvifUrl = "/img/check/status.avif"; // 获取第一个AVIF图片链接
  // 使用第一个AVIF图片链接进行检测
  supportCheck("AVIF", firstAvifUrl).then(supported => {
    if (!supported) {
      replacepicture("avif", "webp");
      const firstWebpUrl = "/img/check/status.webp"; // 获取第一个WEBP图片链接
      supportCheck("WEBP", firstWebpUrl).then(supported => {
        if (!supported) {
          // hud.toast("当前浏览器不支持使用webp，已降级为使用原始图片", 2500);
          // replacepicture("webp","");
          replacepicture("webp", "png");
        } else {
          console.log("Webp images will be used.");
        }
      });
    } else {
      console.log("AVIF images will be used.");
    }
  });

  selectFastNode();
  });

  function selectFastNode(force) {
    console.log('[ONEP,selectFastNode] Running...');
    const selectdisabled = localStorage.getItem('onep.cdn.select.disabled');
    if (selectdisabled) {
      console.log('[ONEP,selectFastNode] Skipping due to select disabled.');
      return;
    }
    const storedData = localStorage.getItem('onep.cdn.nodelist');
    if (storedData) {
      const data = JSON.parse(storedData);
      const now = new Date();
      if (data.link === null && now.getTime() - data.time < 5 * 60 * 1000 && !force) {
        console.log('Skipping due to recent failure to fetch nodes.');
        return;
      } else if (now.getTime() - data.time < 5 * 60 * 1000 && !force) {
        replaceImageSource(data.link);
        return;
      }
    }
  
    const formData = new FormData();
    formData.append('token', 'hzchu.top');
  
    fetch('https://onep.hzchu.top/_api/nodeslist', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      let link = null;
      if (data.nodes && Object.keys(data.nodes).length > 0) {
        link = data.nodes[Object.keys(data.nodes)[0]];
        replaceImageSource(link);
      } else {
        console.log('[ONEP,selectFastNode] Failed to fetch nodes, will skip checks for the next 5 minutes.');
      }
      localStorage.setItem('onep.cdn.nodelist', JSON.stringify({
        link: link,
        time: new Date().getTime()
      }));
    })
    .catch(error => {
      console.error('[ONEP,selectFastNode] Error:', error);
      localStorage.setItem('onep.cdn.nodelist', JSON.stringify({
        link: null,
        time: new Date().getTime()
      }));
    });
    console.log('[ONEP,selectFastNode] Done.');
  }
  
  function replaceImageSource(newLink) {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      let attr = img.src.startsWith('data') ? 'data-src' : 'src';
      if (img.getAttribute(attr) && img.getAttribute(attr).startsWith('https://onep.hzchu.top')) {
        console.log("[ONEP,selectFastNode] Replacing ", img.getAttribute(attr), " with ", newLink);
        img.setAttribute(attr, img.getAttribute(attr).replace('https://onep.hzchu.top', newLink));
      }
    });
  }
  