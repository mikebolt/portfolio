import React from "react";
import "./BackgroundStyle.css";

const baseClass = "fun-background";

export const Background = () => {
  return (
    <div className={`${baseClass}-root`}>
      <img className={`${baseClass}-tiles`} src="svg/tile_pattern.svg"></img>
    </div>
  );
};
