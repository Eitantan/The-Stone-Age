const SCENE = document.querySelector('a-scene');
const CAMERA = document.querySelector('[camera]');
let box, random, campossplit;
let y = -1;
let speed = 1;
let modObj = {
	"scene": SCENE,
	"camera": CAMERA
}

function readfile(filename) {
	var rawFile = new XMLHttpRequest();
  rawFile.open("GET", filename, true);
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4) {
      var allText = rawFile.responseText;
    }
  }
  rawFile.send();
}

function loadChunk() {
	for (var x = 0; x < 16; x++) {
		for (var z = 0; z < 16; z++) {
			box = document.createElement('a-box');
			box.setAttribute("position", {
				x: x-16,
				y: y,
				z: z-16
			})
			box.setAttribute("material", {
				color: "green"
			})
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

loadChunk()
cameraControls()