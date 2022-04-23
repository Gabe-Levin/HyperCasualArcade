import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection,
  getFinalScore,
} from "./snake.js";

import { outsideGrid } from "./grid.js";

import { update as updateFood, draw as drawFood } from "./food.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");
// let username = "";

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.code === "Space") {
    e.preventDefault();
  }
});

function main(currentTime) {
  // if (username === "") {
  //   username = prompt("Enter your username");
  // }
  if (gameOver) {
    window.parent.postMessage(`finalScore : ${getFinalScore()} `, "*");

    if (confirm("you lost. Press ok to restart.")) {
      window.parent.postMessage("game ended", "*");
    }
    return;
  }
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
