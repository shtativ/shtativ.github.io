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

// click out popup


var $submit_popup = $(".submit_feedback");
$submit_feedback.on("click", ':not(#feedback_popup)', function(){
  $('#feedback_popup').fadeOut('slow')
});
