/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/用batocera搭建属于你的游戏天地/index.html","5c7bc297622b7cd924262d0320e0f0c3"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","f598d8aea98b73e0152dc8d5aefaa994"],["/2021/为Stellar主题添加HPP说说功能/index.html","adfe8960d8d7cd3fd8905153f045f192"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","fcc3b74e2beccc45ceecbf74dd3c8fc8"],["/2021/把玩intel的开发服务器/index.html","784c08c4d0547f25b38b05b0493f8e4d"],["/2021/搭建Teambition网盘的目录索引/index.html","78e52960a5d0d6c0615d4423f91de378"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","9bf302df559d1b0d64493bbca6eb0d08"],["/2021/解决VSCode安装Go扩展报错/index.html","f675b5781200beb49e18da8b4c14f151"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","df9e6e4c11dac9e056f2f712f36d5d43"],["/2021/高质量地从ico转为svg/index.html","fb4a48362f0ce2a91542cb4848ebc6ac"],["/2022/2021旧年总结/index.html","fe22f4ca85734ec3079dbbb92e64d8b1"],["/2022/Easier-Control-of-Recognition-Conferences-AHK/index.html","cdd69d00ae085c1f3b8a01b589eec2df"],["/2022/definite-clause-point-review/index.html","28ab3d05d91ca15acd6691b7499309b2"],["/2022/ptyhon-with-altium-designer/index.html","35a8063301105b61e600e064c00c29ea"],["/2023/auto-control-power-plan/index.html","8cf57362c47bebdd9375468d68fc5a2d"],["/2023/howtorunmrui/index.html","401fc53f64d57a8e74768028332116ee"],["/2023/photoononedrive/index.html","cba3391198183a6ea20161cd0e9b2a60"],["/404.html","900d3daf973eb3e5b2c1865a195a1266"],["/about/index.html","765ed3484c6ae83eb8c032942cfa6e4c"],["/archives/2020/11/index.html","f36207c5a507c8200fc4c4932eea85de"],["/archives/2020/index.html","7b36a4ade18c82b1bea58833c82958f6"],["/archives/2021/01/index.html","3a96e5f6c33b48f13a45ef844d579e70"],["/archives/2021/02/index.html","f746895473622e486ce779b5aa514229"],["/archives/2021/04/index.html","b3edcd1c068b8edac88e639dea1d2014"],["/archives/2021/05/index.html","b2cb745041565d53551d2c78f076c29c"],["/archives/2021/06/index.html","ecbf5d917b1991eedc4cb92c34c06f7f"],["/archives/2021/07/index.html","b7ab1eeb831f3b3e96a5e222d3acffcb"],["/archives/2021/08/index.html","a9318e28fabf1c80680f0d10e4363a4c"],["/archives/2021/index.html","ce071b1c11a03178ee1e8e99c37198db"],["/archives/2022/01/index.html","6072c7caf2b6d2742770cbb48ed019f6"],["/archives/2022/07/index.html","f8fd63b6691c57bcef95b587a941e7a6"],["/archives/2022/12/index.html","20a8e302291b74fe49a366b0e744bcf3"],["/archives/2022/index.html","3d96e5ca8dffb8fe70cee8501262fe7f"],["/archives/2023/01/index.html","e9a6e2e3c18edc39fc349e2a3034cdaa"],["/archives/2023/07/index.html","09e48a87a1e0548897efa40fd0a0cce8"],["/archives/2023/08/index.html","48db4676d603ed7c32a76c8e0c46350b"],["/archives/2023/index.html","6f3ddfb97f7dc88e81f97747013f1ff7"],["/archives/index.html","e33f3750466d69cce2815eb8c7142b79"],["/archives/page/2/index.html","0f99b1252c39e747cc28fc392800e132"],["/big/index.html","76df31bb26b290543ad711e17900218d"],["/css/main.css","d3445ada6c873365178f4dbf5754c136"],["/friends/index.html","99e0e356765a7a16cd8ef3fab32f2665"],["/img/dynmap_markers/anchor.png","8882b88cb02ec006375fdbd51ba8db34"],["/img/dynmap_markers/bank.png","3969d578f5221797274864508e55b748"],["/img/dynmap_markers/basket.png","18ac5453fea98f5acc65ccf22eee3f29"],["/img/dynmap_markers/bed.png","adcd141c7588912556ac95b9c2050e3e"],["/img/dynmap_markers/beer.png","62f1e47307b70672827d02f87a6fcb88"],["/img/dynmap_markers/bighouse.png","f8c894a70b562c2b9e1e75f3faa4e986"],["/img/dynmap_markers/blueflag.png","b1e4ccc3e6e6c0f4c2d41f7a330bb560"],["/img/dynmap_markers/bomb.png","4728262b5c708c32f1cc2c493fb4e053"],["/img/dynmap_markers/bookshelf.png","720fee5fbce21b239b94f5b6105c67e0"],["/img/dynmap_markers/bricks.png","62ca10dad9b8e8bb68c6735721dc8355"],["/img/dynmap_markers/bronzemedal.png","ace0bad4b0383c0cfa4f7631867593cb"],["/img/dynmap_markers/bronzestar.png","041a08456b276b4ea0d8ed4c00edd615"],["/img/dynmap_markers/building.png","fa1f1296f0f6d6e4b5064f78314522e7"],["/img/dynmap_markers/cake.png","c29fb7cfff7768fdddf1da2df45253cb"],["/img/dynmap_markers/camera.png","dcdf5e3c2d0a51745fface4e16f8e5e9"],["/img/dynmap_markers/cart.png","783d19cc53aa81bbe38af93c4b429b5e"],["/img/dynmap_markers/caution.png","1af8a1041016f67669c5fd22dc88c82e"],["/img/dynmap_markers/chest.png","e69be0cf1489ce59c1e9742a7c3298eb"],["/img/dynmap_markers/church.png","dd2fc2daed44ae76ac5def90ed995850"],["/img/dynmap_markers/coins.png","dcd59caab29b2276cb60641409059800"],["/img/dynmap_markers/comment.png","c76000e40b0374b08970d29837528c9f"],["/img/dynmap_markers/compass.png","0eae88c326156b95344c305b8bf9c29e"],["/img/dynmap_markers/construction.png","8add5616b70bd307701b341b6065599a"],["/img/dynmap_markers/cross.png","446112982e2784e1643b2e53ee841433"],["/img/dynmap_markers/cup.png","bac82b8507c48972b0d60262296195a0"],["/img/dynmap_markers/cutlery.png","a2ba5bc696c68cd7184ef31d6548a2a8"],["/img/dynmap_markers/default.png","2693a0dcfacb6a699802b07087142445"],["/img/dynmap_markers/diamond.png","babe0f29c46b7134b96264b977bf87e6"],["/img/dynmap_markers/dog.png","f7174dd4282924a4c28cdeeb219d5248"],["/img/dynmap_markers/door.png","47116a8dd2e68bb5d1e86b7a6d8efd7e"],["/img/dynmap_markers/down.png","a5e50f2a2deb49cfecb6a2ea1966701d"],["/img/dynmap_markers/drink.png","13fc0628e521828a7b9aa238537f2865"],["/img/dynmap_markers/exclamation.png","13a319c2c5e163aa87a58d7fb7716cbe"],["/img/dynmap_markers/factory.png","40003b3d656275c167351f4d2d4e2fcd"],["/img/dynmap_markers/fire.png","31d25a5703db629ee6bef6fcba8a240c"],["/img/dynmap_markers/flower.png","e8324ea65ccb5c88ec7aa490e0eac2a3"],["/img/dynmap_markers/gear.png","3d04274979a97bdbeb73e7efbfafa919"],["/img/dynmap_markers/goldmedal.png","c4942690b68292788391b1fdf427a7a9"],["/img/dynmap_markers/goldstar.png","b6a8ed03cc930345eeb77186ed0f82d9"],["/img/dynmap_markers/greenflag.png","59e33d56d899c8eae3771f1ab9fc464e"],["/img/dynmap_markers/hammer.png","0d2b5dd861b03aa260c9c3bc87054ff6"],["/img/dynmap_markers/heart.png","c8a8b3ef583352766e85aab0b14833bc"],["/img/dynmap_markers/house.png","d4f49daa35bb64e0bb4068ffe06d2b3e"],["/img/dynmap_markers/key.png","8bc3a52cc5599956be252fdcbee6dad2"],["/img/dynmap_markers/king.png","8532d2ed783be0c2c41c12fe8178b611"],["/img/dynmap_markers/left.png","ec870788cc2d381122a2accbeb748f3a"],["/img/dynmap_markers/lightbulb.png","446fb6c74ea485d216bb96afbaab31e0"],["/img/dynmap_markers/lighthouse.png","ff36185da0951159dd7de6ccd06f3d9f"],["/img/dynmap_markers/lock.png","d70d04b37b972607db6ad1ec785be145"],["/img/dynmap_markers/minecart.png","d9afc1f85303333c58a27c2426914367"],["/img/dynmap_markers/offlineuser.png","21515090de5554c631429ead0f79f87d"],["/img/dynmap_markers/orangeflag.png","d2ff8484843befed8f591eec8e49b7eb"],["/img/dynmap_markers/pin.png","2832bd5bcc0925909e2f60e00d706bc0"],["/img/dynmap_markers/pinkflag.png","fd2f6390270548dd97ecea71eb040c54"],["/img/dynmap_markers/pirateflag.png","61bbdef42a7c7eba6bf1cf199dff19c2"],["/img/dynmap_markers/pointdown.png","bfc6ffc4119f6dd665044d2bf710a5d2"],["/img/dynmap_markers/pointleft.png","d974f547fb231400687f921ea522faf4"],["/img/dynmap_markers/pointright.png","d7239b952fb0c6831e1b8e900a527a29"],["/img/dynmap_markers/pointup.png","e5970a256c68aa64709bd51db5c23f12"],["/img/dynmap_markers/portal.png","7e1a2d75e5c6c206941a52faa09c5aa3"],["/img/dynmap_markers/purpleflag.png","6cffb4f0213183cb6384856dc759dece"],["/img/dynmap_markers/queen.png","cd3e965ba08c23a5aa1b19c879519011"],["/img/dynmap_markers/redflag.png","339568d29bc329a72577ac19e42c155a"],["/img/dynmap_markers/right.png","2418ed4401b661239cd4dc6ad3430e87"],["/img/dynmap_markers/ruby.png","80565ae03b57b269e8f060ff291c8e13"],["/img/dynmap_markers/scales.png","01f6c5c6ee920083e7ceb579ba909d7e"],["/img/dynmap_markers/shield.png","477758d4c5f5d3ef6f5c3c16aca9a3b7"],["/img/dynmap_markers/sign.png","66ff41396b0172ac05de01c0eabfcc01"],["/img/dynmap_markers/silvermedal.png","01f805b0c7e8b808701fdf9b5ca6ce1c"],["/img/dynmap_markers/silverstar.png","25b2996475ee18863214862c840e6d31"],["/img/dynmap_markers/skull.png","1dc0347492832480f708049519fa18a8"],["/img/dynmap_markers/star.png","25c2d343a231c86779abc9901764524c"],["/img/dynmap_markers/sun.png","e70ff308678476252fb3654ffde4bf99"],["/img/dynmap_markers/temple.png","e3f88049f7b09c9ef0700191ee496584"],["/img/dynmap_markers/theater.png","44dec85d1f88d7f00fc51b3e4b26c6fc"],["/img/dynmap_markers/tornado.png","adbb0f1b34c6956d81b0d6b83a536b30"],["/img/dynmap_markers/tower.png","e2433a145b7071efc45f408890d4dd8d"],["/img/dynmap_markers/tree.png","3a062c79544dd8fe40b3259915dd16ae"],["/img/dynmap_markers/truck.png","47815e1e4d47a2d9623e65c23eace9e8"],["/img/dynmap_markers/up.png","5cce80d0844dadbf47349c0efccfe69e"],["/img/dynmap_markers/walk.png","d7881686942fe90224ade126121177ac"],["/img/dynmap_markers/warning.png","92cac89bdf2388db33c719fefe608449"],["/img/dynmap_markers/world.png","d0d0b0fd600ffaab7d4051de42df81b9"],["/img/dynmap_markers/wrench.png","da4053b4dd7f25ab2f0fc2efd1ed871a"],["/img/dynmap_markers/yellowflag.png","8d7a692d0f7f19745301f17973e41fd3"],["/img/icons/08a41b181ce68.svg","91a42942dd98b240920b5411bb4695c0"],["/img/icons/20210610162918.svg","4e2ed73532d0ada5a8e864974425b055"],["/img/icons/25678f144c438.svg","078f457c65f878f8e3ef8f2c4196fe45"],["/img/icons/a1b00e20f425d.svg","b9c2eb08e4d8dcac32d5d779833f4cfb"],["/img/icons/nxfhj.svg","664a60dedd5918b9c24a231d07e2b74e"],["/img/icons/s54vgdz54.svg","e529898ff4ebb49fab20d1a1e3230553"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/post/54gdf56g4f653g.jpg","aecae2d0de2e216605850e007220a02b"],["/img/post/5b73a4a33f9bb3df5e1236b4021492fe.gif","62676e86819b6ecb0e4525648c33774c"],["/img/post/7392db97e9d8cea0eb0a6a60656695b5.png","f40038264104c08f361356c4e7bd4395"],["/img/post/e6905593f50890da134d5cf2e7ad1541.png","b9858a7567c562d52aa0206454ad6b4a"],["/img/satus.png","ff86c9ae670ad5873cb23f0eb26292f9"],["/img/svg/2659360.svg","bf2e354d35d263fef6bff8313cf142df"],["/img/svg/3442075.svg","0d6fcc5b4f02ff302de134738af23876"],["/img/svg/76b86c0226ffd.svg","498b39b974f025547562cec3792f56be"],["/img/svg/8f277b4ee0ecd.svg","3cbf4b2c668d0475d7e085e72f33116c"],["/img/travellings.gif","d5918e94977b1006168e781bc9a42dce"],["/index.html","7437b2cdc2f44e3c6b057afdaffd1545"],["/js/main.js","6d624cc5c008c2a579347599da41bed8"],["/js/notyf.min.js","f02a629c438de1b443ce9ec8204c523b"],["/js/plugins/copycode.js","5da6010479daba336dd7b549ef549349"],["/js/plugins/fcircle.js","94f2f68d0e0513781d6df4e2bd6eb967"],["/js/plugins/friends.js","3678b0c6c7a0db93190a8cd6f7f952b0"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","ce7d6454b1a7e54b1e446d6ffab3bce5"],["/js/plugins/memos.js","ab77ea1c8721236fdd9c0f18dfce7a9b"],["/js/plugins/sites.js","64e55a605af0372c6f67aef572b99d9b"],["/js/plugins/timeline.js","684c3bd86b130e338a4863ba9eeb1e52"],["/js/plugins/weibo.js","c856d3d725dbefb26f89965c604434ea"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/mcss/mcss.css","2439b0937a81555cc76d7bb0a83de880"],["/page/2/index.html","4d2816631286700455b5212676c46c5e"],["/say/index.html","97cec6e254d5a5978e8bbcbdf9448b48"],["/sw-register.js","0833a91afda83d2169c4673eeb7d8e45"],["/tags/AHK/index.html","df68bbf660976a723421fd553a160c2e"],["/tags/Clouddlare/index.html","e124089375004539d1d10858f607ca3c"],["/tags/Go/index.html","97ac3238ea67075e16b5c83df6de380b"],["/tags/Intel/index.html","f95c1b5d167a5191f5109640219e9b3c"],["/tags/MIUI/index.html","13edf7f9cd63bb45c75a6191c91ec605"],["/tags/MNSLXOD/index.html","7a6cde7c99af1b348536a78fd5d02005"],["/tags/Mirouterui/index.html","093f4a7bdd1b54cf3d0a8925811ace92"],["/tags/Windows/index.html","95d49bb1e43919ba748b970d5429917f"],["/tags/blog/index.html","0dbe18632d87f74ab74418873150481a"],["/tags/index.html","12672e2e331ef7b9ed640cef014c0c9c"],["/tags/linux/index.html","b602bb3a1d74bb94d81d0b8af80abc42"],["/tags/oneindex/index.html","4a2d8cb794af09295b05e7214b81fa3d"],["/tags/python/index.html","cf76a93d359d870464cc9d2206a37312"],["/tags/web/index.html","371a75636164f81e994add47e04731f4"],["/tags/yearreport/index.html","1f7ca1f03ff999f369f120c5d7aa8e75"],["/tags/甜糖/index.html","2b321f9e4b0f3fe8eee1aeb38c507026"],["/tags/笔记/index.html","2b451f9210161d1b69db1d2e5897662c"],["/tags/网站/index.html","7a11cddbdb264945ed74e75e8f1b0330"],["/tags/转换/index.html","427eed41d318e3b694721666133a9b16"],["/wiki/Artalk-doc/API/index.html","74e82095033fec8757fb8a4db4ffc152"],["/wiki/Artalk-doc/QandA/index.html","d1280491caddc818e9158e83ec1e586b"],["/wiki/Artalk-doc/develop/index.html","e9098f3408fb32ccf9995b6253941318"],["/wiki/Artalk-doc/index.html","8583a75752b0c1af02f8d3c03ed9d956"],["/wiki/Artalk-doc/install-go/index.html","185bc7a9cd580a2f8bb74142513669af"],["/wiki/Artalk-doc/install/index.html","474ed4a908789d25beecfa85711d6d3e"],["/wiki/Artalk-doc/more-url/index.html","47c76e7be487beda8d0c27e5cc518a1f"],["/wiki/Artalk-doc/play/index.html","17b1ffbdca6cef947782abc7329d8058"],["/wiki/Artalk-doc/use/index.html","6ff6cbe39269127b78f1495ff7d1a920"],["/wiki/fcloud/about/index.html","070e3a4526bba6a99bbe1c6d187cd22c"],["/wiki/fcloud/command/index.html","f69c0ed572aadc22562e6d0f955f9987"],["/wiki/fcloud/datasafe/index.html","58e6a455234863f1861656bd8433abb4"],["/wiki/fcloud/faq/index.html","678e9a748759ec13c3e6740117c75b96"],["/wiki/fcloud/index.html","07a3960cb8922e435bed78265d59e899"],["/wiki/fcloud/mods/index.html","abe789a96508904608fb27e9f05a063c"],["/wiki/index.html","51c7b28073f8a19b4abf35eb516a3396"],["/wiki/tags/MC/index.html","c1f705897dfd44cd94518d51baae381c"],["/wiki/tags/文件/index.html","fd708bc1a53d8d4974424b8729edbc64"],["/wiki/tags/文档/index.html","525b01869cc2905175f358da31962ad4"],["/wiki/tags/资料/index.html","6478500f01538db6795b928d18951d71"],["/wiki/学习资料/index.html","60e6c8ec58549e5a01caa46c0178e32e"],["/wiki/杂物间/camc.html","0a9553359394243df13d45795c1c65a1"],["/wiki/杂物间/index.html","e04770883051ef19f2415341e6be33b4"],["/wiki/杂物间/old-pages/Free Minecraft Dungeons.html","743f30bb2d95ed90c052a23b1960b259"],["/wiki/杂物间/old-pages/GitHub打不开的临时方法.html","326240ef6fea1376e3a15811c42c75c4"],["/wiki/杂物间/old-pages/hexo更新pages出错应急方法.html","2f595f42981aa350f1dda0c7d8ce882e"],["/wiki/杂物间/old-pages/index.html","27da7b813b5d82627cfeb445dfb92515"],["/wiki/杂物间/old-pages/免费游玩《戴森球计划》.html","0e0ab411b68ca948927e92ef0586a469"],["/wiki/杂物间/old-pages/定时关机.html","e87e2b6ddb33bbb54628013aaa9ff725"],["/wiki/杂物间/old-pages/弹出C盘の快乐.html","2a82f79610120ffe8dd1638133a40267"],["/wiki/杂物间/old-pages/来在MC里玩电脑.html","97ecb4a84c3bb63dd417b2310980b231"],["/wiki/杂物间/old-pages/现已通过myssl认证.html","a573e3999e13b279dd1605e2ff7e6d7f"]];
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



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"onep.hzchu.top"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"raw.hzchu.top"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"blog.hzchu.top"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"k.hzchu.top"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"jsd.hzchu.top"});





/* eslint-enable */
