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
	return Math.round(result)
}

function getPixels(pixelSize) {
	let c = getCanvas()

	let xArray = []

	for(let x = 0; x <= c.width; x += pixelSize)
	{
		let yArray = []
		for(let y = 0; y <= c.width; y += pixelSize) {
			let xColor = lerp(0,255,x/c.width)
			let yColor = lerp(0,255,y/c.width)
			yArray.push(`rgba(${yColor},0,${xColor},1)`)
		}
		xArray.push(yArray)
	}

	return xArray
}

function drawSprite(pixels) {
	let position = {x: 10, y:20}
	let sprite =
	[
		['#0A0',null, null,'#0A0'],
		['#0F0','#0A0','#0A0','#0F0'],
		['#0F0','#FF0','#0F0','#FF0'],
		['#0F0','#0F0','#0F0','#0F0','#0F0'],
		['#0A0','#0F0','#C00','#F00','#0F0'],
		['#0A0','#0F0','#0F0','#0F0']
	]

	for(let x = 0; x < sprite.length; x++) {
		for(let y = 0; y < sprite[x].length; y++) {
			let newValue = sprite[x][y]
			if(newValue) {
				pixels[y+position.x][x+position.y] = newValue
			}
		}
	}

	return pixels
}

function drawPixels() {
	let c = getCanvas()
	var ctx = c.getContext("2d");

	let pixel = 16;

	let pixels = getPixels(pixel)
	pixels = drawSprite(pixels)

	let max = c.width

	for(let x = 0; x < pixels.length; x++) {
		for(let y = 0; y < pixels[x].length; y++) {
			ctx.fillStyle = pixels[x][y]
			ctx.fillRect(x*pixel,y*pixel,pixel,pixel)
		}
	}
}

function resize() {
	let app = document.getElementById('app')
	let canvas = getCanvas()
	//temp: do not resize
	// app.style.height = `${window.innerHeight-2}px`
	// canvas.width = `${window.innerHeight-4}`
	// canvas.height = `${window.innerHeight-4}`
	canvas.width = 512
	canvas.height = canvas.width
	drawPixels()
}

module.exports = {
	setupCanvas
}
