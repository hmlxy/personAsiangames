/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2023-05-13 12:10:12
 * @version $Id$
 */

// 切换管理表格



// $(document).ready(function() {
//     // 设置初始状态
//     $(".athlete-manage, .event-manage, .schedule-manage").hide();
//     $(".ad-manage").css("color", "#3F56EF");
//     $(".midnav_btn").css("border-bottom", "none");
    
//     // 点击广告信息管理
//     $(".adv_manage").click(function() {

//         // 设置被选中的按钮的字体颜色
//         changeNavColor($(this));
//         // 切换下划线
//         changeNavUnderline($(this));
//         // 移除所有按钮的 "active" 类名
//         $(".midnav_btn").removeClass("active");
//         // 给被选中的按钮添加 "active" 类名以设置样式
//         $(this).addClass("active");
//         // 隐藏其他管理表格
//         $(".athlete-manage, .event-manage, .schedule-manage").hide();
//         // 显示广告信息管理表格
//         $(".ad-manage").show();
//     });

//     // 点击运动员信息管理
//     $(".athlete_manage").click(function() {
//          // 设置被选中的按钮的字体颜色
//         changeNavColor($(this));
//         changeNavUnderline($(this));
//         $(".midnav_btn").removeClass("active");
//         $(this).addClass("active");
//         $(".ad-manage, .event-manage, .schedule-manage").hide();
//         $(".athlete-manage").show();
//     });

//     // 点击赛事项目管理
//     $(".event_manage").click(function() {
//          // 设置被选中的按钮的字体颜色
//         changeNavColor($(this));
//         changeNavUnderline($(this));
//         $(".midnav_btn").removeClass("active");
//         $(this).addClass("active");
//         $(".ad-manage, .athlete-manage, .schedule-manage").hide();
//         $(".event-manage").show();
//     });

//     // 点击赛程管理
//     $(".schedule_manage").click(function() {
//          // 设置被选中的按钮的字体颜色
//         changeNavColor($(this));
//         changeNavUnderline($(this));
//         $(".midnav_btn").removeClass("active");
//         $(this).addClass("active");
//         $(".ad-manage, .athlete-manage, .event-manage").hide();
//         $(".schedule-manage").show();
//     });
    
//     // 切换下划线
//     function changeNavUnderline(selectedBtn) {
//         // 先将所有按钮的下划线移除
//         $(".midnav_btn").css("border-bottom", "none");
//         // 给被选中按钮的下划线设置样式
//         selectedBtn.css("border-bottom", "1px solid #3F56EF");
//     }

//      // 更改被选中的按钮字体颜色
//     function changeNavColor(selectedBtn) {
//         // 清空所有按钮的字体颜色
//         $(".midnav_btn").css("color", "");
//         // 设置被选中的按钮的字体颜色为 #3F56EF
//         selectedBtn.css("color", "#3F56EF");
//     }
// });




