import "./App.css";
import { useState } from "react";
import Game from "./components/Game";

function App() {
  const [boardSize, setBoardSize] = useState(10);
  const handleBoardSizeChange = (e) => {
    setBoardSize(+e.target.value || 10);
  };

  return (
    <div className="App">
      <div className="size-field">
        <label>Board Size </label>
        <input
          type="number"
          min="10"
          max="30"
          value={boardSize}
          onChange={handleBoardSizeChange}
        />
        x{boardSize}
      </div>
      <Game size={boardSize} />
    </div>
  );
}

export default App;
