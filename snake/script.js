const body = document.querySelector('.body');
const sprite = document.querySelector('.sprite-container');
const game = document.querySelector('.game');
const btn = document.querySelector('.btn');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

/*Анимация в начале игры*/
body.addEventListener("animationend", (step) => {
	sprite.classList.remove('active');
	game.classList.add('active');
});

/*Отрисовка поля*/

/*function openK() {
	game.classList.add("active");
  };
  
	btn.addEventListener("click", openK);*/
/*let scoreBlock;
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
//drawScore();*/