// 实现批量复选框删除
$(document).ready(function() {
    // 单击“删除”按钮
    $(".ad-delbtn").click(function() {
        // 获取选中的行
        var selectedRows = [];
        $('input[type="checkbox"][class="charge"]:checked').each(function() {
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
    });

    $(".ath-delbtn").click(function() {
        // 获取选中的行
        var selectedRows = [];
        $('input[type="checkbox"][class="charge"]:checked').each(function() {
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
    });

    $(".eve-delbtn").click(function() {
        // 获取选中的行
        var selectedRows = [];
        $('input[type="checkbox"][class="charge"]:checked').each(function() {
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
    });

    $(".sche-delbtn").click(function() {
        // 获取选中的行
        var selectedRows = [];
        $('input[type="checkbox"][class="charge"]:checked').each(function() {
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
    });

    // “全选/反选”复选框
    $("#ad-select-all, #ath-select-all, #eve-select-all, #sche-select-all").click(function() {
        // 获取当前表格中的复选框
        var checkboxes = $(this).closest(".ad-manage").find('input[type="checkbox"][class="charge"]');
        // 将它们的状态设置为和当前按钮相同
        checkboxes.prop("checked", $(this).prop("checked"));
    });

   //  // “全选/反选”复选框
   // $("#ad-select-all").click(function() {
   //      // 获取当前表格中的复选框
   //      var checkboxes = $(this).closest(".ad-manage").find('input[type="checkbox"][class="charge"]');
   //      // 将它们的状态设置为和当前按钮相同
   //      checkboxes.prop("checked", $(this).prop("checked"));
   //  });
   //  // “全选/反选”复选框
   //  $("#ath-select-all").click(function() {
   //      // 获取当前表格中的复选框
   //      var checkboxes = $(this).closest(".athlete-manage").find('input[type="checkbox"][class="charge"]');
   //      // 将它们的状态设置为和当前按钮相同
   //      checkboxes.prop("checked", $(this).prop("checked"));    
   //  });
   //  // “全选/反选”复选框
   //  $("#eve-select-all").click(function() {
   //      // 获取当前表格中的复选框
   //      var checkboxes = $(this).closest(".event-manage").find('input[type="checkbox"][class="charge"]');
   //      // 将它们的状态设置为和当前按钮相同
   //      checkboxes.prop("checked", $(this).prop("checked"));   
   //  });
   //  // “全选/反选”复选框
   //  $("#sche-select-all").click(function() {
   //          // 获取当前表格中的复选框
   //          var checkboxes = $(this).closest(".schedule-manage").find('input[type="checkbox"][class="charge"]');
   //          // 将它们的状态设置为和当前按钮相同
   //          checkboxes.prop("checked", $(this).prop("checked"));      
   //  });

    // 广告需要更新序号
    function updateRowNumber(rowId) {
        // 从 ID 获取行序号
        var rowNumber = parseInt(rowId.slice(4));
        // 遍历并更新所有行的序号
        $(".ad-manage #manage_table_body tr").each(function(index) {
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

// $(document).ready(function() {
//     // 删除单个项目
//     $(".ad-del").click(function() {
//         var row = $(this).closest("tr");
//         var tableBody = row.closest("tbody");
//         var rowIndex = parseInt(row.find("#number-cell").text());
//         $("#delete-confirm-dialog").dialog({
//             modal: true,
//             buttons: {
//                 "确认": function() {
//                     row.remove(); // 删除当前行
//                     updateRowNumber(tableBody, rowIndex); // 更新后续行的序号
//                     $(this).dialog("close"); // 关闭确认删除对话框
//                 },
//                 "取消": function() {
//                     $(this).dialog("close"); // 关闭确认删除对话框
//                 }
//             }
//         });
//     }); 

//      $(".ath-del").click(function() {
//         var row = $(this).closest("tr");
//         var tableBody = row.closest("tbody");
//         var rowIndex = parseInt(row.find("#number-cell").text());
//         $("#delete-confirm-dialog").dialog({
//             modal: true,
//             buttons: {
//                 "确认": function() {
//                     row.remove(); // 删除当前行
//                     updateRowNumber(tableBody, rowIndex); // 更新后续行的序号
//                     $(this).dialog("close"); // 关闭确认删除对话框
//                 },
//                 "取消": function() {
//                     $(this).dialog("close"); // 关闭确认删除对话框
//                 }
//             }
//         });
//     }); 

//      $(".eve-del").click(function() {
//         var row = $(this).closest("tr");
//         var tableBody = row.closest("tbody");
//         var rowIndex = parseInt(row.find("#number-cell").text());
//         $("#delete-confirm-dialog").dialog({
//             modal: true,
//             buttons: {
//                 "确认": function() {
//                     row.remove(); // 删除当前行
//                     updateRowNumber(tableBody, rowIndex); // 更新后续行的序号
//                     $(this).dialog("close"); // 关闭确认删除对话框
//                 },
//                 "取消": function() {
//                     $(this).dialog("close"); // 关闭确认删除对话框
//                 }
//             }
//         });
//     }); 

//      $(".sche-del").click(function() {
//         var row = $(this).closest("tr");
//         var tableBody = row.closest("tbody");
//         var rowIndex = parseInt(row.find("#number-cell").text());
//         $("#delete-confirm-dialog").dialog({
//             modal: true,
//             buttons: {
//                 "确认": function() {
//                     row.remove(); // 删除当前行
//                     updateRowNumber(tableBody, rowIndex); // 更新后续行的序号
//                     $(this).dialog("close"); // 关闭确认删除对话框
//                 },
//                 "取消": function() {
//                     $(this).dialog("close"); // 关闭确认删除对话框
//                 }
//             }
//         });
//     }); 
    
//     // 更新表格中的序号
//     function updateRowNumber(tableBody, rowIndex) {
//         var rows = tableBody.find("tr");
//         rows.each(function(index) {
//             var row = $(this);
//             var numberCell = row.find("#number-cell");
//             var number = parseInt(numberCell.text());
//             if (number > rowIndex) {
//                 numberCell.text(number - 1);
//             }
//         });
//     }
// });

