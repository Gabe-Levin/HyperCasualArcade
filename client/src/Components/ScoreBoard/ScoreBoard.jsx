import React, { useState } from "react";
import Score from "../Score/Score";

export default function HighScores({ scores }) {
  console.log("I'm your scoressss", scores);
  // console.log("I'm your highScores", highScores);

  const showScores = scores.map((score) => {
    console.log("highScores", scores);
    return <Score score={score} />;
  });

  return <>High Scores {showScores}</>;
}
