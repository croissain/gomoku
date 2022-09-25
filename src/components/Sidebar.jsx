import HistoryCell from "./HistoryCell";

const Sidebar = ({ state, winner, moves }) => {
  return (
    <>
      <div>
        {winner
          ? "Winner: " + winner
          : "Next player: " + (state.xIsNext ? "X" : "O")}
      </div>
      <ol>
        {moves.map((move) => {
          return (
            <HistoryCell
              state={move[0]}
              key={move[1]}
              moveNum={move[1]}
              isXTurn={move[2]}
              jumpTo={move[3]}
              desc={move[4]}
            ></HistoryCell>
          );
        })}
      </ol>
    </>
  );
};

export default Sidebar;
