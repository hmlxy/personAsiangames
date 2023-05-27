/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2023-05-13 12:10:12
 * @version $Id$
 */



//实现上滑出现导航栏
$(document).ready(function(){
  var previousScroll = 0;
  
  $(window).scroll(function(){
    var currentScroll = $(this).scrollTop();
    
    if(currentScroll < previousScroll) {//意味着上滑
      $('.topnav').css('top', '0');
    } else {
      $('.topnav').css('top', '-80px');
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


// 默认选中竞技类方块
 $(document).ready(function() {
        // 默认选中第一个方块
        $(".event-top-item").first().addClass("event-top-item-active");
        
        // 监听方块点击事件
        $(".event-top-item").on("click", function() {
          // 取消其他方块的选中状态
          $(".event-top-item").removeClass("event-top-item-active");
          // 设置当前方块为选中状态
          $(this).addClass("event-top-item-active");
        });
 });



//点击项目类方块切换内容
 $(document).ready(function(){
            $("#event_bnt1").click(function(){
                $(".event_cont").hide();
                $("#game").show();
            });
            $("#event_bnt2").click(function(){
                $(".event_cont").hide();
                $("#ball").show();
 			});
            $("#event_bnt3").click(function(){
                $(".event_cont").hide();
                $("#conflict").show();
            });
            $("#event_bnt4").click(function(){
                $(".event_cont").hide();
                $("#water").show();
        	});
 });

