$(window).load(function() {
	particlesJS.load('particles', '/js/particles.json', function() {});
	$('nav a.scroll').on('click', function(event) {
		console.log("hi")
        event.preventDefault();
        var link = this;
        $.smoothScroll({
          scrollTarget: link.hash,
          speed: 900,
        });
	});
  $('#classes a').on('click', function(event) {
    console.log("hi")
        event.preventDefault();
        var link = this;
        $.smoothScroll({
          scrollTarget: link.hash,
          speed: 900,
        });
  });
});

