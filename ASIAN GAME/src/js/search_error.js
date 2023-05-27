/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2023-05-13 12:10:12
 * @version $Id$
 */

//实现上滑出现导航栏
$(document).ready(function() {
    var previousScroll = 0;

    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();

        if (currentScroll < previousScroll) { //意味着上滑
            $('.topnav').css('top', '0');
        } else {
            $('.topnav').css('top', '-800px');
        }
        previousScroll = currentScroll;
    });
});


// 根据输入内容实现跳转项目页面
$(document).ready(function() {
    var $inputBox = $('#evenserch');
    var $searchBtn = $('#search_btn');

    $searchBtn.on('click', function() {
        var keyword = $inputBox.val(); // 获取输入框内容
        var link = 'search_error.html'; // 定义页面跳转链接
        if (keyword === '电子竞技') {
            link = 'event_game.html'; // 电子竞技页面链接
        } else if (keyword === '乒乓球') {
            link = 'event_ping.html'; // 乒乓球页面链接
        } else if (keyword === '跳水') {
            link = 'event_jump-water.html'; // 跳水页面链接
        } else {
            link = 'search_error.html'; // 默认页面链接
        }
         window.location.assign(link); // 跳转到指定页面
    });

    $inputBox.keypress(function(event) {
        if (event.which === 13) { // 判断是否按下回车键
            var keyword = $inputBox.val(); // 获取输入框内容
            var link = 'search_error.html'; // 页面跳转链接
            if (keyword === '电子竞技') {
                link = 'event_game.html'; // 电子竞技页面链接
            } else if (keyword === '乒乓球') {
                link = 'event_ping.html'; // 乒乓球页面链接
            } else if (keyword === '跳水') {
                link = 'event_jump-water.html'; // 跳水页面链接
            } else {
                link = 'search_error.html'; // 默认页面链接
            }
             window.location.assign(link); // 跳转到指定页面
        }
    });

});