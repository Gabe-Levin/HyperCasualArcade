import "./Pong.css";

import React from "react";

export default function Pong() {
  // let openFrame = () => {
  let iframe = document.createElement("iframe");
  iframe.src = "pong/index.html";
  iframe.frameBorder = "0";
  iframe.id = "iframe";
  // iframe.style.position = "flex";
  iframe.style.zIndex = "999";
  // iframe.style.height = "100%";
  // iframe.style.width = "100%";
  // iframe.style.top = "0";
  iframe.style.backgroundColor = "white";
  iframe.style.border = "none";
  // document.body.prepend(iframe);
  // document.getElementById("gameWindow").prepend(iframe);
  document.body.style.overflow = "hidden";
  console.log("iframe.src", iframe.src);
  console.log("__dirname", __dirname);
  // };
  return <iframe id="pongFrame" src="pong/index.html" />;
  // return <div>{openFrame()}</div>;
}
