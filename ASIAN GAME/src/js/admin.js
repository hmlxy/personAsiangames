/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2023-05-13 12:10:12
 * @version $Id$
 */

// 切换管理表格
$(document).ready(function() {
    // 设置初始状态
    $(".athlete-manage, .event-manage, .schedule-manage").hide();
    $(".adv_manage").css("color", "#3F56EF");
    $(".midnav_btn").css("border-bottom", "none");
    $(".addpage").hide();

    // 点击广告信息管理
    $(".adv_manage").click(function() {

        // 设置被选中的按钮的字体颜色
        changeNavColor($(this));
        // 切换下划线
        changeNavUnderline($(this));
        // 移除所有按钮的 "active" 类名
        $(".midnav_btn").removeClass("active");
        // 给被选中的按钮添加 "active" 类名以设置样式
        $(this).addClass("active");
        // 隐藏其他管理表格
        $(".athlete-manage, .event-manage, .schedule-manage").hide();
        // 显示广告信息管理表格
        $(".ad-manage").show();
        $(".addpage").hide();
    });

    // 点击运动员信息管理
    $(".athlete_manage").click(function() {
        // 设置被选中的按钮的字体颜色
        changeNavColor($(this));
        changeNavUnderline($(this));
        $(".midnav_btn").removeClass("active");
        $(this).addClass("active");
        $(".ad-manage, .event-manage, .schedule-manage").hide();
        $(".athlete-manage").show();
        $(".addpage").hide();
    });

    // 点击赛事项目管理
    $(".event_manage").click(function() {
        // 设置被选中的按钮的字体颜色
        changeNavColor($(this));
        changeNavUnderline($(this));
        $(".midnav_btn").removeClass("active");
        $(this).addClass("active");
        $(".ad-manage, .athlete-manage, .schedule-manage").hide();
        $(".event-manage").show();
        $(".addpage").hide();
    });

    // 点击赛程管理
    $(".schedule_manage").click(function() {
        // 设置被选中的按钮的字体颜色
        changeNavColor($(this));
        changeNavUnderline($(this));
        $(".midnav_btn").removeClass("active");
        $(this).addClass("active");
        $(".ad-manage, .athlete-manage, .event-manage").hide();
        $(".schedule-manage").show();
        $(".addpage").hide();
    });

    // 切换下划线
    function changeNavUnderline(selectedBtn) {
        // 先将所有按钮的下划线移除
        $(".midnav_btn").css("border-bottom", "none");
        // 给被选中按钮的下划线设置样式
        selectedBtn.css("border-bottom", "1px solid #3F56EF");
    }

    // 更改被选中的按钮字体颜色
    function changeNavColor(selectedBtn) {
        // 清空所有按钮的字体颜色
        $(".midnav_btn").css("color", "");
        // 设置被选中的按钮的字体颜色为 #3F56EF
        selectedBtn.css("color", "#3F56EF");
    }
});



// // 实现批量复选框删除

$(document).ready(function() {
    // 点击“删除”按钮
    $(".delbtn").click(function() {
        // 获取选中的行
        var selectedRows = [];
        $(this).closest(".managebox").find('input[type="checkbox"][class="charge"]:checked').each(function() {
            selectedRows.push($(this).closest("tr"));
        });

        // 如果未选中行，提示错误
        if (selectedRows.length === 0) {
            alert("请至少选择一行要删除的数据。");
            return;
        }

        // 显示删除确认对话框
        $("#delete-confirm-dialog").dialog({
            modal: true,
            dialogClass: "delete-dialog",
            closeText: "<span class='ui-icon ui-icon-closethick'>×</span>",
            buttons: {
                "确认": function() {
                    // 从 DOM 中移除所选行
                    for (var i = 0; i < selectedRows.length; i++) {
                        var rowId = selectedRows[i].attr("id");
                        selectedRows[i].remove();
                        // 更新所有后续行的序号
                        updateRowNumber(rowId);
                    }

                    // 隐藏删除确认对话框
                    $(this).dialog("close");
                },
                "取消": function() {
                    // 隐藏删除确认对话框
                    $(this).dialog("close");
                }
            }
        });

        // 清空 LocalStorage
        localStorage.clear();
    });

    // “全选/反选”复选框
    $(".select-all").click(function() {
        // 获取当前表格中的复选框
        var checkboxes = $(this).closest(".managebox").find('input[type="checkbox"][class="charge"]');
        // 将它们的状态设置为和当前按钮相同
        checkboxes.prop("checked", $(this).prop("checked"));
    });

    // 更新行号
    function updateRowNumber(rowId) {
        var tableBody = $("#" + rowId).closest("tbody");
        // 从 ID 获取行序号
        var rowNumber = parseInt(rowId.slice(4));
        // 遍历并更新所有行的序号
        tableBody.find("tr").each(function(index) {
            var newNumber = index + 1;
            // 更新序号单元格的文本
            $(this).find("td:nth-child(2)").text(newNumber);
        });
    }
});



