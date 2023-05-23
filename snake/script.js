let scoreBlock;
let score = 0;

const config = {
    step: 0,
    maxStep: 6,
    sizeCell: 16,
    sizeBerry: 16 / 4;
}

const snake = {
	x: 160,
	y: 160,
	dx: config.sizeCell,
	dy: 0,
	tails: [],
	maxTails: 3
}

let berry = {
	x: 0,
	y: 0
} 


let canvas = document.querySelector("#game-canvas");
let context = canvas.getContext("2d");
scoreBlock = document.querySelector(".game-score .score-count");
//drawScore();