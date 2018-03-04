var ok = document.querySelector('.ok-human');
var okplayer = new Vimeo.Player(ok);
var static = document.querySelector('.static-haze');
var staticplayer = new Vimeo.Player(static); 
 
$(".fearful-wrapper").click(function(){
    okplayer.unload().then(function() {
}).catch(function(error) {
});
    staticplayer.unload().then(function() {
}).catch(function(error) {
});
});    


