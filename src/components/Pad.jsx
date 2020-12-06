import React, {useEffect} from "react";

const Pad = (props) => {

  const play = () => {
    let audio = new Audio();
    audio.src = props.path;
    audio.play();
  }

  useEffect(() => {
    const pushBtn = (event) => {
      if (event.keyCode === props.code) {
        let audio = new Audio();
        audio.src = props.path;
        audio.play();
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
              onClick={play}
      > </button>
    </div>
  )
}
export default Pad;