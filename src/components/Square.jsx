const Square = ({ bold, row, col, index, value, onClick }) => {
  return (
    <button
      className={`square ${bold ? "bold" : ""}`}
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
