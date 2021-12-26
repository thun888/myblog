/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/用batocera搭建属于你的游戏天地/index.html","7659ce1c148a5cc51fe178ec070bedfa"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","8fe17c0526dddbfa4dc9cadb748e14d3"],["/2021/为Stellar主题添加HPP说说功能/index.html","6f6e5dd17b45d55c7e0c1c79c24568b6"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","1f2d0169744808d46b652320320b7f45"],["/2021/把玩intel的开发服务器/index.html","1727aceb2070b6f61dbda4ae5b24692b"],["/2021/搭建Teambition网盘的目录索引/index.html","6b86da63920c2c8992f5ff042c81c13a"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","ec62b0a044a723a7695bccb2ad307ca2"],["/2021/解决VSCode安装Go扩展报错/index.html","3554210f1c2db74d1aed4fd5f632f14a"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","65e2b73ef8e0fa110a7b4a169020b9c7"],["/2021/记一次简单的水卡破解/index.html","d66b7bd717187985cf0aa380e2fc3902"],["/2021/高质量地从ico转为svg/index.html","c9ec4360b511627c99768b2757395c4e"],["/404.html","d50b7e0515b1f2f12254d34dd101c5e0"],["/about/index.html","18ca75bfd72347037f4cdcb7d38e7c31"],["/archives/2020/11/index.html","45565facde5396c3ef749219802f08b4"],["/archives/2020/index.html","f9cda741c8772d986f2a22696dae40c6"],["/archives/2021/01/index.html","5631313a3e512b2d14bda1474d2d900d"],["/archives/2021/02/index.html","79dccde32952701ea3cecd9a4b60836f"],["/archives/2021/04/index.html","5dc7b032c6958eaee32db38a5f498888"],["/archives/2021/05/index.html","42cd8f666ade280c09f6ec9eda514e76"],["/archives/2021/06/index.html","be1e86aa029c4e3e48ce42738920abca"],["/archives/2021/07/index.html","395ae80414995ce8f0d0b903ee8a485a"],["/archives/2021/08/index.html","3bbd321f16f86001873bce24f5f6018c"],["/archives/2021/index.html","82f411f03b2cb23c4a1d6b73bcbe87cd"],["/archives/index.html","5788c1da568a3c95fd47a62794d8c9cf"],["/archives/page/2/index.html","7c0b9e974341acb76893eef2deac438e"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","76d52c1ca55067a821128b38899aa01d"],["/friends/index.html","6f5a39c4e0a7953d7873319c0d6171ed"],["/htalk/index.html","31ed1b493038b05b02e2c300ed5ea8b9"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","5dc60b87c036ece01b67bb24791a7b35"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","5528264cb5e21ab0392254c6225a611e"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","5959755ef89a5267f4d6f5f027b39caf"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","4a7d41605c67f53f9570caa1be134cb8"],["/morecss/szgotop.css","83d6d95e6980820fd271001c0e9a6914"],["/page/2/index.html","0a9fdba4979d75f254ece0b8f9b0a755"],["/say/index.html","c303e6a0951f92947bf6fdd3a811222d"],["/sw-register.js","d007fe13a7a08eda712cffa8359f946a"],["/tags/Clouddlare/index.html","8373ccb03b5e3a04fc9601e9b5f28bce"],["/tags/Go/index.html","3c73ffadac27875eff2b2c31fb8026af"],["/tags/Intel/index.html","f14021f8702739714dc069955809b3d3"],["/tags/MIUI/index.html","0b851a0a2a40517f287c9ff531b90f68"],["/tags/blog/index.html","4ef2264f7439a511be2f79a3fe0421a4"],["/tags/free/index.html","019e66c39e8fe2f5b6eef8200b96e7ab"],["/tags/index.html","0c94dc77ea2586a38863a7675fffabb7"],["/tags/linux/index.html","c6bf058293fd94c5e0c167eaad84f7d5"],["/tags/oneindex/index.html","55284481eb1fe3f3ab7e5cf68a8eecf3"],["/tags/web/index.html","d139def4629e282ace9f065548f42657"],["/tags/甜糖/index.html","4b2e5cbc56f3724992202c71c53980fa"],["/tags/网站/index.html","c7b018113e3828db1e852ce102823a57"],["/tags/转换/index.html","369218f9a551fadfb3a4d804fc8dffda"],["/tools/ghcdn/css.css","02caca7b5d171a1ead114f6eba63f9b8"],["/tools/ghcdn/index.css","70dde8f91eb3a0aae5f754a73312b51a"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","3a8778af12cb294f303dc9845196df07"],["/wiki/Artalk/API/index.html","e33b8b5469383b169a8b504ad4a66bd8"],["/wiki/Artalk/QandA/index.html","f9b07573f6280051c6bf37764caa12f1"],["/wiki/Artalk/develop/index.html","7b09319407902aff47223b5b7a54370f"],["/wiki/Artalk/index.html","03546d05dafefc5d1b45ec2e7ab0a4da"],["/wiki/Artalk/install-go/index.html","9ac094d2d1c5bdc45b1d9ec35002052a"],["/wiki/Artalk/install/index.html","9cc6c741fb7120006fbe8967ed780ccd"],["/wiki/Artalk/more-url/index.html","8628c2e5f2d301d3352445fef7003f8f"],["/wiki/Artalk/play/index.html","80ae2724736ffca4869708d772fc0220"],["/wiki/Artalk/use/index.html","6c177c0aac6c51742648ef59da2770c9"],["/wiki/index.html","fd69e9f309e9ea2d500d5730aeb18534"],["/wiki/杂物间/camc.html","78d2d1f2403978ee5f3e941f1775cc0f"],["/wiki/杂物间/index.html","b0682878632804cd8bc62c898f77fa58"],["/wiki/杂物间/old-pages/Free Minecraft Dungeons/Free Minecraft Dungeons.html","25a8486e1cc72632e5d4e4b228b02fc9"],["/wiki/杂物间/old-pages/GitHub打不开的临时方法/GitHub打不开的临时方法.html","78e9746a3dfe46d06a48b21114e84aad"],["/wiki/杂物间/old-pages/hexo更新pages出错应急方法/hexo更新pages出错应急方法.html","9478894f17e3eb1eab9e4f0e41cc7a47"],["/wiki/杂物间/old-pages/index.html","94ffab002f4284c6a3b2ffb7a18e0c43"],["/wiki/杂物间/old-pages/免费游玩《戴森球计划》.html","470bccd1818422d33d296237f84162a1"],["/wiki/杂物间/old-pages/定时关机.html","45fd917f6ae49fccff0c8a8234f2f90e"],["/wiki/杂物间/old-pages/弹出C盘の快乐/弹出C盘の快乐.html","dd45e56d82e231d4eaa72f722efdf6a5"],["/wiki/杂物间/old-pages/杂物.html","91a1771d3263ba87f7ce15c1569f949d"],["/wiki/杂物间/old-pages/来在MC里玩电脑.html","45a02f94e8bac5d8f2d46e5352b98772"],["/wiki/杂物间/old-pages/现已通过myssl认证/现已通过myssl认证.html","f2d3d7ce6e63a1011a09eb8c8439a8d8"]];
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
