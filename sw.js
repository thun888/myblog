/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/Free Minecraft Dungeons/index.html","5a52f304800f7893d4e6e3ba77f4e439"],["/2020/hexo更新pages出错应急方法/index.html","d5ad430f139f821289a4ae3b42c013f7"],["/2020/定时关机/index.html","33161263f2a6a5fea2abbf559f16c5a5"],["/2020/弹出C盘の快乐/index.html","b6ec6126788c4e139a151573729575ed"],["/2020/杂物/index.html","a7dea200b5aa1139989987ded9aadce9"],["/2020/来在MC里玩电脑/index.html","e2b9c4dcfbf5162c1261effb165ffc80"],["/2020/现已通过myssl认证/index.html","df530ad913419e67bf5b8c2f8c2fcb50"],["/2020/用batocera搭建属于你的游戏天地/index.html","2816d55ac3f7b0b698c5f190f96f8944"],["/2021/GitHub打不开的临时方法/index.html","6b9858f66e45f83b57f6ca508a95a054"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","433d931a9471ff5dab98d490d554012c"],["/2021/为Stellar主题添加HPP说说功能/index.html","7d4655e5e238b5fddacd3f9e95ade07d"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","f454727e183020f1e2d3f12e1aa80148"],["/2021/免费游玩《戴森球计划》/index.html","814c6f5401afa7c0648f78401eff8261"],["/2021/把玩intel的开发服务器/index.html","d236fe99fd1f9cd506aa045638ed7299"],["/2021/搭建Teambition网盘的目录索引/index.html","bfa7c84e48b8cf1ef269bbd1cb00732a"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","9545d256b49947f27ed0a8208d25f540"],["/2021/解决VSCode安装Go扩展报错/index.html","41d3ee11cf1ef8ac7c4d10fdc4b3934c"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","04c647c4beea247cdb8974cbe174eebe"],["/2021/记一次简单的水卡破解/index.html","564609178befd34c28b4e3eeae404682"],["/2021/高质量地从ico转为svg/index.html","3a97a0e5506a8fded42140dbd3aa73c4"],["/404.html","455b32a38f77381a426b89148d48ac55"],["/about/index.html","ada1ba385b4c43fd9109ea8435b6e551"],["/archives/2020/01/index.html","a02c4693f8e728bc455b935e7cf2b2bc"],["/archives/2020/08/index.html","82fe1bda8b5b712c232ddf4187026b35"],["/archives/2020/10/index.html","52dae79eb1eb469d4aba9f99703d6e0b"],["/archives/2020/11/index.html","33541d003a12492f2bb1591c0e02bdc5"],["/archives/2020/12/index.html","3eea6cf0e848b003d4dfcedb95de25ee"],["/archives/2020/index.html","3cd4dc508275028927ed8e7870073b12"],["/archives/2021/01/index.html","e3e6cca3075fd5f1f2655642d803131b"],["/archives/2021/02/index.html","f49fc51ddd112486afeceb9f7a08d5cb"],["/archives/2021/04/index.html","d6d5701e94d32434b49e78c5e9f0f8bf"],["/archives/2021/05/index.html","3e109be9a1b3275e95f5d3b6855f2838"],["/archives/2021/06/index.html","18f439427d1d69e34ebe8421ae9d4371"],["/archives/2021/07/index.html","5b5d33167cbf02c3ec27035de22bf6d4"],["/archives/2021/08/index.html","17f9249c11205ffc55211db50668e510"],["/archives/2021/index.html","9f3dea15683b9e189ede23cf449f71af"],["/archives/2021/page/2/index.html","85f3b88c1d338971f6b14492fc341fc5"],["/archives/index.html","ecb876424488eb0f687a6e49beceef5e"],["/archives/page/2/index.html","98f80891070ca21488675655b1b88452"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","00c25d61dd5b52527d9c6453af1bd7b6"],["/friends/index.html","24b9049dee3cde5591616d919f75435a"],["/htalk/index.html","66d0fb2bda5aa88bfbd7e9bab7fc8350"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","f315a2d7e4dca282cc64d0bb0644648c"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","373bf73e15e75873498a9165184c350a"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","7ce765e54fd71cabbb939144be9f99d0"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","e8e20d9d1b400f7a70ae859ab8170c1f"],["/morecss/search.css","c99235281926c12ee3d62bc0e63febff"],["/morecss/szgotop.css","c3e63e40b82b61819e289e54fdd01170"],["/page/2/index.html","98b3c64073130d3a0a6593d6ad0a5e2e"],["/say/index.html","126ec422513b2d48c5af0d234e85c2b5"],["/sw-register.js","51f292584a0b81d5b33f5807a3f1415c"],["/tags/Clouddlare/index.html","4e49af839a7639cb4a6051361f01266c"],["/tags/Go/index.html","13f131973f861bb8395082ae00ab3aba"],["/tags/Intel/index.html","d2af6229faa037f46ed0a564399d96e7"],["/tags/MIUI/index.html","5106e8598d5409044464288d74d856ea"],["/tags/Minecraft/index.html","e1359e8095550b5cf27ca5f16b92a3d0"],["/tags/blog/index.html","281fb72bea2c2949dde43ede57d027c8"],["/tags/cmd命令/index.html","79b24148734a6420580337ded44e9098"],["/tags/free/index.html","32ef295b7c42eb39e0ea74d7ffd03ec3"],["/tags/github/index.html","6392dc57ab8a7b45ab0b3d9fba6f48fd"],["/tags/index.html","6639c130a33e15f4080c77028c7fea74"],["/tags/linux/index.html","a51b5ec4f46498fb8e0cfa2838c31735"],["/tags/oneindex/index.html","cf489d0535e2aa4e44ad488de2fc0374"],["/tags/ssl认证/index.html","7d89b76b9a8abc76a6f6fe31444fabc8"],["/tags/web/index.html","8a8a44c910619322a3545e52eae3939e"],["/tags/甜糖/index.html","46925273604918bf2f48069b28904851"],["/tags/网站/index.html","91beb36250bb07cf6fbea71df4220b71"],["/tags/转换/index.html","63692b5208feaf3ca4e30aaa3fd3e94c"],["/tools/ghcdn/css.css","f0742222e0a6613e4988466b2f239389"],["/tools/ghcdn/index.css","508bd19f015ad9e838fa221a84006bf8"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","d63a03c5a118e98bdff4a6d6624523c4"],["/wiki/Artalk/API/index.html","e329e7b0d38cede9f9d9e5a6b93d1646"],["/wiki/Artalk/QandA/index.html","680c04eff0fb031086046475fa87e121"],["/wiki/Artalk/about/index.html","016bf5cac901be7125aea379ca074391"],["/wiki/Artalk/develop/index.html","d8db3c07537ec1279b57eee2818afcab"],["/wiki/Artalk/index.html","5d61fe309283da655ce2b4b4b0b1ebca"],["/wiki/Artalk/install/index.html","e9cfb26c311a8d6b9c04191939e626d5"],["/wiki/Artalk/more-url/index.html","0600fd2dadbecd87a3c8583a2ab07daf"],["/wiki/Artalk/play/index.html","1f03b326b6d46a36253bb94ed81d01ae"],["/wiki/Artalk/use/index.html","25512792a2956ff5b585a2b25c119571"],["/wiki/index.html","cd36778e526a44a9d0e191b723c46b12"],["/wiki/杂物间/camc.html","84feb94dd52d47621c97c3151111eee4"],["/wiki/杂物间/index.html","b883fa3f4ce98c0a6fa9664c8f978319"]];
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
