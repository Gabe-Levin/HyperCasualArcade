import React, { useEffect, useState } from "react";
import HighScores from "../ScoreBoard/ScoreBoard";
import Pong from "../Pong/Pong";
import Snake from "../Snake/Snake";
import "./GamesWindow.css";
import FlappyBird from "../FlappyBird/FlappyBird";

export default function GamesWindow({
  gameSelector,
  highScores,
  setHighScores,
}) {
  let localScores = JSON.parse(localStorage.getItem(gameSelector))
    ? JSON.parse(localStorage.getItem(gameSelector)).slice(0, 10)
    : [];

  function gameWindowSwitcher(gameSelector) {
    console.log("gameSelector", gameSelector);
    if (gameSelector === "snake") {
      return <Snake setHighScores={setHighScores} />;
    }
    if (gameSelector === "pong") {
      return <Pong setHighScores={setHighScores} />;
    }
    if (gameSelector === "flappyBird") {
      return <FlappyBird setHighScores={setHighScores} />;
    }
    if (gameSelector === "snakeScores") {
      if (highScores === []) setHighScores(localScores);
      return <HighScores highScores={highScores} />;
    }
    if (gameSelector === "flappyBirdScores") {
      if (highScores === []) setHighScores(localScores);
      return <HighScores highScores={highScores} />;
    }
    if (gameSelector === "pongScores") {
      if (highScores === []) setHighScores(localScores);
      return <HighScores highScores={highScores} />;
    }
  }

  return (
    <div id="gameWindowContainer">
      <img
        src="./imgs/backgroundAssets/meteor.gif"
        alt="Bomberman"
        className="meteor hide"
      ></img>
      <div id="gameWindow">{gameWindowSwitcher(gameSelector)}</div>
    </div>
  );
}
