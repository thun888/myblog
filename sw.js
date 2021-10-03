/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/Free Minecraft Dungeons/index.html","8cd02c93185eb987bd63aa30fda5acfe"],["/2020/hexo更新pages出错应急方法/index.html","1730835c399247881e9e0bf0f9dd3dd5"],["/2020/定时关机/index.html","d6e2bbc92a0e39ffffe66c2fe60d04e4"],["/2020/弹出C盘の快乐/index.html","bec871322ac3ac7c20c3c2caccab44d2"],["/2020/杂物/index.html","349f9c64639937e6e30d8d24d9dfd996"],["/2020/来在MC里玩电脑/index.html","16860018c436529bf492439e44938735"],["/2020/现已通过myssl认证/index.html","6efae32b7f692b5c7225cd25d1cdd577"],["/2020/用batocera搭建属于你的游戏天地/index.html","138e8ff589aec5b11726e7b875a40a18"],["/2021/GitHub打不开的临时方法/index.html","62065b573a45faf15b983b8863c0d2c5"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","608767bb2fc77c562f2269936636a174"],["/2021/为Stellar主题添加HPP说说功能/index.html","2312533b3983f8a2b6246b5e28a92015"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","21b25b0b24704c9165c49a29b89d9dd2"],["/2021/免费游玩《戴森球计划》/index.html","32bf94a7e2aa1869f2fff8e74a979c22"],["/2021/把玩intel的开发服务器/index.html","05bf0e6ab0f6c7d8b19df89871dea968"],["/2021/搭建Teambition网盘的目录索引/index.html","9de9a87ca1465c6db4995c443d049dbb"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","beeeb6646a9d4b4170985aeabdc1c97c"],["/2021/解决VSCode安装Go扩展报错/index.html","c136ea99093463cea17ad339b2d70f68"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","df52f0c0078e4e5ae62885f14a1f22ab"],["/2021/记一次简单的水卡破解/index.html","b58a345fea37dc8e2a59abc005eae6e3"],["/2021/高质量地从ico转为svg/index.html","0460275232c7f8d39047c345211ca6f2"],["/404.html","ac7274d090e4837a063ca363adcece4b"],["/about/index.html","e1fc4025133b0d0d1b653785ca1d33f8"],["/archives/2020/01/index.html","33191aa09c1b7d2e4a5097638e0c2918"],["/archives/2020/08/index.html","2f1d2e5b6e6bcba2dcb0b1a1d3ec1e9c"],["/archives/2020/10/index.html","61679131a9071bdbddcba9ed8f3fc8f2"],["/archives/2020/11/index.html","71eb1367fc2f006c53aeb52afb752c6f"],["/archives/2020/12/index.html","ba554506090d5a039b5fe67ef9dc2e4a"],["/archives/2020/index.html","066e3f2a026793574570434fb88c54de"],["/archives/2021/01/index.html","74f7f5e4fb1e2ff3d8d7c05e132aac6f"],["/archives/2021/02/index.html","79df2ba7e690be203c121707932cf583"],["/archives/2021/04/index.html","14c0727d96792af2cf797cb4cb471bc4"],["/archives/2021/05/index.html","259c95783f714f5b074aa84cbb7d059e"],["/archives/2021/06/index.html","adb5adf14def50e65b6b62ecb3dc85d3"],["/archives/2021/07/index.html","5df85001f5da99eff0092539f1f3a46c"],["/archives/2021/08/index.html","6b4e7643b88d91170cea2ddc46ef4c46"],["/archives/2021/index.html","6c1e52051c1eda33c19c3a6db739a69d"],["/archives/2021/page/2/index.html","3badf5643907680d7a28290b6d9c0ef1"],["/archives/index.html","d74276dab498d1638c6ae39b1be960e6"],["/archives/page/2/index.html","452b3587e814f2a4642962673646c08d"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","fe04882275a4b65666dc58fa89c971b2"],["/friends/index.html","e013ce0a621bf2a3954e81d2c76af4c9"],["/htalk/index.html","28e73c346f909e14f42162821907ffae"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","0443f51e827558aa833c31193f6b8a74"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","709be4f3306d31c386fa080190d34529"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","b2ac72c84448bfdb212e14439e573750"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","07ee1beea8a44278ba5b3acb2b3d3d7a"],["/morecss/search.css","314b58da02ca5f2e3d93ad0447de7c02"],["/morecss/szgotop.css","bda236755c05c7865521911fe11fe0c3"],["/page/2/index.html","c2e8ec0af899b4d67857e2e79378c1ad"],["/say/index.html","0d5c32a24cfcbb0e77f04d820850cc59"],["/sw-register.js","861650f85cc455f10cde2356fe18c5e3"],["/tags/Clouddlare/index.html","abbd8be4d5e37c574842998fd12ee8f8"],["/tags/Go/index.html","a18be8c868ac199622790f08e1e4a9f1"],["/tags/Intel/index.html","20f68344a5333f77092a36d1e912d7c6"],["/tags/MIUI/index.html","e852ead3c390d5ef5c6626bcb245a8ba"],["/tags/Minecraft/index.html","ba76b2b204f40649cb19a2e35b2edc2d"],["/tags/blog/index.html","c7fc86a4b4e1c1a746c3f405c59e974b"],["/tags/cmd命令/index.html","22c2f0f013caf58d340e3136dd6c99a8"],["/tags/free/index.html","e7f8afb8fc11c73fa9c0e6278770ea5e"],["/tags/github/index.html","b675a439ed0f9bd5951adee13ebc3d03"],["/tags/index.html","2f1c69ce425049976d0ab27b100137d0"],["/tags/linux/index.html","8c868f1a9befaaaf0e95e38f5e107cca"],["/tags/oneindex/index.html","6aba5c08c389402055e2866ee1dc3ce5"],["/tags/ssl认证/index.html","3e21ffa5a4320541ac02832249ca026d"],["/tags/web/index.html","1e54ac001582c2c6e2c4932e22e663bd"],["/tags/甜糖/index.html","31e542509b0aaf7f0d67f6d35962b79b"],["/tags/网站/index.html","a61f52fe2d93bb87be2ef81ebe2a2807"],["/tags/转换/index.html","673aa84c7a6d01c36d3774097d191171"],["/tools/ghcdn/css.css","b0bef1d59ae35153194d65ad4ab7420d"],["/tools/ghcdn/index.css","0b7ec62d796897442dfa0db100bf06bf"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","c636f51a05f2c88d92e371a00b69d6e2"],["/wiki/Artalk/API/index.html","638bb28d99fdea3154769160120ab47e"],["/wiki/Artalk/QandA/index.html","898e492371dc60f24d0c1e0a3f57b488"],["/wiki/Artalk/about/index.html","e2df7e6aa1f7bb4d19eed44ca4e257c0"],["/wiki/Artalk/develop/index.html","a3fb48782acba2d3b156e2b80eb78cb9"],["/wiki/Artalk/index.html","4ee227bf45febc7e143abae4edfda0e6"],["/wiki/Artalk/install-go/index.html","0cb2245d58f04f2c5f73a483d86b4a91"],["/wiki/Artalk/install/index.html","a44b66ad2a461142738093bf92608c0b"],["/wiki/Artalk/more-url/index.html","e2b59b11a50932089f4f4e07acf3513c"],["/wiki/Artalk/play/index.html","f569b37d2bf7612dd90bef04a82ff023"],["/wiki/Artalk/use/index.html","dac5122e27fbe8fe954347d8405f4d8c"],["/wiki/index.html","d0c509d9e20f418020eddc666c638444"],["/wiki/杂物间/camc.html","3108d3c42f377ceca2ee335e6dc73d19"],["/wiki/杂物间/index.html","9cfaa2789c4cb8d8cc5cb441203e9d09"]];
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
