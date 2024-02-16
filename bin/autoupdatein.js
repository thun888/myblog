"use strict"

hexo.extend.injector.register("body_end", function () {
  return `
  <script src="/js/autoupdate.js"></script>
    `
})