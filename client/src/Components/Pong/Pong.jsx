import "./Pong.css";

import React, { useEffect } from "react";

export default function Pong() {
  let iframe = document.createElement("iframe");
  // useEffect(() => {
  //   window.addEventListener("message", function (e) {
  //     console.log("event listener running");
  //     console.log(e.data);
  //   });
  // }, []);

  return <iframe id="pongFrame" src="pong/index.html" />;
}
