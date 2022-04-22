import React, { useEffect, useState } from "react";
import HighScores from "../ScoreBoard/ScoreBoard";
import Pong from "../Pong/Pong";
import Snake from "../Snake/Snake";
import "./GamesWindow.css";

export default function GamesWindow({ gameSelector }) {
  // const [currentGame, setCurrentGame] = useState(<Snake />);
  const [highScores, setHighScores] = useState(
    JSON.parse(localStorage.getItem("snakeScores")).slice(0, 10)
  );

  function gameWindowSwitcher(gameSelector) {
    if (gameSelector === "snake") {
      return <Snake setHighScores={setHighScores} />;
    }
    if (gameSelector === "pong") {
      return <Pong setHighScores={setHighScores} />;
    }
    if (gameSelector === "snakeScores") {
      return <HighScores scores={highScores} />;
    }
  }

  return (
    <div id="gameWindowContainer">
      <div id="gameWindow">{gameWindowSwitcher(gameSelector)}</div>
    </div>
  );
}
