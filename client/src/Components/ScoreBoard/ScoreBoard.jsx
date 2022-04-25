import React, { useState } from "react";
import Score from "../Score/Score";
import "./ScoreBoard.css";

export default function HighScores({ highScores }) {
  const topTen = highScores.slice(0, 10);
  let position = 0;

  const showScores = topTen?.map((score) => {
    position++;
    return <Score key={position} score={score} position={position} />;
  });

  return <>High Scores {showScores}</>;
}
