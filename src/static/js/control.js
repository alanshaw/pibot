var socket = io.connect('http://localhost')

var analogContainer = $('#analog-control'),
	thumbstick = $('#thumbstick')

var calculateMovement = function(event, ui) {
	var thumbstickCentreX = ui.position.left + (thumbstick.width() / 2),
		thumbstickCentreY = ui.position.top + (thumbstick.height() / 2)

	var x = thumbstickCentreX - (analogContainer.width() / 2)
	var y = thumbstickCentreY - (analogContainer.height() / 2)

	// Invert the Y axis to a value we expect
	y = -y

	// Get the angle in degrees
	var angle = Math.atan(x / y) * (180 / Math.PI)

	// Some pretty dubious maths
	if (x >= 0 && y <= 0) {
		angle = 180 + angle
	}

	if (x < 0 && y < 0) {
		angle = 180 + angle
	}

	if (x < 0 && y >= 0) {
		angle = 360 + angle
	}

	console.log(x.toFixed(2) + ',' + y.toFixed(2))
	console.log(angle.toFixed(2) + "deg")

	socket.emit("thumbstick", {coord: [x, y], angle: angle})
}

$(document).ready(function() {
	thumbstick.draggable({
		containment: 'parent',
		revert: true,
		revertDuration: 100,
		drag: calculateMovement
	});
});