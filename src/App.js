import "./App.css";
import { useState } from "react";
import Game from "./components/Game";

function App() {
  // const [boardSize, setBoardSize] = useState(10);
  const [width, setWidth] = useState(9);
  const [height, setHeight] = useState(10);

  const min = 9;
  const max = 30;

  const handleBoardWidthChange = (e) => {
    setWidth(+e.target.value || min);
  };

  const handleBoardHeightChange = (e) => {
    setHeight(+e.target.value || min);
  };

  return (
    <div className="App">
      <div id="main">
        <div className="size-field">
          <label>Board Size </label>
          <input
            type="range"
            min="9"
            max="30"
            value={width}
            onChange={handleBoardWidthChange}
          />
          <span> x </span>
          <input
            type="range"
            min="9"
            max="30"
            value={height}
            onChange={handleBoardHeightChange}
          />
        </div>
        <Game width={width} height={height} />
      </div>
      <div id="sidebar">ád</div>
    </div>
  );
}

export default App;
