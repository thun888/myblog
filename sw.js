/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/用batocera搭建属于你的游戏天地/index.html","2a01dd8b2a817b7b05e283c8f9340972"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","e018d7c2af256cbf8d8b997ae60350d7"],["/2021/为Stellar主题添加HPP说说功能/index.html","d6978fff5a9ed9a99a7b1163c4bf8954"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","87b3d290a393645462adfa9c12ad3593"],["/2021/把玩intel的开发服务器/index.html","ce10c460819be7ac4b67160759993252"],["/2021/搭建Teambition网盘的目录索引/index.html","73963dcddcc1a3630aad4a1596fd7523"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","b7a4dac4ca50a56c34b97d592eeeaf70"],["/2021/解决VSCode安装Go扩展报错/index.html","60698ad22bc5c37ee01ed3142c155dd1"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","4b182c0879250c9f3a15b939229ec892"],["/2021/记一次简单的水卡破解/index.html","5412aa071b1175bf3486b3d57d590bba"],["/2021/高质量地从ico转为svg/index.html","b15cb04aecca4abdda0766764b165f31"],["/404.html","7e68aca7d69f89791f20fa6d8fe1a112"],["/about/index.html","f9059c6c8d717e338765627adc3ec295"],["/archives/2020/11/index.html","7d72ffa8f16037cfba9dd8d92dbb869d"],["/archives/2020/index.html","99bab2da248b510583080a78eb6a4124"],["/archives/2021/01/index.html","ccaef74562462b47419ceeeaed72bb53"],["/archives/2021/02/index.html","29233701b8669c93eee851a3cf74cf63"],["/archives/2021/04/index.html","ed424ad8be2cdbfdffe8d145fd000470"],["/archives/2021/05/index.html","3ce017811c04afe171bf2414c76b66bd"],["/archives/2021/06/index.html","1792fde460152015e311fb786a89585a"],["/archives/2021/07/index.html","1a17bbb15c2a15dfdcbb2399c5489d62"],["/archives/2021/08/index.html","9c6af0ac0478c6cecc7a9798792af103"],["/archives/2021/index.html","67fddeefa0cc0c543e6156d4dcae1787"],["/archives/index.html","a491a1cda56e4793ed91dfc92baae10e"],["/archives/page/2/index.html","d47f3465de845a4e1e9c31fd57a2cf93"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","2ec5cf9491a0a27442a3a5692a0202a5"],["/friends/index.html","04f2d73ae8461724223b16b1bdc216b6"],["/htalk/index.html","8b32206911450fb9aadcfc651e900570"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","214cf101e13e7f55d1ed5d1b9a35ebf7"],["/js/1/main.js","8a1859b9319197531ba01fa215b12650"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","ddc0d1f99c106514b205bf75bdb3abad"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","b3b3202d07e2b3d34702df512cda2eda"],["/morecss/szgotop.css","f212667b5bc2417b43b10995a64a105e"],["/page/2/index.html","891296cbb6098d2ab336e4a9b4ea7f57"],["/say/index.html","cd538a057e5a8eee53ffc82caf6fa149"],["/sw-register.js","088f1aa69ad8b654b26bd8ce19095f2e"],["/tags/Clouddlare/index.html","b179013c70bca1756a33e2227cbeef2c"],["/tags/Go/index.html","357e377e68c9364fcf061f4cd5d3028f"],["/tags/Intel/index.html","9952da09e59428d344be606bfce3a5cf"],["/tags/MIUI/index.html","0a398ae8bd6e688e1492744a411d46e4"],["/tags/blog/index.html","3f2f7b227714654b733740f903d0bfe4"],["/tags/free/index.html","fb1577e415cc090cd9d3f7ab442bc3e3"],["/tags/index.html","eafe1a5509d8c8b5940fcbbc4853c967"],["/tags/linux/index.html","e777d1c63c68cb00901195bf7a3f5e50"],["/tags/oneindex/index.html","76f7200dcd87b5ef8fb72c3efe28bfe6"],["/tags/web/index.html","e7efd61dcabf12d2a3a72d3f3bb86758"],["/tags/甜糖/index.html","911afe7fa70cfaedb75c1b6a618e2252"],["/tags/网站/index.html","f39ae750684c496ba3590abb03fbad4d"],["/tags/转换/index.html","40823021eb9738c5d7dc7046a073d011"],["/tools/ghcdn/css.css","c0ea3b860d03b3aef4d1058143ee6752"],["/tools/ghcdn/index.css","d8631a5e888d2917a38f23a7a4305176"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","0b9eb7a6c7a5980ce8ce9a11c144971e"],["/wiki/Artalk/API/index.html","cbf280bbfafe37ab789795472f93c966"],["/wiki/Artalk/QandA/index.html","ec852669cc4ebdcd08965d3409b13466"],["/wiki/Artalk/develop/index.html","283c820b68cca29baabe22f6a511d937"],["/wiki/Artalk/index.html","ce4dbf3234449ecc7c6d37aec9f63228"],["/wiki/Artalk/install-go/index.html","a835955d499e1eaf699c3cfd0ae51825"],["/wiki/Artalk/install/index.html","b28ce4a8071cdb66d1bd7b56d593eb2f"],["/wiki/Artalk/more-url/index.html","1d7ce97828bf45079f1a1a73fca3971a"],["/wiki/Artalk/play/index.html","88f9d04ddf6924faa056ca4c3862bc85"],["/wiki/Artalk/use/index.html","c01136cf0b8eeb049e469037f9ac2a9b"],["/wiki/index.html","95ca7471476e2a3ebaed565be7472b3b"],["/wiki/杂物间/camc.html","8eae53d04e17bcccebcbdc388ae8dca3"],["/wiki/杂物间/index.html","4270244dc82ff909f261233b1c9a4da8"],["/wiki/杂物间/old-pages/Free Minecraft Dungeons/Free Minecraft Dungeons.html","ef058b11c29928d9485d0525ff74fe76"],["/wiki/杂物间/old-pages/GitHub打不开的临时方法/GitHub打不开的临时方法.html","27c5808c669ef822ad00879e21c4973f"],["/wiki/杂物间/old-pages/hexo更新pages出错应急方法/hexo更新pages出错应急方法.html","3b9774d2602ae0a503f33a5a9b37411e"],["/wiki/杂物间/old-pages/index.html","2e41a11feec9645e6c11e37ffd307d6b"],["/wiki/杂物间/old-pages/免费游玩《戴森球计划》.html","d149d095b581384b294c50545dada634"],["/wiki/杂物间/old-pages/定时关机.html","b8f9f81e0f677d2f4a7f89c69abc057d"],["/wiki/杂物间/old-pages/弹出C盘の快乐/弹出C盘の快乐.html","1b8bfacce0893febe410f9259a696283"],["/wiki/杂物间/old-pages/杂物.html","9d7cf5ff1ea6c07e18878d59bb2949fb"],["/wiki/杂物间/old-pages/来在MC里玩电脑.html","a7c0724add52eb24b7abe255bb0596d2"],["/wiki/杂物间/old-pages/现已通过myssl认证/现已通过myssl认证.html","6c488c065fb2244f7914ffe3ecc890aa"]];
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
