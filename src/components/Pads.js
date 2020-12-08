import React from "react";
import Pad from "./Pad";
import keypads from '../presets/MaskOff/pads.json';


function importAll(r) {
  return r.keys().map(r);
}
const samples = importAll(require.context('../presets/MaskOff', false, /\.(wav|mp3)$/));
// const samples = importAll(require.context('../presets/ElProblema', false, /\.(wav|mp3)$/));

for (let i = 0; i < keypads.pads.length; i++) {
  for (let j = 0; j < samples.length; j++) {
    if (i === j) {
      keypads.pads[i].path = samples[j].default;
    }
  }
}

const Pads = () => {

  return(
    <div className="column center">
      <h1>Drum Pads</h1>
      <div className="pads">
        {
          keypads.pads.map((item, index) => {
            return <Pad key={index}
                        class={item.class}
                        code={item.keyCode}
                        path={item.path}
                        player={item.player}
            />
          })
        }
      </div>
    </div>
  )
}
export default Pads;