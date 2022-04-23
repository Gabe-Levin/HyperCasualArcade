import React, { useState } from "react";
import Score from "../Score/Score";
import "./ScoreBoard.css";

export default function HighScores({ scores }) {
  let position = 0;

  const showScores = scores.map((score) => {
    position++;
    return <Score key={position} score={score} position={position} />;
  });

  return <>High Scores {showScores}</>;
}
