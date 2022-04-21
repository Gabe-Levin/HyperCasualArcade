import "./App.css";
import GamesDashboard from "./Components/GamesDashboard/GamesDashboard";
import GamesWindow from "./Components/GamesWindow/GamesWindow";
import Header from "./Components/Header/Header";
import { useState } from "react";

function App() {
  const [gameSelector, setGameSelector] = useState("");
  return (
    <div>
      <Header />
      <GamesWindow gameSelector={gameSelector} />
      <GamesDashboard setGameSelector={setGameSelector} />
    </div>
  );
}

export default App;
