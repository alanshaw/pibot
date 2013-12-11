$(document).ready(function() {
	$('.make-square').each(function(i, e) {
		$(this).height($(this).width());
	});

	$(window).resize(function() {
		$('.make-square').each(function(i, e) {
			$(this).height($(this).width());
		});
	});

	if ($('#blockly-frame').size() > 0) {
		$('#blockly-frame').height($(window).height() - $('#blockly-frame').offset().top - 10);

		$(window).resize(function() {
			$('#blockly-frame').height($(window).height() - $('#blockly-frame').offset().top - 10);
		});
	}

	if ($('#remote-control').size() > 0) {
		$('#remote-control').height($(window).height() - $('#remote-control').offset().top - 10);

		$(window).resize(function() {
			$('#remote-control').height($(window).height() - $('#remote-control').offset().top - 10);
		});
	}
});