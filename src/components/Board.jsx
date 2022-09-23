import Square from "./Square";
const Board = () => {
  const renderSquare = () => {
    return <Square value={null}></Square>;
  };

  const status = "X";
  return (
    <div className="board">
      <div className="status">Next player: {status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
