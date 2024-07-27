function stitchumami() {
    const umamiKey = 'umami.disabled';
    const umamiStatus = localStorage.getItem(umamiKey);

    if (!umamiStatus || umamiStatus === '0') {
        localStorage.setItem(umamiKey, '1');
        hud.toast('已禁用Umami统计');
    } else if (umamiStatus === '1') {
        localStorage.removeItem(umamiKey);
        hud.toast('已启用Umami统计');
    }
    initstatus()
}

function switchselectFastNode() {
    const key = 'onep.cdn.select.disabled';
    const status = localStorage.getItem(key);

    if (!status || status === '0') {
        localStorage.setItem(key, '1');
        hud.toast('已禁用图片节点优选');
    } else if (status === '1') {
        localStorage.removeItem(key);
        hud.toast('已启用图片节点优选');
    }
    initstatus()
}

function switchloader() {
    const key = 'loader.disabled';
    const status = localStorage.getItem(key);

    if (!status || status === '0') {
        localStorage.setItem(key, '1');
        hud.toast('已禁用加载动画');
    } else if (status === '1') {
        localStorage.removeItem(key);
        hud.toast('已启用加载动画');
    }
    initstatus()
}
function switchaisummary() {
    const aisummaryKey = 'config.aisummary.status';
    const aisummaryStatus = localStorage.getItem(aisummaryKey);

    if (!aisummaryStatus || aisummaryStatus === '0') {
        localStorage.setItem(aisummaryKey, '1');
        hud.toast('已启用AI摘要');
    } else if (aisummaryStatus === '1') {
        localStorage.removeItem(aisummaryKey);
        hud.toast('已禁用AI摘要');
    }
    initstatus()
}

function refreshONEP() {
    selectFastNode(true);
    // 似乎localstorage有延迟
    setTimeout(function(){
        initstatus();
    },100);
}


function initstatus(){
    // 初始化图片节点优选状态
    var selectFastNodeStatus = localStorage.getItem('onep.cdn.select.disabled');
    var text = (!selectFastNodeStatus || selectFastNodeStatus === '0') ? '已启用' : '已禁用';
    $('#selectFastNode-status').text(text);

    var selectFastNodeNodeInfoData = localStorage.getItem('onep.cdn.nodelist');
    var selectFastNodeNodeInfo = '本地无节点信息';
    if (selectFastNodeNodeInfoData) {
        var data = JSON.parse(selectFastNodeNodeInfoData);
        var now = new Date();
        if (data.link === null && now.getTime() - data.time < 5 * 60 * 1000) {
            selectFastNodeNodeInfo =  '近期获取节点错误';
        } else if (now.getTime() - data.time < 5 * 60 * 1000) {
            selectFastNodeNodeInfo = data.link;
        }else {
            selectFastNodeNodeInfo = data.link + ' (已过期)';
        }
    }
    $('#selectFastNode-nodeinfo').text(selectFastNodeNodeInfo);

    // 初始化umami状态
    var umamiStatus = localStorage.getItem('umami.disabled');
    text = (!umamiStatus || umamiStatus === '0') ? '已启用' : '已禁用';
    $('#umami-status').text(text);

    // 初始化AI摘要状态
    var aisummaryStatus = localStorage.getItem('config.aisummary.status');
    text = (!aisummaryStatus || aisummaryStatus === '0') ? '已禁用' : '已启用';
    $('#aisummary-status').text(text);
    // 初始化加载动画状态
    var loaderStatus = localStorage.getItem('loader.disabled');
    text = (!loaderStatus || loaderStatus === '0') ? '已启用' : '已禁用';
    $('#loader-status').text(text);
}

//页面渲染完成
addEventListener("load",function(){
    initstatus()
  })
