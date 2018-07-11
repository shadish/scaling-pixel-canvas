function setupCanvas() {
	let body = document.getElementsByTagName("BODY")[0];
	body.onresize = resize
	resize()
}

function resize() {
	let app = document.getElementById('app')
	let canvas = document.getElementById('sprite-canvas')
	app.style.height = `${window.innerHeight-2}px`
	canvas.width = `${window.innerHeight-4}`
	canvas.height = canvas.style.width

	console.log('resizing to:', canvas.style.height, canvas.style.width)
}

module.exports = {
	setupCanvas
}
