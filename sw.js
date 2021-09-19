/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/Free Minecraft Dungeons/index.html","8a767d4bf1b4d808d7cc6b2f261b53dd"],["/2020/hexo更新pages出错应急方法/index.html","050a69e1774b28356ab71ece2d296ae4"],["/2020/定时关机/index.html","ac0cd178ec3897404bcca92d596169a1"],["/2020/弹出C盘の快乐/index.html","597ef80236e6de94731791fc8ea52374"],["/2020/杂物/index.html","482bcc94dddd385787eca0df16f3372e"],["/2020/来在MC里玩电脑/index.html","c5f62f9261e1092645b2ec52dfb98453"],["/2020/现已通过myssl认证/index.html","76ad42935364727575aec693da537abe"],["/2020/用batocera搭建属于你的游戏天地/index.html","826820b091ef1adaadf68ea0f33ef142"],["/2021/GitHub打不开的临时方法/index.html","c7598587a61004abeb011c52e3c591c3"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","63824886e907f8bac4b828c0268aaff6"],["/2021/为Stellar主题添加HPP说说功能/index.html","d49a3d2c926b1b3d8ee2c5aec3385464"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","221388fc95ab11a38aa901d810000aee"],["/2021/免费游玩《戴森球计划》/index.html","e3f54a719f00ea0f62eb64142c3e582a"],["/2021/把玩intel的开发服务器/index.html","5ccf4fd72dc9919f01e5a798299ec60e"],["/2021/搭建Teambition网盘的目录索引/index.html","d90c2d4af133a3a07c137ee7b943a5e8"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","bb6215a4790d227a486a54176c137064"],["/2021/解决VSCode安装Go扩展报错/index.html","53e5108fef21ea63308948d9aa9beac8"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","a75600f9f40c81659d9c477b58d4d57c"],["/2021/记一次简单的水卡破解/index.html","92d0a10e94ad8af88cddca589b8e0348"],["/2021/高质量地从ico转为svg/index.html","38b595bab96a6f3ac5b7f354f7e96b09"],["/404.html","5374036de6fb18f82d9054bbc3ea7109"],["/about/index.html","fd37849c66afef3f81f78ccdaf9f674d"],["/archives/2020/01/index.html","b0b0e216688a9d181fc3712b032540aa"],["/archives/2020/08/index.html","f49376c5fe9d6e38bb620285d2b89a7a"],["/archives/2020/10/index.html","cb43de23c12329930944e597e0289d9d"],["/archives/2020/11/index.html","085c190710fa6456a0fffd1ae595f461"],["/archives/2020/12/index.html","4aadc672a2b804062d695b519b4e25ea"],["/archives/2020/index.html","86d2ab9d301feb5b1274c56553ee7032"],["/archives/2021/01/index.html","d947a5e15c8a4197505f9fb3473c5504"],["/archives/2021/02/index.html","f0dbb663fbd3d005e4fd405bc30e6dc5"],["/archives/2021/04/index.html","6d947e111fc2f2a5c0bafc8dd32dc536"],["/archives/2021/05/index.html","57d0684bfd7258a48cb5e8695ef077c1"],["/archives/2021/06/index.html","2988d3dae13573f355c7454da67ac2e9"],["/archives/2021/07/index.html","44dfe51b8d1067712596091fcbcc7dd7"],["/archives/2021/08/index.html","454d6fb541573672760c9340ebe08905"],["/archives/2021/index.html","384974a76c3f11f965a7202d8bf7810f"],["/archives/2021/page/2/index.html","486de9847c3733e9837e41b19e778755"],["/archives/index.html","66eca3d021f9b7559a934eb1ccf61dae"],["/archives/page/2/index.html","a41168224e97eabaa18697ed7ed819cb"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","a7ecd63ab88c092b15cc0cd556178768"],["/friends/index.html","25c16e89823c06ab9b6cfe5344d1febf"],["/htalk/index.html","f9529050fd893de8dba06d917902283f"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","9c38857a09030e0d0146369eaef65cdb"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","373bf73e15e75873498a9165184c350a"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","7ce765e54fd71cabbb939144be9f99d0"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","138f44f328c3b6f070f7fe35f8fd14b6"],["/morecss/search.css","105bcfe3b8deda67012ee2db9a8b56df"],["/morecss/szgotop.css","83b03d641e1ba461a9b600ee6f1a98f4"],["/page/2/index.html","2a789da9dc749dd99af8c5e8ca3b32a8"],["/say/index.html","7a3e0426a08f30573bf66af4b618c859"],["/sw-register.js","fd863b2a013b46c33e368001ddcfda40"],["/tags/Clouddlare/index.html","554c7a9184a6348bf4619bc83d57b5aa"],["/tags/Go/index.html","e4f5b7b7ba81e7550fd77fcf0abd6f90"],["/tags/Intel/index.html","0b87799ce343cff60337b49a0be43523"],["/tags/MIUI/index.html","7e6743c221783a277a98793d4c049a7d"],["/tags/Minecraft/index.html","d4227081a5f54c99cb79d63ae1b718cf"],["/tags/blog/index.html","675cbddf440376ce59f6b9140d932894"],["/tags/cmd命令/index.html","013414da3f176f9bd0fd27257aabe1c6"],["/tags/free/index.html","e42ca8f36321a833eb6d7fd7ad0d6bf1"],["/tags/github/index.html","e61c6bf8c2c4c95e31a69f34462d74d6"],["/tags/index.html","904c865f41a15ded26dd5d3ac9c52da7"],["/tags/linux/index.html","fbaffefa700f886fb0d2e7163c899b3c"],["/tags/oneindex/index.html","b41dea3febc39689447759f0a556b8a4"],["/tags/ssl认证/index.html","7dfe2e56fde51128335717d58634cf3d"],["/tags/web/index.html","3ec28e2d7d0419ccc5beaf8ff178a31f"],["/tags/甜糖/index.html","564b8cb8003fc13e69c552f8f69a985f"],["/tags/网站/index.html","d069b63e01f376c2ca2a00dcb78ce485"],["/tags/转换/index.html","cf40baa7e7c28d709e296f56c768ad4d"],["/tools/ghcdn/css.css","8a371f9a2c2196e7a71abf2eb5b5a631"],["/tools/ghcdn/index.css","0095805f6cb8fd59f03a3c494a696d5d"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","bbbc9197ce3cf3748a362eb197ac94a0"],["/wiki/Artalk/API/index.html","ae5a8929ad46a19f29041aee29aad7fd"],["/wiki/Artalk/QandA/index.html","a085afcc4c4c92b5fb2245d97bef4c22"],["/wiki/Artalk/about/index.html","9667ab9db983af7123826a59083032df"],["/wiki/Artalk/develop/index.html","ac7b6b7e7087d7ff85ddaaaf3b4d8c9f"],["/wiki/Artalk/index.html","d8e9f2f34d65702207afe502f6eb0bfa"],["/wiki/Artalk/install-go/index.html","2c9cae9fc2a9c06fa889b149ebab9fc4"],["/wiki/Artalk/install/index.html","ff5ae573de0f89442fab622225efb293"],["/wiki/Artalk/more-url/index.html","ea22895482ef3d9a7d9348b204e73d28"],["/wiki/Artalk/play/index.html","5114f18d26ddc92dc20c9b7cb6086628"],["/wiki/Artalk/use/index.html","aa01bea955e9a53160b30e330c3483e2"],["/wiki/index.html","a9ab3af687293c37e2841977e9a894e9"],["/wiki/杂物间/camc.html","cdb3b06a61ad2872b75e5896aae7e4fe"],["/wiki/杂物间/index.html","3fc64cd2140f168e39045dd111453809"]];
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
