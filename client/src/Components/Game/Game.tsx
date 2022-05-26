import "./Game.css";
import { useEffect, useState } from "react";
import "./Button.css";
//@ts-ignore
import { sortScores } from "../../utils/sort";

export default function Pong({ setHighScores, gameInfo }: {setHighScores: React.Dispatch<React.SetStateAction<number[]>>, gameInfo: {storageName:string, sourceName:string}}) {
  const [src, setSrc] = useState(gameInfo.sourceName);

  // const getRandomStr = () => Math.random();
  let newScores;
  let savedScores = localStorage.getItem(gameInfo.storageName)? JSON.parse(localStorage.getItem(gameInfo.storageName)|| ""): [];

  useEffect(() => {
    const handleMessage = function (e: {data:string}) {
      let msgStr = e.data;
      console.log(msgStr)
      // let randomStr = getRandomStr();
      if (typeof msgStr === "string") {
        if (msgStr.startsWith("finalScore")) {
          let finalScore = msgStr.substring(12, msgStr.length - 1);
          let oldScores = localStorage.getItem(gameInfo.storageName)? JSON.parse(
            localStorage.getItem(gameInfo.storageName) || ""
          ) : [];
          if (!oldScores) {
            newScores = [finalScore];
          } else {
            newScores = sortScores([...oldScores, finalScore]);
          }
          localStorage.setItem(gameInfo.storageName, JSON.stringify(newScores));
          savedScores = JSON.parse(localStorage.getItem(gameInfo.storageName)|| "");
          setHighScores(savedScores.slice(0, 10));
        }
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  //Focuses the iframe so people can start playing right away
  useEffect(() => {
    document.querySelector("iframe")?.focus();
    if (gameInfo.storageName !== "flappyBirdScores") {
      document.querySelector(".eightbit-btn-fullscreen")!.innerHTML =
        "Full Screen";
    }
    return document
      .querySelector(".GameFlexContainer")!
      .classList.remove("hide");
  }, [gameInfo]);

  // onClick={toggleFullScreen()}

  const toggleFullScreen = () => {
    if (gameInfo.storageName === "flappyBirdScores") {
      console.log("hello");
      document.querySelector(".eightbit-btn-fullscreen")!.innerHTML = ":(";
    } else {
      document.querySelector(".eightbit-btn-fullscreen")!.innerHTML =
        "Full Screen";
      document.querySelector("iframe")!.requestFullscreen();
    }
    // document.querySelector(".iFrameDivContainer").requestFullscreen();
  };
  return (
    <>
      {/* <div className="iFrameDivContainer"> */}
      <iframe
        id="gameFrame"
        frameBorder="0"
        src={gameInfo.sourceName}
        allowFullScreen={true}
        title="gameFrame"
      />
      {/* </div> */}

      <div className="GameFlexContainer">
        <button
          className="eightbit-btn-fullscreen eightbit-btn--proceed "
          onClick={toggleFullScreen}
        >
          Full Screen
        </button>
      </div>
    </>
  );
}