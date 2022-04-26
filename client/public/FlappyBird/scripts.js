import { setupBird, updateBird, getBirdRect } from "./bird.js";
import {
  updatePipes,
  setupPipes,
  getPassedPipesCount,
  getPipeRects,
} from "./pipe.js";

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.code === "Space") {
    e.preventDefault();
  }
});
document.addEventListener("keypress", handleStart, { once: true });
const title = document.querySelector("[data-title]");
const subtitle = document.querySelector("[data-subtitle]");
const scoreBoard = document.querySelector(".score");

let lastTime;
function updateLoop(time) {
  if (lastTime == null) {
    lastTime = time;
    window.requestAnimationFrame(updateLoop);
    return;
  }
  //update score
  scoreBoard.innerHTML = getPassedPipesCount();

  const delta = time - lastTime;
  updateBird(delta);
  updatePipes(delta);
  if (checkLose()) return handleLose();
  lastTime = time;
  window.requestAnimationFrame(updateLoop);
}

function checkLose() {
  const birdRect = getBirdRect();
  const insidePipe = getPipeRects().some((rect) => isCollision(birdRect, rect));
  const isBirdOffTop = birdRect.top < 0;
  const isBirdOffBottom = birdRect.bottom > window.innerHeight;
  const outsideWorld = isBirdOffTop || isBirdOffBottom;
  return outsideWorld || insidePipe;
}

function isCollision(rect1, rect2) {
  return (
    rect1.left < rect2.right &&
    rect1.top < rect2.bottom &&
    rect1.right > rect2.left &&
    rect1.bottom > rect2.top
  );
}

function handleStart() {
  title.classList.add("hide");
  setupBird();
  setupPipes();
  lastTime = null;
  window.requestAnimationFrame(updateLoop);
}

function handleLose() {
  window.parent.postMessage(`finalScore : ${getPassedPipesCount()} `, "*");
  setTimeout(() => {
    title.classList.remove("hide");
    subtitle.classList.remove("hide");
    subtitle.textContent = `${getPassedPipesCount()} Pipes`;
    document.addEventListener("keypress", handleStart, { once: true });
  }, 200);
}
