import "./App.css";
import GamesDashboard from "./Components/GamesDashboard/GamesDashboard";
import GamesWindow from "./Components/GamesWindow/GamesWindow";
import Header from "./Components/Header/Header";
import { useState, useEffect } from "react";

function App() {
  const [gameSelector, setGameSelector] = useState("snake");
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    document.addEventListener(
      "keydown",
      function (e) {
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
          e.preventDefault();
        }
      },
      []
    );
  });

  return (
    <div>
      <Header />
      <GamesWindow
        gameSelector={gameSelector}
        highScores={highScores}
        setHighScores={setHighScores}
      />
      <GamesDashboard
        setGameSelector={setGameSelector}
        setHighScores={setHighScores}
      />
    </div>
  );
}

export default App;
