/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/Free Minecraft Dungeons/index.html","c1db68ee020cf793fd3fd5c4d9b0143b"],["/2020/hexo更新pages出错应急方法/index.html","9e20a5de662f6030977c2e4de3c98ec6"],["/2020/定时关机/index.html","0b5e91970130210457aa798d9e4196a4"],["/2020/弹出C盘の快乐/index.html","38a9bc34f6750c9f562c734921833356"],["/2020/杂物/index.html","0a9fc12b2c431a119ede408e6ee3a358"],["/2020/来在MC里玩电脑/index.html","447f9d31fd0bcd44a55f8462af720676"],["/2020/现已通过myssl认证/index.html","0151179c8a32cd7070f9a7f0d3b6204a"],["/2020/用batocera搭建属于你的游戏天地/index.html","b430fa7d7c5c5ec74e037f78e2c9cb8b"],["/2021/GitHub打不开的临时方法/index.html","6b4d658cf951ef06ff990037387b9b9c"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","4d60383cbd45cf498625d75a4624a901"],["/2021/为Stellar主题添加HPP说说功能/index.html","5fc24eeba3366f9181837639f6b60216"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","8c2fbc6a72da214a969d0fa8601660f1"],["/2021/免费游玩《戴森球计划》/index.html","0d0e7da215ef2fd0988190c6fcf8c484"],["/2021/把玩intel的开发服务器/index.html","8ec85a82bb42c1b02857f273a5354780"],["/2021/搭建Teambition网盘的目录索引/index.html","5fc74c4e37fd26482b85166d35f9c487"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","3723533b57d95ba4ef32fd8ddc18d3a7"],["/2021/解决VSCode安装Go扩展报错/index.html","ae87a325b769f2adc8e66bd53803c40a"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","6435c029995817cfac1d23473be85621"],["/2021/记一次简单的水卡破解/index.html","4fe7d936d715c8e3a8a910dbecb120fb"],["/2021/高质量地从ico转为svg/index.html","736b616e87e59dcf771fe1da36632d1d"],["/404.html","e11ec8fec860324ac63fc21f5905b91f"],["/about/index.html","97707895eb1687a93da74abf8984bd82"],["/archives/2020/01/index.html","f80ea1fa4a761195b19c8df97f4d48f1"],["/archives/2020/08/index.html","e74b9a619710841707dfadfb79e6f759"],["/archives/2020/10/index.html","649e58e8a45773483a6e8f7b568af107"],["/archives/2020/11/index.html","60fd1060ec73404f1f4b86fb89d2a71e"],["/archives/2020/12/index.html","0b4eee8c49e60dce82cc7a80f25bd100"],["/archives/2020/index.html","f416183c886403c81946a7829584e28f"],["/archives/2021/01/index.html","9d610a64c134b9a69947ff54f2a3d433"],["/archives/2021/02/index.html","4373c32acfe9d6a5c3f6e0fb123b5650"],["/archives/2021/04/index.html","39e30ca22b76f8e64ee2b17ccf162dca"],["/archives/2021/05/index.html","bc24258295a70dfa12b3b131c0121897"],["/archives/2021/06/index.html","d8d318c49c81825532295835dd0ecfb8"],["/archives/2021/07/index.html","e09b20232ab63714f629c324c83c748f"],["/archives/2021/08/index.html","d7f7cc94df8492b007232797cb903621"],["/archives/2021/index.html","10e1ac14fce0900718ea724312d1e7ec"],["/archives/2021/page/2/index.html","5cf58ae906104544148ad54910668904"],["/archives/index.html","616db7680145c3153186d114e07c3c76"],["/archives/page/2/index.html","d15d09576f7ff7812d98f91386c7451b"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","2293ecdb2c1a3b12a6089b6d5fb94f18"],["/friends/index.html","905ed825266c5678c4c423b98c571485"],["/htalk/index.html","32201583f840a49623449ec75a5cbb84"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","4da384cee09f3cd62a9a5a8cd2edda17"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","373bf73e15e75873498a9165184c350a"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","7ce765e54fd71cabbb939144be9f99d0"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","3035f566a8194c0b45417f710b14ddfc"],["/morecss/search.css","f78a277809ffb1920c75bc072a7c1bc5"],["/morecss/szgotop.css","8b73b1e3bae485b34b66a46a5a90d99b"],["/page/2/index.html","f8abc2cd14f7685966a707f395841750"],["/say/index.html","81ac85b9ccb36c80b628159e0f47ee25"],["/sw-register.js","37254cc56a67ff1ff255ed694f982193"],["/tags/Clouddlare/index.html","7135531c6ec41160fc8b5c0ddfe37d22"],["/tags/Go/index.html","d69ad958f49258c6a064858b3f62a32c"],["/tags/Intel/index.html","d45a54155e75ce8500112c46c06287f3"],["/tags/MIUI/index.html","18cd6915d1a623a7e166560758dbc630"],["/tags/Minecraft/index.html","f8c5ae06de3466c6a46dc3ee112782ef"],["/tags/blog/index.html","249aa7dbf0883d76451e7b85bbe99dcc"],["/tags/cmd命令/index.html","c1e43da3d8b59641940e240a968cf6a5"],["/tags/free/index.html","76cb443523d8a1857c566c2257d58cbd"],["/tags/github/index.html","5974266d0a018c894ed1597f6f80d311"],["/tags/index.html","379c133f9e287ee236f303d785f57955"],["/tags/linux/index.html","be8649e8035554c1d2a019a256214ef9"],["/tags/oneindex/index.html","be6de6ef0d3dbbbcda049d9f75cf4d3a"],["/tags/ssl认证/index.html","54d1aa8ba9c3fa7a12fc97a743731adb"],["/tags/web/index.html","451f5b726e8ac107af40e4020fce3d57"],["/tags/甜糖/index.html","b88a29b7868b71e5b9f997286aacdf00"],["/tags/网站/index.html","2f9f3a607442f4a3c0cf1af2454b47c5"],["/tags/转换/index.html","82303e600932ead5474510920078829f"],["/tools/ghcdn/css.css","03a03f85625aa422d0617731eb6f3e26"],["/tools/ghcdn/index.css","d69e965a90d78190b71f6801f8f307d4"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","76a2c030e495dff96934467e0a95d087"],["/wiki/Artalk/API/index.html","ddf92e3bf88d8bf87e0523187ab9cde6"],["/wiki/Artalk/QandA/index.html","35deb04c9745b245b29984c104ab90c6"],["/wiki/Artalk/about/index.html","7a7fd73e16c730ad8c995cb03d85ea4e"],["/wiki/Artalk/develop/index.html","85805f69e20e9a7dbee02c74b5017884"],["/wiki/Artalk/index.html","6b3b19fc2ee72d25773b6895c14fab5c"],["/wiki/Artalk/install/index.html","960de889acaa0b9bbc1fbbc3714aeeca"],["/wiki/Artalk/more-url/index.html","6ed7f7b0c6f1a76530442bfc71e91c2e"],["/wiki/Artalk/play/index.html","633c13ba9da32fe7d8b89a2350cdcb14"],["/wiki/Artalk/use/index.html","055c43acc2956d59e3f8a42623b67531"],["/wiki/index.html","3ab15cf38658a779d574ed44369c9be6"],["/wiki/杂物间/camc.html","ec97d955287cb1e67f8c6038aa894edd"],["/wiki/杂物间/index.html","7dccf7dfd767cc9be2513b63dd338ab5"]];
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
