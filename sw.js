/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/Free Minecraft Dungeons/index.html","e52c9345166094257a69f9982b8ff825"],["/2020/hexo更新pages出错应急方法/index.html","71d477c8365048448fc4d82da120d260"],["/2020/定时关机/index.html","d6cf1ea611be5023084a0122d0b56fff"],["/2020/弹出C盘の快乐/index.html","a2657cd61f62f8b76d16b6024904de3c"],["/2020/杂物/index.html","be8e915c7b2fa63f3396b8915bbc1062"],["/2020/来在MC里玩电脑/index.html","e091a17f969e88ec3c6f1e761a38960f"],["/2020/现已通过myssl认证/index.html","5ba090a043fff8703ce642ab6926dacc"],["/2020/用batocera搭建属于你的游戏天地/index.html","d83fbd88e19ecf0e5e66a6bf6e5045f6"],["/2021/GitHub打不开的临时方法/index.html","e90cd446d07bb83155cce2c43105d893"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","176b741e503c2fc02bc46915bf913041"],["/2021/为Stellar主题添加HPP说说功能/index.html","e901233b92d32b0594c82b44e7dd7972"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","0d09747caa6a352e5190540e26df9b7c"],["/2021/免费游玩《戴森球计划》/index.html","31676b7169632df28068aa62c8e1abd1"],["/2021/把玩intel的开发服务器/index.html","367cc89bb4907172676a4da565ac052f"],["/2021/搭建Teambition网盘的目录索引/index.html","bfd301f8c778bbd838252303d4283abe"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","eefb3adf0eb70daf8d06a32b16e0ae02"],["/2021/解决VSCode安装Go扩展报错/index.html","dd2f37952abb867daf0b3a3358e19c7b"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","c3b281e485cce7c3f10ca1e6a6687ec9"],["/2021/记一次简单的水卡破解/index.html","b5a92f6413da822c4fc8bf68bcef59d3"],["/2021/高质量地从ico转为svg/index.html","e4b6c217a094a861f7b8dbf7a2726c4b"],["/404.html","641ee616aad0c0df2a629950bef7f392"],["/about/index.html","8827419bb755b8c0c381db3f0807f6d7"],["/archives/2020/01/index.html","b4d3cc72bd3bcb3932dc2362b12d3a60"],["/archives/2020/08/index.html","3cb182c4103ba14b1d8016b3ebd5abf6"],["/archives/2020/10/index.html","46352a8987f154c7b266dea5185f39a6"],["/archives/2020/11/index.html","18dae5ffee873bbfb93d2f80ceeeb713"],["/archives/2020/12/index.html","66f972ef59eeb9a2e780f9df18319dca"],["/archives/2020/index.html","70034b5792881101e902ebb198a4d2c4"],["/archives/2021/01/index.html","c4b33a1a849a121aab6bf64de3d58734"],["/archives/2021/02/index.html","608f3d745c98bcf5cf44c17b6e8c994f"],["/archives/2021/04/index.html","55205240f274e40a8b0249174de64e24"],["/archives/2021/05/index.html","24067fce8dc02408d56b6dacab0102a6"],["/archives/2021/06/index.html","95f1e0763d24386b417d1d8878a098a0"],["/archives/2021/07/index.html","f30e422e06642374453599f69be2fb1a"],["/archives/2021/08/index.html","5e11146e4a83910a9a20071143bd9a50"],["/archives/2021/index.html","cc111e1894d22b903cc31c1f467992f9"],["/archives/2021/page/2/index.html","5fdec42d691c2c1563bcfd778c3bf18a"],["/archives/index.html","79c9690438071c55ee08f7de29395f18"],["/archives/page/2/index.html","409a8d3ad156d44aca5573501a3293d5"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","22f20f62a05b4ce625da535ec279e75d"],["/friends/index.html","5be93e8c32bdc7b45d40eb19c06a8b40"],["/htalk/index.html","60d88ed2f716b622e785920b0efb896a"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","f4c43f3630afdd73d7539efd1ac0182b"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","373bf73e15e75873498a9165184c350a"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","7ce765e54fd71cabbb939144be9f99d0"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","965a74b29cb88258e258e802af02b41c"],["/morecss/search.css","ed798c15348849caf956ffe2a4e7b13f"],["/morecss/szgotop.css","c4f9e37f4ddd409dd3478e4704d5e9e0"],["/page/2/index.html","c7e0e29388755696b4334349a06ffe93"],["/say/index.html","dbfd02deae5977c345e450d384e0f47a"],["/sw-register.js","07693abb2e01621092d42f4d9dd0a189"],["/tags/Clouddlare/index.html","ece181e986eb74d16d1721fdb162b0d0"],["/tags/Go/index.html","cb6f22d141591345a88cc2e8c3c3abf0"],["/tags/Intel/index.html","02cd1e5f4f1e1c96b331b5028ef9b94e"],["/tags/MIUI/index.html","6765a9cf5246a4136021a034b6c83c37"],["/tags/Minecraft/index.html","25b944640f17fdf9dd19158adff72559"],["/tags/blog/index.html","1dba6831c299614e01f3f5b98d300636"],["/tags/cmd命令/index.html","f030858566f2c6efa8fdacfb81123f5a"],["/tags/free/index.html","6b23b2e23d723201cff32b3aefb27089"],["/tags/github/index.html","14a569c39f5c2130b5423b863cbb833b"],["/tags/index.html","f17093f779c1b004e640c34cd980002d"],["/tags/linux/index.html","c0e08c8cf88c2ad7b390eac82928316e"],["/tags/oneindex/index.html","91269d14bd6b93bd05e0cc1fe5cc9b39"],["/tags/ssl认证/index.html","f0a22c83e9da925755c49105a9508951"],["/tags/web/index.html","1713f532da6a698fe94c07e888d95b3a"],["/tags/甜糖/index.html","2565385635970ee35e4ee6e1353f9586"],["/tags/网站/index.html","c4a6968e7dfa396c725b78c86ec1a9d9"],["/tags/转换/index.html","e0f92ed3508115905b9908f9ff8f8d89"],["/tools/ghcdn/css.css","64dad27feb5b32ff50743e6ea47bf431"],["/tools/ghcdn/index.css","c6be578caa0e3e2fe5858cbd8801c1a3"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","5f505f531789d3fdea51c4ad1d1aec25"],["/wiki/Artalk/API/index.html","ef4b6fc08a693e28cdd1e031eaabee8a"],["/wiki/Artalk/QandA/index.html","e01a076fe10d0d5feccf9a8db784d0fe"],["/wiki/Artalk/about/index.html","01593430e91a6c521d2c34f98d6469d6"],["/wiki/Artalk/develop/index.html","82ae2615548ee736105114f8cfb20f77"],["/wiki/Artalk/index.html","dc16b03a96b0615f5b0bdf81af61bc18"],["/wiki/Artalk/install-go/index.html","f8924f23029c42bb5d1c1ada8ded385d"],["/wiki/Artalk/install/index.html","0297a143434a26ec8cd1745954f07ef1"],["/wiki/Artalk/more-url/index.html","1a81e806d1a5f0de4fbcfd6836b56da9"],["/wiki/Artalk/play/index.html","ccf6086796f7082d5f5adec6aafbc62d"],["/wiki/Artalk/use/index.html","7baada917c8e3040e43f621e415a9109"],["/wiki/index.html","5e9bad9c46d5809433393ca4cbdc60b4"],["/wiki/杂物间/camc.html","90d813618a75ee7913429ccc13f7bc1a"],["/wiki/杂物间/index.html","a7480c287205cef57d4829ece1673f7a"]];
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
