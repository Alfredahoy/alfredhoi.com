$(document).ready(function(){
    
    $("#last-man").mouseover(function(){
        $("#last-man-img").css("display", "block");
        $(".red").css("color", "#ffffff")
//        $(".grey").css("color", "#ffffff")
        
    });
    
    $("#last-man").mouseleave(function(){
        $("#last-man-img").css("display", "none");
        $(".red").css("color", "#c63b3b")
//        $(".grey").css("color", "#b4b4b4")
    });
    
    $("#identity-pilot").mouseover(function(){
        $("#identity-pilot-img").css("display", "block");
        $(".red").css("color", "#ffffff")
//        $(".grey").css("color", "#ffffff")
    });
    
    
    $("#identity-pilot").mouseleave(function(){
        $("#identity-pilot-img").css("display", "none");
        $(".red").css("color", "#c63b3b")
//        $(".grey").css("color", "#b4b4b4")
    });
    
    
    $("#same-name").mouseover(function(){
        $("#same-name-img").css("display", "block");
        $(".red").css("color", "#ffffff")
//        $(".grey").css("color", "#ffffff")
    });
    
    
    $("#same-name").mouseleave(function(){
        $("#same-name-img").css("display", "none");
        $(".red").css("color", "#c63b3b")
//        $(".grey").css("color", "#b4b4b4")
    });
    
    
});