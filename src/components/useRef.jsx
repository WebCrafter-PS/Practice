import { useState, useRef } from "react";

//reference a value that's not needed for re-rendering
//even if any state updates and component re-renders, ref.current value doesn't change

//do :read/write inside event handler & useEffects
//donot: read/write during rendering
const RefDOM = () => {
  const [val, setVal] = useState(0);

  const ref = useRef(0);
  //ref = {current : 0}  - immutable
  let local = 26;

  return (
    <div>
      <h1>useRef</h1>
      <button
        onClick={() => {
          local += 1;
          console.log(local); //local gets refreshed whenever the val state changes
        }}
      >
        local variable
      </button>
      <button onClick={() => setVal(val + 1)}>State variable</button>
      <button
        onClick={() => {
          ref.current = ref.current + 1;
          console.log(ref.current);
        }}
      >
        useRef
      </button>
      <p>{local}</p>
      <p>{val}</p>
      <p>{ref.current}</p>
      {/* don't use ref during rendering */}
    </div>
  );
};
export default RefDOM;
