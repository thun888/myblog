"use strict"

// code block copy
hexo.extend.injector.register("body_end", function () {
  return `
  <script src="/js/extra.js"></script>
  <script>
  host = window.location.host;
  if (!host.startsWith("localhost")) {
    script = document.createElement('script');
    script.defer = true;
    script.setAttribute('data-website-id', '27c6212d-8d91-47a5-ae93-a0fd1bfb0e80');
    script.src = 'https://analytics.us.umami.is/script.js';
    document.head.appendChild(script);
  }
  </script>
  `
})
