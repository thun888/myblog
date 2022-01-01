/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/用batocera搭建属于你的游戏天地/index.html","92774a5cad97fc7ae14d240f95e863c1"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","a163b2ae2d8eb72fe8d9280dbf79ff66"],["/2021/为Stellar主题添加HPP说说功能/index.html","dc08b13e23edf0298207e6848210b287"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","065e7644b2ac897d80d47b26ccea2b02"],["/2021/把玩intel的开发服务器/index.html","560e4f4e650b9c26669376629e98c58b"],["/2021/搭建Teambition网盘的目录索引/index.html","e111d09f93316c294aae61cf4a82b1d8"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","188c0d143248715439aabc9f9dd7a874"],["/2021/解决VSCode安装Go扩展报错/index.html","70c95ff07f9347f51aa6b8c25269c18b"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","34dfbb86889bf00036221f499e18f545"],["/2021/记一次简单的水卡破解/index.html","0bf8349e8e18ad22f9f946d3f4ea5686"],["/2021/高质量地从ico转为svg/index.html","b7b9a18e8ae3cadd66bcdf44b73a8f72"],["/404.html","946168a21212ce82eef8b9031550db5d"],["/about/index.html","252082a75bc6d8cb4f4014b5b979d50e"],["/archives/2020/11/index.html","9aa4d9e5e5b871412010225870a231b6"],["/archives/2020/index.html","94751ac0b7d85edc909d0d0f9181e3aa"],["/archives/2021/01/index.html","3a99c3fb3313f9061385174c12c545cd"],["/archives/2021/02/index.html","7bd8ab41c503a48d18c20ee96e7dcaed"],["/archives/2021/04/index.html","a7483b602f439a9d39ddfea60ca32d54"],["/archives/2021/05/index.html","83de6bdaeb7b2f4073677939aeef9a12"],["/archives/2021/06/index.html","ec7e97a1b809e081df01404381938262"],["/archives/2021/07/index.html","5abdcc20eb626fb41fd3be605ffc6823"],["/archives/2021/08/index.html","3d4ca6a98cc988b1161c69c85dd16119"],["/archives/2021/index.html","96058deee020cc12880533c7d38d93cc"],["/archives/index.html","e748bea0171839a61f00de331e935390"],["/archives/page/2/index.html","ee5c363d12ba95e4dc59668b89a4f116"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","d63ce8656870f3313dc5a4d0478fd2a2"],["/friends/index.html","499923d8cc35cbbef9457a7173173f05"],["/htalk/index.html","01d227b4428a4ac699e754b61c831473"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","5ed52d1c40e0ec0c8c84728008561b0f"],["/js/1/main.js","8a1859b9319197531ba01fa215b12650"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","5528264cb5e21ab0392254c6225a611e"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","2a7f9ce417a55e5a4c5bc1981fdce4a1"],["/morecss/szgotop.css","9e8f42565dc5f66906e542c5c4c5a23a"],["/page/2/index.html","5486177272ec02d0a6584a033a5b3d37"],["/say/index.html","7106372a00858196dc4e12437a713ebb"],["/sw-register.js","50388697309895eabeb0d4e2e6c9fc97"],["/tags/Clouddlare/index.html","5d34c200dede55fcd7de1a590d38547c"],["/tags/Go/index.html","7368437ccb869709194918c3f48bda0c"],["/tags/Intel/index.html","bff9431807113091198b8f42864a77fb"],["/tags/MIUI/index.html","70db969bdaf8ebe5ad13405a4a99effc"],["/tags/blog/index.html","4003b4901f763cd16eb9ab86d2bd4168"],["/tags/free/index.html","bc0a58364a4b9ceb4cff7a31092abe10"],["/tags/index.html","0191dc448aa83e9b7744b0cf39cf5299"],["/tags/linux/index.html","9dc57f80142b4aa827d0845e7dbd5c28"],["/tags/oneindex/index.html","c9305f2339637853419290bc1e09be14"],["/tags/web/index.html","1e85bf03f86780586cc82c0ced39f4b1"],["/tags/甜糖/index.html","c2f28ca7fb1cc68d8125601c750704dc"],["/tags/网站/index.html","bff2fe9b6d56162abb3c5e454531efc1"],["/tags/转换/index.html","ceef4b283aaa6cc185dc797126ae96b2"],["/tools/ghcdn/css.css","55e2957c5b55b11a155ca31b63c69faa"],["/tools/ghcdn/index.css","332b4cbba665eada450555d853257d60"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","34b1738c9dcac290cede37b876c9bde9"],["/wiki/Artalk/API/index.html","2ea364b44993eb79d0542566c433b5ef"],["/wiki/Artalk/QandA/index.html","e7b0ce11d781af3b7b106557d26c3b81"],["/wiki/Artalk/develop/index.html","51915035dbac2a3c729db330638587ed"],["/wiki/Artalk/index.html","ae1a20745a1566a25b78f127a60baf68"],["/wiki/Artalk/install-go/index.html","11637a893af7eca74bdac46a3e7afb66"],["/wiki/Artalk/install/index.html","25b490a450709567763853374fc37cac"],["/wiki/Artalk/more-url/index.html","c9982aeea14e2c192172836f4a1a4d77"],["/wiki/Artalk/play/index.html","75024ccef6cb6a62c52e9ced2278e6e3"],["/wiki/Artalk/use/index.html","d510f5b2e9c074f257356d6f4c66e7de"],["/wiki/index.html","8415068299b33f57f4b046fc8b53b02e"],["/wiki/杂物间/camc.html","eb8c5194f92d1c59412c743146c0877a"],["/wiki/杂物间/index.html","9522f75b435800ddc0304bdd1a376513"],["/wiki/杂物间/old-pages/Free Minecraft Dungeons/Free Minecraft Dungeons.html","b1372a2ab5a0665d3ff993d4ef84c3e5"],["/wiki/杂物间/old-pages/GitHub打不开的临时方法/GitHub打不开的临时方法.html","47ae6f6912b7fdbfc10dffc4c7577e8b"],["/wiki/杂物间/old-pages/hexo更新pages出错应急方法/hexo更新pages出错应急方法.html","5090bec53784b8fe050a7712a1fa5e4a"],["/wiki/杂物间/old-pages/index.html","070b49fffbffa47b850c1f2d400caf49"],["/wiki/杂物间/old-pages/免费游玩《戴森球计划》.html","40ab8824fb8a5aa34b0731de98c9cae9"],["/wiki/杂物间/old-pages/定时关机.html","b2ac8c17b5b017a7cae16b63c341ea57"],["/wiki/杂物间/old-pages/弹出C盘の快乐/弹出C盘の快乐.html","82515631e5a259195c94183ce78df6f8"],["/wiki/杂物间/old-pages/杂物.html","85b952a13e9f1d27fbd72d70275ce52b"],["/wiki/杂物间/old-pages/来在MC里玩电脑.html","0c5ed1d922bd8c134df545b06c82fdf2"],["/wiki/杂物间/old-pages/现已通过myssl认证/现已通过myssl认证.html","8af3005d284d09fbbdc43eed90e2748f"]];
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