// 单行广告删除
$(document).ready(function() {
    $(".ad-del").click(function() {
        var row = $(this).closest("tr");
        var tableBody = row.closest("tbody");
        var rowIndex = parseInt(row.find("#number-cell").text());
        $("#delete-confirm-dialog").dialog({
            modal: true,
            buttons: {
                "确认": function() {
                    row.remove();
                    updateRowNumber(tableBody, rowIndex);
                    $(this).dialog("close");
                },
                "取消": function() {
                    $(this).dialog("close");
                }
            }
        });

        // 清空 LocalStorage
        localStorage.clear();
    });

    function updateRowNumber(tableBody, rowIndex) {
        var rows = tableBody.find("tr");
        rows.each(function(index) {
            var row = $(this);
            var numberCell = row.find("#number-cell");
            var number = parseInt(numberCell.text());
            if (number > rowIndex) {
                numberCell.text(number - 1);
            }
        });
    }
});

// 单行其他删除
$(document).ready(function() {
    $(".ath-del, .eve-del, .sche-del").click(function() {
        var row = $(this).closest("tr");
        var tableBody = row.closest("tbody");
        var rowIndex = parseInt(row.find("#number-cell").text());
        $("#delete-confirm-dialog").dialog({
            modal: true,
            buttons: {
                "确认": function() {
                    row.remove();
                    $(this).dialog("close");
                },
                "取消": function() {
                    $(this).dialog("close");
                }
            }
        });
    });

});

// 切换添加页面
$(document).ready(function() {
    // 点击添加广告按钮
    $(".ad-addbtn").on("click", function() {
        // 隐藏原有表格和二级导航，显示添加页面
        $(".managebox, .addpage").hide();
        $(".ad-addpage").show();
    });

    // 点击添加运动员按钮
    $(".ath-addbtn").on("click", function() {
        // 隐藏原有表格和二级导航，显示添加页面
        $(".managebox, .addpage").hide();
        $(".ath-addpage").show();
    });

    // 点击添加赛事按钮
    $(".eve-addbtn").on("click", function() {
        // 隐藏原有表格和二级导航，显示添加页面
        $(".managebox, .addpage").hide();
        $(".eve-addpage").show();
    });

    // 点击添加赛程按钮
    $(".sche-addbtn").on("click", function() {
        // 隐藏原有表格和二级导航，显示添加页面
        $(".managebox, .addpage").hide();
        $(".sche-addpage").show();
    });

    // 点击编辑打开运动员编辑页面
    $(".ad-edit").on("click", function() {
        // 隐藏原有表格和二级导航，显示添加页面
        $(".managebox, .addpage").hide();
        $(".ad-addpage").show();
    });

    // 点击编辑打开运动员编辑页面
    $(".ath-edit").on("click", function() {
        // 隐藏原有表格和二级导航，显示添加页面
        $(".managebox, .addpage").hide();
        $(".ath-addpage").show();
    });

    // 点击编辑打开赛事编辑页面
    $(".eve-edit").on("click", function() {
        // 隐藏原有表格和二级导航，显示添加页面
        $(".managebox, .addpage").hide();
        $(".eve-addpage").show();
    });

    // 点击编辑打开赛程编辑页面
    $(".sche-edit").on("click", function() {
        // 隐藏原有表格和二级导航，显示添加页面
        $(".managebox, .addpage").hide();
        $(".sche-addpage").show();
    });
});

// textarea点击位于开头
$(document).ready(function() {
    $("#my-textarea").focus().prop("selectionStart", 0).prop("selectionEnd", 0);
});

// 上传运动员照片
$(document).ready(function() {
    // 上传图片
    // 显示文件上传表单并让用户选择文件
    $(".ath-addimgbtn").on("click", function() {
        $("#add_img_input").click();
    });

    // 监听文件上传事件
    $("#add_img_input").on("change", function() {
        // 获取用户选择的文件对象
        var file = $(this)[0].files[0];
        // 清空文件上传表单元素的值并让其失去焦点
        $(this).val("").blur();
        // 构建一个文件阅读器对象
        var reader = new FileReader();

        // 监听文件读取完成事件
        reader.onload = function(event) {
            // 将读取到的文件内容赋给图片元素的 src 属性
            $(".ath_add_img").attr("src", event.target.result);
        };

        // 读取用户选择的文件
        reader.readAsDataURL(file);
    });
});


