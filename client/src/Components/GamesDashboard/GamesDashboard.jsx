import React from "react";
import "./GamesDashboard.css";
import GameCard from "../GameCard/GameCard";

export default function GamesDashboard({ setGameSelector, setHighScores }) {
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

  const gameCards = cardInfo.map((card) => {
    return (
      <GameCard
        key={card.game}
        setGameSelector={setGameSelector}
        setHighScores={setHighScores}
        card={card}
      />
    );
  });

  return (
    <>
      <h2>GamesDashboard</h2>

      <div className="cardFlexContainer">{gameCards}</div>
    </>
  );
}
