import Ball from "./ball.js";
import Paddle from "./paddle.js";

const ball = new Ball(document.getElementById("ball"));
const playerPaddle = new Paddle(document.getElementById("player-paddle"));
const computerPaddle = new Paddle(document.getElementById("computer-paddle"));
const playerScoreElem = document.getElementById("player-score");
const computerScoreElem = document.getElementById("computer-score");
const pauseMsg = document.querySelector(".pauseMsg");

const title = document.querySelector("[data-title]");
const subtitle = document.querySelector("[data-subtitle]");

let lastTime;
let pauser = false;

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.code === "Space") {
    e.preventDefault();
  }
});

document.addEventListener(
  "keypress",
  function (e) {
    console.log("we in here");
    if (e.key === "Enter") {
      handleStart();
    }
  },
  { once: true }
);

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
      return handleGameOver();
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
  window.parent.postMessage(`finalScore : ${getFinalScores()} `, "*");
  setTimeout(() => {
    title.classList.remove("hide");
    subtitle.classList.remove("hide");
    subtitle.textContent = `${getFinalScores()} Goals`;
    // document.addEventListener("keypress", handleStart, { once: true });

    document.addEventListener(
      "keypress",
      function (e) {
        console.log("we in here");
        if (e.key === "Enter") {
          handleStart();
        }
      },
      { once: true }
    );
  }, 200);
}

function handleStart() {
  title.classList.add("hide");
  playerScoreElem.textContent = "0";
  computerScoreElem.textContent = "0";
  window.requestAnimationFrame(update);
}

function getFinalScores() {
  const score =
    parseInt(playerScoreElem.textContent) -
    parseInt(computerScoreElem.textContent);
  return score > 0 ? score : 0;
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

// window.requestAnimationFrame(update);
