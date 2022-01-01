/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/用batocera搭建属于你的游戏天地/index.html","6dd82231a23f97544853b7f165c9ac8c"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","771e3b52c4fb65f1d373ef522848e353"],["/2021/为Stellar主题添加HPP说说功能/index.html","6e5c2d1ff1b7fbd3c8afc7b97302f435"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","2189109822c43d0ed5676f123958b8af"],["/2021/把玩intel的开发服务器/index.html","bc646708d961890a9348bb88c955e091"],["/2021/搭建Teambition网盘的目录索引/index.html","61cfcb81679f592df5932bef64ee7fb7"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","4de8eb72e5f43dd293c5fcce67289a1e"],["/2021/解决VSCode安装Go扩展报错/index.html","44b09940ea70c00b978a43daf2d1e0d8"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","833a4bbc2ea7544a85e520d27f11b442"],["/2021/记一次简单的水卡破解/index.html","65429d1a79cfee195df198ce924eb802"],["/2021/高质量地从ico转为svg/index.html","9bc0268441bfdd4b3d69cc7f38cd932b"],["/404.html","e5e7691d3ed00583312729652fb799c9"],["/about/index.html","0ed0f121120b79d1559ce5c69ffc28bf"],["/archives/2020/11/index.html","90e71903a482cff8f11a472529cb6cba"],["/archives/2020/index.html","7444499382bcdd7f97fe352b2e9844c1"],["/archives/2021/01/index.html","6768e1dffa4beace6a0423066d2c0d1d"],["/archives/2021/02/index.html","59e74cf1ddc5dff40ae9672454481c05"],["/archives/2021/04/index.html","0beb9e88d8228a2f891aa462c5332503"],["/archives/2021/05/index.html","34f993571b244885b0e4a6d7c0e3f965"],["/archives/2021/06/index.html","ee8d63b32363d4e9b57439a80f4a1c14"],["/archives/2021/07/index.html","137980255c27f7feb25119f66d4a515b"],["/archives/2021/08/index.html","eb62936aa14f1261164d82b957b67db5"],["/archives/2021/index.html","25bc7f0aa46ed47d29f6638397c2fe2e"],["/archives/index.html","d3af8692d6e674adf82c521a8899e8f0"],["/archives/page/2/index.html","1cbd48421826d28256c9eb3c251cb211"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","12735a1700352780779ee6d98f6bc5c3"],["/friends/index.html","d94c6deb96a88347c2de94fa98d17fd5"],["/htalk/index.html","22f3c860dc616b0bce4dd05d65afc82f"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","bc2aac0da2c01e9a82969e6d5804aa12"],["/js/1/main.js","8a1859b9319197531ba01fa215b12650"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","5528264cb5e21ab0392254c6225a611e"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","db7073fc06df2caba60a01c9847f22c9"],["/morecss/szgotop.css","5f1f916fe30b0cec565d1cb703aba5ec"],["/page/2/index.html","e19eb5def8ae263b0c691f2c3298ebae"],["/say/index.html","ee1b8e23287965636e124be4d02cf8cb"],["/sw-register.js","d16c722fa2baeea4f0c3b62ba7c013b0"],["/tags/Clouddlare/index.html","2f876ffef1d1c54bd453aaceac016be2"],["/tags/Go/index.html","24e7b4cd9d299f360248ff0c4a145af9"],["/tags/Intel/index.html","4231557fd07af19d3ab554f854e03768"],["/tags/MIUI/index.html","cf5b3657e154c46937a6fe7c81a2acad"],["/tags/blog/index.html","3d44fcdaf12377696efd177e298e85f1"],["/tags/free/index.html","793628e476f05300fe38a5ce4b110e1c"],["/tags/index.html","eb48d203a70f9a5e7f7861ccedea866b"],["/tags/linux/index.html","f907cb990572d27601bfd9ae734f1f2f"],["/tags/oneindex/index.html","31b401b2a41588f0dafa526767105840"],["/tags/web/index.html","39b4cb756b39540f33f257802c1e011e"],["/tags/甜糖/index.html","e54211156070c95828c3d5c0c08402dd"],["/tags/网站/index.html","046bcfa816dc44538196b87196581c24"],["/tags/转换/index.html","52a057f3f03bd30f42a641d544b512b4"],["/tools/ghcdn/css.css","2abdb4d8dbd99d04f7d7cb9ce92e03fb"],["/tools/ghcdn/index.css","0e4eb0b460dedac25ff69545f1bc0cf9"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","39d30ac834e112f3c366cf0200b8acb4"],["/wiki/Artalk/API/index.html","464f2848be6a441174615993341db3b5"],["/wiki/Artalk/QandA/index.html","34902eeff459cff79e0d18ff582288aa"],["/wiki/Artalk/develop/index.html","2eb454aa8c2f78f1c7a7586d7551a172"],["/wiki/Artalk/index.html","57d44f4d85fa89cc5e5e219c931ce031"],["/wiki/Artalk/install-go/index.html","5033a1be209b141fcf3b1e03cfa2ba8a"],["/wiki/Artalk/install/index.html","3a8d97f599771c1c9beaa7bc03b1ee9f"],["/wiki/Artalk/more-url/index.html","fb885fac3a4033ff8d0f10414c886ab6"],["/wiki/Artalk/play/index.html","ec50b38483541292109eb76e3f4d169c"],["/wiki/Artalk/use/index.html","6ca9b6c13e0f5832e41a232802713c23"],["/wiki/index.html","d1ba79e3b281d2e4935453f226716ad6"],["/wiki/杂物间/camc.html","6fb37319ee1a23a411c8b48ffb1e4df8"],["/wiki/杂物间/index.html","da082d1cf1774026c58bcd77233f4119"],["/wiki/杂物间/old-pages/Free Minecraft Dungeons/Free Minecraft Dungeons.html","9087aa02f495f7d4cca528758d627b94"],["/wiki/杂物间/old-pages/GitHub打不开的临时方法/GitHub打不开的临时方法.html","1e14418e68c7d2ec10b8134810f88ac2"],["/wiki/杂物间/old-pages/hexo更新pages出错应急方法/hexo更新pages出错应急方法.html","7870b276a6201da8d101797ee8b86906"],["/wiki/杂物间/old-pages/index.html","fe68de1d851162ef356906699b77073c"],["/wiki/杂物间/old-pages/免费游玩《戴森球计划》.html","06796132952f94048be4b1e2ebcb1a93"],["/wiki/杂物间/old-pages/定时关机.html","ce3dbdc9a865a76556125e53416f586e"],["/wiki/杂物间/old-pages/弹出C盘の快乐/弹出C盘の快乐.html","c915f4de647879178b7d26d49dc62d33"],["/wiki/杂物间/old-pages/杂物.html","21ca310c442ad183cb7ef0cd2795fd57"],["/wiki/杂物间/old-pages/来在MC里玩电脑.html","3543645858b0bb5eb9fe2d54d32b558f"],["/wiki/杂物间/old-pages/现已通过myssl认证/现已通过myssl认证.html","08a1b44462c214a775041c5072b6794f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
