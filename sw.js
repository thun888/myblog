/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/用batocera搭建属于你的游戏天地/index.html","7c902fa398febe1a094c1e2e9a9ea72f"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","b9db4b1b92c5a5c7adf2c350a438f5e0"],["/2021/为Stellar主题添加HPP说说功能/index.html","f8e7ed7df40fe7a543788d2d9d30e532"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","f1967b1c09edf29d60762af7f2a98071"],["/2021/把玩intel的开发服务器/index.html","fec69e6326bf629f0af9379d02eb270c"],["/2021/搭建Teambition网盘的目录索引/index.html","3b177d90ea6333b2484147e8b45bebaa"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","81ac7d3a23f6966c1f3a7f653b005264"],["/2021/解决VSCode安装Go扩展报错/index.html","4a7ad70c4d3f7cd6634217559fa2f96a"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","8c38cd4d6a9bc4658a412b8a14789353"],["/2021/记一次简单的水卡破解/index.html","87ee552bb09b2efd5156f0506ab214d6"],["/2021/高质量地从ico转为svg/index.html","a3150db4bc060679217d6add1cf3e886"],["/404.html","8cb73ff729888447ac082e93f11c4b33"],["/about/index.html","3cf6f009fcde4c7a7b13357741578df2"],["/archives/2020/11/index.html","8cedb33f8af2f58702646da59e4ddd96"],["/archives/2020/index.html","7800b6a01ad0fef0b711b43902b1e566"],["/archives/2021/01/index.html","faa6861c23eef0e4a3886914a865e5b2"],["/archives/2021/02/index.html","abd70224c1c034e49aaa9df0b37826ae"],["/archives/2021/04/index.html","f7ee2915c28f928d7c5e57bfec35effc"],["/archives/2021/05/index.html","4c4275e22676df12f018ea7d1f568e4d"],["/archives/2021/06/index.html","2869549a2f60f76890af1b87202d03ef"],["/archives/2021/07/index.html","85e2448d884744a328d7d999180ee89a"],["/archives/2021/08/index.html","f040bd4071fe888a137e240fc23eb58f"],["/archives/2021/index.html","51246b4acf28a8050e05e0b89af6784d"],["/archives/index.html","0f585acb9e243df5ddc98929fc454521"],["/archives/page/2/index.html","1dc67faccbd8518ce9ac2803f07add92"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","02b756945933faa8bf51844d301ee976"],["/friends/index.html","c54b8c4c3c04f17b5a1dd0cca8311e9d"],["/htalk/index.html","fb3ae4d2d0703157e81e13b4915717d3"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","bbbfa3945c0362f7b8b0d94006bf88c8"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","ac6326df790014eadb98c0402935785c"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","8af3205a70809402b0f1e14962fe21e4"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","b55b8e9f31455fd4156a322d4b386eff"],["/morecss/szgotop.css","84062c388ff193075f2b830083e6277e"],["/page/2/index.html","31a308dc7d96bf012639b70ea169b9d1"],["/say/index.html","ff0c9d881aab78ad66da73901cf1d97b"],["/sw-register.js","1639c120eec68919306b4de7dbdd76ab"],["/tags/Clouddlare/index.html","4a9a351fbdb2d910cf834b85e66d2c8e"],["/tags/Go/index.html","6d0354ce67cd39bb6f51d7d74ef50f8a"],["/tags/Intel/index.html","4069c23acd5b877be03a0a84720d97c1"],["/tags/MIUI/index.html","737216c64e12010d6e7b5a3769c5f758"],["/tags/blog/index.html","47b7aef8a0b0647b19995efd25a95d82"],["/tags/free/index.html","50aba57469be607977439a7946c68980"],["/tags/index.html","ea06180bb480fab4a6e87d6e6129811f"],["/tags/linux/index.html","597ddf769a1d64d470b8ddc1385f52db"],["/tags/oneindex/index.html","90082535bd198f80cb956579236f8eeb"],["/tags/web/index.html","6eefc4c89bd451c49fa9ec5048f90cc7"],["/tags/甜糖/index.html","d1f79dce401e58b9209055c303f70983"],["/tags/网站/index.html","8203ed7286268b78595fce65a4d5124c"],["/tags/转换/index.html","767ef5e1c1c2b41827908e9ea3c72bb1"],["/tools/ghcdn/css.css","48c5c97a5c031a69ec4a7f07a8a54f85"],["/tools/ghcdn/index.css","e5b8de3ca6e5fdbd0b3d3d9f14173494"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","473cb2bc4e08c107673944711fbe5284"],["/wiki/Artalk/API/index.html","b2f335f714a92a2d6e2fb743cf7e01ad"],["/wiki/Artalk/QandA/index.html","c7cf9f031a9209ab129b37a76f5ad4cd"],["/wiki/Artalk/develop/index.html","594c061ad2c12b9db46e6bbdc2bf6caa"],["/wiki/Artalk/index.html","8989463c951a9c0cc8a9edeeda45b5df"],["/wiki/Artalk/install-go/index.html","3bc8f823bcae55c0fa0aa36bea2c7a1f"],["/wiki/Artalk/install/index.html","fa08610b4b95f948adf94be00a813e10"],["/wiki/Artalk/more-url/index.html","81f14f1eb0f006586e76da842c374a96"],["/wiki/Artalk/play/index.html","0c0dad3afdb192d5f3c8281e06c2f122"],["/wiki/Artalk/use/index.html","bbb64f2437813793b9dd765953dd28d6"],["/wiki/index.html","bf45f0a389c8d7955ccb32d02f16eb33"],["/wiki/杂物间/camc.html","2e16bd060d60c7b7a7a2759f82a28ecd"],["/wiki/杂物间/index.html","1f83c68be31a51f86a1e20de7de973ca"],["/wiki/杂物间/old-pages/Free Minecraft Dungeons/Free Minecraft Dungeons.html","33fb497005567f5a761aca27cd64d721"],["/wiki/杂物间/old-pages/GitHub打不开的临时方法/GitHub打不开的临时方法.html","f3c1b8a8da9dca832680058993daafb2"],["/wiki/杂物间/old-pages/hexo更新pages出错应急方法/hexo更新pages出错应急方法.html","c9192a7b316767e34e06593378e8c4c2"],["/wiki/杂物间/old-pages/index.html","9051d9b75837de288afc37c20a9159ff"],["/wiki/杂物间/old-pages/免费游玩《戴森球计划》.html","adbca079123ac082541e3d25ffc4f7bf"],["/wiki/杂物间/old-pages/定时关机.html","e289a637822963de83e0a65aaf8a8b5e"],["/wiki/杂物间/old-pages/弹出C盘の快乐/弹出C盘の快乐.html","caa57e4781f40ab781e64d2ee9a302c9"],["/wiki/杂物间/old-pages/杂物.html","3943621626ed1d81aad3984ce4b6b5ff"],["/wiki/杂物间/old-pages/来在MC里玩电脑.html","f7d958ba79c7cbec226801d4913bdb48"],["/wiki/杂物间/old-pages/现已通过myssl认证/现已通过myssl认证.html","053fc8929621c23be2132a9d5bf403f4"]];
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
