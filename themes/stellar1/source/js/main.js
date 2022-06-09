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
  let selector = 'article .tag-plugin.image img';

  if (stellar.plugins.fancybox.comment.enable) {
    selector += `, ${stellar.plugins.fancybox.comment.selector}`
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


/* 水印 */
console.log("%c\n           ", "font-size:65px;background:url('https://raw.thun888.xyz/thun888/tuku@master/img/%E6%B0%B4%E5%8D%B01.png') no-repeat");
/* 烟花特效 */
(function webpackUniversalModuleDefinition(root,factory){if(typeof exports==='object'&&typeof module==='object')module.exports=factory();else if(typeof define==='function'&&define.amd)define([],factory);else if(typeof exports==='object')exports["POWERMODE"]=factory();else root["POWERMODE"]=factory()})(this,function(){return(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="";return __webpack_require__(0)})([function(module,exports,__webpack_require__){'use strict';var canvas=document.createElement('canvas');canvas.width=window.innerWidth;canvas.height=window.innerHeight;canvas.style.cssText='position:fixed;top:0;left:0;pointer-events:none;z-index:999999';window.addEventListener('resize',function(){canvas.width=window.innerWidth;canvas.height=window.innerHeight});document.body.appendChild(canvas);var context=canvas.getContext('2d');var particles=[];var particlePointer=0;POWERMODE.shake=true;function getRandom(min,max){return Math.random()*(max-min)+min}function getColor(el){if(POWERMODE.colorful){var u=getRandom(0,360);return'hsla('+getRandom(u-10,u+10)+', 100%, '+getRandom(50,80)+'%, '+1+')'}else{return window.getComputedStyle(el).color}}function getCaret(){var el=document.activeElement;var bcr;if(el.tagName==='TEXTAREA'||(el.tagName==='INPUT'&&el.getAttribute('type')==='text')){var offset=__webpack_require__(1)(el,el.selectionStart);bcr=el.getBoundingClientRect();return{x:offset.left+bcr.left,y:offset.top+bcr.top,color:getColor(el)}}var selection=window.getSelection();if(selection.rangeCount){var range=selection.getRangeAt(0);var startNode=range.startContainer;if(startNode.nodeType===document.TEXT_NODE){startNode=startNode.parentNode}bcr=range.getBoundingClientRect();return{x:bcr.left,y:bcr.top,color:getColor(startNode)}}return{x:0,y:0,color:'transparent'}}function createParticle(x,y,color){return{x:x,y:y,alpha:1,color:color,velocity:{x:-1+Math.random()*2,y:-3.5+Math.random()*2}}}function POWERMODE(){{var caret=getCaret();var numParticles=5+Math.round(Math.random()*10);while(numParticles--){particles[particlePointer]=createParticle(caret.x,caret.y,caret.color);particlePointer=(particlePointer+1)%500}}{if(POWERMODE.shake){var intensity=1+2*Math.random();var x=intensity*(Math.random()>0.5?-1:1);var y=intensity*(Math.random()>0.5?-1:1);document.body.style.marginLeft=x+'px';document.body.style.marginTop=y+'px';setTimeout(function(){document.body.style.marginLeft='';document.body.style.marginTop=''},75)}}};POWERMODE.colorful=false;function loop(){requestAnimationFrame(loop);context.clearRect(0,0,canvas.width,canvas.height);for(var i=0;i<particles.length;++i){var particle=particles[i];if(particle.alpha<=0.1)continue;particle.velocity.y+=0.075;particle.x+=particle.velocity.x;particle.y+=particle.velocity.y;particle.alpha*=0.96;context.globalAlpha=particle.alpha;context.fillStyle=particle.color;context.fillRect(Math.round(particle.x-1.5),Math.round(particle.y-1.5),3,3)}}requestAnimationFrame(loop);module.exports=POWERMODE},function(module,exports){(function(){var properties=['direction','boxSizing','width','height','overflowX','overflowY','borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth','borderStyle','paddingTop','paddingRight','paddingBottom','paddingLeft','fontStyle','fontVariant','fontWeight','fontStretch','fontSize','fontSizeAdjust','lineHeight','fontFamily','textAlign','textTransform','textIndent','textDecoration','letterSpacing','wordSpacing','tabSize','MozTabSize'];var isFirefox=window.mozInnerScreenX!=null;function getCaretCoordinates(element,position,options){var debug=options&&options.debug||false;if(debug){var el=document.querySelector('#input-textarea-caret-position-mirror-div');if(el){el.parentNode.removeChild(el)}}var div=document.createElement('div');div.id='input-textarea-caret-position-mirror-div';document.body.appendChild(div);var style=div.style;var computed=window.getComputedStyle?getComputedStyle(element):element.currentStyle;style.whiteSpace='pre-wrap';if(element.nodeName!=='INPUT')style.wordWrap='break-word';style.position='absolute';if(!debug)style.visibility='hidden';properties.forEach(function(prop){style[prop]=computed[prop]});if(isFirefox){if(element.scrollHeight>parseInt(computed.height))style.overflowY='scroll'}else{style.overflow='hidden'}div.textContent=element.value.substring(0,position);if(element.nodeName==='INPUT')div.textContent=div.textContent.replace(/\s/g,"\u00a0");var span=document.createElement('span');span.textContent=element.value.substring(position)||'.';div.appendChild(span);var coordinates={top:span.offsetTop+parseInt(computed['borderTopWidth']),left:span.offsetLeft+parseInt(computed['borderLeftWidth'])};if(debug){span.style.backgroundColor='#aaa'}else{document.body.removeChild(div)}return coordinates}if(typeof module!="undefined"&&typeof module.exports!="undefined"){module.exports=getCaretCoordinates}else{window.getCaretCoordinates=getCaretCoordinates}}())}])});
POWERMODE.colorful=true;POWERMODE.shake=false;document.body.addEventListener('input',POWERMODE);
/* 运行时间 */
var now=new Date();function createtime(){var grt=new Date("08/9/2020 23:30:00");now.setTime(now.getTime()+250);days=(now-grt)/1000/60/60/24;dnum=Math.floor(days);hours=(now-grt)/1000/60/60-(24*dnum);hnum=Math.floor(hours);if(String(hnum).length==1){hnum="0"+hnum}minutes=(now-grt)/1000/60-(24*60*dnum)-(60*hnum);mnum=Math.floor(minutes);if(String(mnum).length==1){mnum="0"+mnum}seconds=(now-grt)/1000-(24*60*60*dnum)-(60*60*hnum)-(60*mnum);snum=Math.round(seconds);if(String(snum).length==1){snum="0"+snum}document.getElementById("timeDate").innerHTML="本站已运行&nbsp"+dnum+"&nbsp天";document.getElementById("times").innerHTML=hnum+"&nbsp小时&nbsp"+mnum+"&nbsp分&nbsp"+snum+"&nbsp秒"}setInterval("createtime()",250);
//弹出隐藏层
function SSearch(show_div){var script=document.createElement("script");script.type="text/javascript";script.src='/js/search.js';document.body.appendChild(script);document.getElementById(show_div).className="ins-search show";bgdiv.style.width=document.body.scrollWidth};function CSearch(show_div){document.getElementById(show_div).className="ins-search"};
//简繁转换
var lololo="t";var zh_default="n";var zh_choose="n";var zh_expires=7;var zh_class="zh_click";var zh_style_active="font-weight:bold; color:green;";var zh_style_inactive="color:blue;";var zh_browserLang="";var zh_autoLang_t=true;var zh_autoLang_s=false;var zh_autoLang_alert=true;var zh_autoLang_msg="歡迎來到本站,本站爲方便台灣香港的用戶\n1.采用UTF-8國際編碼,用任何語言發帖都不用轉碼.\n2.自動判斷繁體用戶,顯示繁體網頁\n3.在網頁最上方有語言選擇,如果浏覽有問題時可以切換\n4.本消息在cookie有效期內只顯示一次";var zh_autoLang_checked=0;var zh_langReg_t=/^zh-tw|zh-hk$/i;var zh_langReg_s=/^zh-cn$/i;var zh_s="皑蔼碍爱翱袄奥坝罢摆败颁办绊帮绑镑谤剥饱宝报鲍辈贝钡狈备惫绷笔毕毙闭边编贬变辩辫鳖瘪濒滨宾摈饼拨钵铂驳卜补参蚕残惭惨灿苍舱仓沧厕侧册测层诧搀掺蝉馋谗缠铲产阐颤场尝长偿肠厂畅钞车彻尘陈衬撑称惩诚骋痴迟驰耻齿炽冲虫宠畴踌筹绸丑橱厨锄雏础储触处传疮闯创锤纯绰辞词赐聪葱囱从丛凑窜错达带贷担单郸掸胆惮诞弹当挡党荡档捣岛祷导盗灯邓敌涤递缔点垫电淀钓调迭谍叠钉顶锭订东动栋冻斗犊独读赌镀锻断缎兑队对吨顿钝夺鹅额讹恶饿儿尔饵贰发罚阀珐矾钒烦范贩饭访纺飞废费纷坟奋愤粪丰枫锋风疯冯缝讽凤肤辐抚辅赋复负讣妇缚该钙盖干赶秆赣冈刚钢纲岗皋镐搁鸽阁铬个给龚宫巩贡钩沟构购够蛊顾剐关观馆惯贯广规硅归龟闺轨诡柜贵刽辊滚锅国过骇韩汉阂鹤贺横轰鸿红后壶护沪户哗华画划话怀坏欢环还缓换唤痪焕涣黄谎挥辉毁贿秽会烩汇讳诲绘荤浑伙获货祸击机积饥讥鸡绩缉极辑级挤几蓟剂济计记际继纪夹荚颊贾钾价驾歼监坚笺间艰缄茧检碱硷拣捡简俭减荐槛鉴践贱见键舰剑饯渐溅涧浆蒋桨奖讲酱胶浇骄娇搅铰矫侥脚饺缴绞轿较秸阶节茎惊经颈静镜径痉竞净纠厩旧驹举据锯惧剧鹃绢杰洁结诫届紧锦仅谨进晋烬尽劲荆觉决诀绝钧军骏开凯颗壳课垦恳抠库裤夸块侩宽矿旷况亏岿窥馈溃扩阔蜡腊莱来赖蓝栏拦篮阑兰澜谰揽览懒缆烂滥捞劳涝乐镭垒类泪篱离里鲤礼丽厉励砾历沥隶俩联莲连镰怜涟帘敛脸链恋炼练粮凉两辆谅疗辽镣猎临邻鳞凛赁龄铃凌灵岭领馏刘龙聋咙笼垄拢陇楼娄搂篓芦卢颅庐炉掳卤虏鲁赂禄录陆驴吕铝侣屡缕虑滤绿峦挛孪滦乱抡轮伦仑沦纶论萝罗逻锣箩骡骆络妈玛码蚂马骂吗买麦卖迈脉瞒馒蛮满谩猫锚铆贸么霉没镁门闷们锰梦谜弥觅绵缅庙灭悯闽鸣铭谬谋亩钠纳难挠脑恼闹馁腻撵捻酿鸟聂啮镊镍柠狞宁拧泞钮纽脓浓农疟诺欧鸥殴呕沤盘庞国爱赔喷鹏骗飘频贫苹凭评泼颇扑铺朴谱脐齐骑岂启气弃讫牵扦钎铅迁签谦钱钳潜浅谴堑枪呛墙蔷强抢锹桥乔侨翘窍窃钦亲轻氢倾顷请庆琼穷趋区躯驱龋颧权劝却鹊让饶扰绕热韧认纫荣绒软锐闰润洒萨鳃赛伞丧骚扫涩杀纱筛晒闪陕赡缮伤赏烧绍赊摄慑设绅审婶肾渗声绳胜圣师狮湿诗尸时蚀实识驶势释饰视试寿兽枢输书赎属术树竖数帅双谁税顺说硕烁丝饲耸怂颂讼诵擞苏诉肃虽绥岁孙损笋缩琐锁獭挞抬摊贪瘫滩坛谭谈叹汤烫涛绦腾誊锑题体屉条贴铁厅听烃铜统头图涂团颓蜕脱鸵驮驼椭洼袜弯湾顽万网韦违围为潍维苇伟伪纬谓卫温闻纹稳问瓮挝蜗涡窝呜钨乌诬无芜吴坞雾务误锡牺袭习铣戏细虾辖峡侠狭厦锨鲜纤咸贤衔闲显险现献县馅羡宪线厢镶乡详响项萧销晓啸蝎协挟携胁谐写泻谢锌衅兴汹锈绣虚嘘须许绪续轩悬选癣绚学勋询寻驯训讯逊压鸦鸭哑亚讶阉烟盐严颜阎艳厌砚彦谚验鸯杨扬疡阳痒养样瑶摇尧遥窑谣药爷页业叶医铱颐遗仪彝蚁艺亿忆义诣议谊译异绎荫阴银饮樱婴鹰应缨莹萤营荧蝇颖哟拥佣痈踊咏涌优忧邮铀犹游诱舆鱼渔娱与屿语吁御狱誉预驭鸳渊辕园员圆缘远愿约跃钥岳粤悦阅云郧匀陨运蕴酝晕韵杂灾载攒暂赞赃脏凿枣灶责择则泽贼赠扎札轧铡闸诈斋债毡盏斩辗崭栈战绽张涨帐账胀赵蛰辙锗这贞针侦诊镇阵挣睁狰帧郑证织职执纸挚掷帜质钟终种肿众诌轴皱昼骤猪诸诛烛瞩嘱贮铸筑驻专砖转赚桩庄装妆壮状锥赘坠缀谆浊兹资渍踪综总纵邹诅组钻致钟么为只凶准启板里雳余链泄";var zh_t="皚藹礙愛翺襖奧壩罷擺敗頒辦絆幫綁鎊謗剝飽寶報鮑輩貝鋇狽備憊繃筆畢斃閉邊編貶變辯辮鼈癟瀕濱賓擯餅撥缽鉑駁蔔補參蠶殘慚慘燦蒼艙倉滄廁側冊測層詫攙摻蟬饞讒纏鏟産闡顫場嘗長償腸廠暢鈔車徹塵陳襯撐稱懲誠騁癡遲馳恥齒熾沖蟲寵疇躊籌綢醜櫥廚鋤雛礎儲觸處傳瘡闖創錘純綽辭詞賜聰蔥囪從叢湊竄錯達帶貸擔單鄲撣膽憚誕彈當擋黨蕩檔搗島禱導盜燈鄧敵滌遞締點墊電澱釣調叠諜疊釘頂錠訂東動棟凍鬥犢獨讀賭鍍鍛斷緞兌隊對噸頓鈍奪鵝額訛惡餓兒爾餌貳發罰閥琺礬釩煩範販飯訪紡飛廢費紛墳奮憤糞豐楓鋒風瘋馮縫諷鳳膚輻撫輔賦複負訃婦縛該鈣蓋幹趕稈贛岡剛鋼綱崗臯鎬擱鴿閣鉻個給龔宮鞏貢鈎溝構購夠蠱顧剮關觀館慣貫廣規矽歸龜閨軌詭櫃貴劊輥滾鍋國過駭韓漢閡鶴賀橫轟鴻紅後壺護滬戶嘩華畫劃話懷壞歡環還緩換喚瘓煥渙黃謊揮輝毀賄穢會燴彙諱誨繪葷渾夥獲貨禍擊機積饑譏雞績緝極輯級擠幾薊劑濟計記際繼紀夾莢頰賈鉀價駕殲監堅箋間艱緘繭檢堿鹼揀撿簡儉減薦檻鑒踐賤見鍵艦劍餞漸濺澗漿蔣槳獎講醬膠澆驕嬌攪鉸矯僥腳餃繳絞轎較稭階節莖驚經頸靜鏡徑痙競淨糾廄舊駒舉據鋸懼劇鵑絹傑潔結誡屆緊錦僅謹進晉燼盡勁荊覺決訣絕鈞軍駿開凱顆殼課墾懇摳庫褲誇塊儈寬礦曠況虧巋窺饋潰擴闊蠟臘萊來賴藍欄攔籃闌蘭瀾讕攬覽懶纜爛濫撈勞澇樂鐳壘類淚籬離裏鯉禮麗厲勵礫曆瀝隸倆聯蓮連鐮憐漣簾斂臉鏈戀煉練糧涼兩輛諒療遼鐐獵臨鄰鱗凜賃齡鈴淩靈嶺領餾劉龍聾嚨籠壟攏隴樓婁摟簍蘆盧顱廬爐擄鹵虜魯賂祿錄陸驢呂鋁侶屢縷慮濾綠巒攣孿灤亂掄輪倫侖淪綸論蘿羅邏鑼籮騾駱絡媽瑪碼螞馬罵嗎買麥賣邁脈瞞饅蠻滿謾貓錨鉚貿麽黴沒鎂門悶們錳夢謎彌覓綿緬廟滅憫閩鳴銘謬謀畝鈉納難撓腦惱鬧餒膩攆撚釀鳥聶齧鑷鎳檸獰甯擰濘鈕紐膿濃農瘧諾歐鷗毆嘔漚盤龐國愛賠噴鵬騙飄頻貧蘋憑評潑頗撲鋪樸譜臍齊騎豈啓氣棄訖牽扡釺鉛遷簽謙錢鉗潛淺譴塹槍嗆牆薔強搶鍬橋喬僑翹竅竊欽親輕氫傾頃請慶瓊窮趨區軀驅齲顴權勸卻鵲讓饒擾繞熱韌認紉榮絨軟銳閏潤灑薩鰓賽傘喪騷掃澀殺紗篩曬閃陝贍繕傷賞燒紹賒攝懾設紳審嬸腎滲聲繩勝聖師獅濕詩屍時蝕實識駛勢釋飾視試壽獸樞輸書贖屬術樹豎數帥雙誰稅順說碩爍絲飼聳慫頌訟誦擻蘇訴肅雖綏歲孫損筍縮瑣鎖獺撻擡攤貪癱灘壇譚談歎湯燙濤縧騰謄銻題體屜條貼鐵廳聽烴銅統頭圖塗團頹蛻脫鴕馱駝橢窪襪彎灣頑萬網韋違圍爲濰維葦偉僞緯謂衛溫聞紋穩問甕撾蝸渦窩嗚鎢烏誣無蕪吳塢霧務誤錫犧襲習銑戲細蝦轄峽俠狹廈鍁鮮纖鹹賢銜閑顯險現獻縣餡羨憲線廂鑲鄉詳響項蕭銷曉嘯蠍協挾攜脅諧寫瀉謝鋅釁興洶鏽繡虛噓須許緒續軒懸選癬絢學勳詢尋馴訓訊遜壓鴉鴨啞亞訝閹煙鹽嚴顔閻豔厭硯彥諺驗鴦楊揚瘍陽癢養樣瑤搖堯遙窯謠藥爺頁業葉醫銥頤遺儀彜蟻藝億憶義詣議誼譯異繹蔭陰銀飲櫻嬰鷹應纓瑩螢營熒蠅穎喲擁傭癰踴詠湧優憂郵鈾猶遊誘輿魚漁娛與嶼語籲禦獄譽預馭鴛淵轅園員圓緣遠願約躍鑰嶽粵悅閱雲鄖勻隕運蘊醞暈韻雜災載攢暫贊贓髒鑿棗竈責擇則澤賊贈紮劄軋鍘閘詐齋債氈盞斬輾嶄棧戰綻張漲帳賬脹趙蟄轍鍺這貞針偵診鎮陣掙睜猙幀鄭證織職執紙摯擲幟質鍾終種腫衆謅軸皺晝驟豬諸誅燭矚囑貯鑄築駐專磚轉賺樁莊裝妝壯狀錐贅墜綴諄濁茲資漬蹤綜總縱鄒詛組鑽緻鐘麼為隻兇準啟闆裡靂餘鍊洩";String.prototype.tran=function(){var s1,s2;if(zh_choose=="t"){s1=zh_s;s2=zh_t}else{if(zh_choose=="s"){s1=zh_t;s2=zh_s}else{return this}}var a="";var l=this.length;for(var i=0;i<this.length;i++){var c=this.charAt(i);var p=s1.indexOf(c);a+=p<0?c:s2.charAt(p)}return a};function setCookie(name,value){var argv=setCookie.arguments;var argc=setCookie.arguments.length;var expires=(argc>2)?argv[2]:null;if(expires!=null){var LargeExpDate=new Date();LargeExpDate.setTime(LargeExpDate.getTime()+(expires*1000*3600*24))}document.cookie=name+"="+escape(value)+((expires==null)?"":("; expires="+LargeExpDate.toGMTString()))}function getCookie(Name){var search=Name+"=";if(document.cookie.length>0){offset=document.cookie.indexOf(search);if(offset!=-1){offset+=search.length;end=document.cookie.indexOf(";",offset);if(end==-1){end=document.cookie.length}return unescape(document.cookie.substring(offset,end))}else{return""}}}function zh_tranBody(obj){var o=(typeof(obj)=="object")?obj.childNodes:document.body.childNodes;for(var i=0;i<o.length;i++){var c=o.item(i);if("||BR|HR|TEXTAREA|SCRIPT|".indexOf("|"+c.tagName+"|")>0){continue}if(c.className==zh_class){if(c.id==zh_class+"_"+zh_choose){c.setAttribute("style",zh_style_active);c.style.cssText=zh_style_active}else{c.setAttribute("style",zh_style_inactive);c.style.cssText=zh_style_inactive}continue}if(c.title!=""&&c.title!=null){c.title=c.title.tran()}if(c.alt!=""&&c.alt!=null){c.alt=c.alt.tran()}if(c.tagName=="INPUT"&&c.value!=""&&c.type!="text"&&c.type!="hidden"&&c.type!="password"){c.value=c.value.tran()}if(c.nodeType==3){c.data=c.data.tran()}else{zh_tranBody(c)}}}function zh_tran(go){document.getElementById("tr").src='https://raw.thun888.xyz/thun888/tuku@master/img/sff56s256.svg';if(go){zh_choose=go}setCookie("zh_choose",zh_choose,zh_expires);if(go=="n"){lololo="t";window.location.reload()}else{zh_tranBody();lololo="n"}}function zh_getLang(){if(getCookie("zh_choose")){zh_choose=getCookie("zh_choose");return true}if(!zh_autoLang_t&&!zh_autoLang_s){return false
}if(getCookie("zh_autoLang_checked")){return false}if(navigator.language){zh_browserLang=navigator.language}else{if(navigator.browserLanguage){zh_browserLang=navigator.browserLanguage}}if(zh_autoLang_t&&zh_langReg_t.test(zh_browserLang)){zh_choose="t"}else{if(zh_autoLang_s&&zh_langReg_s.test(zh_browserLang)){zh_choose="s"}}zh_autoLang_checked=1;setCookie("zh_choose",zh_choose,zh_expires);if(zh_choose==zh_default){return false}return true}function zh_init(){zh_getLang();c=document.getElementById(zh_class+"_"+zh_choose);if(zh_choose!=zh_default){if(window.onload){window.onload_before_zh_init=window.onload;window.onload=function(){zh_tran(zh_choose);if(getCookie("zh_autoLang_check")){alert(zh_autoLang_msg)}window.onload_before_zh_init()}}else{window.onload=function(){zh_tran(zh_choose);if(getCookie("zh_autoLang_check")){alert(zh_autoLang_msg)}}}}}zh_init();;
//复制提醒
document.addEventListener('copy',function(){var notyf=new Notyf({duration:1500,position:{x:'right',y:'top',},});notyf.success('复制成功，转载请注明出处。');
})