var app={};app.slidemaker=function(){$(".slide-item").on("mousedown",function(e){function o(){$("body").off("mousemove",t),$("body").off("mouseup",o)}function t(e){e.preventDefault();var o=e.pageY-s,t=e.pageX-i,r=$(".slide-maker").width()-n.width(),u=$(".slide-maker").height()-n.height();0>o?o=0:!0,o>u?o=u:!0,0>t?t=0:!0,t>r?t=r:!0,n.css({top:o,left:t})}e.preventDefault();var n=$(this),r=n.position(),i=e.pageX-r.left,s=e.pageY-r.top;$("body").on("mousemove",t),$("body").on("mouseup",o),$("body").mouseleave(function(){o()})})},app.slideReorder=function(){$(".thumb-img").on("mousedown",function(){function e(e){return e.preventDefault(),!1}function o(e){return t(e.pageY)?(i.insertBefore(i.prev()),r()):n(e.pageY)&&(i.insertAfter(i.next()),r()),!1}function t(e){var o=i.prev().offset();return o&&o.top>e-s}function n(e){var o=i.next(),t=o.offset();return t&&t.top+o.height()<e+s}function r(){i.removeClass("reorder-thumb"),$("placeholder").hide(),$("body").off("mouseup",r),$("body").off("mousemove",o),$(document).off("selectstart dragstart",e)}var i=$(this).closest(".slide-thumb"),s=i.height()/2;i.addClass("reorder-thumb");i.position();$("body").on("mouseup",o),$(document).on("selectstart dragstart",e)})},app.resizeItems=function(){function e(e){function o(){function e(){$("body").off("mousemove",o),$("body").off("mouseup",e),app.slidemaker()}function o(e){e.preventDefault();var o=t.offset();t.off("mousedown");var n=e.pageY-o.top,r=e.pageX-o.left;t.css({height:n,width:r})}return $("body").off("mousemove"),$("body").on("mousemove",o),$("body").on("mouseup",e),!1}e.preventDefault();var t=$(this),n=t.children(".resize");n.toggle();$(".top-left"),$(".top-right"),$(".bottom-left"),$(".bottom-right");$("body").on("mousedown",".bottom-right",o)}$(".slide-item").on("dblclick",e)},app.SlideItem=function(e){if(!e.type)return void console.log("put in a type dude");var o={type:e.type,top:e.top,left:e.left,width:e.width,height:e.height,bgcolor:e.bgcolor};return"box"===e.type?o.scr=e.src:"textbox"===e.type&&(o.text=e.text,o.size=e.size,o.textcolor=e.textcolor),o},$(function(){var e=$("body").data("page");app[e](),app.resizeItems(),app.slideReorder()});
//# sourceMappingURL=app.js.map