/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/Free Minecraft Dungeons/index.html","a2222d2b6f86a977ab1de99100aac978"],["/2020/hexo更新pages出错应急方法/index.html","d5b415b74da8ac06b169097d1ac4574b"],["/2020/定时关机/index.html","4112aa1972cfa205b6fafb744c04f398"],["/2020/弹出C盘の快乐/index.html","b08ebacf20df7793f43d8dfcd14fed30"],["/2020/杂物/index.html","c0cabbd9d13b94c51904e48e64bfe793"],["/2020/来在MC里玩电脑/index.html","4ec709c23346de07970ca6a807c49f55"],["/2020/现已通过myssl认证/index.html","bfe62473934863b3299c7717e79c9a05"],["/2020/用batocera搭建属于你的游戏天地/index.html","32a61cfb187fd5a4f53533a7b5437fde"],["/2021/GitHub打不开的临时方法/index.html","b3107894b8b141682a96821d9c176ec3"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","32cde8b0930e5fe4d0428abf27cb9091"],["/2021/为Stellar主题添加HPP说说功能/index.html","84eda03455ecb26efce6a6f6b802eb5b"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","9ccae59e1d48cc781be26280d86dbe98"],["/2021/免费游玩《戴森球计划》/index.html","aa3d802341071326736d98405537ba09"],["/2021/把玩intel的开发服务器/index.html","9190fab0802fcfe454e5d5bbc8b551c1"],["/2021/搭建Teambition网盘的目录索引/index.html","d8917c9c6c75f5750f0c14b7f860bb48"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","332054151bd5a13f1490ffca5161acc3"],["/2021/解决VSCode安装Go扩展报错/index.html","ace83eb71a969862c5be9f507f498e33"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","02e207159cb5eacb5f37fb862d2a1ac1"],["/2021/记一次简单的水卡破解/index.html","ac190b19118c4f5a2a4b40473702680e"],["/2021/高质量地从ico转为svg/index.html","b779794902f7198f70413ed00b1735ae"],["/404.html","64202226411dd5dbb4de33a13f219f86"],["/about/index.html","b8dcbce692822ecc8ccef3fab18ec66e"],["/archives/2020/01/index.html","08ced0847b254c9823671dcca5a0f3b6"],["/archives/2020/08/index.html","acc57de867402a0e020b1792f769ed05"],["/archives/2020/10/index.html","264c5bc8c040ea85e181c5361cc0ebee"],["/archives/2020/11/index.html","368b2ae9810cc4ed5946906514c8ce5d"],["/archives/2020/12/index.html","244d6e7fc40ce8b6ee0662f3710490cf"],["/archives/2020/index.html","9b2b629fab2282efaa4861caf344679d"],["/archives/2021/01/index.html","d63cc3bf7aded00d2238d0ab2f0b63e9"],["/archives/2021/02/index.html","d833159803ec2a7242cd2350a1c0f71b"],["/archives/2021/04/index.html","430a417b0562230129459d2c62e09fdd"],["/archives/2021/05/index.html","09034ffaa100df308579873e89b1302b"],["/archives/2021/06/index.html","61e2494656b6f0031c4bf3b99295fa0a"],["/archives/2021/07/index.html","c39198fd72637d1419da273410595359"],["/archives/2021/08/index.html","887a4401a7ce436b82895ecd0ff341f6"],["/archives/2021/index.html","e09062f7f31c750ca8b5feaa8c9afc17"],["/archives/2021/page/2/index.html","900359dd384b715cc7fc7c3f30f92505"],["/archives/index.html","dfccf308b5fb9782f8012a740cbc7a13"],["/archives/page/2/index.html","8a0e789d6aaa0f7d8f959ad7ab0e49a7"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","9c825024071149acf9e290def5be02a8"],["/friends/index.html","93e82c48d1596470a2452f63576e90ac"],["/htalk/index.html","5729e96da280ff3ba3fbc780879b32a2"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","401360fa761c26f5b938ef29b3266793"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","373bf73e15e75873498a9165184c350a"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","7ce765e54fd71cabbb939144be9f99d0"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","b25a5f9c177e0a9c3fb1d451f02b0499"],["/morecss/search.css","bb3a9e554c3e826d166f953c37642a2d"],["/morecss/szgotop.css","3defdaaca814cca2da1849f0f1d4a389"],["/page/2/index.html","15d215105bb78f14301c1b18a08826df"],["/say/index.html","ee9b76d214805aa4ed85428f064b2ae6"],["/sw-register.js","22edbbfda9c65418519b79e923e89e4d"],["/tags/Clouddlare/index.html","972a9975ee3e6e403b9f85f14f7670bf"],["/tags/Go/index.html","a642b3eaf8913216d41c6de0143b1089"],["/tags/Intel/index.html","93282cb09e285915a764f7e2046aeae1"],["/tags/MIUI/index.html","4373f9f1cb80bfee0b3194f32e6c779d"],["/tags/Minecraft/index.html","cbc3b140bfadcd3f843250dedf353b20"],["/tags/blog/index.html","6e7a2a0b6f3177249d6fd9c147185328"],["/tags/cmd命令/index.html","9d92acd6516d6de2247680e840c52f0c"],["/tags/free/index.html","410c527fcec2ae72e76aed0702ecf697"],["/tags/github/index.html","cf7657a5534f5fbd132f51e7962589c6"],["/tags/index.html","9cdb4e99f7b50c858cf2308a06d5793f"],["/tags/linux/index.html","8918fee3e220f78ea67f33c69db765b5"],["/tags/oneindex/index.html","4ee6d3116b86f1f33838ecc9769b3ba5"],["/tags/ssl认证/index.html","f00d9d39fc55b59d2b2e09fa709f83df"],["/tags/web/index.html","2248002f8d2910c868bb78503530fd7f"],["/tags/甜糖/index.html","2fa5c23683b98bcf9f1d179a18eee100"],["/tags/网站/index.html","fd97a8c53fbf1e994598d6aef90c59c3"],["/tags/转换/index.html","99ffb48643f9d376251812081c40a1b9"],["/tools/ghcdn/css.css","e6d4fc48a1fdb095040e7eb304b34c47"],["/tools/ghcdn/index.css","84d96b242591fc95096f7bd0a00c6298"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","d37a210fcbba2cba9d9534de536239cd"],["/wiki/Artalk/API/index.html","64b2efcb840609f421b70058a857fa4c"],["/wiki/Artalk/QandA/index.html","5a200604fde4f5215eb86607df7ee316"],["/wiki/Artalk/about/index.html","73d8428ba7c44640867bb3480041702c"],["/wiki/Artalk/develop/index.html","827bb30a51026a2b2735d94bd1979bef"],["/wiki/Artalk/index.html","7d4aa7a1561b6c06d00308081c465668"],["/wiki/Artalk/install/index.html","9208c5be2a5dd7f540b8d8ba7d4ad763"],["/wiki/Artalk/more-url/index.html","d03f84899c68131060d59b6a91fe3ef6"],["/wiki/Artalk/play/index.html","53e415c69ff4bbc98111866577e2ef16"],["/wiki/Artalk/use/index.html","19412de15f66f47e805c75ceecc387bc"],["/wiki/index.html","c25e67773e7bbb35f4afb11e5c317c72"],["/wiki/杂物间/camc.html","b89e3d10f95e5d894afa89855eda9639"],["/wiki/杂物间/index.html","fe2bd1ebc5984c769b89746eba828a3b"]];
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
