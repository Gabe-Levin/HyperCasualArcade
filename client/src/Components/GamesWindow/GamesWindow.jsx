import React, { useEffect, useState } from "react";
import HighScores from "../ScoreBoard/ScoreBoard";
import "./GamesWindow.css";
import Game from "../Game/Game";

const gameInfoTable = {
  pong: {
    storageName: "pongScores",
    sourceName: "Pong/index.html",
  },
  snake: {
    storageName: "snakeScores",
    sourceName: "Snake/index.html",
  },
  flappyBird: {
    storageName: "flappyBirdScores",
    sourceName: "FlappyBird/index.html",
  },
};

export default function GamesWindow({
  windowSelector,
  highScores,
  setHighScores,
}) {
  let localScores = JSON.parse(localStorage.getItem(windowSelector))
    ? JSON.parse(localStorage.getItem(windowSelector)).slice(0, 10)
    : [];

  function gameWindowSwitcher(windowSelector) {
    if (windowSelector === "snake") {
      return (
        <Game setHighScores={setHighScores} gameInfo={gameInfoTable.snake} />
      );
    }
    if (windowSelector === "pong") {
      return (
        <Game setHighScores={setHighScores} gameInfo={gameInfoTable.pong} />
      );
    }
    if (windowSelector === "flappyBird") {
      return (
        <Game
          setHighScores={setHighScores}
          gameInfo={gameInfoTable.flappyBird}
        />
      );
    }
    if (windowSelector === "snakeScores") {
      if (highScores === []) setHighScores(localScores);
      return <HighScores highScores={highScores} />;
    }
    if (windowSelector === "flappyBirdScores") {
      if (highScores === []) setHighScores(localScores);
      return <HighScores highScores={highScores} />;
    }
    if (windowSelector === "pongScores") {
      if (highScores === []) setHighScores(localScores);
      return <HighScores highScores={highScores} />;
    }
    if (windowSelector === "loadingGif") {
      return (
        <div className="container">
          <h2 className="item">Select a Game!!</h2>
        </div>
      );
    }
  }

  return (
    <div id="gameWindowContainer">
      {/* <img
        src="./imgs/backgroundAssets/meteor.gif"
        alt="Bomberman"
        className="meteor hide"
      ></img> */}
      <div id="gameWindow">{gameWindowSwitcher(windowSelector)}</div>
    </div>
  );
}
