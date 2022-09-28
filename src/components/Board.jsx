import Square from "./Square";

const Board = ({
  width,
  height,
  squares,
  onClick,
  markWinner,
  winner,
  stepIndex,
  lastMove,
  xIsNext,
}) => {
  const renderSquare = (row, col, index) => {
    return (
      <Square
        key={index}
        row={row}
        col={col}
        index={index}
        value={squares[index]}
        onClick={() => onClick(index)}
        markWinner={markWinner && markWinner.includes(index)}
        winner={winner}
        stepIndex={stepIndex}
        lastMove={lastMove}
        xIsNext={xIsNext}
      ></Square>
    );
  };

  return Array(height)
    .fill(null)
    .map((_, i) => {
      return (
        <div key={i} className="board-row">
          {Array(width)
            .fill(null)
            .map((_, j) => {
              return renderSquare(j, i, i * width + j);
            })}
        </div>
      );
    });
};

export default Board;
