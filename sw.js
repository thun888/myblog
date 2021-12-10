/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/用batocera搭建属于你的游戏天地/index.html","d7de5c4b0919f46da15eaa2aee28ab62"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","795be0ef7f83e4ae6b6948bdfdf7af47"],["/2021/为Stellar主题添加HPP说说功能/index.html","d920b2a325420209e5d8936864f9e278"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","9cbc03fdd7428c047e5d099f7dd2c29f"],["/2021/把玩intel的开发服务器/index.html","5835fdf8a9d092e9fb76ffdee10d1ba4"],["/2021/搭建Teambition网盘的目录索引/index.html","9a28d3babd8d9b08b58a41f6fbc6cf25"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","4158d32cff26036d0bedb1d6a787b670"],["/2021/解决VSCode安装Go扩展报错/index.html","2b28521dd7680b65f8174c1a30fa319d"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","ca0c648fdd6019dc758316d6437b9ae7"],["/2021/记一次简单的水卡破解/index.html","f8b0426b62be53ecbe3c26f610d5cde3"],["/2021/高质量地从ico转为svg/index.html","d4b0388b5ecb967af215b6e906331e0e"],["/404.html","aea011d6bf6d9a51684fbe7cfd326943"],["/about/index.html","6fb0f1c1dd7edebef565e9428fa71443"],["/archives/2020/11/index.html","e056ad7fde8cfe47e56ea59d3e29ee86"],["/archives/2020/index.html","df6fc51383fbc561dab1116656be0167"],["/archives/2021/01/index.html","79d1fd526a69aff445b0e309bff5d4cc"],["/archives/2021/02/index.html","bc04e2974044399897110f9d5f437cd0"],["/archives/2021/04/index.html","9366e229e46cddf2668711a6b79020a7"],["/archives/2021/05/index.html","0452f95f224bae72f62aa9bade70bd0e"],["/archives/2021/06/index.html","9bfb2cb8d68c833cbce8a8da20961edb"],["/archives/2021/07/index.html","5d869b907bb27465cd2b17a46885be04"],["/archives/2021/08/index.html","f899bf6f1e03d7983c356cbb0929c013"],["/archives/2021/index.html","cbbedd1d8cc14d70d41d9e47857a279c"],["/archives/index.html","dd3b545f3994e727def3a6d5e6223d7a"],["/archives/page/2/index.html","1f3dad6d5d04776a9f01c04d7f090cee"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","54f47ae3049616e025161ee48d9ff40b"],["/friends/index.html","7a48900a7e6773f6cf6d6e9dfbea0cd0"],["/htalk/index.html","67992cd38b251f8b3ade449aa089dea7"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","482abc96506296d7452de8bfb04e7058"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","1d320b23ebdf4735b9ef6960797f6159"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","8ecf4726caeca2fe16ac81e589b30cb5"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","0f6e66d51b25101832a3b8e663314f96"],["/morecss/search.css","b2bf8869eb355ed61489e782aade3450"],["/morecss/szgotop.css","cdd26020a58f825427160b5bd769b1d4"],["/page/2/index.html","2f36b02d576b62eed88e6ca7f752c150"],["/say/index.html","ae4896dbd55b45600fdb9c50d435673e"],["/sw-register.js","9ddeda58f4ad30c2ee3cd595d3f83e07"],["/tags/Clouddlare/index.html","782ff36c8b92664d9fc3dab7bc6aae6e"],["/tags/Go/index.html","952b41f9b40169c4ccd83681a6306a0d"],["/tags/Intel/index.html","e7f718124269e15e988f18441e3d9d15"],["/tags/MIUI/index.html","839274b3a701c532a7144fe4c711e316"],["/tags/blog/index.html","365d01569b1cb9ce5ec5ef626d2bba87"],["/tags/free/index.html","ae2e66dfd1d51ab345e7639310fc4a52"],["/tags/index.html","838b554956ef78144731879eb19512b8"],["/tags/linux/index.html","091dfe2fc678c533d93d33882f824a23"],["/tags/oneindex/index.html","d43a532acdbd8dcdc6ccbdefbf412fb2"],["/tags/web/index.html","b7a4438604360731a8ca1be47b8e0533"],["/tags/甜糖/index.html","c959b3c451539d01572864480622d310"],["/tags/网站/index.html","8c6a61c78e5e5d78b480a6f2acb73cac"],["/tags/转换/index.html","e654790a06b5f15eefe9ef22b562fa74"],["/tools/ghcdn/css.css","9f95f2efdfcb6d824aa108b0e4fc5f84"],["/tools/ghcdn/index.css","580942d1fc0c785f9a804bf297d0789c"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","4729f9354e9fee290db1801b5a597364"],["/wiki/Artalk/API/index.html","a253826f5e324508ba5ac02d3f3e7855"],["/wiki/Artalk/QandA/index.html","1c8cfef6a314a52791eab24e97ea9487"],["/wiki/Artalk/develop/index.html","dad00b8a784f79c8ba616ce253ba27c5"],["/wiki/Artalk/index.html","1e16a0f2e7946cfa05d0e078a650d22e"],["/wiki/Artalk/install-go/index.html","d7ab286c3454fa93c40907ec9a7d192b"],["/wiki/Artalk/install/index.html","8efbae8ef49840f711e2522d7ad08a45"],["/wiki/Artalk/more-url/index.html","14208d70dd21f36475bea09850b2ef72"],["/wiki/Artalk/play/index.html","4a19052912a97fdd74333b08c1ab09a8"],["/wiki/Artalk/use/index.html","2e580527ae5a22f49b17d058ac99e1ea"],["/wiki/index.html","ef21675f51923ed9cfcd0d6d8e59044a"],["/wiki/杂物间/camc.html","fc4c16c12296840efd86f8bc65b788bb"],["/wiki/杂物间/index.html","0605bbfeebd9b635d24c1720ed604a8e"],["/wiki/杂物间/old-pages/Free Minecraft Dungeons.html","d1e9c1378b9d2813505f4fa4f257528f"],["/wiki/杂物间/old-pages/GitHub打不开的临时方法.html","11a0d806d6bc0612a0e2c54a313c61b0"],["/wiki/杂物间/old-pages/hexo更新pages出错应急方法.html","a1b08658c9f38d78972aa99b56b412b2"],["/wiki/杂物间/old-pages/index.html","bc8c67d93bbe740b89bfb3e980062d09"],["/wiki/杂物间/old-pages/免费游玩《戴森球计划》.html","2c85c7d68e5b8da1884687357713ebcb"],["/wiki/杂物间/old-pages/定时关机.html","5296f106934c55c6602c91619425e9fb"],["/wiki/杂物间/old-pages/弹出C盘の快乐.html","7f6b04ed5ee97e17dc4a98d06cf58d31"],["/wiki/杂物间/old-pages/杂物.html","3d11c249d97634148c629751c517afd0"],["/wiki/杂物间/old-pages/来在MC里玩电脑.html","e60017d8c97ebac73758f604f35637c5"],["/wiki/杂物间/old-pages/现已通过myssl认证.html","623650fad9baf72bdb1609721931d1bd"]];
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
