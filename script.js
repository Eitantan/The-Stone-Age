const SCENE = document.querySelector('a-scene');
let box, random;
let y = -1;

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

loadChunk()

