import React, { useState } from "react";
import Score from "../Score/Score";
import "./ScoreBoard.css";

export default function HighScores({ scores }) {
  console.log("I'm your scoressss", scores);
  // console.log("I'm your highScores", highScores);
  let position = 0;

  const showScores = scores.map((score) => {
    // console.log("highScores", scores);
    position++;
    return <Score key={position} score={score} position={position} />;
  });

  return <>High Scores {showScores}</>;
}
