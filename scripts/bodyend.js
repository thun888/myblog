"use strict"

// code block copy
hexo.extend.injector.register("body_end", function () {
  return `
  <script src="/js/extra.js"></script>
  <script defer src="https://seeyou.hzchu.top/justseeyou" data-website-id="9b6818b0-7c75-410b-bde6-40f09d7eca38"></script>
  `
})