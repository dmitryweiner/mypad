import React from "react";

const Pad = (props) => {

  const play = () => {
    let audio = new Audio();
    audio.src = props.path;
    audio.play();
  }

  return(
    <div>
      <button className={props.class}
              onClick={play}
      > </button>
    </div>
  )
}
export default Pad;