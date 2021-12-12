
$(document).ready(function(){
    var testH = $(window).height();
    var navH = $('.navbar').innerHeight();
 $('.header,.offcanvas-body').height(testH-navH);
$('.header').css({marginTop: $('.navbar').innerHeight()});
$('.contact').css({marginTop: $('.navbar').innerHeight()});
$('.section-two,.header,.products1-head,.products1-read,.products2-read,.products3-read,.products4-read,.products2-head,.products3-head,.products4-head').css({marginTop: $('.navbar').innerHeight()});


})


$(".dropdown").click(function(){

$(".dropdown .dropdown-menu").slideToggle(500);

})


$(document).ready(function(){

$('.contact1').click(function(){

$('body,html').animate({scrollTop: $("#contact").offset().top})



})



})




$(document).ready(function(){

$('.information1').click(function(){

$('body,html').animate({scrollTop: $("#information").offset().top})



})



})
