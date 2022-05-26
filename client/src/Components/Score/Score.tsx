import React from "react";
import "./Score.css";

export default function Score({ score, position }: {score: number, position: number}) {
  return (
    <div className="scoreContainer">
      <div className="position">{position}.</div>
      <div className="score">{score}</div>
    </div>
  );
}
