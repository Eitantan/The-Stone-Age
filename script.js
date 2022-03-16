const SCENE = document.querySelector('a-scene');
const CAMERA = document.querySelector('[camera]');
let box, random, campossplit, min, max, allText;
let y = -1;
let speed = 1;
let modObj = {
	"scene": SCENE,
	"camera": CAMERA
}

function init() {
	CAMERA.y += 2;
}

function loadChunk(sx, sy, sz) {
	for (var x = 0; x < 16; x++) {
		for (var z = 0; z < 16; z++) {
			box = document.createElement('a-box');
			box.setAttribute("position", {
				x: sx+x-16,
				y: sy+y,
				z: sz+z-16
			})
			box.setAttribute("material", {
				color: "green"
			})
			box.class = "collidable"
			box.id = `box/${x}:${z}`
			SCENE.appendChild(box)
			
			random = Math.random() * 10;
	
			if (random <= 2) {
				y -= .1;
			} else if (random <= 4) {
				y -= .2;
			} else if (random <= 6) {
				y += .2;
			} else if (random <= 8) {
				y += .1;
			}
		}	
	}
}

function cameraControls() {
	document.addEventListener("keypress", (e)=>{
		if (e.code == "Space") {
			CAMERA.getAttribute('position').y += .55 * speed;
		}
	})
	document.addEventListener("keydown", (e)=>{
		if (e.key == "Shift") {
			CAMERA.getAttribute('position').y -= .55 * speed;
		}
	})
}

// function gameLoop() {
	// CAMERA.addEventListener('collide', (e)=>{
	// 	alert('collide go BRRRR boii bruuh')
	// })
// 	window.requestAnimationFrame(gameLoop)
// }

init();
loadChunk(0, 0, 0);
cameraControls()
// gameLoop()