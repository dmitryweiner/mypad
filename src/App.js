
import './style.css'
import Pads from "./components/Pads";
import React from "react";
import PlayList from "./components/PlayList";



function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Pads />
          <PlayList />
        </div>
      </div>
    </div>
  );
}

export default App;
