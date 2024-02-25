"use strict"

// code block copy
hexo.extend.injector.register("body_start", function () {
  return `
  <div class="spinner" id="eloading"> 
    <span class="loader-text">加载中...</span>
    <div class="loader"></div>
    <span class="loader-text-below" onclick="document.getElementById('eloading').style.display='none'">不想等待可以点我关掉</span>
  </div>
  `
})