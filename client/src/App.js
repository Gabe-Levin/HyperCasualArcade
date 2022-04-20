import "./App.css";
import GamesDashboard from "./Components/GamesDashboard/GamesDashboard";
import GamesWindow from "./Components/GamesWindow/GamesWindow";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <GamesWindow />
      <GamesDashboard />
    </div>
  );
}

export default App;
