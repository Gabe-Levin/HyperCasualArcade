import React from "react";
import Pong from "../Pong/Pong";
import Snake from "../Snake/Snake";
import "./GamesWindow.css";

export default function GamesWindow() {
  return (
    <div id="gameWindowContainer">
      <div id="gameWindow">
        {/* <Pong /> */}
        <Snake />
      </div>
    </div>
  );
}
