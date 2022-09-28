import { useState } from "react";
import HistoryCell from "./HistoryCell";
import Resizer from "./Resizer";

const Sidebar = ({
  state,
  winner,
  moves,
  min,
  maxWidth,
  maxHeight,
  width,
  height,
  onWidthChange,
  onHeightChange,
  isPlaying,
  onResetClick,
}) => {
  const [sortAsc, setSortAsc] = useState(true);
  return (
    <>
      <div>
        {winner === "Draw"
          ? winner
          : winner
          ? "Winner: " + winner
          : "Next player: " + (state.xIsNext ? "X" : "O")}
      </div>
      <Resizer
        min={min}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        width={width}
        height={height}
        onWidthChange={onWidthChange}
        onHeightChange={onHeightChange}
        isPlaying={isPlaying}
      />
      <div className="sidebar-settings">
        <button onClick={onResetClick}>Reset</button>
        <button onClick={() => setSortAsc(!sortAsc)}>
          {sortAsc ? "ASC" : "DESC"}
        </button>
      </div>
      <ol className={`${sortAsc ? "" : "flex-reverse"} history-bar`}>
        {moves.map((move) => {
          return (
            <>
              <HistoryCell
                state={move[0]}
                key={move[1]}
                moveNum={move[1]}
                isXTurn={move[2]}
                jumpTo={move[4]}
                desc={move[5]}
                lastMove={move[6]}
              />
            </>
          );
        })}
      </ol>
    </>
  );
};

export default Sidebar;
