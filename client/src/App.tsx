import "./App.css";
import GamesDashboard from "./Components/GamesDashboard/GamesDashboard";
import GamesWindow from "./Components/GamesWindow/GamesWindow";
import Header from "./Components/Header/Header";
import { useState, useEffect } from "react";
import Footer from "./Components/Footer/Footer";

function App() {
  const [windowSelector, setWindowSelector] = useState("loadingGif");
  const [highScores, setHighScores] = useState<number[]>([]);

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
      <div className="ContentBody">
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
      <Footer />
    </div>
  );
}

export default App;
