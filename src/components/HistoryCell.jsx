const HistoryCell = ({ key, isXTurn, jumpTo, desc }) => {
  // const moves = history.map((step, move) => {
  //   const desc = move
  //     ? `Go to move #${move} ${step.isXTurn ? "X" : "O"}
  //       pos ${step.index}
  //       (${step.coordinate[0]};${step.coordinate[1]})`
  //     : "Go to game start";
  //   return (
  //     <li key={move} className="history-cell">
  //       <div className={step.isXTurn ? "player-1" : "player-2"}></div>
  //       <button className="history-desc" onClick={jumpTo}>
  //         {desc}
  //       </button>
  //     </li>
  //   );
  // });

  return (
    <li key={key} className="history-cell">
      <div className={isXTurn ? "player-1" : "player-2"}></div>
      <button className="history-desc" onClick={jumpTo}>
        {desc}
      </button>
    </li>
  );

  // <ol>
  //   {moves}
  //   {/* <li className="history-cell">
  //     <div className="player-1"></div>
  //     <button className="history-desc" onClick={() => {}}>
  //       pos: 15 - (3:5)
  //     </button>
  //   </li>
  //   <li className="history-cell">
  //     <div className="player-2"></div>
  //     <button className="history-desc" onClick={() => {}}>
  //       pos: 15 - (3:5)
  //     </button>
  //   </li> */}
  // </ol>
  //
  // );
};

export default HistoryCell;
