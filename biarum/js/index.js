$(document).ready(function(){$(".owl-slider--1").owlCarousel({items:1,loop:!0,nav:!1,mouseDrag:!1,autoplay:!0,smartSpeed:666,autoHeight:!0}),$(".owl-carousel").owlCarousel({loop:!0,items:3,dots:!1,nav:!0,navContainer:".owl-nav",navText:[""],responsive:{0:{items:1},768:{items:2},1100:{items:3}}}),$(".body-header-nav__menu").on("click","a",function(e){e.preventDefault();var o=$(this).attr("href"),a=$(o).offset().top;$("body,html").animate({scrollTop:a},666)});var e=$(".hamburger");e.on("click",function(o){e.toggleClass("is-active"),$(".body-header-nav__menu").slideToggle("slow"),$(".body-header-nav__menu").css("display","flex")})});