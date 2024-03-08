"use strict"

// code block copy
hexo.extend.injector.register("body_start", function () {
  return `
  <div class="spinner" id="eloading"> 
    <span class="loader-text">加载中...</span>
    <div class="loader"></div>
    <span class="loader-text-below" onclick="document.getElementById('eloading').style.display='none'">不想等待可以点我关掉</span>
  </div>
  <script defer src="http://seeyou.hzchu.top/justseeyou" data-website-id="9b6818b0-7c75-410b-bde6-40f09d7eca38"></script>
  `
})