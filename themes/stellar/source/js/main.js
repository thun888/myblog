console.log('hexo-theme-stellar:\n' + stellar.github);
// utils
const util = {

  // https://github.com/jerryc127/hexo-theme-butterfly
  diffDate: (d, more = false) => {
    const dateNow = new Date()
    const datePost = new Date(d)
    const dateDiff = dateNow.getTime() - datePost.getTime()
    const minute = 1000 * 60
    const hour = minute * 60
    const day = hour * 24
    const month = day * 30

    let result
    if (more) {
      const monthCount = dateDiff / month
      const dayCount = dateDiff / day
      const hourCount = dateDiff / hour
      const minuteCount = dateDiff / minute

      if (monthCount > 12) {
        result = null
      } else if (monthCount >= 1) {
        result = parseInt(monthCount) + ' ' + stellar.config.date_suffix.month
      } else if (dayCount >= 1) {
        result = parseInt(dayCount) + ' ' + stellar.config.date_suffix.day
      } else if (hourCount >= 1) {
        result = parseInt(hourCount) + ' ' + stellar.config.date_suffix.hour
      } else if (minuteCount >= 1) {
        result = parseInt(minuteCount) + ' ' + stellar.config.date_suffix.min
      } else {
        result = stellar.config.date_suffix.just
      }
    } else {
      result = parseInt(dateDiff / day)
    }
    return result
  },

  copy: (id, msg) => {
    const el = document.getElementById(id);
    if (el) {
      el.select();
      document.execCommand("Copy");
      if (msg && msg.length > 0) {
        hud.toast(msg);
      }
    }
  },

  toggle: (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.classList.toggle("display");
    }
  },
}

const hud = {
  toast: (msg, duration) => {
    duration = isNaN(duration) ? 2000 : duration;
    var el = document.createElement('div');
    el.classList.add('toast');
    el.innerHTML = msg;
    document.body.appendChild(el);
    setTimeout(function () {
      var d = 0.5;
      el.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
      el.style.opacity = '0';
      setTimeout(function () { document.body.removeChild(el) }, d * 1000);
    }, duration);
  },

}

// defines

const l_body = document.querySelector('.l_body');

const sidebar = {
  toggle: () => {
    if (l_body) {
      l_body.classList.add('mobile');
      l_body.classList.toggle("sidebar");
    }
  }
}

const init = {
  toc: () => {
    stellar.jQuery(() => {
      const scrollOffset = 32;
      var segs = [];
      $("article.md :header").each(function (idx, node) {
        segs.push(node)
      });
      // 滚动
      $(document, window).scroll(function (e) {
        var scrollTop = $(this).scrollTop();
        var topSeg = null
        for (var idx in segs) {
          var seg = $(segs[idx])
          if (seg.offset().top > scrollTop + scrollOffset) {
            continue
          }
          if (!topSeg) {
            topSeg = seg
          } else if (seg.offset().top >= topSeg.offset().top) {
            topSeg = seg
          }
        }
        if (topSeg) {
          $("#toc a.toc-link").removeClass("active")
          var link = "#" + topSeg.attr("id")
          if (link != '#undefined') {
            $('#toc a.toc-link[href="' + encodeURI(link) + '"]').addClass("active")
          } else {
            $('#toc a.toc-link:first').addClass("active")
          }
        }
      })
    })
  },
  sidebar: () => {
    stellar.jQuery(() => {
      $("#toc a.toc-link").click(function (e) {
        l_body.classList.remove("sidebar");
      });
    })
  },
  relativeDate: (selector) => {
    selector.forEach(item => {
      const $this = item
      const timeVal = $this.getAttribute('datetime')
      let relativeValue = util.diffDate(timeVal, true)
      if (relativeValue) {
        $this.innerText = relativeValue
      }
    })
  },
  /**
   * Tabs tag listener (without twitter bootstrap).
   */
  registerTabsTag: function () {
    // Binding `nav-tabs` & `tab-content` by real time permalink changing.
    document.querySelectorAll('.tabs ul.nav-tabs .tab').forEach(element => {
      element.addEventListener('click', event => {
        event.preventDefault();
        // Prevent selected tab to select again.
        if (element.classList.contains('active')) return;
        // Add & Remove active class on `nav-tabs` & `tab-content`.
        [...element.parentNode.children].forEach(target => {
          target.classList.toggle('active', target === element);
        });
        // https://stackoverflow.com/questions/20306204/using-queryselector-with-ids-that-are-numbers
        const tActive = document.getElementById(element.querySelector('a').getAttribute('href').replace('#', ''));
        [...tActive.parentNode.children].forEach(target => {
          target.classList.toggle('active', target === tActive);
        });
        // Trigger event
        tActive.dispatchEvent(new Event('tabs:click', {
          bubbles: true
        }));
      });
    });

    window.dispatchEvent(new Event('tabs:register'));
  },

}


