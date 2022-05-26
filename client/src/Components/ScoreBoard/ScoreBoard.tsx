import React from "react";
import Score from "../Score/Score";
import "./ScoreBoard.css";

export default function HighScores({ highScores }: {highScores:number[]}) {
  const topTen = highScores?.slice(0, 10);
  let position = 0;

  const showScores = topTen?.map((score: number[]) => {
    position++;
    return <Score key={position} score={score} position={position} />;
  });

  return (
    <div className="scoreBoardContainer">
      <div className="scoreTitle">High Scores</div>
      {showScores}
    </div>
  );
}
