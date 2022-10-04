import { useState } from "react";
import audio from "../assets/click2.wav";
// import Modal from "react-modal";

import Board from "./Board";
import Sidebar from "./Sidebar";

const Game = () => {
  const min = 9;
  const maxWidth = 35;
  const maxHeight = 20;

  const [width, setWidth] = useState(min);
  const [height, setHeight] = useState(min);

  const [isPlaying, setIsPlaying] = useState(false);
  const [xCount, setXCount] = useState(0);

  const [state, setState] = useState({
    history: [
      {
        squares: Array(width * height).fill(null),
      },
    ],
    stepNumber: 0,
    xIsNext: true,
  });

  const [lastMove, setLastMove] = useState(null);

  // const [modalOnResultIsOpen, setModalOnResultIsOpen] = useState(true);

  const handleBoardClick = () => {
    new Audio(audio).play();
    setIsPlaying(true);
  };

  const handleBoardWidthChange = (e) => {
    if (!isPlaying) {
      setWidth(+e.target.value || min);
    }
  };

  const handleBoardHeightChange = (e) => {
    if (!isPlaying) {
      setHeight(+e.target.value || min);
    }
  };

  const handleResetClick = () => {
    setIsPlaying(false);
    setLastMove(null);
    setXCount(0);
    setState({
      history: [
        {
          squares: Array(width * height).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    });
  };

  const handleClick = (i) => {
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares, width)[0] || squares[i]) return;
    squares[i] = state.xIsNext ? "X" : "O";
    setState({
      history: history.concat([
        {
          squares: squares,
          index: i,
          coordinate: [Math.floor(i / width), i % width],
          isXTurn: state.xIsNext,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !state.xIsNext,
    });
    handleBoardClick();
    calculateWinner(squares, width);
    setLastMove(i);
    if (state.xIsNext === true) {
      setXCount(xCount + 1);
    }
  };

  const jumpTo = (step, index) => {
    setLastMove(index);
    setState({
      ...state,
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
    setXCount(Math.ceil(step / 2));
  };

  const calculateWinner = (squares, width) => {
    const winningLines = [
      ["X", "X", "X", "X", "X"],
      ["O", "O", "O", "O", "O"],
    ];
    for (let i = 0; i < squares.length; i++) {
      if (squares[i]) {
        const lines = getLines(i, width);
        for (let j = 0; j < lines.length; j++) {
          let line = lines[j];
          let lineValues = [];
          for (let k = 0; k < line.length; k++) {
            lineValues.push(squares[line[k]]);
          }
          if (winningLines.find((l) => arrayCompare(l, lineValues))) {
            return [squares[i], line];
          }
        }
      }
    }

    if (xCount > (width * height) / 2) return ["Draw", null];

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
      if ((index + i * width) / width < height) {
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
        Math.floor((index + i * width) / width) < height
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
        Math.floor((index + i * width) / width) < height
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

    const moves = history.map((step, move) => {
      const desc = move
        ? `Go to move #${move} ${step.isXTurn ? "X" : "O"}
        pos ${step.index}
        (${step.coordinate[0]};${step.coordinate[1]})`
        : "Go to game start";

      return [
        state,
        move,
        step.isXTurn,
        step.Index,
        () => jumpTo(move, step.index),
        desc,
        lastMove,
      ];
      // return (
      //   <li key={move}>
      //     <button onClick={() => jumpTo(move)}>{desc}</button>
      //   </li>
      // );
    });

    return (
      <>
        <div id="main">
          <div className="game">
            <div className="game-board">
              <Board
                width={width}
                height={height}
                squares={state.history[state.stepNumber].squares}
                onClick={(i) => handleClick(i)}
                markWinner={line}
                winner={winner}
                lastMove={lastMove}
                xIsNext={state.xIsNext}
              />
            </div>
          </div>
        </div>
        <div id="sidebar">
          <Sidebar
            state={state}
            winner={winner}
            moves={moves}
            min={min}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
            width={width}
            height={height}
            onWidthChange={handleBoardWidthChange}
            onHeightChange={handleBoardHeightChange}
            isPlaying={isPlaying}
            onResetClick={() => handleResetClick()}
          ></Sidebar>
        </div>
      </>
    );
  };

  return render();
};

export default Game;
