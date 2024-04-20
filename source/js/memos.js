/**
 * memos.js 24.3.10
 * https://immmmm.com/
 */
var memosData = {
    dom:"#memos",
    listDom:"#memo-list",
    limit:"8"
  }
  var memosDom = document.querySelector(memosData.dom);
  
  let memoList
  var memoDefaultList = [
    {
        "creatorName" : "Thun888",
        "website" : "https://blog.hzchu.top",
        "link" : "https://get-tg-channel-api.hzchu.top",
        "creatorId" : "101",
        "avatar" : "/img/avatar.webp",
        "artalk" : "https://artalk.hzchu.top",
        "artSite" : "Blog"
      },
    {
      "creatorName": "林木木",
      "website": "https://immmmm.com",
      "link": "https://me.edui.fun",
      "creatorId": "101",
      "avatar": "https://gravatar.memobbs.app/avatar/ba83fa02fc4b2ba621514941307e21be?s=80",
      "twikoo": "https://metk.edui.fun"
    }
  ];
  
  var userNow = `
  <div class="user-now card-item flex-fill mb-3 row" style="display: none;">
    <div class="call-memos-editor item-avatar p-3 "><img class="user-now-avatar" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"/ style="pointer-events: none;"></div>
    <span class="user-now-name"></span>
    <div class="row-fill">
      <input class="search-memos-input border-b input-text py-2 animate__animated animate__fadeIn animate__fadeInRight d-none" type="text" placeholder="想搜点啥？" id="">
      <span class="search-memos-btn button d-md-flex p-2 mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.15rem" height="1.15rem" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21l-4.3-4.3"/></g></svg>
      </span>
      <div class="user-button-span row-fill">
      <span class="memos-theme-toggle button d-md-flex p-2 mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.15rem" height="1.15rem" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8a2.83 2.83 0 0 0 4 4a4 4 0 1 1-4-4m0-6v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4l1.4 1.4M2 12h2m16 0h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4"/></svg>
      </span>
      <span class="my-blog-feeds button d-md-flex p-2 mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.15rem" height="1.15rem" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0m-3 6v6m6-3v3"/><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"/></g></svg>
      </span>
      <span class="userlist-memos button d-md-flex p-2 mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.15rem" height="1.15rem" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87m-3-12a4 4 0 0 1 0 7.75"/></g></svg>
      </span>
      <span class="randomuser-memos button d-md-flex p-2 mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.15rem" height="1.15rem" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0m16 4v-2.38c0-2.12 1.03-3.12 1-5.62c-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0m-4-3h4M4 13h4"/></svg>
      </span>
      <span class="gobbs-memos button d-md-flex p-2 mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.15rem" height="1.15rem" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20m17.8-2.2a7.5 7.5 0 0 0 .003-10.603M17 15a3.5 3.5 0 0 0-.025-4.975"/></svg>
      </span> 
      <span class="gohome-memos button d-md-flex p-2 mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.15rem" height="1.15rem" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></g></svg>
      </span>
      </div>
    </div>
  </div>`
  memosDom.insertAdjacentHTML('beforebegin', userNow);
  
  var backTop = `<div class="backtop d-none"><svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 15l-6-6l-6 6"/></svg></div>`
  memosDom.insertAdjacentHTML('afterend', backTop);
  
  
  var getEditor = window.localStorage && window.localStorage.getItem("memos-editor-display");
  var getMode = window.localStorage && window.localStorage.getItem("memos-mode");
  var memosOpenId = window.localStorage && window.localStorage.getItem("memos-access-token");
  var memosPath = window.localStorage && window.localStorage.getItem("memos-access-path");
  var memosMeID = window.localStorage && window.localStorage.getItem("memos-me-id");
  var memosMeNickname = window.localStorage && window.localStorage.getItem("memos-me-nickname");
  var memosMeAvatarUrl = window.localStorage && window.localStorage.getItem("memos-me-avatarurl");
  var memosMeArtalk = window.localStorage && window.localStorage.getItem("memos-artalk-input");
  var memosMeArtalkSite = window.localStorage && window.localStorage.getItem("memos-artalksite-input");
  var memosMeTwikoo = window.localStorage && window.localStorage.getItem("memos-twikoo-input");
  let cfwkAiUrl = window.localStorage && window.localStorage.getItem("memos-cfwkai-url")
  let geminiKey = window.localStorage && window.localStorage.getItem("memos-gemini-key")
  let filterName = window.localStorage && window.localStorage.getItem("memos-filter-name")
  
  var themeTogglebtn = document.querySelector(".memos-theme-toggle");
  var myFeedsBtn = document.querySelector(".my-blog-feeds");
  var memosEditorInner = document.querySelector(".memos-editor-inner"); 
  var memosEditorOption = document.querySelector(".memos-editor-option");
  var memosRadomCont = document.querySelector(".memos-random");
  var taglistBtn = document.querySelector(".tag-btn");
  var codeoneBtn = document.querySelector(".codeone-btn");
  var codeBtn = document.querySelector(".code-btn");
  var linkBtn = document.querySelector(".link-btn");
  var linkPicBtn = document.querySelector(".linkpic-btn");
  var cfAiBtn = document.querySelector(".cfworkerai-btn") || "";
  var cfAiLoadBtn = document.querySelector(".cfworkerai-load-btn");
  var geminiAIBtn = document.querySelector(".geminiai-btn") || "";
  var geminiAILoadBtn = document.querySelector(".geminiai-load-btn");
  var randomBtn = document.querySelector(".random-btn");
  var oneDayBtn = document.querySelector(".oneday-btn");
  var userButton = document.querySelector('.user-button-span');
  var privateBtn = document.querySelector(".private-btn");
  var switchUserBtn = document.querySelector(".switchUser-btn");
  var loadEditorBtn = document.querySelector(".call-memos-editor");
  var searchBtn = document.querySelector(".search-memos-btn");
  var searchInput = document.querySelector(".search-memos-input");
  var userlistBtn = document.querySelector(".userlist-memos");
  var randomUserBtn = document.querySelector(".randomuser-memos");
  var submitApiBtn = document.querySelector(".submit-openapi-btn");
  var submitMemoBtn = document.querySelector(".submit-memos-btn");
  var memosVisibilitySelect = document.querySelector(".select-memos-value");
  var pathInput = document.querySelector(".memos-path-input");
  var tokenInput = document.querySelector(".memos-token-input");
  var artalkInput = document.querySelector(".memos-artalk-input");
  var artalkSiteInput = document.querySelector(".memos-artalksite-input");
  var twikooInput = document.querySelector(".memos-twikoo-input");
  var cfwkAiUrlInput = document.querySelector(".cfwkai-url-input");
  var geminiKeyInput = document.querySelector(".gemini-key-input");
  var filterNameInput = document.querySelector(".filter-name-input");
  var uploadImageInput = document.querySelector(".memos-upload-image-input");
  //Webp格式
  var uploadWebpImageInput = document.querySelector(".memos-upload-Webp-image-input");
  
  var memosTextarea = document.querySelector(".memos-editor-textarea");
  
  var editMemoDom = document.querySelector(".edit-memos");
  var editMemoBtn = document.querySelector(".edit-memos-btn");
  var cancelEditBtn = document.querySelector(".cancel-edit-btn");
  var biaoqingBtn = document.querySelector(".biao-qing-btn");
  var usernowDom = document.querySelector(".user-now");
  var usernowBtnDom = document.querySelectorAll(".user-now .button");
  var goHomeBtn = document.querySelector('.gohome-memos')
  var goBbsBtn = document.querySelector('.gobbs-memos')
  
  var memoDom = document.querySelector(memosData.listDom);
  var skeleton = `<div class="el-loading"><div class="el-skeleton mb-3"></div><div class="el-skeleton mb-3"></div><div class="el-skeleton width-50 mb-3"></div><div class="el-skeleton mb-3"></div><div class="el-skeleton mb-3"></div><div class="el-skeleton width-50 mb-3"></div></div>`;
  
  var load = `<button class="col-12 load-btn button-load d-none flex-fill mb-3 p-3 animate__animated animate__fadeIn">加载更多</button>`;
  memoDom.insertAdjacentHTML('afterend', load);
  var loadBtn = document.querySelector("button.button-load");
  
  var limit = memosData.limit,page = 1,nums = 0,dataNum = 0,memosContType = 0, memosAccess = 0,randomUser = 0;
  var memoData = [],memosStr = [],memoCreatorMap = {},twikooCount = {},artalkCount = {};
  let memosMode;
  let nowLink;
  let nowId;
  let nowName;
  let nowAvatar;
  let nowTagList = "";
  var memoChangeDate = 0;
  var getSelectedValue = window.localStorage && window.localStorage.getItem("memos-visibility-select") || "PUBLIC";
  
  document.addEventListener("DOMContentLoaded", () => {
    let getTheme = window.localStorage && window.localStorage.getItem("theme");
    if (getTheme !== null && getTheme == "dark"){
              document.body.classList.add("dark-theme","dark");
      }else{
              document.body.classList.remove("dark-theme","dark");
      }
    if (getTheme == null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark-theme","dark");
    }
  });
  
  themeTogglebtn.addEventListener('click', function() {
    if(!document.body.classList.contains("dark")){
      document.body.classList.add("dark-theme","dark");
      window.localStorage && window.localStorage.setItem("theme","dark");
    }else{
      document.body.classList.remove("dark-theme","dark");
      window.localStorage && window.localStorage.setItem("theme","light");
    }
  });
  
  document.addEventListener("DOMContentLoaded", async () => {
    memoOurList = memoDefaultList
    if(typeof memosMyList !== 'undefined'){
      const mergedArray = [...memosMyList, ...memoOurList];
      memoList = mergedArray.filter((item, index) => {
        const stringifiedItem = JSON.stringify(item);
        return index === mergedArray.findIndex(obj => {
          return JSON.stringify(obj) === stringifiedItem;
        });
      });
    }else{
      memoList = memoOurList
    }
  
    //查询当前页面 window.location.origin 作为主页展示
    let memobbsAdmin = []
    let memobbsLink = window.location.origin;
    let linkIndex = memoList.findIndex(item => (item.website == memobbsLink))
    if(linkIndex >= 0){
      memobbsAdmin.push(memoList[linkIndex])
      const mergedArray2 = [...memobbsAdmin, ...memoList];
      memoList = mergedArray2.filter((item, index) => {
        const stringifiedItem = JSON.stringify(item);
        return index === mergedArray2.findIndex(obj => {
          return JSON.stringify(obj) === stringifiedItem;
        });
      });
    }
  
    nowLink = memosPath || memoList[0].link;
    nowId = memosMeID || memoList[0].creatorId;
    nowName = memosMeNickname || memoList[0].creatorName;
    nowAvatar = memosMeAvatarUrl || memoList[0].avatar;
    memoFollow(getMode);
  });
  
  // 获取自定义 memos.json 订阅列表
  async function getMemoListData(url) {
    const response = await fetch(url);
    const data = await response.json();
    if(filterName){
      let namesToRemove = filterName.replace(/，/g, ",").split(',');
      for (let name of namesToRemove) {
      let nameIndex = data.myMemoList.findIndex(item => (item.creatorName == name));
        if (nameIndex !== -1) {
          delete data.myMemoList.splice(nameIndex, 1);
        }
      };
    }
    return data.myMemoList
  }
  
  function memoFollow(mode) {
    //记忆显示模式
    usernowBtnDom.forEach((item) => {item.classList.remove('current');})
    if(mode == "MEMOSHOME"){
      goHomeBtn.classList.add("current")
      getUserMemos(nowLink,nowId,nowName,nowAvatar,"","","MEMOSHOME")
    }else if(mode == "MEMOSBBS"){
      goBbsBtn.classList.add("current")
      getMemos();
    }else if(mode == "RANDUSER"){
      randomUserBtn.classList.add("current")
      goRandUser()
    }else if(mode == "NOPUBLIC"){
      getUserMemos(nowLink,nowId,nowName,nowAvatar,"","",mode)
    }else if(mode == "oneday"){
      getUserMemos(nowLink,nowId,nowName,nowAvatar,"","",mode)
    }else{
      goHomeBtn.classList.add("current")
      getUserMemos(nowLink,nowId,nowName,nowAvatar)
    }
  
    loadBtn.addEventListener("click", function () {
      if(page < dataNum) {
        page++;
      }
      updateData(memoData)
      cocoMessage.success("加载中");
    });
  
    async function getMemoCount(m) {
      let twikooData = m.filter(item => item.twikoo);
      if (twikooData.length !== 0) {
        let twikooRes = {};
        for (const { creatorName, twikoo, link, id } of twikooData) {
          if (!twikooRes[creatorName]) {
            twikooRes[creatorName] = {
              creatorName,
              envId: twikoo,
              urls: []
            };
          }
          twikooRes[creatorName].urls.push(`${link}/m/${id}`);
        }
        let twikooList = Object.values(twikooRes);
        let twikooPromise = await Promise.all(
          twikooList.map(async (item) => {
            try {
              let res = await twikoo.getCommentsCount({
                envId: item.envId,
                urls: item.urls,
                includeReply: false
              });
              return res;
            } catch (err) {
              console.error(err);
              return [];
            }
          })
        );
        twikooCount = twikooPromise.flatMap(r => r);
      }
      let artalkData = m.filter(item => item.artalk);
      if (artalkData.length !== 0) {
        let artalkRes = {};
        for (const { creatorName, artalk, artSite, link, id } of artalkData) {
          if (!artalkRes[creatorName]) {
            artalkRes[creatorName] = {
              creatorName,
              envId: artalk,
              site_name: artSite,
              link,
              urls: []
            };
          }
          artalkRes[creatorName].urls.push(`/m/${id}`);
        }
        let artalkList = Object.values(artalkRes);
        let artalkPromise = await Promise.all(
          artalkList.map(async (item) => {
            try {
              let pageKeys = item.urls.join(',');
              let siteName = item.site_name;
              let response = await fetch(`${item.envId}/api/v2/stats/page_comment?page_keys=${pageKeys}&site_name=${siteName}`);
              if (!response.ok) {
                throw new Error(`Request failed`);
              }
              let results = await response.json();
              let countList = item.urls.map(url => {
                let count = results.data[url] || 0;
                return { url: item.link + url, count };
              });
              return countList;
            } catch (err) {
              return []; 
            }
          })
        )
        artalkCount = artalkPromise.flatMap(r => r);
      }
      for (const item of m) {
        let count = 0;
        let url = `${item.link}/m/${item.id}`;
        if (item.twikoo) {
          let memoCount = twikooCount.find((o) => o.url === url);
          if (memoCount) {
            count = memoCount.count;
          }
        } else if (item.artalk) {
          let memoCount = artalkCount.find((o) => o.url === url);
          if (memoCount) {
            count = memoCount.count;
          }
        }
        item.count = count;
      }
      return m;
    }
    this.getMemoCount = getMemoCount;
  
    function updateData(res) {
      let oneDayTag = window.localStorage && window.localStorage.getItem("memos-oneday-tag");
      if(oneDayTag !== null){
        const firstItem = res.slice(0, 1);
        const restItems = res.slice(1);
        // 对后面的内容进行排序
        restItems.sort((a, b) => b.createdTs - a.createdTs);
        // 将两部分合并在一起
        const sortedArray = firstItem.concat(restItems);
        // 返回排序后的数组
        pagination(sortedArray)
        dataNum = Math.ceil(sortedArray.length/limit);
        nums = dataNum - 1;
        if (page > nums) {
          loadBtn.classList.add('d-none');
          return
        };
      }else{
        res.sort((i,o)=>{
          return( o.createdTs - i.createdTs)
        })
        pagination(res)
        dataNum = Math.ceil(res.length/limit);
        nums = dataNum - 1;
        if (page > nums) {
          loadBtn.classList.add('d-none');
          return
        };
      }
    }
    this.updateData = updateData;
  
    function pagination(data) {
      memosStr = [];
      var last = page * limit - 1;
      last = last >= data.length ? (data.length - 1) : last;
      for (var i = (page * limit - limit); i <= last; i++) { 
        memosStr.push(data[i])
      };
      updateHtml(memosStr);
    }
  
  };
  
  // 插入 html 
  async function updateHtml(data) {
    let oneDayClass = "oneday";
    let tagnowHas = document.querySelector(".memos-tagnow")
    let memosMode = window.localStorage && window.localStorage.getItem("memos-mode");
    let oneDayTag = window.localStorage && window.localStorage.getItem("memos-oneday-tag");
    let result = '',itemOption = '',itemContent = '';
    let TAG_REG = /#([^#\s!.,;:?"'()]+)(?= )/g, 
      IMG_REG = /\!\[(.*?)\]\((.*?)\)/g,
      LINK_REG = /(?<!!)\[(.*?)\]\((.*?)\)/g,
      LINE_REG = /\n/g,
      BLOCKQUDTE_REG = /\>.*$/g,
      CODE_REG = /\```.*$/g,
      DOUDB_LINK_REG = /(https:\/\/(www|movie|book)\.douban\.com\/(game|subject)\/[0-9]+\/).*?/g,
      NEODB_LINK_REG = /(https:\/\/neodb\.social\/(game|movie|tv\/season|book)\/[0-9a-zA-Z]+)(?= )/g,
      BILIBILI_REG2 = /{ bilibili ([0-9a-zA-Z]+) }/g,
      BILIBILI_REG = /<a.*?href="https:\/\/www\.bilibili\.com\/video\/((av[\d]{1,10})|(BV([\w]{10})))\/?".*?>.*<\/a>/g,
      NETEASE_MUSIC_REG = /<a.*?href="https:\/\/music\.163\.com\/.*id=([0-9]+)".*?>.*<\/a>/g,
      QQMUSIC_REG = /<a.*?href="https\:\/\/y\.qq\.com\/.*(\/[0-9a-zA-Z]+)(\.html)?".*?>.*?<\/a>/g,
      QQVIDEO_REG = /<a.*?href="https:\/\/v\.qq\.com\/.*\/([a-z|A-Z|0-9]+)\.html".*?>.*<\/a>/g,
      YOUKU_REG = /<a.*?href="https:\/\/v\.youku\.com\/.*\/id_([a-z|A-Z|0-9|==]+)\.html".*?>.*<\/a>/g,
      YOUTUBE_REG = /<a.*?href="https:\/\/www\.youtube\.com\/watch\?v\=([a-z|A-Z|0-9]{11})\".*?>.*<\/a>/g;
      marked.setOptions({
        breaks: true,
        smartypants: false,
        langPrefix: 'language-'
      });
    for (var i = 0; i < data.length; i++) {
      let memo = data[i];
      //console.log(memo)
      let link = memo.link;
      let memoString = JSON.stringify(memo).replace(/"/g, '&quot;');
      let avatar = memo.avatar;
      let count = memo.count || "";
      let website = memo.website;
      let creatorId = memo.creatorId;
      let creatorName = memo.creatorName;
      let createdTs = memo.createdTs;
      let in2Week = Math.floor(new Date().getTime()/ 1000) - createdTs <= 1209600 ? "in2week" : "out2week";
      let memosId = createdTs+memo.id;
      let memosVisibility = memo.visibility
      let twikooEnv = memo.twikoo;
      let artalkEnv = memo.artalk;
      let artSite = `${memo.artSite}`;
      let memosLink = "https://t.me/s/thun888sthinks?q=#bb";
      let memosRes = memo.content
        .replace(TAG_REG, "")
        .replace(IMG_REG, "")
        .replace(DOUDB_LINK_REG, "")
        .replace(NEODB_LINK_REG, "")
        .replace(LINK_REG, `<a class='primary' href='$2' target='_blank'>$1</a>`)
        memosRes = marked.parse(memosRes)
        .replace(BILIBILI_REG, `<div class='video-wrapper'><iframe src='//www.bilibili.com/blackboard/html5mobileplayer.html?bvid=$1&as_wide=1&high_quality=1&danmaku=0' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'></iframe></div>`)
        .replace(BILIBILI_REG2, `<div class='video-wrapper'><iframe src='//www.bilibili.com/blackboard/html5mobileplayer.html?bvid=$1&as_wide=1&high_quality=1&danmaku=0' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'></iframe></div>`)
        .replace(NETEASE_MUSIC_REG, `<meting-js auto='https://music.163.com/#/song?id=$1'></meting-js>`)
        .replace(QQMUSIC_REG, `<meting-js auto='https://y.qq.com/n/yqq/song$1.html'></meting-js>`)
        .replace(QQVIDEO_REG, `<div class='video-wrapper'><iframe src='//v.qq.com/iframe/player.html?vid=$1' allowFullScreen='true' frameborder='no'></iframe></div>`)
        .replace(YOUKU_REG, `<div class='video-wrapper'><iframe src='https://player.youku.com/embed/$1' frameborder=0 'allowfullscreen'></iframe></div>`)
        .replace(YOUTUBE_REG, `<div class='video-wrapper'><iframe src='https://www.youtube.com/embed/$1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen title='YouTube Video'></iframe></div>`)
      let transData = memo.content.replace(TAG_REG, "").replace(IMG_REG, "").replace(LINK_REG, "$1").replace(LINE_REG, " ").replace(BLOCKQUDTE_REG, "").replace(CODE_REG, "");
      if(transData.length>140){transData = transData.substring(0,140) + '...'};
      let memosForm = {creatorName:creatorName,content:transData,url:memosLink};
      let memosFormString = JSON.stringify(memosForm).replace(/"/g, '&quot;');
      //解析 content 内 md 格式图片
      let imgArr = memo.content.match(IMG_REG);
      let imgStr = String(imgArr).replace(/[,]/g, '');
      if (imgArr) {
          let memosImg = imgStr.replace(IMG_REG, `<div class="memo-resource width-100"><img class="lozad" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="$2"></div>`)
          memosRes += `<div class="resource-wrapper"><div class="images-wrapper my-2" view-image>${memosImg}</div></div>`
      }
      // DoubanDB
      let doudbArr = memo.content.match(DOUDB_LINK_REG);
      let neodbDom = '';
      if(doudbArr){
        for(let k=0;k < doudbArr.length;k++){
          neodbDom += await fetchNeoDB(doudbArr[k],"douban")
        }
      }
      // DoubanDB
      let neodbArr = memo.content.match(NEODB_LINK_REG);
      if(neodbArr){
        for(let l=0;l < neodbArr.length;l++){
          neodbDom += await fetchNeoDB(neodbArr[l],"neodb")
        }
      }
      //标签
      let tagArr = memo.content.match(TAG_REG);
      let memosTag = '';
      if (tagArr) {
        memosTag = tagArr.map(t=>{
          return `<div class="item-tag d-flex align-items-center text-sm line-xl mr-2 px-2" onclick="getTagNow('${link}','${creatorId}','${creatorName}','${avatar}',this)">${String(t).replace(/[#]/, '')}</div>`;
        }).join('');
      }else{
        memosTag = `<div class="item-tag d-flex align-items-center text-sm line-xl mr-2 px-2 no-cursor">动态</div>`;
      }
      
      //解析内置资源文件
      //console.log(memo)
      if (memo.resourceList && memo.resourceList.length > 0) {
        let resourceList = memo.resourceList;
        let imgUrl = '',resUrl = '',resImgLength = 0;
        for (let j = 0; j < resourceList.length; j++) {
          let restype = resourceList[j].type.slice(0, 5);
          let resexlink = resourceList[j].externalLink;
          let imgLink = '', fileId = '';
          if (resexlink) {
              imgLink = resexlink
          } else {
              fileId = resourceList[j].id;
              if(resourceList[j].name !== undefined){
                fileId = resourceList[j].name+"?thumbnail=1"
              }
              imgLink = `${memo.link}/o/r/${fileId}`;
          }
          if (restype == 'image') {
            imgUrl += `<div class="memo-resource w-100"><img class="lozad" data-fancybox="group_` + memosId + `" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="${imgLink}"/></div>`;
            resImgLength = resImgLength + 1
          }
          if (restype == 'video') {
            resUrl += `<video style="width:100%;max-height:50vh;" crossorigin="anonymous" src="${imgLink}" controls=""></video>`
          }
          if (restype !== 'video' && restype !== 'image') {
            resUrl += `<a class="memos-tag p-1" target="_blank" rel="noreferrer" href="${imgLink}">${resourceList[j].filename}</a>`;
          }
        }
        if (imgUrl) {
          memosRes += `<div class="resource-wrapper"><div class="images-wrapper my-2" view-image>${imgUrl}</div></div>`
        }
        if (resUrl) {
          memosRes += `<p class="datasource">${resUrl}</p>`
        }
      }
      let memosOpenId = window.localStorage && window.localStorage.getItem("memos-access-token");
      if (memosOpenId != null && memosOpenId !== ""  && nowId == creatorId && nowLink == link) {
        itemOption = `<div class="item-option mr-1"><div class="d-flex dropdown"><svg xmlns="http://www.w3.org/2000/svg" width="1.15rem" height="1.15rem" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></g></svg><div class="dropdown-wrapper d-none"><a class="btn edit-btn" data-form="${memoString}" onclick="editMemo(this)">编辑</a><a class="btn" onclick="archiveMemo('${memo.id}')">归档</a><a class="btn" onclick="deleteMemo('${memo.id}')">删除</a></div></div></div>`;
      }else if (memosOpenId != null && memosOpenId !== "") {
        itemOption = `<div class="item-option mr-1">
          <div class="d-flex dropdown">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.15rem" height="1.15rem" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></g></svg>
            <div class="dropdown-wrapper d-none">
              <a class="btn" data-form="${memoString}" onclick="saveMemo(this)">收藏</a>
              <a class="btn" data-form="${memoString}" onclick="viaNow(this)">引用</a>
              <a class="btn" href="${memosLink}" target="_blank" rel="noopener noreferrer">跳转</a>
            </div>
          </div>
        </div>`;
      }else{
        itemOption = `<div class="item-option mr-1"><a class="d-flex" href="${memosLink}" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="1.15rem" height="1.15rem" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"></path></svg></a></div>`;
      } 
      itemContent = `<div class="item-content"><div class="item-inner">${memosRes}</div><div class="item-footer d-flex mt-2"><div class="d-flex">${memosTag}</div>`;
      if (twikooEnv && memosVisibility == "PUBLIC") {
        itemContent += `<div class="d-flex flex-fill justify-content-end"><div class="item d-flex align-items-center"><a data-id="${memo.id}" data-time="${createdTs}" data-env="${twikooEnv}" data-path="${memosLink}" onclick="loadTwikoo(this)" rel="noopener noreferrer" class="d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM8 10h.01M12 10h.01M16 10h.01"/></svg></a><span class="ml-1">${count}</span></div></div></div><div id="${memosId}" class="item-comment mt-3 d-none"></div>`;
      } else if (artalkEnv && memosVisibility == "PUBLIC") {
        itemContent += `<div class="d-flex flex-fill justify-content-end"><div class="item d-flex align-items-center"><a data-id="${memo.id}" data-time="${createdTs}" data-env="${artalkEnv}" data-path="${artSite}" onclick="loadArtalk(this)" rel="noopener noreferrer" class="d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM8 10h.01M12 10h.01M16 10h.01"/></svg></a><span class="ml-1">${count}</span></div></div></div><div id="${memosId}" class="item-comment mt-3 d-none"></div>`;
      } else if(memosVisibility !== "PUBLIC"){
        itemContent += `<div class="d-flex flex-fill justify-content-end"><div class="item d-flex align-items-center mr-1" onclick="getUserMemos('${link}','${creatorId}','${creatorName}','${avatar}','','','NOPUBLIC')"><svg xmlns="http://www.w3.org/2000/svg" width="1.15rem" height="1.15rem" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.68 4.206C2.652 6.015 4.67 7.258 7 7.258c2.331 0 4.348-1.243 5.322-3.052M2.75 5.596L.5 7.481m4.916-.415L4.333 9.794m6.917-4.198l2.25 1.885m-4.92-.415l1.083 2.728"/></svg></div></div></div>`;
      } else {
        itemContent += `<div class="d-flex flex-fill justify-content-end"></div></div>`;
      }
      itemContent += `</div></div></div>`
      result += `<div class="${memosMode == "MEMOSHOME" && tagnowHas == null &&oneDayTag !== null && i == 0 ? oneDayClass : ''} memo-${memosId} d-flex animate__animated mb-3"><div class="card-item flex-fill p-3" style="background-color:#f1f2f3"><div class="item-header d-flex mb-3"><div class="d-flex flex-fill"><div onclick="getUserMemos('${link}', '${creatorId}','${creatorName}','${avatar}')" class="item-avatar mr-2" style="background-image:url(${avatar})"></div><div class="item-sub d-flex flex-column p-1"><div class="item-creator"><span href="${website}" target="_blank">${creatorName}</span></div><div class="item-mate ${in2Week} mt-2 text-xs">${new Date(createdTs * 1000 - 5 ).toLocaleString()}</div></div></div>${itemOption}</div>${neodbDom+itemContent}</div></div>`;
    } // end for
    
    memoDom.insertAdjacentHTML('beforeend', result);
    loadBtn.textContent = "加载更多";
    function animation() {
      var animate = document.getElementsByClassName("animate__animated");
      Array.prototype.slice.call(animate,0).forEach(function(i,index){
        const top = i.getBoundingClientRect().top; // 目标元素dom距离顶部的高度
        if (top <= window.innerHeight) { // 当top小于等于文档显示区域的高时，就进入可视区域了
          i.classList.contains('animate__fadeIn"') ? '' : i.classList.add("animate__fadeIn")
        }
      })
    }
    animation();
    
    window.addEventListener('scroll', animation);
    //图片灯箱
    // window.ViewImage && ViewImage.init('.images-wrapper img')
    //相对时间
    window.Lately && Lately.init({
      target: '.item-mate.in2week'
    });
    //延迟加载
    let observer = lozad('.lozad');
    observer.observe();
    //下拉菜单
    let dropdowns = document.querySelectorAll(".dropdown");
    Array.from(dropdowns).forEach(function(dropdown) {
      let lis = Array.from(dropdown.children).slice(1);
      dropdown.addEventListener("mouseenter", function() {
        lis.forEach(function(item) {
          item.classList.remove("d-none");
        });
      });
      dropdown.addEventListener("mouseleave", function() {
        lis.forEach(function(item) {
          item.classList.add("d-none");
        });
      });
    });
  }
  
  function withTimeout(millis, promise) {
    let timeout = new Promise((resolve, reject) =>
      setTimeout(() => reject(`Timed out after ${millis} ms.`), millis)
    );
    return Promise.race([promise, timeout]);
  };
  
  async function getMemos(search) {
    memoData = [], memoCreatorMap = {}, page = 1, nums = 0, dataNum = 0, memosContType = 0, memosAccess = 0;
    memoDom.innerHTML = skeleton;
    loadBtn.classList.add("d-none");
    let results;
    if(search && search != "" && search != null ){
      results = await Promise.allSettled(memoList.map(u => 
        withTimeout(2000, fetch(`${u.link}/api/v1/memo?showtag=false&creatorId=${u.creatorId}&content=${search}&rowStatus=NORMAL&limit=${limit}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(res.statusText); 
            }
            return response.json();
          })
      )));
    }else{
      results = await Promise.allSettled(memoList.map(u => 
        withTimeout(2000, fetch(`${u.link}/api/v1/memo?showtag=false&creatorId=${u.creatorId}&rowStatus=NORMAL&limit=${limit}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(res.statusText); 
            }
            return response.json();
          })
      )));
    }
    results = results.filter(i => i.status === 'fulfilled');
    memoData = results.flatMap(result => result.value);
    memoList.forEach(item => {
      memoCreatorMap[item.creatorName] = item;
    });
    memoData = memoData.map(item => {
      let data = memoCreatorMap[item.creatorName];
      return {...item, ...data};
    });
    //memoData = await getMemoCount(memoData);
    memoDom.innerHTML = "";
    this.updateData(memoData);
    setTimeout(function() {
      loadBtn.classList.remove('d-none');
    }, 1000);
    //setTimeout(function() {
      window.scrollTo({
        top: usernowDom.offsetTop - 30,
        behavior: "smooth"
      });
    //}, 800);
    goBbsBtn.classList.remove("noclick")
  }
  
  myFeedsBtn.addEventListener('click', function(event) {
    loadBtn.classList.add('d-none');
    memoDom.innerHTML = skeleton;
    usernowBtnDom.forEach((item) => {item.classList.remove('current');})
    myFeedsBtn.classList.add("current")
    let fetchUrl = "https://cf.edui.fun/all?rule=created&end=20"
    fetch(fetchUrl).then(res => res.json()).then(resdata =>{
      let myFeedData = resdata.article_data
      var myFeedArticle = '';
      for (var i = 0;i<myFeedData.length;i++){
        var item = myFeedData[i];
        myFeedArticle +=`
        <div class="card-item flex-fill p-3">
          <div class="d-flex flex-fill">
            <div class="item-avatar mr-2" style="background-image:url(${item.avatar})"></div>
            <div class="item-sub d-flex flex-column p-1">
              <div class="item-creator"><a href="${item.link}" target="_blank" rel="noopener nofollow" >${item.title}</a></div>
              <span class="myfeeds-floor">${item.floor}</span>
              <div class="item-mate mt-2 text-xs">${item.updated}</div>
            </div>
          </div>
        </div>
        `;
      }
      memoDom.innerHTML = `<div class="myfeeds-option row px-2 pb-2">
        <div class="myfeeds-xml card-item px-3 py-2 mr-3" data-type="bfind" onclick="myFeedsXML(this)">BlogFinder</div>
        <div class="myfeeds-xml card-item px-3 py-2 mr-3" data-type="jixin"  onclick="myFeedsXML(this)">积薪</div>
        <div class="myfeeds-xml card-item px-3 py-2 mr-3" data-type="boyou"  onclick="myFeedsXML(this)">博友圈</div>
        <div class="myfeeds-xml card-item px-3 py-2 mr-3" data-type="shinian"  onclick="myFeedsXML(this)">十年之约</div>
      </div>
      <div class="myfeeds">${myFeedArticle}</div>`;
      window.Lately && Lately.init({
        target: '.item-mate'
      });
    })
  });
  
 
  
  // 获取指定用户列表
  async function getUserMemos(link,id,name,avatar,tag,search,mode,random) {
      memoDom.innerHTML = skeleton;
      loadBtn.classList.add('d-none');
      randomUserBtn.classList.add("noclick")
      memoData = [],memoCreatorMap = {}, page = 1,nums = 0,dataNum = 0,memosContType = 1;
      memosPath = window.localStorage && window.localStorage.getItem("memos-access-path");
      let usernowName = document.querySelector(".user-now-name");
      let usernowAvatar = document.querySelector(".user-now-avatar");
      usernowName.innerHTML = name;
      usernowAvatar.src = avatar;
      if (link == memosPath) {
        memosAccess = 1;
      };
      let userMemoUrl;
      if(tag && (random == null || random == "" )){
        userMemoUrl = `${link}/api/v1/memo?showtag=false&creatorId=${id}&tag=${tag}&rowStatus=NORMAL&limit=50`;
      }else if(search){
        userMemoUrl = `${link}/api/v1/memo?showtag=false&creatorId=${id}&content=${search}&rowStatus=NORMAL&limit=${limit}`;
      }else if(mode == "NOPUBLIC"){
        userMemoUrl = `${link}/api/v1/memo`;
      }else if(random){
        if(tag){
          userMemoUrl = `${link}/api/v1/memo?tag=${tag}&limit=1&offset=${random}`;
        }else{
          userMemoUrl = `${link}/api/v1/memo?&limit=1&offset=${random}`;
        }
      }else{
        userMemoUrl = `${link}/api/v1/memo?showtag=false&creatorId=${id}&rowStatus=NORMAL&limit=50`;
      }
  
      if (link == memosPath) {
        try {
          let response = await fetch(userMemoUrl,{
              headers: {
                'Authorization': `Bearer ${memosOpenId}`,
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
              },
              cache: 'no-store',
          });
          if (response.ok) {
            let data = await response.json();
            let oneDayTag = window.localStorage && window.localStorage.getItem("memos-oneday-tag");
            let oneDayTagCount = window.localStorage && window.localStorage.getItem("memos-oneday-count");
            if( oneDayTag !== null && oneDayTagCount !== null && !search ){
              let randomOneNum = Math.floor(Math.random() * oneDayTagCount)
              let oneDayUrl = `${link}/api/v1/memo?tag=${oneDayTag}&limit=1&offset=${randomOneNum}`
              //console.log(oneDayUrl)
              try {
                let responseOne = await fetch(oneDayUrl,{
                  headers: {
                    'Authorization': `Bearer ${memosOpenId}`,
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache',
                  },
                  cache: 'no-store',
                });
                if (!responseOne.ok) {
                  throw new Error(`Request failed oneDay`);
                }
                dataone = await responseOne.json();
                data.splice(0, 0, ...dataone);
              } catch (error) {
                console.error(error);
              }
            }
            data.forEach(item => {
              item.avatar = memosMeAvatarUrl
              item.link = memosPath
              item.twikoo = memosMeTwikoo
              item.artalk = memosMeArtalk
              item.artSite = `${memosMeArtalkSite}`
            });
            if (mode == "NOPUBLIC") {
              memosCount = data.length;
              window.localStorage && window.localStorage.setItem("memos-response-count",  memosCount);
              data = data.filter((item) => item.visibility !== "PUBLIC");
            }
            memoData = data.flatMap(result => result);
            memoList.forEach(item => {
              memoCreatorMap[item.creatorName] = item;
            });
            memoData = memoData.map(item => {
              let data = memoCreatorMap[item.creatorName];
              return {...item, ...data};
            });
            if (mode !== "NOPUBLIC") {
              memoData = await this.getMemoCount(memoData);
            }
            memoDom.innerHTML = "";
            this.updateData(memoData);
            if(!random && memoData.length >= 8 ){
              setTimeout(function() {
                loadBtn.classList.remove('d-none');
              }, 1000);
            }
          }
        } catch (error) {
          console.error(error);
        }
      }else{
          try {
            let response = await fetch(userMemoUrl);
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            let data = await response.json();
            memoData = data.flatMap(result => result);
            memoList.forEach(item => {
              memoCreatorMap[item.creatorName] = item;
            });
            memoData = memoData.map(item => {
              let data = memoCreatorMap[item.creatorName];
              return {...item, ...data};
            });
            memoData = await this.getMemoCount(memoData);
            memoDom.innerHTML = "";
            this.updateData(memoData);
            if(memoData.length >= 8 ){
              setTimeout(function() {
                loadBtn.classList.remove('d-none');
              }, 1000);
            }
          } catch (error) {
            console.error(error);
          }
      }
      setTimeout(function() {
        goHomeBtn.classList.remove("noclick")
        randomUserBtn.classList.remove("noclick")
      }, 800);
      window.scrollTo({
        top: usernowDom.offsetTop - 30,
        behavior: "smooth"
      });
  }
    // 加载Artalk评论
    function loadArtalk(e) {
        let artalkEnv = e.getAttribute("data-env")
        let artalkPath= e.getAttribute("data-path")
        let artalkId = e.getAttribute("data-id")
        let artalkTime = e.getAttribute("data-time")
        let artalkDom = document.getElementById(`${Number(artalkTime+ artalkId)}`);
        let artalkCon = "<div id='artalk'></div>"
        if (artalkDom.classList.contains('d-none')) {
          document.querySelectorAll('.item-comment').forEach((item) => {item.classList.add('d-none');})
          if(document.getElementById("artalk")){
            document.getElementById("artalk").remove()
          }
          artalkDom.insertAdjacentHTML('beforeend', artalkCon);
          artalkDom.classList.remove('d-none');
          Artalk.init({
            el: '#artalk',
            pageKey: '/bb/' + artalkId,
            pageTitle: '',
            site: artalkPath,
            server: artalkEnv,
          });
        }else{
          artalkDom.classList.add('d-none');
          document.getElementById("artalk").remove()
        }
      }
  /**
   * Lately.min.js 2.5.2
   * https://tokinx.github.io/lately/
   */
  !function(){window.Lately=new function(){var t=this;this.lang={second:"秒",minute:"分钟",hour:"小时",day:"天",month:"个月",year:"年",ago:"前",error:"NaN"};var e=function(e){e=new Date(n(e));var r=new function(){this.second=(Date.now()-e.getTime())/1e3,this.minute=this.second/60,this.hour=this.minute/60,this.day=this.hour/24,this.month=this.day/30,this.year=this.month/12},i=Object.keys(r).reverse().find(function(t){return r[t]>=1});return(i?function(t,e){return Math.floor(t)+e}(r[i],t.lang[i]):t.lang.error)+t.lang.ago},n=function(t){return t=new Date(t&&("number"==typeof t?t:t.replace(/-/g,"/").replace("T"," "))),!isNaN(t.getTime())&&t.getTime()};return{init:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=r.target,a=void 0===i?"time":i,o=r.lang;o&&(t.lang=o);var u=!0,h=!1,l=void 0;try{for(var s,c=document.querySelectorAll(a)[Symbol.iterator]();!(u=(s=c.next()).done);u=!0){var f=s.value,g=n(f.dateTime)||n(f.title)||n(f.innerHTML)||0;if(!g)return;f.title=new Date(g).toLocaleString(),f.innerHTML=e(g)}}catch(t){h=!0,l=t}finally{try{!u&&c.return&&c.return()}finally{if(h)throw l}}},format:e}}}();
