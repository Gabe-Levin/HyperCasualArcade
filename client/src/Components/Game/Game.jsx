import "./Game.css";
import { useEffect, useState } from "react";
import { sortScores } from "../../utils/sort";

export default function Pong({ setHighScores, gameInfo }) {
  const [src, setSrc] = useState(gameInfo.sourceName);

  const getRandomStr = () => Math.random();
  let newScores;
  let savedScores = JSON.parse(localStorage.getItem(gameInfo.storageName));

  useEffect(() => {
    const handleMessage = function (e) {
      let msgStr = e.data;
      let randomStr = getRandomStr();
      if (typeof msgStr === "string") {
        if (msgStr === "game ended")
          setSrc(gameInfo.sourceName + "?" + randomStr);
        if (msgStr.startsWith("finalScore")) {
          let finalScore = msgStr.substring(12, msgStr.length - 1);
          let oldScores = JSON.parse(
            localStorage.getItem(gameInfo.storageName)
          );
          if (!oldScores) {
            newScores = [finalScore];
          } else {
            newScores = sortScores([...oldScores, finalScore]);
          }
          localStorage.setItem(gameInfo.storageName, JSON.stringify(newScores));
          savedScores = JSON.parse(localStorage.getItem(gameInfo.storageName));
          setHighScores(savedScores.slice(0, 10));
        }
      }
    };

    const id = window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return <iframe id="gameFrame" src={gameInfo.sourceName} />;
}
