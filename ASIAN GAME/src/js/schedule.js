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



$(document).ready(function() {
    var mySwiper = new Swiper('#swiper-event-top', {
        slidesPerView: 1,
        spaceBetween: 30,
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




// 引入json文件并根据比赛日期更新赛程表
$(document).ready(function() {
    var projectsData; // 用于保存从 JSON 文件中获取的项目数据
    $.getJSON("src/json/example.json", function(data) {
        projectsData = data.projects; // 将项目数据赋值给变量
    });

    // 获得选择的值
    $('.select_time').on('change', function() {
        var selectedOption = $(this).val();

        // 根据选中的选项更新表格数据
        switch (selectedOption) {
            case '20230721':
                // 清空表格内容
                $('#table-time tbody').empty();

                // 遍历项目数据并添加到表格中
                $.each(projectsData, function(index, value) {
                    if (value.date.includes("7月21日")) {
                        var row = '<tr><td width="100">' + value.date + '</td><td width="120">' + value.event + '</td><td width="200">' + value.match + '</td><td width="120">' + value.sportshall + '</td><td width="90">' + value.isover + '</td><td width="120">' + value.data + '</td></tr>';
                        $('#table-time tbody').append(row);
                    }
                });
                break;

            case '20230722':
                // 清空表格内容
                $('#table-time tbody').empty();

                // 遍历项目数据并添加到表格中
                $.each(projectsData, function(index, value) {
                    if (value.date.includes("7月22日")) {
                        var row = '<tr><td width="100">' + value.date + '</td><td width="120">' + value.event + '</td><td width="200">' + value.match + '</td><td width="120">' + value.sportshall + '</td><td width="90">' + value.isover + '</td><td width="120">' + value.data + '</td></tr>';
                        $('#table-time tbody').append(row);
                    }
                });
                break;

            case '20230723':
                // 清空表格内容
                $('#table-time tbody').empty();

                // 遍历项目数据并添加到表格中
                $.each(projectsData, function(index, value) {
                    if (value.date.includes("7月23日")) {
                        var row = '<tr><td width="100">' + value.date + '</td><td width="120">' + value.event + '</td><td width="200">' + value.match + '</td><td width="120">' + value.sportshall + '</td><td width="90">' + value.isover + '</td><td width="120">' + value.data + '</td></tr>';
                        $('#table-time tbody').append(row);
                    }
                });
                break;


            default:
                break;
        }
    });

});

// 格式说明
// 要添加数据，需要找到对应日期，然后根据时间升序插入
// 引入json文件并根据比赛项目更新赛程表
$(document).ready(function() {
    var projectsData; // 用于保存从 JSON 文件中获取的项目数据
    var projectsCount;
    $.getJSON("src/json/example.json", function(data) {
        projectsData = data.projects; // 将项目数据赋值给变量
    });

    // 获得选择的值
    $('.select_event').on('change', function() {
        var selectedOption = $(this).val();

        // 根据选中的选项更新表格数据
        switch (selectedOption) {
            case '电子竞技':
                // 清空表格内容
                $('#table-time tbody').empty();

                // 遍历项目数据并添加到表格中
                $.each(projectsData, function(index, value) {
                    if (value.event.includes("电子竞技")) {
                        var row = '<tr><td width="100">' + value.date + '</td><td width="120">' + value.event + '</td><td width="200">' + value.match + '</td><td width="120">' + value.sportshall + '</td><td width="90">' + value.isover + '</td><td width="120">' + value.data + '</td></tr>';
                        $('#table-time tbody').append(row);
                    }
                });
                break;

            case '乒乓球':
                // 清空表格内容
                $('#table-time tbody').empty();

                // 遍历项目数据并添加到表格中
                $.each(projectsData, function(index, value) {
                    if (value.event.includes("乒乓球")) {
                        var row = '<tr><td width="100">' + value.date + '</td><td width="120">' + value.event + '</td><td width="200">' + value.match + '</td><td width="120">' + value.sportshall + '</td><td width="90">' + value.isover + '</td><td width="120">' + value.data + '</td></tr>';
                        $('#table-time tbody').append(row);
                    }
                });
                break;

            case '跳水':
                // 清空表格内容
                $('#table-time tbody').empty();

                // 遍历项目数据并添加到表格中
                $.each(projectsData, function(index, value) {
                    if (value.event.includes("跳水")) {
                        var row = '<tr><td width="100">' + value.date + '</td><td width="120">' + value.event + '</td><td width="200">' + value.match + '</td><td width="120">' + value.sportshall + '</td><td width="90">' + value.isover + '</td><td width="120">' + value.data + '</td></tr>';
                        $('#table-time tbody').append(row);
                    }
                });
                break;


            default:
                break;
        }
    });

});


// 引入json文件并根据比赛场馆更新赛程表
$(document).ready(function() {
    var projectsData; // 用于保存从 JSON 文件中获取的项目数据
    var projectsCount;
    $.getJSON("src/json/example.json", function(data) {
        projectsData = data.projects; // 将项目数据赋值给变量
    });

    // 获得选择的值
    $('.select_sportshall').on('change', function() {
        var selectedOption = $(this).val();

        // 根据选中的选项更新表格数据
        switch (selectedOption) {
            case '中国杭州电竞中心':
                // 清空表格内容
                $('#table-time tbody').empty();

                // 遍历项目数据并添加到表格中
                $.each(projectsData, function(index, value) {
                    if (value.sportshall.includes("中国杭州电竞中心")) {
                        var row = '<tr><td width="100">' + value.date + '</td><td width="120">' + value.event + '</td><td width="200">' + value.match + '</td><td width="120">' + value.sportshall + '</td><td width="90">' + value.isover + '</td><td width="120">' + value.data + '</td></tr>';
                        $('#table-time tbody').append(row);
                    }
                });
                break;

            case '杭州奥体中心体育馆':
                // 清空表格内容
                $('#table-time tbody').empty();

                // 遍历项目数据并添加到表格中
                $.each(projectsData, function(index, value) {
                    if (value.sportshall.includes("杭州奥体中心体育馆")) {
                        var row = '<tr><td width="100">' + value.date + '</td><td width="120">' + value.event + '</td><td width="200">' + value.match + '</td><td width="120">' + value.sportshall + '</td><td width="90">' + value.isover + '</td><td width="120">' + value.data + '</td></tr>';
                        $('#table-time tbody').append(row);
                    }
                });
                break;

            case '杭州奥体中心游泳馆':
                // 清空表格内容
                $('#table-time tbody').empty();

                // 遍历项目数据并添加到表格中
                $.each(projectsData, function(index, value) {
                    if (value.sportshall.includes("杭州奥体中心游泳馆")) {
                        var row = '<tr><td width="100">' + value.date + '</td><td width="120">' + value.event + '</td><td width="200">' + value.match + '</td><td width="120">' + value.sportshall + '</td><td width="90">' + value.isover + '</td><td width="120">' + value.data + '</td></tr>';
                        $('#table-time tbody').append(row);
                    }
                });
                break;


            default:
                break;
        }
    });

});