import React from "react";
import PongCard from "../PongCard/PongCard";
import SnakeCard from "../SnakeCard/SnakeCard";
import FlappyBirdCard from "../FlappyBirdCard/FlappyBirdCard";
import "./GamesDashboard.css";

export default function GamesDashboard({ setGameSelector, setHighScores }) {
  return (
    <>
      <h2>GamesDashboard</h2>
      <div className="cardFlexContainer">
        <SnakeCard
          setGameSelector={setGameSelector}
          setHighScores={setHighScores}
        />
        <PongCard
          setGameSelector={setGameSelector}
          setHighScores={setHighScores}
        />
        <FlappyBirdCard
          setGameSelector={setGameSelector}
          setHighScores={setHighScores}
        />
      </div>
    </>
  );
}
