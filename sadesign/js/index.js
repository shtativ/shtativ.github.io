$('#live-number--pda').animateNumber(
  {
    number: 60,
    numberStep: function(now, tween) {
      var floored_number = Math.floor(now),
          target = $(tween.elem);

      target.text(floored_number + '%');
    }
  },
  1500
);

$('#live-number--pc').prop('number', 100).animateNumber(
  {
    number: 40,
    numberStep: function(now, tween) {
      var target = $(tween.elem),
          rounded_now = Math.round(now);
      target.text(rounded_now + '%');
    }
  },
  1500
);
//hamburger menu
  var $hamburger = $(".hamburger");
  	$hamburger.on("click", function(e) {
	  	$hamburger.toggleClass("is-active");
	  	$('.body-nav__menu').slideToggle('slow');
  });
