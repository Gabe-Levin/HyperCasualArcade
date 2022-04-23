import Ball from "./ball.js";
import Paddle from "./paddle.js";

const ball = new Ball(document.getElementById("ball"));
const playerPaddle = new Paddle(document.getElementById("player-paddle"));
const computerPaddle = new Paddle(document.getElementById("computer-paddle"));
const playerScoreElem = document.getElementById("player-score");
const computerScoreElem = document.getElementById("computer-score");
const pauseMsg = document.querySelector(".pauseMsg");

let lastTime;
let pauser = false;
function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime;
    computerPaddle.update(delta, ball.y);
    const hue = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--hue")
    );

    document.documentElement.style.setProperty("--hue", hue + delta * 0.01);

    if (!pauser) {
      ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()]);
    } else {
    }

    if (isLose()) {
      handleLose();
    }

    if (isGameOver()) {
      handleGameOver();
    }
  }
  lastTime = time;
  window.requestAnimationFrame(update);
}

function isLose() {
  const rect = ball.rect();
  return rect.right >= window.innerWidth || rect.left <= 0;
}

function isGameOver() {
  if (
    playerScoreElem.textContent === "7" ||
    computerScoreElem.textContent === "7"
  ) {
    return true;
  }
  return false;
}

function handleLose() {
  const rect = ball.rect();
  if (rect.right >= window.innerWidth) {
    playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1;
  } else {
    computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1;
  }
  ball.reset();
  computerPaddle.reset();
}

function handleGameOver() {
  //HEREEEE
}

//moving paddles
document.addEventListener("mousemove", (e) => {
  playerPaddle.position = (e.y / window.innerHeight) * 100;
});

//pause the game
document.body.onkeyup = function (e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    pauser = !pauser;
  }
  if (pauser) {
    pauseMsg.style.visibility = "visible";
  } else {
    pauseMsg.style.visibility = "hidden";
  }
};

window.requestAnimationFrame(update);
