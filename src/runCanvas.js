function setupCanvas() {
	let body = document.getElementsByTagName("BODY")[0];
	body.onresize = resize
	resize()
	// drawPixels()
}

function getCanvas() {
	return document.getElementById('sprite-canvas')
}

function drawPixels() {
	let c = getCanvas()
	var ctx = c.getContext("2d");

	let res = { width: 30, height: 30 }

	let pixel = 20;

	for(let x = 0; x < res.width * pixel; x += pixel) {
		for(let y = 0; y < res.height * pixel; y += pixel) {
			ctx.fillStyle = `#${99-x}${y}${x}`
			ctx.fillRect(x,y,pixel,pixel)
		}
	}
}

function resize() {
	let app = document.getElementById('app')
	let canvas = getCanvas()
	app.style.height = `${window.innerHeight-2}px`
	canvas.width = `${window.innerHeight-4}`
	canvas.height = `${window.innerHeight-4}`
	console.log('resizing to:', canvas.style.height, canvas.style.width)
	drawPixels()
}

module.exports = {
	setupCanvas
}
