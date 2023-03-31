import React from "react";
import { arrow } from "../static/images";

const Body = () => {
  return (
    <div className="body_comp">
      <div className="dynamic_greet">
        <div>Welcome to <span>EVERYTHING-GPT</span></div>
        <div className="animate_hand">👋</div>
      </div>
      <div className="arrow">
        <img src={arrow}></img>
      </div>
      <div className="body_text">
        <h1>Generating responses using AI for everyone.</h1>
        <p>
          Can't find custom images, worry not you landed on a right place even
          get every bit of information opinionated and unopinionated.
        </p>
      </div>
    </div>
  );
};

export default Body;
