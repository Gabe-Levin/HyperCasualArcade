import React, { useEffect, useState } from "react";
import Pong from "../Pong/Pong";
import Snake from "../Snake/Snake";
import "./GamesWindow.css";

export default function GamesWindow({ gameSelector }) {
  const [currentGame, setCurrentGame] = useState(<Pong />);
  // let currentGame = <Pong />;
  useEffect(() => {
    console.log("gameSelector", gameSelector);
    if (gameSelector === "pong") {
      setCurrentGame(<Pong />);
    }
    if (gameSelector === "snake") {
      setCurrentGame(<Snake />);
    }
  }, [gameSelector]);
  return (
    <div id="gameWindowContainer">
      <div id="gameWindow">{currentGame}</div>
    </div>
  );
}
