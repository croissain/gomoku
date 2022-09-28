const Square = ({
  markWinner,
  winner,
  row,
  col,
  index,
  value,
  onClick,
  lastMove,
  xIsNext,
}) => {
  return (
    <button
      className={`square ${markWinner ? "bold" : ""} ${
        lastMove === index ? "last-move" : ""
      } hover_${winner ? "" : value ? "" : xIsNext ? "player-1" : "player-2"} `}
      row={row}
      col={col}
      onClick={onClick}
    >
      <span className="square-index">{index}</span>
      {value}
    </button>
  );
};

export default Square;