// init
init.toc()
init.sidebar()
init.relativeDate(document.querySelectorAll('#post-meta time'))
init.registerTabsTag()

// scrollreveal
if (stellar.plugins.scrollreveal) {
  stellar.loadScript(stellar.plugins.scrollreveal.js).then(function () {
    ScrollReveal().reveal("body .reveal", {
      distance: stellar.plugins.scrollreveal.distance,
      duration: stellar.plugins.scrollreveal.duration,
      interval: stellar.plugins.scrollreveal.interval,
      scale: stellar.plugins.scrollreveal.scale,
      easing: "ease-out"
    });
  })
}

// lazyload
if (stellar.plugins.lazyload) {
  stellar.loadScript(stellar.plugins.lazyload.js, { defer: true })
  // https://www.npmjs.com/package/vanilla-lazyload
  // Set the options globally
  // to make LazyLoad self-initialize
  window.lazyLoadOptions = {
    elements_selector: ".lazy",
  };
  // Listen to the initialization event
  // and get the instance of LazyLoad
  window.addEventListener(
    "LazyLoad::Initialized",
    function (event) {
      window.lazyLoadInstance = event.detail.instance;
    },
    false
  );
  document.addEventListener('DOMContentLoaded', function () {
    lazyLoadInstance.update();
  });
}

// issuesjs
if (stellar.plugins.sitesjs) {
  const issues_api = document.getElementById('sites-api');
  if (issues_api != undefined) {
    stellar.jQuery(() => {
      stellar.loadScript(stellar.plugins.sitesjs, { defer: true })
    })
  }
}
if (stellar.plugins.friendsjs) {
  const issues_api = document.getElementById('friends-api');
  if (issues_api != undefined) {
    stellar.jQuery(() => {
      stellar.loadScript(stellar.plugins.friendsjs, { defer: true })
    })
  }
}

// swiper
if (stellar.plugins.swiper) {
  const swiper_api = document.getElementById('swiper-api');
  if (swiper_api != undefined) {
    stellar.loadCSS(stellar.plugins.swiper.css);
    stellar.loadScript(stellar.plugins.swiper.js, { defer: true }).then(function () {
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    })
  }
}

// preload
if (stellar.plugins.preload) {
  if (stellar.plugins.preload.service == 'instant_page') {
    stellar.loadScript(stellar.plugins.preload.instant_page, {
      defer: true,
      type: 'module',
      integrity: 'sha384-OeDn4XE77tdHo8pGtE1apMPmAipjoxUQ++eeJa6EtJCfHlvijigWiJpD7VDPWXV1'
    })
  } else if (stellar.plugins.preload.service == 'flying_pages') {
    window.FPConfig = {
      delay: 0,
      ignoreKeywords: [],
      maxRPS: 5,
      hoverDelay: 25
    };
    stellar.loadScript(stellar.plugins.preload.flying_pages, { defer: true })
  }
}

// fancybox
if (stellar.plugins.fancybox) {
  let selector = 'img[fancybox]:not(.error)';
  if (stellar.plugins.fancybox.selector) {
    selector += `, ${stellar.plugins.fancybox.selector}`
  }
  if (document.querySelectorAll(selector).length !== 0) {
    stellar.loadCSS(stellar.plugins.fancybox.css);
    stellar.loadScript(stellar.plugins.fancybox.js, { defer: true }).then(function () {
      Fancybox.bind(selector, {
        groupAll: true,
        hideScrollbar: false,
        Thumbs: {
          autoStart: false,
        },
        caption: function (fancybox, carousel, slide) {
          return slide.$trigger.alt || null
        }
      });
    })
  }
}

