// value is a prop that gets it's value from the parent component that calls this function
function Square({ value }) {
  return <button className="square">{value}</button>;
}

// Fragments <></> are used to return a group of JSX elements in a return statement
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value={1} />
        <Square value={2} />
        <Square value={3} />
      </div>
      <div className="board-row">
        <Square value={4} />
        <Square value={5} />
        <Square value={6} />
      </div>
      <div className="board-row">
        <Square value={7} />
        <Square value={8} />
        <Square value={9} />
      </div>
    </>
  );
}
