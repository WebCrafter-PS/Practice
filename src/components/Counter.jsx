import { useState } from "react";

//Increment & Decrement
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Counter</h2>
      <div className="counter">
        <button
          onClick={() => {
            setCount((prevCount) => prevCount + 1);
          }}
        >
          Increment +
        </button>
        <p>{count}</p>
        <button onClick={() => setCount(count - 1)}>Decrement -</button>
      </div>
    </>
  );
};
export default Counter;
