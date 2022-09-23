import { useState } from "react";

const Square = ({ value, bold }) => {
  const [xIsNext, setXIsNext] = useState(null);

  const handleClick = () => {
    setXIsNext(() => {
      console.log("render");
      return xIsNext === "X" ? "O" : "X";
    });
  };

  return (
    <button
      className={`square ${bold ? "bold" : ""}`}
      onClick={() => {
        handleClick();
      }}
    >
      {xIsNext}
    </button>
  );
};

export default Square;
