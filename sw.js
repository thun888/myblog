/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/Free Minecraft Dungeons/index.html","568d056d1dd92ead278a25e6b96b93c5"],["/2020/hexo更新pages出错应急方法/index.html","6adc94e91053f2a68653d9c01740ae33"],["/2020/定时关机/index.html","2e7183d817ed04bc9e9f145a0abd65ab"],["/2020/弹出C盘の快乐/index.html","8fabc0e9b89283d5aacb407e768fc58a"],["/2020/杂物/index.html","2e8f4ce3406b10a093edcd896ec5f98b"],["/2020/来在MC里玩电脑/index.html","9056c311aaa901722caee7f7273ee7d5"],["/2020/现已通过myssl认证/index.html","c3c62ecd7b4d3e24cab35bf2e192961f"],["/2020/用batocera搭建属于你的游戏天地/index.html","2619034a70863d8da291c9e19f8da310"],["/2021/GitHub打不开的临时方法/index.html","1505bf34bde371f2df9799f4de926326"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","21bdce730140f0e28486ffb682801d49"],["/2021/为Stellar主题添加HPP说说功能/index.html","e3c9c1c2f9d2bce919abde442bb9c9b9"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","9a9858687af126424858c424fa2263c6"],["/2021/免费游玩《戴森球计划》/index.html","d3acddf760845d45f27bdf62a003f001"],["/2021/把玩intel的开发服务器/index.html","13c047bf8fa2d261cdf4369c314c1b87"],["/2021/搭建Teambition网盘的目录索引/index.html","54160e50a3ac04bfb2b43c6f4ce344f7"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","f6572354bb8d039e9ac3452e5a660e9c"],["/2021/解决VSCode安装Go扩展报错/index.html","1c349f62fb998d0fa4f7735bfb442b84"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","ffe022faa9372476ea3b82cc051cfd82"],["/2021/记一次简单的水卡破解/index.html","f935629e1fdacc1be71b96d70dc1d54b"],["/2021/高质量地从ico转为svg/index.html","5d4be72565f839b26a543ea73006a5ea"],["/404.html","485aca8780010534dc02f47673d9ec00"],["/about/index.html","e39a9d84cdd6b81df007f41ccfb28faf"],["/archives/2020/01/index.html","377d3529f792eb145866b29c6e23f0a1"],["/archives/2020/08/index.html","31168f8a6a1f001b58b2770300e4c16b"],["/archives/2020/10/index.html","3294eb0586f521be8f156fa3e0e0698d"],["/archives/2020/11/index.html","28a6d7d6de73f5c5d9fb08fa1a09b0c4"],["/archives/2020/12/index.html","4579a23d70b024e62a6588c1d650bb82"],["/archives/2020/index.html","58577e82e7c1f4ddc61abbd1ba1b7784"],["/archives/2021/01/index.html","35d6a97a5d78ae31bd1c715a8f556ac2"],["/archives/2021/02/index.html","053362e260e3c66bc381375ded17c987"],["/archives/2021/04/index.html","dac48f9fdd6a3dfe6c8823130c9a7ccd"],["/archives/2021/05/index.html","83e5c44e11e014f86aaed6a5b1200389"],["/archives/2021/06/index.html","0666f386e8a16300ce6deae60875cffb"],["/archives/2021/07/index.html","620b3012c28cede2589ad03b6e8d71ed"],["/archives/2021/08/index.html","4ff516856066ad8db09cd0566f2f2f23"],["/archives/2021/index.html","c0a967b6ba081e24724a0e94c71059d3"],["/archives/2021/page/2/index.html","3503ba164c6a0d4fb381e1a4de3a3cf8"],["/archives/index.html","71ecd3423cf6aefcf841b48b668d0a6a"],["/archives/page/2/index.html","08d73d2d9b76c16d97c4b92d7b57abb7"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","4beb4f1f12ff85aa2e8c6bc253fbbf76"],["/friends/index.html","f17cecc47e995c6e6411dba2ce5ec8cf"],["/htalk/index.html","d15e920eea182177cc265983d1467e44"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","271791175a045bf1ea781bb43e539933"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","e6d5871661968d58bc5cf62731894995"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","b2ac72c84448bfdb212e14439e573750"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","d5c32e8dcd4f9fa61b30ea38b8518870"],["/morecss/search.css","7dcb26399b45afbf3159d161b469643e"],["/morecss/szgotop.css","53a48225c1408356782bbf152d438f32"],["/page/2/index.html","87f138d864bc642bb046198468e59d5b"],["/say/index.html","a2d5c51cd05fdcaa7a66da4027002656"],["/sw-register.js","536e8a20f2446e7d8aebb47c13011b56"],["/tags/Clouddlare/index.html","d5d7f43e8d8d11f281a96bad99b7a91e"],["/tags/Go/index.html","81d8b71b0d88821118b9483a9a1c0c0f"],["/tags/Intel/index.html","8746a7a70dd4d3eb99833022fd7f1a60"],["/tags/MIUI/index.html","e85e63172699c2d856fb3ef3f851f5fe"],["/tags/Minecraft/index.html","7355108f8210e97174c76a488378ceed"],["/tags/blog/index.html","642ffdbd971b93ed5470cc6d14181edf"],["/tags/cmd命令/index.html","95281550e6fb17bcd2b1effddec8ec85"],["/tags/free/index.html","5f8ceb062888d62e405ba7ce9856bbb1"],["/tags/github/index.html","f270f4ad654b682d7b030e7a82399edc"],["/tags/index.html","d02a249bceac6e0d7c3b963ab2373eba"],["/tags/linux/index.html","92c4414d90da3da23d4eb1b7663abe9a"],["/tags/oneindex/index.html","6c78d152635c8294636f4b4b856dc9cc"],["/tags/ssl认证/index.html","dcbe3c3b736959916625ba8bd0771800"],["/tags/web/index.html","383303066fe55058dae0d25c35eb8fcc"],["/tags/甜糖/index.html","e710388ec2746ae609112b22fc737234"],["/tags/网站/index.html","698e418ee17917639c13bc22083e0ee1"],["/tags/转换/index.html","77a94335dfa9e9d1dc090f1a6ff38825"],["/tools/ghcdn/css.css","1374e1e63a125cb247f051c7abfded5e"],["/tools/ghcdn/index.css","2562c3e8d1e7deb3d53532513838fa04"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","7428cd23fdc8bea2d85028e0db3e1215"],["/wiki/Artalk/API/index.html","9f8fcb9b1468f58d5ad1de195cec62e8"],["/wiki/Artalk/QandA/index.html","4d74ff52c84b1c9650a35d145bbbb9f0"],["/wiki/Artalk/about/index.html","cad36db3d5715a5b0583f0bcfc7aaa74"],["/wiki/Artalk/develop/index.html","abc972a1657e4e3070929fdff9b28502"],["/wiki/Artalk/index.html","5e306e4be442d7af2e9ade05c209bcb0"],["/wiki/Artalk/install-go/index.html","ab7652a00b4635bb489d9f44e2f39230"],["/wiki/Artalk/install/index.html","7f4e83f437fc60d77b1d7314a04c85c0"],["/wiki/Artalk/more-url/index.html","7e6eeb5a9c8e6d79e28c1ed42908f94e"],["/wiki/Artalk/play/index.html","2b2678bb62dbfbd878dc29ae7d924ca0"],["/wiki/Artalk/use/index.html","297ce19fb22092b96329b95b69663027"],["/wiki/index.html","b0e07901b6acbc309270edf512c92ffc"],["/wiki/杂物间/camc.html","483d15cedccb1ded0b2023eba5b8b4f8"],["/wiki/杂物间/index.html","88650c893e8ec5c13a26c040604e33fd"]];
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
