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
const title = document.querySelector("[data-title]");
const subtitle = document.querySelector("[data-subtitle]");
// let username = "";
// document.addEventListener("keypress", handleStart, { once: true });

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.code === "Space") {
    e.preventDefault();
  }
});

function main(currentTime) {
  if (gameOver) return handleGameOver();

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function handleGameOver() {
  window.parent.postMessage(`finalScore : ${getFinalScore()} `, "*");
  setTimeout(() => {
    title.classList.remove("hide");
    subtitle.classList.remove("hide");
    subtitle.textContent = `${getFinalScore()} Goals`;

    document.addEventListener(
      "keypress",
      function (e) {
        console.log("we in here");
        if (e.key === "Enter") {
          window.location.reload();
        }
      },
      { once: true }
    );
  }, 200);
}

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
