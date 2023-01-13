/*******************************************************************
 * *****************************************************************
 * **************************定义写在这里****************************
 * *****************************************************************
 * *****************************************************************
 */
let newYearTimer = null;
var newYear = () => {
    clearTimeout(newYearTimer);
    if (!document.querySelector('#newYear')) return;
    // 新年时间戳 and 星期对象
    let newYear = new Date('2023-01-22 00:00:00').getTime() / 1000,
        week = { 0: '周日', 1: '周一', 2: '周二', 3: '周三', 4: '周四', 5: '周五', 6: '周六' }

    time();

    // 补零函数
    function nol(h) { return h > 9 ? h : '0' + h; };

    function time() {
        // 现在 时间对象
        let now = new Date();

        // 右下角 今天
        document.querySelector('#newYear .today').innerHTML = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + week[now.getDay()]

        // 现在与新年相差秒数
        let second = newYear - Math.round(now.getTime() / 1000);

        // 小于0则表示已经过年
        if (second < 0) {
            document.querySelector('#newYear .title').innerHTML = 'Happy New Year!';
            document.querySelector('#newYear .newYear-time').innerHTML = '<span class="happyNewYear">新年快乐</p>';
        } else {
            // 大于0则还未过年
            document.querySelector('#newYear .title').innerHTML = '距离2023年春节：'

            // 大于一天则直接渲染天数
            if (second > 86400) {
                document.querySelector('#newYear .newYear-time').innerHTML = `<span class="day">${Math.ceil(second / 86400)}<span class="unit">天</span></span>`
            } else {
                // 小于一天则使用时分秒计时。
                let h = nol(parseInt(second / 3600));
                second %= 3600;
                let m = nol(parseInt(second / 60));
                second %= 60;
                let s = nol(second);
                document.querySelector('#newYear .newYear-time').innerHTML = `<span class="time">${h}:${m}:${s}</span></span>`;
                // 计时
                newYearTimer = setTimeout(time, 1000);
            }
        }
    }

    // 元宝飘落
    jQuery(document).ready(function($) {
        $('#newYear').wpSuperSnow({
            flakes: ['/img/yb1.webp', '/img/yb2.webp', '/img/yb3.webp'],
            totalFlakes: '100',
            zIndex: '999999',
            maxSize: '30',
            maxDuration: '20',
            useFlakeTrans: false
        });
    });
}

let newYearBgNum = 1;
let newYearBgTimer = null;
var newYearBg = () => {
    clearInterval(newYearBgTimer);
    let dom = document.querySelector('#newYear-main');
    if (dom) {
        dom.style.backgroundImage = `url(https://recclay.oss-cn-chengdu.aliyuncs.com/img_for_blog/blog_asset/css_img/tunian${newYearBgNum}.webp)`
        newYearBgTimer = setInterval(() => { dom.style.backgroundImage = `url(https://recclay.oss-cn-chengdu.aliyuncs.com/img_for_blog/blog_asset/css_img/tunian${newYearBgNum==3?newYearBgNum=1:newYearBgNum+=1}.webp)` }, 10000);
    }
}


/*******************************************************************
 * *****************************************************************
 * **************************调用写在这里****************************
 * *****************************************************************
 * *****************************************************************
 */
function whenDOMReady() {
    // pjax加载完成（切换页面）后需要执行的函数和代码
    newYear();
    newYearBg();
}
  
whenDOMReady() // 打开网站先执行一次
document.addEventListener("pjax:complete", whenDOMReady) // pjax加载完成（切换页面）后再执行一次
  
  // whenDOMReady函数外放一些打开网站之后只需要执行一次的函数和代码，比如一些监听代码。
  // 监听代码只需要执行一次即可，不需要每次加载pjax都执行，会出现一些Bug。至于为什么，我也不知道，可以自己试一下。