// 保存
$(document).ready(function() {
    // 监听保存按钮的点击事件
    $(".save").on("click", function() {
     
     

        // 弹出保存成功的提示窗口
        alert("保存成功！");
    });



});


// 在运动员的批量和单行删除中有清除localstorage的代码

$(document).ready(function() {
    // 从 LocalStorage 中加载已保存的运动员数据，并在表格中显示
    var athletes = JSON.parse(localStorage.getItem("athletes"));
    if (athletes) {
        for (var i = 0; i < athletes.length; i++) {
            addAthleteRow(athletes[i]);
        }
    }

    // 监听保存按钮的点击事件
    $(".ok").on("click", function() {
        // 获取用户对表单的输入
        var id = $(".ath-addpage .add_row li:contains('运动员ID')").next().val();
        var name = $(".ath-addpage .add_row li:contains('运动员姓名')").next().val();
        var nationality = $(".ath-addpage .add_row li:contains('运动员国籍')").next().val();
        var event = $(".ath-addpage .add_row li:contains('参赛项目')").next().val();
        var time = $(".ath-addpage .add_row li:contains('添加时间')").next().val();
        // var intro = $("#my-textarea").val();
        // var img = $("#add_img").attr("src");

        // 将用户输入打包成一个对象
        var athlete = {
            id: id,
            name: name,
            nationality: nationality,
            event: event,
            time: time
        };

        // 从 LocalStorage 中获取已保存的数据
        var athletes = JSON.parse(localStorage.getItem("athletes"));
        if (!athletes) {
            athletes = [];
        }

        // 将新的运动员对象添加到数组中
        athletes.push(athlete);

        // 将数组重新保存到 LocalStorage 中
        localStorage.setItem("athletes", JSON.stringify(athletes));

        // 在运动员管理表格中添加新的一行
        addAthleteRow(athlete);

        // 弹出保存成功的提示窗口
        alert("发布成功！");
    });

    // 动态添加一行运动员数据到表格中
    function addAthleteRow(athlete) {
        var $tbody = $(".athlete-manage #manage_table_body tbody");
        var $lastRow = $tbody.find("tr:last");
        var id = parseInt($lastRow.find("td:eq(0)").text()) + 1;
        var $row = $("<tr>").attr("id", "row-" + id);
        $row.append($("<td>").html('<input type="checkbox" class="charge" id="checkbox" name="agree" value="true">'));
        $row.append($("<td>").text(athlete.id));
        $row.append($("<td>").text(athlete.name));
        $row.append($("<td>").text(athlete.nationality));
        $row.append($("<td>").text(athlete.event));
        $row.append($("<td>").text(athlete.time));
        $row.append($("<td>").html('<div class="manage-aciton"><div class="manage-btn manage_table_body-edit ath-edit">编辑</div><div class="manage-btn manage_table_body-del ath-del">删除</div></div>'));
        $tbody.append($row);

        $row.find(".ath-del").click(function() {
            var row = $(this).closest("tr");
            var tableBody = row.closest("tbody");
            var rowIndex = parseInt(row.find("td:eq(0)").text());
            $("#delete-confirm-dialog").dialog({
                modal: true,
                buttons: {
                    "确认": function() {
                        row.remove();
                        $(this).dialog("close");
                    },
                    "取消": function() {
                        $(this).dialog("close");
                    }
                }
            });

            // 清空 LocalStorage
            localStorage.clear();
        });

        $row.find(".ath-edit").click(function() {
            // 隐藏原有表格和二级导航，显示添加页面
            $(".managebox, .addpage").hide();
            $(".ath-addpage").show();
        });

    }

});

//自动填充当前时间
$(document).ready(function() {
    var datetime = new Date();
    var datetimeStr = datetime.getFullYear() + '-' + (datetime.getMonth() + 1) + '-' + datetime.getDate() + ' ' + datetime.getHours() + ':' + datetime.getMinutes();
    $("input[type='text'][placeholder='2023-5-21 19:00']").val(datetimeStr);
});

// 编辑打开自动填充其他
$(document).ready(function() {
    // 检查是否存在local storage
    if (localStorage.getItem('athlete')) {
        // 获取存储在local storage中的数据
        var athlete = JSON.parse(localStorage.getItem('athlete'));
        // 自动填充表单
        $('#add_row-rt-1').val(athlete.id);
        $('#add_row-rt-2').val(athlete.name);
        $('#add_row-rt-3').val(athlete.country);
        $('#add_row-rt-4').val(athlete.event);
        $('#my-textarea').val(athlete.intro);
    }

});