import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection,
  getScore,
} from "./snake.js";

import { outsideGrid } from "./grid.js";

import { update as updateFood, draw as drawFood } from "./food.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");
// const gameWindow = document.getElementById("game-window");
const introTitle = document.querySelector("[introText]");
const title = document.querySelector("[data-title]");
const subtitle = document.querySelector("[data-subtitle]");
const scoreElement = document.getElementById("scoreBoard");

//Run on initial build
window.requestAnimationFrame(main);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.code === "Space") {
    e.preventDefault();
    introTitle.classList.add("hide");
  }
  if (e.key === "Enter") {
    window.requestAnimationFrame(main);
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

function handleGameOver() {
  window.parent.postMessage(`finalScore : ${getScore()} `, "*");
  setTimeout(() => {
    title.classList.remove("hide");
    subtitle.classList.remove("hide");
    subtitle.textContent = `Score: ${getScore()} `;

    document.addEventListener(
      "keypress",
      function (e) {
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
  updateScore();
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

function updateScore() {
  scoreElement.innerHTML = getScore();
}
