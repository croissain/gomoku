import { useState } from "react";
import Board from "./Board";

const Game = ({ width, height }) => {
  const [state, setState] = useState({
    history: [
      {
        squares: Array(width * height).fill(null),
      },
    ],
    stepNumber: 0,
    xIsNext: true,
  });

  const handleClick = (i) => {
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares, width)[0] || squares[i]) return;
    squares[i] = state.xIsNext ? "X" : "O";
    setState({
      history: history.concat([{ squares: squares }]),
      stepNumber: history.length,
      xIsNext: !state.xIsNext,
    });

    calculateWinner(squares, width);
    // console.log(squares);
  };

  // const calculateWinner = (squares) => {
  //   // 5-in-a-row
  //   // row case
  //   let plainBoardRow = "";
  //   let plainBoardCol = "";
  //   for (let i = 0; i < width; i++) {
  //     for (let j = 0; j < height; j++) {
  //       if (squares[j + i * width] === null)
  //         plainBoardRow = plainBoardRow.concat("x");
  //       else if (squares[j + i * width] === "X")
  //         plainBoardRow = plainBoardRow.concat(1);
  //       else plainBoardRow = plainBoardRow.concat(0);
  //     }
  //     plainBoardRow = plainBoardRow.concat(" ");
  //   }

  //   // col case
  //   for (let i = 0; i < width; i++) {
  //     for (let j = 0; j < height; j++) {
  //       if (squares[i + j * height] === null)
  //         plainBoardCol = plainBoardCol.concat("x");
  //       else if (squares[i + j * height] === "X")
  //         plainBoardCol = plainBoardCol.concat(1);
  //       else plainBoardCol = plainBoardCol.concat(0);
  //     }
  //     plainBoardCol = plainBoardCol.concat(" ");
  //   }

  //   // diagon
  // };

  const calculateWinner = (squares, width) => {
    const winningLines = [
      ["X", "X", "X", "X", "X"],
      ["O", "O", "O", "O", "O"],
    ];
    for (let i = 0; i < squares.length; i++) {
      if (squares[i]) {
        const lines = getLines(i, width);
        console.log("lines ");
        console.log(lines);
        for (let j = 0; j < lines.length; j++) {
          let line = lines[j];
          let lineValues = [];
          for (let k = 0; k < line.length; k++) {
            lineValues.push(squares[line[k]]);
          }
          console.log("lineVal");
          console.log(lineValues);
          if (winningLines.find((l) => arrayCompare(l, lineValues))) {
            return [squares[i], line];
          }
        }
      }
    }

    return [null, null];
  };

  const getLines = (index, width) => {
    let lines = [];
    if (getRow(index, width).length === 5) lines.push(getRow(index, width));
    if (getColumn(index, width, height).length === 5)
      lines.push(getColumn(index, width, height));
    if (getMainDiagonal(index, width, height).length === 5)
      lines.push(getMainDiagonal(index, width, height));
    if (getSubDiagonal(index, width, height).length === 5) {
      lines.push(getSubDiagonal(index, width, height));
    }
    console.log(lines);
    return lines;
  };

  const getRow = (index, width) => {
    let line = [];
    for (let i = 0; i < 5; i++) {
      if ((index % width) + i < width) {
        line.push(index + i);
      }
    }
    return line;
  };

  const getColumn = (index, width, height) => {
    let line = [];
    for (let i = 0; i < 5; i++) {
      if ((index + i * width) / height < height - 1) {
        line.push(index + i * width);
      }
    }
    return line;
  };

  const getMainDiagonal = (index, width, height) => {
    let line = [];
    for (let i = 0; i < 5; i++) {
      if (
        (index % width) + i < width &&
        Math.floor((index + i * width) / height) < height - 1
      )
        line.push(index + i * (width + 1));
    }
    return line;
  };

  const getSubDiagonal = (index, width, height) => {
    let line = [];
    for (let i = 0; i < 5; i++) {
      if (
        (index % width) - i + 1 > 0 &&
        Math.floor((index + i * width) / height) < height - 1
      )
        line.push(index + i * (width - 1));
    }
    return line;
  };

  const arrayCompare = (arr1, arr2) => {
    return (
      arr1.length === arr2.length &&
      arr1.every((value, index) => value === arr2[index])
    );
  };

  const [winner, line] = calculateWinner(
    state.history[state.stepNumber].squares,
    width
  );

  const render = () => {
    const history = state.history;
    const current = history[history.length - 1];

    let status;
    return (
      <div className="game">
        <div className="game-board">
          <Board
            width={width}
            height={height}
            squares={current.squares}
            onClick={(i) => handleClick(i)}
            boldLine={line}
          />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  };

  return render();
};

export default Game;
