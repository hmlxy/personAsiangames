/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2023-05-13 12:10:12
 * @version $Id$
 */


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


$(document).ready(function(){
    var mySwiper = new Swiper('#swiper-event-top', {
    slidesPerView: 1,
    spaceBetween: 300,
    autoplay: {
    delay: 4000, // 自动切换时间间隔
    disableOnInteraction: false, // 用户操作后是否禁止自动切换
    },
    loop: true, // 开启无限循环模式
    pagination: {
    el: '.swiper-pagination', // 添加分页器
    clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next', // 下一页按钮
    prevEl: '.swiper-button-prev', // 上一页按钮
    },
    });
})


$(document).ready(function(){
    var mySwiper = new Swiper('#swiper-event-bottom', {
    slidesPerView: 1,
    spaceBetween: 300,
    autoplay: {
    delay: 4000, // 自动切换时间间隔
    disableOnInteraction: false, // 用户操作后是否禁止自动切换
    },
    loop: true, // 开启无限循环模式
    pagination: {
    el: '.swiper-pagination', // 添加分页器
    clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next', // 下一页按钮
    prevEl: '.swiper-button-prev', // 上一页按钮
    },
    });
})

// find查询极为强大，可以自动匹配相应的字符串

// 根据搜索国家名隐藏其他行达到筛选功能
$(document).ready(function() {
  // 监听搜索框内容变化
  $('#countryname').on('input', function() {
    var countryName = $(this).val();
    // 遍历每一行数据
    $('#medel_range_table tbody tr').each(function() {
      var $tr = $(this);
      // 获取当前行对应的国家名
      var currCountry = $tr.find('th:nth-child(2)').text();
      // 判断如果当前国家名符合搜索条件，则显示当前行，否则隐藏当前行
      if (currCountry.indexOf(countryName) !== -1) {
        $tr.css('display', '');
      } else {
        $tr.css('display', 'none');
      }
    });
  });
});


// 根据搜索项目名隐藏其他行达到筛选功能
$(document).ready(function() {
  // 监听搜索框内容变化
  $('#eventname').on('input', function() {
    var countryName = $(this).val();
    // 遍历每一行数据
    $('#event_medal_table tbody tr').each(function() {
      var $tr = $(this);
      // 获取当前行对应的项目名
      var currCountry = $tr.find('th:nth-child(3)').text();
      // 判断如果当前国家名符合搜索条件，则显示当前行，否则隐藏当前行
      if (currCountry.indexOf(countryName) !== -1) {
        $tr.css('display', '');
      } else {
        $tr.css('display', 'none');
      }
    });
  });
});


// 根据搜索项目名隐藏其他行达到筛选功能
$(document).ready(function() {
  // 监听搜索框内容变化
  $('#schedule_eventname').on('input', function() {
    var countryName = $(this).val();
    // 遍历每一行数据
    $('#schedule_event_table tbody tr').each(function() {
      var $tr = $(this);
      // 获取当前行对应的项目名

      var currCountry = $tr.find('td:nth-child(3)').text();//注意find的是th,还是td,我有乱用的地方
      // 判断如果当前国家名符合搜索条件，则显示当前行，否则隐藏当前行
      if (currCountry.indexOf(countryName) !== -1) {
        $tr.css('display', '');
      } else {
        $tr.css('display', 'none');
      }
    });
  });
});



