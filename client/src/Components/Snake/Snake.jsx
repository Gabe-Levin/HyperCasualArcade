import React from "react";
import "./Snake.css";
import { useEffect, useState } from "react";

export default function Snake() {
  const [src, setSrc] = useState("Snake/index.html");

  const getRandomStr = () => Math.random();

  useEffect(() => {
    const handleMessage = function (e) {
      console.log("event listener running");
      console.log(e.data);
      let randomStr = getRandomStr();
      console.log("random String", randomStr);
      console.log("Snake/index.html?" + randomStr);
      if (e.data === "game ended") setSrc("Snake/index.html?" + randomStr);
    };
    console.log("use effect");
    const id = window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);
  return <iframe id="snakeFrame" src={src} />;
}
