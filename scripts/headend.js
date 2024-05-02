"use strict"

// code block copy
hexo.extend.injector.register("head_end", function () {
  return `
  <script>
  if (!!navigator.serviceWorker) {
      navigator.serviceWorker.register('/cw.js?t=' + new Date().getTime()).then(async (registration) => {
          if (localStorage.getItem('cw_installed') !== 'true') {
              const conf = () => {
                  console.log('[CW] Installing Success,Configuring...');
                  fetch('/cw-cgi/api?type=config')
                      .then(res => res.text())
                      .then(text => {
                          if (text === 'ok') {
                              console.log('[CW] Installing Success,Configuring Success,Starting...');
                              localStorage.setItem('cw_installed', 'true');
                              //如果你不希望重载页面，请移除下面七行
                              //重载标识 - 开始
                              fetch(window.location.href).then(res => res.text()).then(text => {
                                  document.open()
                                  document.write(text);
                                  document.close();
                              });
                              //重载标识 - 结束
                          } else {
                              console.warn('[CW] Installing Success,Configuring Failed,Sleeping 200ms...');
                              setTimeout(() => {
                                  conf()
                              }, 200);
                          }
                      }).catch(err => {
                          console.log('[CW] Installing Success,Configuring Error,Exiting...');
                      });
              }
              setTimeout(() => {
                  conf()
              }, 50);
          }
      }).catch(err => {
          console.error('[CW] Installing Failed,Error: ' + err.message);
      });
  } else { console.error('[CW] Installing Failed,Error: Browser not support service worker'); }
  </script>

  <link rel="stylesheet" href="https://jsd.hzchu.top/npm/lxgw-wenkai-screen-webfont@1.1.0/lxgwwenkaiscreen.css" media="all">
  <link rel="stylesheet" href="/mcss/mcss.css">
  <style>
  * {
  margin: 0;
  padding: 0;
}

/* From uiverse.io by @satyamchaudharydev */
.spinner {
  width: 100%;
  min-height: 100vh;
  background-color: rgb(249, 250, 251);
  /* transition: 1s ease-in-out; */
}

.loader {
  display: block;
  --height-of-loader: 4px;
  --loader-color: #6bb418;
  width: 130px;
  height: var(--height-of-loader);
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loader-text {
  display: block;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loader-text-below {
  display: block;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loader::before {
  content: "";
  position: absolute;
  background: var(--loader-color);
  top: 0;
  left: 0;
  width: var(--width, 0%);
  height: 100%;
  border-radius: 30px;
  transition: width 0.5s ease-in-out;
}
</style>
<script src="/js/load.js"></script>

  `
})
