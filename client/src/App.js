import "./App.css";
import GamesDashboard from "./Components/GamesDashboard/GamesDashboard";
import GamesWindow from "./Components/GamesWindow/GamesWindow";
import Header from "./Components/Header/Header";
import { useState, useEffect } from "react";

function App() {
  const [windowSelector, setWindowSelector] = useState("loadingGif");
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
      }
    });
    return document.removeEventListener("keydown", function (e) {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
      }
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <GamesWindow
        windowSelector={windowSelector}
        highScores={highScores}
        setHighScores={setHighScores}
      />
      <GamesDashboard
        setWindowSelector={setWindowSelector}
        setHighScores={setHighScores}
      />
    </div>
  );
}

export default App;
