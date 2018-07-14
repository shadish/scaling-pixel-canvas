function setupCanvas() {
	let body = document.getElementsByTagName("BODY")[0];
	body.onresize = resize
	resize()
	// drawPixels()
}

function getCanvas() {
	return document.getElementById('sprite-canvas')
}

function lerp(a,b,t) {
	let result = (1-t) * a + t * b
	console.log("for:", a, b, t, "gets", Math.round(result))
	return Math.round(result)
}

function drawPixels() {
	let c = getCanvas()
	var ctx = c.getContext("2d");

	let pixel = 20;
	let size = { width: c.width, height: c.height}
	let res = { width: 30, height: 30 }

	let maxX = res.width * pixel
	let maxY = res.height * pixel

	for(let x = 0; x < maxX; x += pixel) {
		for(let y = 0; y < maxY; y += pixel) {
			let red = lerp(0,99,x/maxX)
			red = red < 10 ? "0"+red : red
			let green = lerp(0,99, y/maxY)
			green = green < 10 ? "0"+green : green
			ctx.fillStyle = `#${red}${green}00`
			console.log("ctx:",ctx.fillStyle)
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
