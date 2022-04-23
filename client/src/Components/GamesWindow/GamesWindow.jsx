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
  // const [currentGame, setCurrentGame] = useState(<Snake />);
  // const [highScores, setHighScores] = useState([]);

  function gameWindowSwitcher(gameSelector) {
    console.log("gameWindowSwitcher running", gameSelector);
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
      if (highScores === [])
        setHighScores(
          JSON.parse(localStorage.getItem(gameSelector)).slice(0, 10)
        );
      return <HighScores scores={highScores} />;
    }
    if (gameSelector === "flappyBirdScores") {
      if (highScores === [])
        setHighScores(
          JSON.parse(localStorage.getItem(gameSelector)).slice(0, 10)
        );

      return <HighScores scores={highScores} />;
    }
  }

  return (
    <div id="gameWindowContainer">
      <div id="gameWindow">{gameWindowSwitcher(gameSelector)}</div>
    </div>
  );
}
