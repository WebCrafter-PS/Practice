/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

//cache the function definition b/w re-renders
//useCallback(fn,dependencies)

import React, { useState,useCallback } from "react";

export default function Callback() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []); // Empty dependency array means this function never changes

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onIncrement={increment} />
    </div>
  );
}

const ChildComponent = React.memo (({ onIncrement }) => {
  console.log("ChildComponent rendered");
  return <button onClick={onIncrement}>Increment</button>;
});
