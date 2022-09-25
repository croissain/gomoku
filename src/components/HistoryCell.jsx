const HistoryCell = ({ state, moveNum, isXTurn, jumpTo, desc }) => {
  return (
    <li key={moveNum} className="history-cell">
      <div className={isXTurn ? "player-1" : "player-2"}></div>
      <button
        className={`history-desc ${
          moveNum === state.stepNumber ? "history-selected" : ""
        }`}
        onClick={jumpTo}
      >
        {desc}
      </button>
    </li>
  );
};

export default HistoryCell;
