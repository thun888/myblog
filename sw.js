/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/用batocera搭建属于你的游戏天地/index.html","666b56a04f7d5fe3bfe0fddbaef93802"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","1d295d6bd18e92be1b82a0be7a5f63ba"],["/2021/为Stellar主题添加HPP说说功能/index.html","5e4c6ff2029d10940a92277f36cf30dd"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","da9e658a29c3df866ed959bd9b0f31e6"],["/2021/把玩intel的开发服务器/index.html","ce080e93c3dc176f5252037949144e6f"],["/2021/搭建Teambition网盘的目录索引/index.html","23beac23e65729714bf8ad348c1df1c5"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","448a643bcb19b1955a5580e4dbc482c5"],["/2021/解决VSCode安装Go扩展报错/index.html","9ab3e47db18f2af0b3ffe071ad684644"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","b1c26f4e87824c799710b1a5f53fb2c0"],["/2021/记一次简单的水卡破解/index.html","2ae9dc80a850318742339a07cf672c75"],["/2021/高质量地从ico转为svg/index.html","4f007c7b7e4ae8c7431be1020fadcf75"],["/404.html","5d0284040e40ffc0bd9371a3d94c1b34"],["/about/index.html","7ed903cb0702047b9c79bc02913d003b"],["/archives/2020/11/index.html","a44dc6b758b62e329fbfbf18431e0c1b"],["/archives/2020/index.html","f75c139561e14f133d2f14f79482c5b6"],["/archives/2021/01/index.html","9c67c7ca99af960df7747ba6ef4941c2"],["/archives/2021/02/index.html","967c6f6fa5b144653e220edb0eaff60e"],["/archives/2021/04/index.html","d02a4c33cf4f6db6d586585a5b913731"],["/archives/2021/05/index.html","031da79a9cbbf822a2923b3525b7d4ac"],["/archives/2021/06/index.html","42e55376b9fd00dcfd40d87fa8d94dfa"],["/archives/2021/07/index.html","e2219e0283d046edda5a33e2beae7032"],["/archives/2021/08/index.html","d3962475d3bf4fb451b80db838e000ca"],["/archives/2021/index.html","add8c95a2454935840162fc2d13cb7e2"],["/archives/index.html","06c0e5fd4c8ca94b51c2a6f4176fbbf0"],["/archives/page/2/index.html","d3f9beca4efacdfa96269d4c90c65c22"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","302cf41ba4766e5ac0ea637c35897bd7"],["/friends/index.html","301616beab857e6ee388547f3de1a34d"],["/htalk/index.html","e306237032fab82d7ae254ef52b9695c"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","5180ac34b15ef9dcc8bc7c6802acc1c5"],["/js/1/main.js","8a1859b9319197531ba01fa215b12650"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","5528264cb5e21ab0392254c6225a611e"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","a81209ec3e36c369194a5207179a9cd8"],["/morecss/szgotop.css","e1c478dc327af69c1995af98771e9fb4"],["/page/2/index.html","c6df505df7e33c411fd19d048a5291ae"],["/say/index.html","c12ae047bff9846e9b729348360c79dc"],["/sw-register.js","456044765338cbad9b578f92fbb03816"],["/tags/Clouddlare/index.html","b4674a19026b19aa5d9c7d1ff339209f"],["/tags/Go/index.html","8a2234fba74039ddedb67a013c434c50"],["/tags/Intel/index.html","ae109736cf6a48f943cdc35d7736d7fb"],["/tags/MIUI/index.html","ef5906f49ad10bf6dce50d5dbf06f31d"],["/tags/blog/index.html","f3f4c1069d9bb4780eff017126a1cd27"],["/tags/free/index.html","eb025b0c57dad13f515ad18628b0da4e"],["/tags/index.html","71573fe5c57c1443614005640686ddd3"],["/tags/linux/index.html","b40128645c666a9d0764985b6d133411"],["/tags/oneindex/index.html","9761d8c546670abcfd4993627adba06c"],["/tags/web/index.html","0131f3633e2e4603ceae63703d2e6531"],["/tags/甜糖/index.html","c43059e95bdfe07dab99b9948f258c94"],["/tags/网站/index.html","a505c60c6135147a65929aa57bed5ed2"],["/tags/转换/index.html","e17673dba9e26e90a8f76ce123873ccc"],["/tools/ghcdn/css.css","729b8f81fce62b5d3cc6a75caeab9226"],["/tools/ghcdn/index.css","09bb6f583a383b812d33d4afe7c3bed8"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","46260594d6aa1a978789b93b59efcc8a"],["/wiki/Artalk/API/index.html","a5e4c2d10fd6c92ccd74e6bbecebfc39"],["/wiki/Artalk/QandA/index.html","29e687adc78a6d8d69542922bced9370"],["/wiki/Artalk/develop/index.html","def8cd706a36e66e0210321caede002e"],["/wiki/Artalk/index.html","91b81ec2fa26f75ac7cb11fb64c080c0"],["/wiki/Artalk/install-go/index.html","1b861eb38fd579f7c71f49baa3d64ea2"],["/wiki/Artalk/install/index.html","fb6148def0ad8d1710cd867801b17f6b"],["/wiki/Artalk/more-url/index.html","13eca2d520d23979ef9acbd00cb9b944"],["/wiki/Artalk/play/index.html","460cf24861b1a749a4c8933e9d6b6995"],["/wiki/Artalk/use/index.html","a1848fe3b3421ecafc9dbb1c9396ac86"],["/wiki/index.html","7875f2664acef1e7e72f9debcb47cb54"],["/wiki/杂物间/camc.html","47f0ea6740a96ef8aa2186f2eef8e812"],["/wiki/杂物间/index.html","1884e5894ffa43dc33f948fc93168f52"],["/wiki/杂物间/old-pages/Free Minecraft Dungeons/Free Minecraft Dungeons.html","c6756e0b49f027922bea7edf2803a4ba"],["/wiki/杂物间/old-pages/GitHub打不开的临时方法/GitHub打不开的临时方法.html","6212d1e72cb239528ff048353cfb473a"],["/wiki/杂物间/old-pages/hexo更新pages出错应急方法/hexo更新pages出错应急方法.html","e80ba29929f114ae644fc693720eb711"],["/wiki/杂物间/old-pages/index.html","4a30bfe3a155251fc6cfe7caa3af0b03"],["/wiki/杂物间/old-pages/免费游玩《戴森球计划》.html","6b925624d9c9e423e803e75fa8298107"],["/wiki/杂物间/old-pages/定时关机.html","5885ccd98e4c5bf2b6eb2f14cb6cebb7"],["/wiki/杂物间/old-pages/弹出C盘の快乐/弹出C盘の快乐.html","9e9672b1e413e9c2be0a4a006cbcad27"],["/wiki/杂物间/old-pages/杂物.html","6f8b3d668eda6498b03c19e277aa7398"],["/wiki/杂物间/old-pages/来在MC里玩电脑.html","ca71ccb16ff0fba4dfcab2d08f82bb4a"],["/wiki/杂物间/old-pages/现已通过myssl认证/现已通过myssl认证.html","2268b0e33f497a9164b765fbc6cfef4e"]];
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
