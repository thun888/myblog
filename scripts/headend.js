"use strict"

// code block copy
hexo.extend.injector.register("head_end", function () {
  return `
  <link rel="stylesheet" href="https://jsd.onmicrosoft.cn/npm/lxgw-wenkai-screen-webfont@1.1.0/lxgwwenkaiscreen.css" media="all">
  <link rel="stylesheet" href="https://jsd.onmicrosoft.cn/npm/notyf@3/notyf.min.css">
  <link rel="stylesheet" href="/mcss/mcss.css">
  `
})