// heti
if (stellar.plugins.heti) {
  stellar.loadCSS(stellar.plugins.heti.css);
  stellar.loadScript(stellar.plugins.heti.js, { defer: true }).then(function () {
    const heti = new Heti('.heti');
    
    // Copied from heti.autoSpacing() without DOMContentLoaded.
    // https://github.com/sivan/heti/blob/eadee6a3b748b3b7924a9e7d5b395d4bce479c9a/js/heti-addon.js
    //
    // We managed to minimize the code modification to ensure .autoSpacing()
    // is synced with upstream; therefore, we use `.bind()` to emulate the 
    // behavior of .autoSpacing() so we can even modify almost no code.
    void (function () {
      const $$rootList = document.querySelectorAll(this.rootSelector)

      for (let $$root of $$rootList) {
        this.spacingElement($$root)
      }
    }).bind(heti)();

    stellar.plugins.heti.enable = false;
  });
}


/* 烟花特效 */
(function webpackUniversalModuleDefinition(root,factory){if(typeof exports==='object'&&typeof module==='object')module.exports=factory();else if(typeof define==='function'&&define.amd)define([],factory);else if(typeof exports==='object')exports["POWERMODE"]=factory();else root["POWERMODE"]=factory()})(this,function(){return(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="";return __webpack_require__(0)})([function(module,exports,__webpack_require__){'use strict';var canvas=document.createElement('canvas');canvas.width=window.innerWidth;canvas.height=window.innerHeight;canvas.style.cssText='position:fixed;top:0;left:0;pointer-events:none;z-index:999999';window.addEventListener('resize',function(){canvas.width=window.innerWidth;canvas.height=window.innerHeight});document.body.appendChild(canvas);var context=canvas.getContext('2d');var particles=[];var particlePointer=0;POWERMODE.shake=true;function getRandom(min,max){return Math.random()*(max-min)+min}function getColor(el){if(POWERMODE.colorful){var u=getRandom(0,360);return'hsla('+getRandom(u-10,u+10)+', 100%, '+getRandom(50,80)+'%, '+1+')'}else{return window.getComputedStyle(el).color}}function getCaret(){var el=document.activeElement;var bcr;if(el.tagName==='TEXTAREA'||(el.tagName==='INPUT'&&el.getAttribute('type')==='text')){var offset=__webpack_require__(1)(el,el.selectionStart);bcr=el.getBoundingClientRect();return{x:offset.left+bcr.left,y:offset.top+bcr.top,color:getColor(el)}}var selection=window.getSelection();if(selection.rangeCount){var range=selection.getRangeAt(0);var startNode=range.startContainer;if(startNode.nodeType===document.TEXT_NODE){startNode=startNode.parentNode}bcr=range.getBoundingClientRect();return{x:bcr.left,y:bcr.top,color:getColor(startNode)}}return{x:0,y:0,color:'transparent'}}function createParticle(x,y,color){return{x:x,y:y,alpha:1,color:color,velocity:{x:-1+Math.random()*2,y:-3.5+Math.random()*2}}}function POWERMODE(){{var caret=getCaret();var numParticles=5+Math.round(Math.random()*10);while(numParticles--){particles[particlePointer]=createParticle(caret.x,caret.y,caret.color);particlePointer=(particlePointer+1)%500}}{if(POWERMODE.shake){var intensity=1+2*Math.random();var x=intensity*(Math.random()>0.5?-1:1);var y=intensity*(Math.random()>0.5?-1:1);document.body.style.marginLeft=x+'px';document.body.style.marginTop=y+'px';setTimeout(function(){document.body.style.marginLeft='';document.body.style.marginTop=''},75)}}};POWERMODE.colorful=false;function loop(){requestAnimationFrame(loop);context.clearRect(0,0,canvas.width,canvas.height);for(var i=0;i<particles.length;++i){var particle=particles[i];if(particle.alpha<=0.1)continue;particle.velocity.y+=0.075;particle.x+=particle.velocity.x;particle.y+=particle.velocity.y;particle.alpha*=0.96;context.globalAlpha=particle.alpha;context.fillStyle=particle.color;context.fillRect(Math.round(particle.x-1.5),Math.round(particle.y-1.5),3,3)}}requestAnimationFrame(loop);module.exports=POWERMODE},function(module,exports){(function(){var properties=['direction','boxSizing','width','height','overflowX','overflowY','borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth','borderStyle','paddingTop','paddingRight','paddingBottom','paddingLeft','fontStyle','fontVariant','fontWeight','fontStretch','fontSize','fontSizeAdjust','lineHeight','fontFamily','textAlign','textTransform','textIndent','textDecoration','letterSpacing','wordSpacing','tabSize','MozTabSize'];var isFirefox=window.mozInnerScreenX!=null;function getCaretCoordinates(element,position,options){var debug=options&&options.debug||false;if(debug){var el=document.querySelector('#input-textarea-caret-position-mirror-div');if(el){el.parentNode.removeChild(el)}}var div=document.createElement('div');div.id='input-textarea-caret-position-mirror-div';document.body.appendChild(div);var style=div.style;var computed=window.getComputedStyle?getComputedStyle(element):element.currentStyle;style.whiteSpace='pre-wrap';if(element.nodeName!=='INPUT')style.wordWrap='break-word';style.position='absolute';if(!debug)style.visibility='hidden';properties.forEach(function(prop){style[prop]=computed[prop]});if(isFirefox){if(element.scrollHeight>parseInt(computed.height))style.overflowY='scroll'}else{style.overflow='hidden'}div.textContent=element.value.substring(0,position);if(element.nodeName==='INPUT')div.textContent=div.textContent.replace(/\s/g,"\u00a0");var span=document.createElement('span');span.textContent=element.value.substring(position)||'.';div.appendChild(span);var coordinates={top:span.offsetTop+parseInt(computed['borderTopWidth']),left:span.offsetLeft+parseInt(computed['borderLeftWidth'])};if(debug){span.style.backgroundColor='#aaa'}else{document.body.removeChild(div)}return coordinates}if(typeof module!="undefined"&&typeof module.exports!="undefined"){module.exports=getCaretCoordinates}else{window.getCaretCoordinates=getCaretCoordinates}}())}])});
POWERMODE.colorful=true;POWERMODE.shake=false;document.body.addEventListener('input',POWERMODE);
/* 运行时间 */
var now=new Date();function createtime(){var grt=new Date("08/9/2020 23:30:00");now.setTime(now.getTime()+250);days=(now-grt)/1000/60/60/24;dnum=Math.floor(days);hours=(now-grt)/1000/60/60-(24*dnum);hnum=Math.floor(hours);if(String(hnum).length==1){hnum="0"+hnum}minutes=(now-grt)/1000/60-(24*60*dnum)-(60*hnum);mnum=Math.floor(minutes);if(String(mnum).length==1){mnum="0"+mnum}seconds=(now-grt)/1000-(24*60*60*dnum)-(60*60*hnum)-(60*mnum);snum=Math.round(seconds);if(String(snum).length==1){snum="0"+snum}document.getElementById("timeDate").innerHTML="本站已运行&nbsp"+dnum+"&nbsp天";document.getElementById("times").innerHTML=hnum+"&nbsp小时&nbsp"+mnum+"&nbsp分&nbsp"+snum+"&nbsp秒"}setInterval("createtime()",250);
//弹出隐藏层
function SSearch(show_div){var script=document.createElement("script");script.type="text/javascript";script.src='/js/search.js';document.body.appendChild(script);document.getElementById(show_div).className="ins-search show"};function CSearch(show_div){document.getElementById(show_div).className="ins-search"};
//复制提醒
document.addEventListener('copy',function(){var notyf=new Notyf({duration:1500,position:{x:'right',y:'top',},});notyf.success('复制成功，转载请注明出处。');
})

/* 搜索内最近文章 */
var recent = document.getElementsByClassName('widget-body fs14')[1];
document.getElementById('local-search-result').innerHTML = '<span class="upago">最近更新</span>'+recent.innerHTML;