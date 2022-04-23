import "./Pong.css";
import { useEffect, useState } from "react";
import { sortScores } from "../../utils/sort";

export default function Pong({ setHighScores }) {
  const [src, setSrc] = useState("Pnake/index.html");

  const getRandomStr = () => Math.random();
  let newScores;
  let savedScores = JSON.parse(localStorage.getItem("pongScores"));

  useEffect(() => {
    const handleMessage = function (e) {
      let msgStr = e.data;
      let randomStr = getRandomStr();
      if (typeof msgStr === "string") {
        if (msgStr === "game ended") setSrc("Pong/index.html?" + randomStr);
        if (msgStr.startsWith("finalScore")) {
          let finalScore = msgStr.substring(12, msgStr.length - 1);
          let oldScores = JSON.parse(localStorage.getItem("pongScores"));
          if (!oldScores) {
            newScores = [finalScore];
          } else {
            newScores = sortScores([...oldScores, finalScore]);
          }
          localStorage.setItem("pongScores", JSON.stringify(newScores));
          savedScores = JSON.parse(localStorage.getItem("pongScores"));
          setHighScores(savedScores.slice(0, 10));
        }
      }
    };

    const id = window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return <iframe id="pongFrame" src="pong/index.html" />;
}
