var n = 1;

$(document).ready(function(){         
  
$("body").click(function(){
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
 
});


