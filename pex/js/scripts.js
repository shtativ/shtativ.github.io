//hamburger menu
  var $hamburger = $(".hamburger");
  	$hamburger.on("click", function(e) {
	  	$hamburger.toggleClass("is-active");
	  	$('#nav_items').slideToggle('slow');
     });
     
//red line
  //    $('*').each(function() {
  //      if($(this).width() > $(window).width()
  //    )
  //    $(this).css('border','2px solid red')
  //  });
