/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/Free Minecraft Dungeons/index.html","ef79e76361f189175f84742ea110b798"],["/2020/hexo更新pages出错应急方法/index.html","42029172ce80d7137869079ed54be9f9"],["/2020/定时关机/index.html","8ef90d6597f21899baafeabf1ecbe5d2"],["/2020/弹出C盘の快乐/index.html","33d036a8c01b8f81bf0d504274287d09"],["/2020/杂物/index.html","29fee3f36e7d570837454e3e5bf6fa2c"],["/2020/来在MC里玩电脑/index.html","4bc5618fe8c27d2831f6d7e90d2298e3"],["/2020/现已通过myssl认证/index.html","bec15a88ef88e9519160db39e4a6f6d1"],["/2020/用batocera搭建属于你的游戏天地/index.html","da881759de49b2f4ca8aabe5b5299731"],["/2021/GitHub打不开的临时方法/index.html","ad9cb5632f45371634d2ab5f34575510"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","09d41a4794b6adfcb632e018b79e8f24"],["/2021/为Stellar主题添加HPP说说功能/index.html","099c1e6f2fe865bc06ddda19001469ff"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","d620ee011bc713cb414d4c58959e373f"],["/2021/免费游玩《戴森球计划》/index.html","bc8c686ecb42b154023e6e30ab229fd9"],["/2021/把玩intel的开发服务器/index.html","204907a51178b41a5602b25280de231e"],["/2021/搭建Teambition网盘的目录索引/index.html","f523222759c0afacd3543892af414bc8"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","a24ea026c29ff38002820b296a2d6110"],["/2021/解决VSCode安装Go扩展报错/index.html","564db78fbff08644876d2ca0ed6241a2"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","cb638ff50596b056270afb5a867218b7"],["/2021/记一次简单的水卡破解/index.html","59a8949a60a1fdcb53d478723e109ea3"],["/2021/高质量地从ico转为svg/index.html","98be78fc3e66665e6f51e28c8f0ec2f4"],["/404.html","4210f1bf58873c2d9fddb71afbfad451"],["/about/index.html","e262c541895c7629d6729681cdd60d72"],["/archives/2020/01/index.html","76e9be114cc99c2bc0d06882b3b1c2c4"],["/archives/2020/08/index.html","a5b53f00272d7306c331fe8112eb1391"],["/archives/2020/10/index.html","078e23ae499c625ce61bfccbe1faee88"],["/archives/2020/11/index.html","03b0ef0b79fe211ae9dce83c912daabc"],["/archives/2020/12/index.html","ac33ac0319734676407ea82ec1b64e5a"],["/archives/2020/index.html","ca4e1233db9956d025937fff967438e0"],["/archives/2021/01/index.html","f7b311ba11b3f41d8211dbeeb84f3105"],["/archives/2021/02/index.html","82b6a9ae0b672e70792addf98a716e15"],["/archives/2021/04/index.html","29a09afdf215f02d7b79a552560fd713"],["/archives/2021/05/index.html","ae433b29fe660d4e6d8f5a515f06b982"],["/archives/2021/06/index.html","220b2bdac5b7753e932dd4a57f50af5e"],["/archives/2021/07/index.html","375b160854a99a5dc18569bb2ddc3183"],["/archives/2021/08/index.html","24a29fc734130c0f7165050182f48309"],["/archives/2021/index.html","19d00b04d83dfa23373b4e9c1b1faca3"],["/archives/2021/page/2/index.html","9f9ac52501137738ab60b0d0555a443b"],["/archives/index.html","f8868312a9a842be37142a131dc32fd6"],["/archives/page/2/index.html","29cfa7829fc9d5e3dd9e1bf31f073eee"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","0bba56cce4ae7db04be2fa3d5220c9ba"],["/friends/index.html","7489e48095e436e51d52839d06f66b10"],["/htalk/index.html","5813b2d985c5f6ad36d5dca85f75a8a3"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","3955fbebd6d878360c22b098340fe4d6"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","a16345be86da9420ca83cdf5ff52f523"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","7ce765e54fd71cabbb939144be9f99d0"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","2d26e6915a36499aead7b8bea7c171fb"],["/morecss/search.css","788c99cab1452c371ed5c57db6106636"],["/morecss/szgotop.css","7f95b2c72d1fae61b4b19db88c8d28c1"],["/page/2/index.html","87220145e125fa1389247a4c133109fe"],["/say/index.html","2a7d4c7f19427c55dffb6d70bcc7979f"],["/sw-register.js","62873f0fca5f6f9fb4e618544c1a1e8f"],["/tags/Clouddlare/index.html","1ef6ba1da29bf57f2c5747ebebcbabb7"],["/tags/Go/index.html","e6a693907093cf572c837e99bdfcab0e"],["/tags/Intel/index.html","b1c4a35f3f238c8dc9513b699a91ab94"],["/tags/MIUI/index.html","917725d4e983aff9174d9f0be3d825e8"],["/tags/Minecraft/index.html","902d5d4fd7c710164d56481c10d18053"],["/tags/blog/index.html","93cc6c1e35990d288824d991ec080caf"],["/tags/cmd命令/index.html","c28ad72e7ebbbf47eaf151bba32d9f7f"],["/tags/free/index.html","639ab282bd64480fa8e401dcce57b6b5"],["/tags/github/index.html","70bc0a480fb6444f6d5d90a2582b136e"],["/tags/index.html","ec3c06b2aa2871617f2a955db08b7fe1"],["/tags/linux/index.html","9bb1adf5b8049d41a6725eaf1aa8c54a"],["/tags/oneindex/index.html","49a49c43d3a950bbc9518ae255b1af85"],["/tags/ssl认证/index.html","2daa5acf83c3d12e5c85abcb4fc43c48"],["/tags/web/index.html","522f13e4ff4362a5e6ac657ba83a342b"],["/tags/甜糖/index.html","c129f842c6b3e30bed1e3eaac729ced2"],["/tags/网站/index.html","70015ea7251755ba4a06625d57ada6d3"],["/tags/转换/index.html","2550193e0d9ef90195b416bd7f6a4c50"],["/tools/ghcdn/css.css","875962966936c6e1f29527d337eafec3"],["/tools/ghcdn/index.css","d1fed253e00e7ae96c473e56e2711aab"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","18439aa29851e605a4f46f6720d63e6e"],["/wiki/Artalk/API/index.html","f24307d4226d02e779307af71f078c30"],["/wiki/Artalk/QandA/index.html","89721394525cde706a7a38137a79ca38"],["/wiki/Artalk/about/index.html","a21a76787540f936fd5f840985a16b01"],["/wiki/Artalk/develop/index.html","831a560a240f035a3df588055f2b726e"],["/wiki/Artalk/index.html","f8d9bdf2766b21a7e19eef74d5dfe517"],["/wiki/Artalk/install-go/index.html","696b9dc9bda517708cf4cd6cd07dfb4c"],["/wiki/Artalk/install/index.html","07caefdd1f299910cbf0d5011962232b"],["/wiki/Artalk/more-url/index.html","7909ee93669f7d998ee2f88473f9f0f7"],["/wiki/Artalk/play/index.html","918ab5095e6435b63e6e7004b8329cd5"],["/wiki/Artalk/use/index.html","06c24e3b8c76d59bcd9ae8aa4eb362f5"],["/wiki/index.html","6fb4eb2b19f46efb8ba513447bb4feaf"],["/wiki/杂物间/camc.html","26a23f17709149759288c4620411ae69"],["/wiki/杂物间/index.html","2a01008bee00e0b8d1a7cd794bb43b2f"]];
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
