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
}