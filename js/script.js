var n = 1;

$(document).ready(function(){  

$("#fearful").hover(function(){
    $("#fearful-pic").toggleClass("open")
});

$("#pilot").hover(function(){
    $("#pilot-pic").toggleClass("open")
});

$("#death-sentence").hover(function(){
    $("#death-sentence-pic").toggleClass("open")
});    
    
$("body").mousemove(function(){
    if (n >= 1 && event.clientX >= innerWidth/3){
        $(this).css("cursor", "e-resize");
    } else if ( n >= 1 && event.clientX < innerWidth/3){
        $(this).css("cursor", "w-resize");
    }    
}); 
    
//$(function () {
//var touch = 'ontouchstart' in document.documentElement
//            || navigator.maxTouchPoints > 0
//            || navigator.msMaxTouchPoints > 0;
//
//if (touch) { // remove all :hover stylesheets
//    try { // prevent exception on browsers not supporting DOM styleSheets properly
//    
//        for (var si in document.styleSheets) {
//            var styleSheet = document.styleSheets[si];
//            if (!styleSheet.rules) continue;
//
//            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
//                if (!styleSheet.rules[ri].selectorText) continue;
//
//                if (styleSheet.rules[ri].selectorText.match(':hover')) {
//                    styleSheet.deleteRule(ri);
//                }
//            }
//        }
//    } catch (ex) {}
//}
//    });    
    
});


