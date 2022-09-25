const Square = ({ markWinner, row, col, index, value, onClick }) => {
  return (
    <button
      className={`square ${markWinner ? "bold" : ""}`}
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
