//hamburger menu
var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $('#nav_items').slideToggle('slow');
});

//show menu
    $('#feedback_popup_listener').click(function () {
    $('#feedback_popup').fadeIn('slow');
});

//owl.carousel
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  items:1,
  autoplay:true,
  smartSpeed: 1050,
  nav:false,
  navText:['','']
});



// click out popup
var $submit_popup = $(".submit_feedback");
$submit_popup.on("click", ':not("#feedback_popup")', function(){
  $('#feedback_popup').fadeOut('slow')
});

//send feedback
$('.give_feedback form').submit(function(e){
  e.preventDefault();
  $.post('./lib/phpmailer/sendmail.php', $(this).serialize(),function(data){
    //тут можно что-то сделать,чтобы показать сообщение об успешной отправке
  });
    $('#feedback_popup').fadeOut('slow')
});
