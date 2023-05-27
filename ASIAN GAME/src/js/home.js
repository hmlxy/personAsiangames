/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2023-05-13 12:48:45
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
            $('.topnav').css('top', '-80px');
        }
        previousScroll = currentScroll;
    });
});


// 根据用户账号和密码实现登录
$(document).ready(function() {
    // 定义用户密码 JSON 对象
    var userPasswords = {
      "admin": "123456",
      "hml": "123",
      "xwl": "123",
      "wkp": "123",
      "syt": "123",
    };

    // 在输入密码框上绑定键盘按键事件
    $('.userpwd').on('keyup', function(event) {
      // 判断是否按下了回车键(Key code 为 13)
      if (event.keyCode === 13) {
        // 模拟点击登录按钮
        $('.loginbtn').click();
      }
    });

    // 为登录按钮绑定事件
    $('.loginbtn').on('click', function() {
      // 取出输入框中的用户名和密码
      var username = $('.username').val();
      var userpwd = $('.userpwd').val();

      // 判断用户名和密码是否与预定义 JSON 数据匹配
      if (userPasswords[username] === userpwd) {
        // 认证成功，跳转到 admin.html 页面
        link = 'admin.html';
        window.location.href = link;
      } 
      else {
        // 认证失败，弹出提示框
        alert('用户名或密码错误，请重新输入！');
      }
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



// 管理员登录
$(document).ready(function() {
  // 弹出模态框
  $("#admin").click(function() {
    $("#myModal").css("display", "block");
  });

  // 关闭模态框
  $(".close").click(function() {
    $("#myModal").css("display", "none");
  });
});