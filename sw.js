/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/用batocera搭建属于你的游戏天地/index.html","0864d064d842ad2704d3d7a9d1a6fd38"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","252b6a248693a50c121aed91583f9cec"],["/2021/为Stellar主题添加HPP说说功能/index.html","6a9c98fdc478eb6d8f79cb13f91be799"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","986897c73db3483b946201ce0519dcaa"],["/2021/把玩intel的开发服务器/index.html","21f2c39f8d5e8acc0b4377160a5c033f"],["/2021/搭建Teambition网盘的目录索引/index.html","18d780159469155ce73aad828c3954de"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","35923fb6d622005305d586794bf8fb10"],["/2021/解决VSCode安装Go扩展报错/index.html","f68934f6decf7d6072c60e7a5ddf4132"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","5e4450fc085ea24955eaa6b14264a89e"],["/2021/记一次简单的水卡破解/index.html","0b2bdced4d0804af5a924fb3791bc81d"],["/2021/高质量地从ico转为svg/index.html","c50a9891c255cbb5981317d0e931961c"],["/404.html","e524bcdff5f01fdc22aab1046dd77eac"],["/about/index.html","c670f24a11a60f20b6cce9c488d2e100"],["/archives/2020/11/index.html","a0df6fd099b6d00e0a575e40651d71c7"],["/archives/2020/index.html","097bedec0e82ad6ffdc7a912b35cc9a2"],["/archives/2021/01/index.html","458848068dfb3787e2348e29fdc454bf"],["/archives/2021/02/index.html","a7e70f66fbccb72af3b3eca969fb99b0"],["/archives/2021/04/index.html","78189ee993413d6c6fcdcb58b91f4682"],["/archives/2021/05/index.html","f714c79194ac0257f23de477f1211ec8"],["/archives/2021/06/index.html","1260fc9bce46f353e0e7c29b673043de"],["/archives/2021/07/index.html","40fc50bc93256e21dde78d8ae3a7bbff"],["/archives/2021/08/index.html","9064078b06a7f935c21abbd7cf9c23b4"],["/archives/2021/index.html","358f908f3d8eaabb18c5491a9319058b"],["/archives/index.html","7f8c6cfc2948982fc920f8381a90ee3e"],["/archives/page/2/index.html","f5ea4136fb5ba9e7cf43ed079e01e82f"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","aa13b2887bdcab5416649c91d6550aaa"],["/friends/index.html","5ef319c91a5bf8cc36f1304dcceb4ea4"],["/htalk/index.html","665b47e673fac978ee309c02e54372fe"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","3c2fd00a67ac56a166a7537477933827"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","1d320b23ebdf4735b9ef6960797f6159"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","8be6b20ea5b98471dc6c381dce021014"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","b54372c18a4a6788f0b1a0066e59d3f4"],["/morecss/search.css","99f1e80d1c5426f7ccf7ea10bc2746b1"],["/morecss/szgotop.css","791ed62002b311e0abdfba00a97b5902"],["/page/2/index.html","a54af4a6d61cb247be2258b090ed914f"],["/say/index.html","d7fee4b38b1f03e5b5cbeba1238984ec"],["/sw-register.js","e8d11d78da9d5caf02684478d9b7d8ad"],["/tags/Clouddlare/index.html","4e8ef7121888230c7851c53226a6a94d"],["/tags/Go/index.html","9cc8f012624c5283c1fae161f228fdc1"],["/tags/Intel/index.html","3c721f40d35b8e26f4e88c63f1cbd15a"],["/tags/MIUI/index.html","6a0407172aeaa2f3d14f45f76c599bd2"],["/tags/blog/index.html","30589a97d41254ceafc9198a516ebfed"],["/tags/free/index.html","0d59fedf379d1cd2da75279d6f360530"],["/tags/index.html","d5b58f26039a76117a48302b54598e0e"],["/tags/linux/index.html","b22f6acf33c49b0fdca2e7ccf31c55bc"],["/tags/oneindex/index.html","65e626024dc42306c5618e7e8d293b54"],["/tags/web/index.html","6263903ee8b0a56b9c9ac5a66ccbdc1e"],["/tags/甜糖/index.html","d341b709da708bdcd056e241a4668204"],["/tags/网站/index.html","c6d9bd57a0f8d343ad17197588d8e233"],["/tags/转换/index.html","07b585bea77b985bcefb39345cd8b44b"],["/tools/ghcdn/css.css","5e266f14c5bdf12dd5e580991fd81dbe"],["/tools/ghcdn/index.css","c5c452fbbc4224155eac8889d85f4cff"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","5ed87eb6da309f4e7ad865b0c125c689"],["/wiki/Artalk/API/index.html","e75b4a58fffbb79be118ad1b8801058a"],["/wiki/Artalk/QandA/index.html","da788bb8f2396d5540a87d00852d2587"],["/wiki/Artalk/develop/index.html","a99c7a058b4dc825eb106bc1c03d706e"],["/wiki/Artalk/index.html","631bce81c63e7be4a4c0089a73996dd6"],["/wiki/Artalk/install-go/index.html","0a96530041c2b35d4c5f4f847decdd78"],["/wiki/Artalk/install/index.html","da11e4694b9093c0695139fa7a570174"],["/wiki/Artalk/more-url/index.html","b5dcddbcf8b51833e9e50e4332227cac"],["/wiki/Artalk/play/index.html","cdba239a877b7b57bd1b83bce4ee6d53"],["/wiki/Artalk/use/index.html","701fe570ed82089fa52d3038afafff98"],["/wiki/index.html","91feb1a58bbf26c7b4cf904861c3828c"],["/wiki/杂物间/camc.html","f76de82aed024acf5662ec18d1ded517"],["/wiki/杂物间/index.html","e360562ffc12f38e01421b43ef38cbfa"],["/wiki/杂物间/old-pages/Free Minecraft Dungeons.html","09328eca6871f5398d4b9ef71a6399b8"],["/wiki/杂物间/old-pages/GitHub打不开的临时方法.html","f57eaa6d5c49a226a95976fad13a5e4a"],["/wiki/杂物间/old-pages/hexo更新pages出错应急方法.html","34567f9cb63c94dc91b6e13067505d91"],["/wiki/杂物间/old-pages/index.html","af1df036f23a8a90a9847ffdf267a6f0"],["/wiki/杂物间/old-pages/免费游玩《戴森球计划》.html","4ae6e9aa33561d02d9fab00b6509bcfb"],["/wiki/杂物间/old-pages/定时关机.html","831da87a88bfd1c14eed7600f9212cce"],["/wiki/杂物间/old-pages/弹出C盘の快乐.html","4e5b14ececfcb2bc5be0688ecdde8d0c"],["/wiki/杂物间/old-pages/杂物.html","4f0481a9403f7810bb477a5b434aaecb"],["/wiki/杂物间/old-pages/来在MC里玩电脑.html","1dc477311aec7b9ce0362610599cb04b"],["/wiki/杂物间/old-pages/现已通过myssl认证.html","c8f0c301f518b13e14344cdfbe513ff3"]];
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
