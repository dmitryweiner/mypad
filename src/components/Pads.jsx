import React from "react";
import sound from "../../src/presets/MaskOn/mf1.wav";

const PlaySound = () => {
  let audio = new Audio();
  audio.src = sound;
  audio.autoplay = true;
}

const Pads = () => {
  return(
    <div>
      <h1>MyPad</h1>
      <div className="pads">
        <button className="pad green" onClick={PlaySound}> </button>
        <button className="pad"> </button>
        <button className="pad"> </button>
        <button className="pad"> </button>
        <button className="pad"> </button>
        <button className="pad"> </button>
        <button className="pad"> </button>
        <button className="pad"> </button>
        <button className="pad"> </button>
        <button className="pad"> </button>
        <button className="pad"> </button>
        <button className="pad"> </button>
      </div>
    </div>
  )
}
export default Pads;