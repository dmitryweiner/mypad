import React, {useEffect} from "react";

let audio = new Audio();
const PlaySound = () => {
  audio.src = samples[0].default;
  audio.play();
}

function importAll(r) {
  return r.keys().map(r);
}
const samples = importAll(require.context('../presets/MaskOff', false, /\.(wav|mp3)$/));


const Pads = () => {

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 103) {
        PlaySound();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);


  return(
    <div className="flex">
      <div className="column">
        <h1>MyPads</h1>
        <div className="pads">
          <button className="pad" onClick={PlaySound}> </button>
        </div>
      </div>
    </div>
  )
}
export default Pads;