/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/用batocera搭建属于你的游戏天地/index.html","0e8b61580e7a9eddcb1c053e2f6694ec"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","d645b9e9da104fe57b7bdac5da9a31b7"],["/2021/为Stellar主题添加HPP说说功能/index.html","77fc62ba286f75c84df780897baded9a"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","8916bbc0a8339536eccd43e20432f651"],["/2021/把玩intel的开发服务器/index.html","9756fde94dfc89c0fe80180d9ecb6442"],["/2021/搭建Teambition网盘的目录索引/index.html","d5cdc9e6b36d729a16f72bd761b0b1ba"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","3f8905bbb64eb5972616f2e6c2874467"],["/2021/解决VSCode安装Go扩展报错/index.html","da72f053d568e80f3bd9355d32441a4f"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","584d41b5adbc45c8dc18b856c9c27179"],["/2021/记一次简单的水卡破解/index.html","d74c8bddee884b6753930d4a0e94b799"],["/2021/高质量地从ico转为svg/index.html","a440d452dba052010aab429c99677445"],["/404.html","df076088924ca7d62b1d810fd6619e67"],["/about/index.html","bcd87a39f74759e9165ee60376172c4d"],["/archives/2020/11/index.html","1cd3d98db51cd9f7f49cf90e105309dc"],["/archives/2020/index.html","40a74a85722f4de8c187ae44347d8fd7"],["/archives/2021/01/index.html","a778dd8a6dc45921789dbbfb5b8007bb"],["/archives/2021/02/index.html","afb76895799ba1615505a25b571b1f82"],["/archives/2021/04/index.html","936aecef0bb6b4bf933401322d7046e6"],["/archives/2021/05/index.html","2e61dcc26fe31ad0739869e0a5340624"],["/archives/2021/06/index.html","07c02af61b263110e191f10f3c8aba8e"],["/archives/2021/07/index.html","0bfcd7aa916f140613832975b8fc20cc"],["/archives/2021/08/index.html","0c6dfcd7ac331c58015a556a2e4983e0"],["/archives/2021/index.html","af2858047ef93f2136ebe123ae214b9d"],["/archives/index.html","4c291459b296685cee6c802b05d4a001"],["/archives/page/2/index.html","d106a9579a76d0247136fb42e159dfb5"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","ff56591b2987b12b4e5a051cbef1e846"],["/friends/index.html","807ac07c9a4692dc77e76d58eea8368f"],["/htalk/index.html","cb23e331a3a6b873d639423adf9e4e52"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","cec01c210e4842dc182ae646addf6084"],["/js/1/main.js","8a1859b9319197531ba01fa215b12650"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","5528264cb5e21ab0392254c6225a611e"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","c5d8da091e8565d01846bbc92aaf46d3"],["/morecss/szgotop.css","d05e47597656caa179cd1220bbc52e09"],["/page/2/index.html","5064ecf3bba27adb823bc62819202eeb"],["/say/index.html","844cbc10363e374e968954c91c73d499"],["/sw-register.js","0b38459c0fb1292e89f07f5a7f447c5f"],["/tags/Clouddlare/index.html","3fc1af14c9e928f6397be96df4720505"],["/tags/Go/index.html","ffa2a3c361e3bbe943cb9fbea4cd88d3"],["/tags/Intel/index.html","fa66df12c1a963412541dfc587c569ed"],["/tags/MIUI/index.html","a64a6bde330b722a032c637f8d356eec"],["/tags/blog/index.html","fbad7a5e061949c2ebb58b09ef97d3b7"],["/tags/free/index.html","88525275a3533967b8331737e8334d35"],["/tags/index.html","099f5e3698ced32ec4898a217c9d41f5"],["/tags/linux/index.html","20345b6e13fa611140a3fa73ce949042"],["/tags/oneindex/index.html","43f5435cdae08bd0b68c4b588f80298f"],["/tags/web/index.html","26a9208b28d8cef3baae43e3ab267c0e"],["/tags/甜糖/index.html","b7eb082fc61140ecb0c554c8abe12dd5"],["/tags/网站/index.html","2180f44dc296b514b9d70f534db7d6a2"],["/tags/转换/index.html","fea8256387791734643676e9f733c9ae"],["/tools/ghcdn/css.css","4527b30e66a11e61281999e55634c906"],["/tools/ghcdn/index.css","c5f38a3c1fc6bb248970697137236642"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","c9860865bdbbd1e2834a86785bdf772a"],["/wiki/Artalk/API/index.html","200e897e8dddf3ae0dc4569d4994a81d"],["/wiki/Artalk/QandA/index.html","769c210816d81ab13472875fd849343f"],["/wiki/Artalk/develop/index.html","ae53048def085e26e74f5f36d039e8ff"],["/wiki/Artalk/index.html","d636ff5c4cf18559a64ac753bd1ac880"],["/wiki/Artalk/install-go/index.html","74e2044aa2760798f53b6a2a179c4612"],["/wiki/Artalk/install/index.html","12ee1d2c7fc7f39b987c7d26d297f8d4"],["/wiki/Artalk/more-url/index.html","2cb7a4b48b698d902ed77ff8f64c83be"],["/wiki/Artalk/play/index.html","a41c38ad75669697769a94b86ce18eba"],["/wiki/Artalk/use/index.html","60baf973df9b052e5484368e6ec8b7ce"],["/wiki/index.html","5f6d11cabd1dd6f42f6079baf6cc3598"],["/wiki/杂物间/camc.html","eb716e86e8a85b482c76e4e8ab4873c3"],["/wiki/杂物间/index.html","e4dd67a5d851f2d6c19d3660b777266c"],["/wiki/杂物间/old-pages/Free Minecraft Dungeons/Free Minecraft Dungeons.html","9e2cf5a8a2303d0206196147a4fa8fc8"],["/wiki/杂物间/old-pages/GitHub打不开的临时方法/GitHub打不开的临时方法.html","aecddb91610bcbd400e22f250347c50c"],["/wiki/杂物间/old-pages/hexo更新pages出错应急方法/hexo更新pages出错应急方法.html","f39ce038444945ab1df91f4360980872"],["/wiki/杂物间/old-pages/index.html","7830ebce745dc36accf31445a3dd8437"],["/wiki/杂物间/old-pages/免费游玩《戴森球计划》.html","c4bd99d32d6ea3eecbeca0ed2f2a3ff3"],["/wiki/杂物间/old-pages/定时关机.html","542bf5c042f2eb73cde66ed2da5d63f6"],["/wiki/杂物间/old-pages/弹出C盘の快乐/弹出C盘の快乐.html","6d2dce691f94184ef875a748ff9df742"],["/wiki/杂物间/old-pages/杂物.html","9454508ba654891b5f77f9de2c88394d"],["/wiki/杂物间/old-pages/来在MC里玩电脑.html","8be4bf39115dcff1f396b41196657cb9"],["/wiki/杂物间/old-pages/现已通过myssl认证/现已通过myssl认证.html","09cd7a3e82146ba7fa54e774b5569dba"]];
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
