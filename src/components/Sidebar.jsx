import HistoryCell from "./HistoryCell";

const Sidebar = ({ moves }) => {
  console.log(moves);
  return (
    <ol>
      {moves.map((move) => (
        <HistoryCell
          key={move[0]}
          isXTurn={move[1]}
          jumpTo={move[2]}
          desc={move[3]}
        ></HistoryCell>
      ))}
    </ol>
  );
};

export default Sidebar;
