import React, { useEffect } from "react";
import "./FlappyBird.css";
import { sortScores } from "../../../utils/sort";
import { useState } from "react";

export default function FlappyBird({ setHighScores }) {
  const [src, setSrc] = useState("FlappyBird/index.html");

  const getRandomStr = () => Math.random();
  let newScores;
  let fetchedScores = JSON.parse(localStorage.getItem("flappyBirdScores"));
  let savedScores = fetchedScores ? fetchedScores : [];

  useEffect(() => {
    const handleMessage = function (e) {
      let msgStr = e.data;
      let randomStr = getRandomStr();
      if (typeof msgStr === "string") {
        if (msgStr === "game ended")
          setSrc("FlappyBird/index.html?" + randomStr);
        if (msgStr.startsWith("finalScore")) {
          let finalScore = msgStr.substring(12, msgStr.length - 1);
          let oldScores = JSON.parse(localStorage.getItem("flappyBirdScores"));
          if (!oldScores) {
            newScores = [finalScore];
          } else {
            newScores = sortScores([...oldScores, finalScore]);
          }
          localStorage.setItem("flappyBirdScores", JSON.stringify(newScores));
          savedScores = JSON.parse(localStorage.getItem("flappyBirdScores"));
          setHighScores(savedScores?.slice(0, 10));
        }
      }
    };

    const id = window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return <iframe id="flappyBirdFrame" src="FlappyBird/index.html" />;
}
