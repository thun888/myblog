/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/Free Minecraft Dungeons/index.html","a6d2314291052f3d23c75624e9a594e8"],["/2020/hexo更新pages出错应急方法/index.html","123e27ae86347ea4876039433d272d89"],["/2020/定时关机/index.html","6870fea590a6b86b366b412746c7d675"],["/2020/弹出C盘の快乐/index.html","975e20561087495d96db17237d9d9570"],["/2020/杂物/index.html","15d703c398e5f43b1b42b30b8b1243aa"],["/2020/来在MC里玩电脑/index.html","427025ecd1f0e6381f099d99685d560a"],["/2020/现已通过myssl认证/index.html","33b91bf7ed8d5eb74ee50178c5b6ee8b"],["/2020/用batocera搭建属于你的游戏天地/index.html","291dfce6aef9a8be73339647d6823984"],["/2021/GitHub打不开的临时方法/index.html","c9141f3a774d560959e7b9653f22db63"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","5b0a52fd992ab4514af44af7fcc467f5"],["/2021/为Stellar主题添加HPP说说功能/index.html","eef591043156eda6f60b545c27c9a31e"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","301a4062a536261996c4eea5e218d867"],["/2021/免费游玩《戴森球计划》/index.html","62158ee2a8633c9b60c1f74d15708384"],["/2021/把玩intel的开发服务器/index.html","b97a44019f6c897daebb9e48a9016233"],["/2021/搭建Teambition网盘的目录索引/index.html","23e1fc8a95ceca90356ba774998f7e36"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","7494716b891fe7a7f3f315d288c2a272"],["/2021/解决VSCode安装Go扩展报错/index.html","45bb7c8fb5e0cd64656b6238edec5267"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","ccc1408a92c4cf49f52c38b47d835777"],["/2021/记一次简单的水卡破解/index.html","2e9e883e389d34deb021403f0e900a2d"],["/2021/高质量地从ico转为svg/index.html","340351425ba24d0f3a08b351b0235fd0"],["/404.html","21a6073b7e3831a9f802520ce9da095d"],["/about/index.html","b804237843fd844a358a0c6c858279b5"],["/archives/2020/01/index.html","7c57ed08b6bfccaf8eec494dda3a242f"],["/archives/2020/08/index.html","9432ac6fb0b7888d68d192607f6dc14e"],["/archives/2020/10/index.html","129b415a1e5cc9587ac66d73ee963154"],["/archives/2020/11/index.html","6a3d786b8ff698449c7d1b70af2a0692"],["/archives/2020/12/index.html","8d8fde0cb185a3041b480116bbab772a"],["/archives/2020/index.html","a246ce91f6c19df82eb4f94fa5119c97"],["/archives/2021/01/index.html","798b49aecfeb541320dcdacb46deea81"],["/archives/2021/02/index.html","90d2dc80cc963a7b07e6cbdff0da3e83"],["/archives/2021/04/index.html","40e5bb1f647ff62d53b996ec20b34431"],["/archives/2021/05/index.html","abb7e0399545f5c4be6394c5a9ceac57"],["/archives/2021/06/index.html","8dd443d8d6a324fe9e727cfe02996ffd"],["/archives/2021/07/index.html","3f4581a81615a391e597890b3a3d6957"],["/archives/2021/08/index.html","c1644da7774763d8c2e90e017e8f3c8f"],["/archives/2021/index.html","2a18cd2a81d3e03a16823d0bc2f0b36f"],["/archives/2021/page/2/index.html","4d1c270043d6f30ad68f0d300c26392f"],["/archives/index.html","22aa47df7f08f1652dc706f21592fdfa"],["/archives/page/2/index.html","a80b2a1ca41e6340ab45c0366e8f55c1"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","30913cf774bb37c63a806158e9eb8875"],["/friends/index.html","1ff7d3475b2a2adec8c9142ab9432e59"],["/htalk/index.html","07b031d680cfac8afd874f6493cb70e9"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","faf2f39e7a0647e5caaec7e72fbeb816"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","373bf73e15e75873498a9165184c350a"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","7ce765e54fd71cabbb939144be9f99d0"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","ed4fa4e497467ccd4ceda348f6d9813b"],["/morecss/search.css","9364bb7e05acbabd06ae05db3849ab8a"],["/morecss/szgotop.css","659fc50aa976f26a0ee9e45fcb215e5d"],["/page/2/index.html","8dce0ceced278a6060de988aab1f2419"],["/say/index.html","34ec366cae655f1af0c9666263d7f167"],["/sw-register.js","1e120f562481134df8f000f27de5936d"],["/tags/Clouddlare/index.html","84037af4ad47e33c0c2ba0cef710a1fa"],["/tags/Go/index.html","28efc6770f6fc22314340ef241fb4f25"],["/tags/Intel/index.html","9c02192b088e8e48b7724cebac2cc9c2"],["/tags/MIUI/index.html","ea4add778adbf21cf1d15ad97b74c109"],["/tags/Minecraft/index.html","0a280f338e2e1a3d43e9599ecb179864"],["/tags/blog/index.html","e6dfacb6d6190e6d9a361cb6523cec61"],["/tags/cmd命令/index.html","add6254afd34620c8ac9b4ecde624eab"],["/tags/free/index.html","45bf2ae2ac384753dbc98736ea49269f"],["/tags/github/index.html","eedbf2c941166d482fb77c48b079429c"],["/tags/index.html","51bc174bba54fc90c8ad23b011e3c533"],["/tags/linux/index.html","c841c0954d7482c990e45168c38a8f98"],["/tags/oneindex/index.html","228d7a79e56e4eec7e84566d50dff79f"],["/tags/ssl认证/index.html","abffdbbade386b9bcf4b88bd87b16888"],["/tags/web/index.html","57ab8745a660cff6fb67f58165f46b5a"],["/tags/甜糖/index.html","ef4039fafe227eacfcc1a7ef30759eba"],["/tags/网站/index.html","9b04f9108fe31567c33f95ee4364d921"],["/tags/转换/index.html","76ba5d3d8ab1b4f1e695f1b3352a9add"],["/tools/ghcdn/css.css","aa6d16f89bd545b1d7507527cda38df2"],["/tools/ghcdn/index.css","d1038d96c5a1cfb520dd32b232b57589"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","fbfc0dfd4b0d6b7b515d8ce09760de97"],["/wiki/Artalk/API/index.html","d2a7d8b1c1c667e38b19502b8479924d"],["/wiki/Artalk/QandA/index.html","16c2ea83ce38b035a9cf0c6c6fb91a3b"],["/wiki/Artalk/about/index.html","93847d87c902e95c0c31e64934856647"],["/wiki/Artalk/develop/index.html","8ea377da761052a8e9161deb0fcd59ca"],["/wiki/Artalk/index.html","a2ee0184b582492e4624ffe88cb84292"],["/wiki/Artalk/install-go/index.html","4708293ee72604587ec1cfb3d10ba55a"],["/wiki/Artalk/install/index.html","551ce2acf6d9a04a6fdd252fff530865"],["/wiki/Artalk/more-url/index.html","6ec43492a9fc909ebe74ce58b382a44a"],["/wiki/Artalk/play/index.html","bdeb1b5c1e0ff9ef205d30de1ebd22eb"],["/wiki/Artalk/use/index.html","26b502edffec627c16de1eae19bfa204"],["/wiki/index.html","2d60439055c4feef97e5802609ef7951"],["/wiki/杂物间/camc.html","bc6636244f78f7defe047174921f76e5"],["/wiki/杂物间/index.html","576f66b8e7f375045ee8215891eb03fa"]];
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
