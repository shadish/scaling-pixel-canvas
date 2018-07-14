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

function drawPixels() {
	let c = getCanvas()
	var ctx = c.getContext("2d");

	let pixel = 16;
	let max = c.width

	for(let x = 0; x <= max; x += pixel) {
		for(let y = 0; y <= max; y += pixel) {
			let xColor = lerp(0,255,x/max)
			let yColor = lerp(0,255,y/max)
			ctx.fillStyle = `rgba(${xColor},0,${yColor},1)`
			if(y > 250) { 
				console.log(x,y,'::',pixel)
			}
			ctx.fillRect(x,y,pixel,pixel)
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
