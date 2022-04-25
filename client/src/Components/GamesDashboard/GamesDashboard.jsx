import React from "react";
import "./GamesDashboard.css";
import GameCard from "../GameCard/GameCard";

const cardInfo = [
  {
    game: "pong",
    gameTitle: "Pong",
    scorePath: "pongScores",
    imageSrc: "./imgs/PongScreenShot.png",
    gameDesc: "Disco Pong for the Geezers. First one to 7 wins!",
  },
  {
    game: "snake",
    gameTitle: "Snake",
    scorePath: "snakeScores",
    imageSrc: "./imgs/SnakeScreenShot.png",
    gameDesc:
      " Snake daddy's got to eat. But watch your tail and don't hit the edges.",
  },
  {
    game: "flappyBird",
    gameTitle: "Flappy Bird",
    scorePath: "flappyBirdScores",
    imageSrc: "./imgs/FlappyBirdScreenShot.png",
    gameDesc:
      "Flying to your hearts desire, just don't hit the pipes...no pun intended.",
  },
];
export default function GamesDashboard({ setWindowSelector, setHighScores }) {
  const gameCards = cardInfo.map((card) => {
    return (
      <GameCard
        key={card.game}
        setWindowSelector={setWindowSelector}
        setHighScores={setHighScores}
        card={card}
      />
    );
  });

  return (
    <>
      <h2>Game Catalog</h2>

      <div className="cardFlexContainer">{gameCards}</div>
    </>
  );
}
