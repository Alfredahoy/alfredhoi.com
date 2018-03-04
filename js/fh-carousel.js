var n = 1;

$(document).ready(function(){  
    
$("body").click(function(){
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
    $("#fearful-2").css("display", "block")
    } else{
    $("#fearful-2").css("display", "none")    
    }
    if (n == 3){
    $("#fearful-3").css("visibility", "visible")
    } else{
    $("#fearful-3").css("visibility", "hidden")    
    }
    if (n == 4){
    $("#fearful-4").css("display", "block")
    } else{
    $("#fearful-4").css("display", "none")    
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
    
    $("body").mousemove(function(){
    if (n >= 1 && event.clientX >= innerWidth/3){
        $(this).css("cursor", "e-resize");
    } else if ( n >= 1 && event.clientX < innerWidth/3){
        $(this).css("cursor", "w-resize");
    }    
}); 
    
});


