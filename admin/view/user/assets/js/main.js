//home pape__slider
$(document).ready(function(){
    $('.slider').bxSlider();
});

$(".home__service--selector").click(function(e) {
    $(this).next(".getting__note").slideToggle();
});

//fixed menu and back to top

$(window).scroll(function(e) {   
    var pos_body = $("html,body").scrollTop();
    if (pos_body > 70) {
        $('.main__nav').addClass('fixed__nav__menu');
    } else {
        $('.main__nav').removeClass('fixed__nav__menu');
    }
    if(pos_body > 2000){
        $('.backtotop').addClass('backtotop__fixed');
     }
     else{
        $('.backtotop').removeClass('backtotop__fixed');
     }
});
$('.backtotop').click(function(event) {
    $('html,body').animate({scrollTop: 0},1400);
 });

 //menu mobile 

