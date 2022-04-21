import React from "react";
import PongCard from "../PongCard/PongCard";
import SnakeCard from "../SnakeCard/SnakeCard";
import "./GamesDashboard.css";

export default function GamesDashboard({ setGameSelector }) {
  return (
    <>
      <h2>GamesDashboard</h2>
      <div className="cardFlexContainer">
        <SnakeCard setGameSelector={setGameSelector} />
        <PongCard setGameSelector={setGameSelector} />
      </div>
    </>
  );
}
