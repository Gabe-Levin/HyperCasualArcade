import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";

import { outsideGrid } from "./grid.js";

import { update as updateFood, draw as drawFood } from "./food.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");
const finalScore = Math.random();

function main(currentTime) {
  // console.log(__dirname);
  if (gameOver) {
    window.parent.postMessage(`finalScore : ${finalScore} `, "*");

    if (confirm("you lost. Press ok to restart.")) {
      // window.location = "/client/public/Snake/index.html";
      window.parent.postMessage("game ended", "*");
      // console.log(window.parent);
    }
    return;
  }
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;
  // console.log("Render");

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
