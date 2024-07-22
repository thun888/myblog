const host = window.location.host;

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    return r ? decodeURI(r[2]) : null;
}

function base64Decode(input) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let str = input.replace(/=+$/, '');
    let output = '';

    if (str.length % 4 == 1) {
        throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (let bc = 0, bs, buffer, idx = 0; buffer = str.charAt(idx++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
        buffer = chars.indexOf(buffer);
    }
    return output;
}

var jump_url = GetQueryString('u');
jump_url = base64Decode(jump_url);
var UrlReg = '^((http|https|thunder|qqdl|ed2k|Flashget|qbrowser|ftp|rtsp|mms)://)';
if (!jump_url || !jump_url.match(UrlReg)) {
    document.title = '参数错误，正在返回首页...';
    jump_url = location.origin;
}

let countdown = 10;
let countdownElement;
let jumpUrlElement;

function updateCountdown() {
    countdownElement.textContent = countdown;
    if (countdown === 0) {
        jump();
    } else {
        countdown--;
        setTimeout(updateCountdown, 1000);
    }
}

function jump() {
    location.href = jump_url;
}

function closeWindow() {
    window.opener = null;
    window.close();
}

function loadAvatar() {
    const avatarImg = document.querySelector('.avatar');
    const placeholder = document.querySelector('.avatar-placeholder');
    const img = new Image();
    img.src = '{{avatar}}';
    img.onload = function () {
        avatarImg.src = img.src;
        avatarImg.style.display = 'block';
        placeholder.style.display = 'none';
    };
}

window.onload = function () {
    loadAvatar();
    progressElement = document.getElementById('progress');
    countdownElement = document.getElementById('countdown');
    jumpUrlElement = document.getElementById('jump-url');
    jumpUrlElement.textContent = jump_url;
    updateCountdown();
}