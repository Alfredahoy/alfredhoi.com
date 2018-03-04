var n = 1;

$(document).ready(function(){  

$("body").click(function(){
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
    
});


