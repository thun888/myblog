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