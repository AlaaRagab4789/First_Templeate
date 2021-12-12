$(document).ready(function(){


$(window).scroll(function()
{

    if($(window).scrollTop() >= 100)
    {    $(".navbar").addClass("one1");
    $(".navbar-brand").css({color: '#eee'})
    $(".navbar-brand span").css({color: '#0da574'});
    $(".navbar-toggler i").css({color: '#fff'})




}
    else
    {$(".navbar").removeClass("one1");
    $(".navbar-brand").css({color: '#555'})
    $(".navbar-brand span").css({color: '#0da574'});
    $(".navbar-toggler i").css({color: '#555'})


    


}

})




})