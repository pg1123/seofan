$(function(){$("#J_slider").slider({itemSelector:".home-slider a",indexSelector:".index-bar-warp li",currentIndexClass:"slider-on",elapse:5e3}),$(".block-tabs .tab-title span").click(function(){var a=$(this),e=a.index(),n=a.attr("data-pos"),t=a.parents(".block-tabs");n&&t.attr("data-stat-pos",n),a.parent().find("span").removeClass("active"),a.addClass("active"),t.find(".tab-content ul").addClass("none").eq(e).removeClass("none")});var a=1;$("#J_ChangeDailyApp").click(function(){var e=$("#J_DailyAppContent .app-box").length;a>=e&&(a=0),$("#J_DailyAppContent .app-box").addClass("none").eq(a).removeClass("none"),a++})});