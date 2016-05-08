//slow scroll

	$('a[href*="#contact"]').click(function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body, html').animate({scrollTop: top }, 555);
		if ($.browser.safari) {
			$('body').animate({scrollTop: top }, 555);
		} else {
			$('body, html').animate({scrollTop: top }, 555);
		}
		return false;
	});
	
//hide the navigation menu

(function() {
  var toggle = document.querySelector("#nav_toggle");
  var nav = document.querySelector("#nav_items");
  toggle.addEventListener("click", function(e) {
    e.preventDefault();
    nav.classList.contains("nav_items--visible") ? nav.classList.remove("nav_items--visible") : nav.classList.add("nav_items--visible");
  });
})();