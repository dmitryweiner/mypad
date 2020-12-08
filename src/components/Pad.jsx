import React, {useEffect} from "react";
let audio = new Audio();

const Pad = (props) => {


  const playfromBtn = () => {
    let audio2 = new Audio();
    if (props.player === 1) {
      audio.pause();
      audio.src = props.path;
      audio.play();
    }
    else {
      audio2.src = props.path;
      audio2.play();
    }
  }

  useEffect(() => {
    const pushBtn = (event) => {
      if (event.keyCode === props.code) {
        playfromBtn();
      }
    };
    window.addEventListener('keydown', pushBtn);
    return () => {
      window.removeEventListener('keydown', pushBtn);
    };
  }, []);

  return(
    <div>
      <button className={props.class}
              onClick={playfromBtn}
      > </button>
    </div>
  )
}
export default Pad;