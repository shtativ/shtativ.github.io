// owlCarousel - top section
$(document).ready(function() {
    $(".owl-slider--1").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        mouseDrag: false,
        autoplay: true,
        smartSpeed: 666,
        autoHeight: true
    });

    // owlCarousel - staff section
    $('.owl-carousel').owlCarousel({
            loop: true,
            items: 3,
            dots: false,
            nav: true,
            navContainer: '.owl-nav',
            navText: [""],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1100: {
                    items: 3
                }
            }
        })
        //smooth transition
    $(".body-header-nav__menu").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 666);
    });
    //hamburger menu
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");
        $('.body-header-nav__menu').slideToggle('slow'),
            $('.body-header-nav__menu').css('display', 'flex');
    });

});
