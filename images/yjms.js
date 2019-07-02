
var brightness = 0.5;
$().ready(function(){
// 创建遮罩层
(function createCover(){
$(document.body).append(
$('<div/>').attr('id',"divCover")
.css({
"display":"none",
"background":"#000",
"position":"absolute",
"left":"0px",
"top":"0px",
"width": $(document).width()+'px',
"height": $(document).height()+'px',
"z-index":"9999",
"opacity": brightness
}));
})();
$("#open").click(function(){// 打开
$("#divCover").css("opacity", brightness = 0.5);
$("#divCover").show();
});
$("#close").click(function(){// 关闭
$("#divCover").hide();
});
$("#add").click(function(){// 增加亮度
$("#divCover").css("opacity", brightness -= 0.1);
});
$("#delete").click(function(){// 减少亮度
$("#divCover").css("opacity", brightness += 0.1);
});
});