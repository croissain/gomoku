import { useState } from "react";
import HistoryCell from "./HistoryCell";
import Resizer from "./Resizer";

const Sidebar = ({
  state,
  winner,
  moves,
  min,
  max,
  width,
  height,
  onWidthChange,
  onHeightChange,
  onResetClick,
}) => {
  const [sortAsc, setSortAsc] = useState(true);
  return (
    <>
      <div>
        {winner
          ? "Winner: " + winner
          : "Next player: " + (state.xIsNext ? "X" : "O")}
      </div>
      <Resizer
        min={min}
        max={max}
        width={width}
        height={height}
        onWidthChange={onWidthChange}
        onHeightChange={onHeightChange}
      />
      <div className="sidebar-settings">
        <button onClick={onResetClick}>Reset</button>
        <button onClick={() => setSortAsc(!sortAsc)}>
          {sortAsc ? "ASC" : "DESC"}
        </button>
      </div>
      <ol className={`${sortAsc ? "" : "flex-reverse"}`}>
        {moves.map((move) => {
          return (
            <>
              <HistoryCell
                state={move[0]}
                key={move[1]}
                moveNum={move[1]}
                isXTurn={move[2]}
                jumpTo={move[3]}
                desc={move[4]}
              />
            </>
          );
        })}
      </ol>
    </>
  );
};

export default Sidebar;
