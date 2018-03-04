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
    
    
$(".fearful-wrapper").click(function(){
    if (n >= 1 && event.clientX >= innerWidth/3){
        n ++;
    } else if (n >= 1 && event.clientX < innerWidth/3){
        n--;
    }
    if (n < 1){
        n = 7;
    }
    if (n > 7){
        n = 1;
    }
    if (n == 1){
    $("#fearful-1").css("visibility", "visible")
    } else{
    $("#fearful-1").css("visibility", "hidden")    
    }
    if (n == 2){
    $("#fearful-2").css("visibility", "visible")
    } else{
    $("#fearful-2").css("visibility", "hidden")    
    }
    if (n == 3){
    $("#fearful-3").css("visibility", "visible")
    } else{
    $("#fearful-3").css("visibility", "hidden")    
    }
    if (n == 4){
    $("#fearful-4").css("visibility", "visible")
    } else{
    $("#fearful-4").css("visibility", "hidden")    
    }
    if (n == 5){
    $("#fearful-5").css("visibility", "visible")
    } else{
    $("#fearful-5").css("visibility", "hidden")    
    }
    if (n == 6){
    $("#fearful-6").css("visibility", "visible")
    } else{
    $("#fearful-6").css("visibility", "hidden")    
    }
    if (n == 7){
    $("#fearful-7").css("visibility", "visible")
    } else{
    $("#fearful-7").css("visibility", "hidden")    
    }
    
    document.getElementById("number").innerHTML = n + " of 7";
    
});        

$(".ld-wrapper").click(function(){
    if (n >= 1 && event.clientX >= innerWidth/3){
        n ++;
    } else if (n >= 1 && event.clientX < innerWidth/3){
        n--;
    }
    if (n < 1){
        n = 14;
    }
    if (n > 14){
        n = 1;
    }
    if (n == 1){
    $("#ld-1").css("visibility", "visible")
    } else{
    $("#ld-1").css("visibility", "hidden")
    }
    if (n == 2){
    $("#ld-2").css("visibility", "visible")
    } else{
    $("#ld-2").css("visibility", "hidden") 
    }
    if (n == 3){
    $("#ld-3").css("visibility", "visible")
    } else{
    $("#ld-3").css("visibility", "hidden")
    }
    if (n == 4){
    $("#ld-4").css("visibility", "visible")
    } else{
    $("#ld-4").css("visibility", "hidden")
    }
    if (n == 5){
    $("#ld-5").css("visibility", "visible")
    } else{
    $("#ld-5").css("visibility", "hidden") 
    }
    if (n == 6){
    $("#ld-6").css("visibility", "visible")
    } else{
    $("#ld-6").css("visibility", "hidden")
    }
    if (n == 7){
    $("#ld-7").css("visibility", "visible")
    } else{
    $("#ld-7").css("visibility", "hidden")
    }
    if (n == 8){
    $("#ld-8").css("visibility", "visible")
    } else{
    $("#ld-8").css("visibility", "hidden")
    }
    if (n == 9){
    $("#ld-9").css("visibility", "visible")
    } else{
    $("#ld-9").css("visibility", "hidden")
    }
    if (n == 10){
    $("#ld-10").css("visibility", "visible")
    } else{
    $("#ld-10").css("visibility", "hidden")
    }
    if (n == 11){
    $("#ld-11").css("visibility", "visible")
    } else{
    $("#ld-11").css("visibility", "hidden")
    }
    if (n == 12){
    $("#ld-12").css("visibility", "visible")
    } else{
    $("#ld-12").css("visibility", "hidden") 
    }
    if (n == 13){
    $("#ld-13").css("visibility", "visible")
    } else{
    $("#ld-13").css("visibility", "hidden") 
    }
    if (n == 14){
    $("#ld-14").css("visibility", "visible")
    } else{
    $("#ld-14").css("visibility", "hidden") 
    }
    document.getElementById("number").innerHTML = n + " of 14";
    
});
    
$(".pi-wrapper").click(function(){
    if (n >= 1 && event.clientX >= innerWidth/3){
        n ++;
    } else if (n >= 1 && event.clientX < innerWidth/3){
        n--;
    }
    if (n < 1){
        n = 5;
    }
    if (n > 5){
        n = 1;
    }
    if (n == 1){
    $("#pi-1").css("visibility", "visible")
    } else{
    $("#pi-1").css("visibility", "hidden")
    }
    if (n == 2){
    $("#pi-2").css("visibility", "visible")
    } else{
    $("#pi-2").css("visibility", "hidden") 
    }
    if (n == 3){
    $("#pi-3").css("visibility", "visible")
    } else{
    $("#pi-3").css("visibility", "hidden") 
    }
    if (n == 4){
    $("#pi-4").css("visibility", "visible")
    } else{
    $("#pi-4").css("visibility", "hidden") 
    }
    if (n == 5){
    $("#pi-5").css("visibility", "visible")
    } else{
    $("#pi-5").css("visibility", "hidden")
    }
    document.getElementById("number").innerHTML = n + " of 5";

});      

$(".fearful-wrapper").mousemove(function(){
    if (n >= 1 && event.clientX >= innerWidth/3){
        $(this).css("cursor", "e-resize");
    } else if ( n >= 1 && event.clientX < innerWidth/3){
        $(this).css("cursor", "w-resize");
    }    
}); 
    
$(".ld-wrapper").mousemove(function(){
    if (n >= 1 && event.clientX >= innerWidth/3){
        $(this).css("cursor", "e-resize");
    } else if ( n >= 1 && event.clientX < innerWidth/3){
        $(this).css("cursor", "w-resize");
    }    
});
    
$(".pi-wrapper").mousemove(function(){
    if (n >= 1 && event.clientX >= innerWidth/3){
        $(this).css("cursor", "e-resize");
    } else if ( n >= 1 && event.clientX < innerWidth/3){
        $(this).css("cursor", "w-resize");
    }    
});

$(function () {
var touch = 'ontouchstart' in document.documentElement
            || navigator.maxTouchPoints > 0
            || navigator.msMaxTouchPoints > 0;

if (touch) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
    
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}
    });    
    
});


