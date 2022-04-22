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

  return (
    <div id="gameWindowContainer">
      <div id="gameWindow">
        {gameSelector === "snake" ? (
          <Snake setHighScores={setHighScores} />
        ) : (
          <Pong setHighScores={setHighScores} />
        )}
        <HighScores scores={highScores} />
      </div>
    </div>
  );
}

//Scrapyard
// let currentGame = <Pong />;
// useEffect(() => {
//   // console.log("gameSelector", gameSelector);
//   if (gameSelector === "pong") {
//     setCurrentGame(<Pong setHighScores={setHighScores} />);
//     // setCurrentGame(<Pong setHighScores={setHighScores} />);
//   }
//   if (gameSelector === "snake") {
//     setCurrentGame(<Snake randomStr={"hello"} />);
//   }
// }, [gameSelector]);
