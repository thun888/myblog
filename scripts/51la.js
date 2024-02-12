"use strict"

// code block copy
hexo.extend.injector.register("body_end", function () {
  return `
  <script id="LA-DATA-WIDGET" crossorigin="anonymous" charset="UTF-8" src="https://v6-widget.51.la/v6/JnLm5m7MJcDkpWaM/quote.js?theme=0&f=12&display=0,0,0,1,0,1,0,1"></script>
  `
})
