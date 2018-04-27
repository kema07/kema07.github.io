$ = jQuery;

$(document).ready(function () {
    "use strict";

    $("#navid").on("click","a.insidelink", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    var swiper = new Swiper('.slider .swiper-container', {
        loop: true,
        speed: 900,
        prevButton: '.slider .swiper-button-prev',
        nextButton: '.slider .swiper-button-next',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        mousewheelControl: true
    });

    $('#toggle').on('click', function() {
        $('#sidebar').toggleClass("right");
        $('#toggle').toggleClass("another");
    });


    $('.qq').click(function(){
        $(this).addClass('fa-window-minimize').siblings().removeClass('fa-window-minimize')
    })

});