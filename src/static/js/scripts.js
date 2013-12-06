$(document).ready(function() {
	$('.make-square').each(function(i, e) {
		$(this).height($(this).width());
	});

	$(window).resize(function() {
		$('.make-square').each(function(i, e) {
			$(this).height($(this).width());
		});
	});

	$('#blockly-frame').height($(window).height() - $('#blockly-frame').offset().top - 10);

	$(window).resize(function() {
		$('#blockly-frame').height($(window).height() - $('#blockly-frame').offset().top - 10);
	});
});