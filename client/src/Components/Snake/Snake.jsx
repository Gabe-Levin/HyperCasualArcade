import React from "react";
import "./Snake.css";
import { useEffect, useState } from "react";
import { sortScores } from "../../utils/sort";

export default function Snake({ setHighScores }) {
  const [src, setSrc] = useState("Snake/index.html");
  // const [scores, setScores] = useState(
  //   JSON.parse(localStorage.getItem("snakeScores")) || []
  // );

  const getRandomStr = () => Math.random();
  let newScores;
  let savedScores = JSON.parse(localStorage.getItem("snakeScores"));

  useEffect(() => {
    const handleMessage = function (e) {
      let msgStr = e.data;
      let randomStr = getRandomStr();
      if (typeof msgStr === "string") {
        if (msgStr === "game ended") setSrc("Snake/index.html?" + randomStr);
        if (msgStr.startsWith("finalScore")) {
          let finalScore = msgStr.substring(12, msgStr.length - 1);
          let oldScores = JSON.parse(localStorage.getItem("snakeScores"));
          if (!oldScores) {
            newScores = [finalScore];
          } else {
            newScores = sortScores([...oldScores, finalScore]);
          }
          localStorage.setItem("snakeScores", JSON.stringify(newScores));
          savedScores = JSON.parse(localStorage.getItem("snakeScores"));
          console.log("I'm SavedScores____", savedScores);
          // setScores(savedScores);
          setHighScores(savedScores.slice(0, 10));
        }
      }
    };

    console.log(setHighScores);

    const id = window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <>
      <iframe id="snakeFrame" src={src} />
      {/* <div>Here are the scores {scores.slice(0, 10)}</div> */}
    </>
  );
}
