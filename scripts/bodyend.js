"use strict"

// code block copy
hexo.extend.injector.register("body_end", function () {
  return `
  <script src="/js/extra.js"></script>
  <script async defer data-website-id="e2f7364f-2517-4c62-90c8-21a04be3b2e0" src="/js/seeyou.js" data-host-url="https://seeyou.hzchu.top" data-domains="blog.hzchu.top"></script>

  `
})
