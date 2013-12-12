var analogContainer = $('#analog-control'),
	thumbstick = $('#thumbstick')

var calculateMovement = function(event, ui) {
	var thumbstickCentreX = ui.position.left + (thumbstick.width() / 2),
		thumbstickCentreY = ui.position.top + (thumbstick.height() / 2)
	
	var offsetX = thumbstickCentreX / analogContainer.width(),
		offsetY = thumbstickCentreY / analogContainer.height()

	console.log(offsetX + ' : ' + offsetY)
}

$(document).ready(function() {
	thumbstick.draggable({
		containment: 'parent',
		revert: true,
		revertDuration: 100,
		drag: calculateMovement
	});
});