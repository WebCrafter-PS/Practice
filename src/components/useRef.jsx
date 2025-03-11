import { useState, useRef } from "react";

//reference a value that's not needed for re-rendering
//u don't want to render the component but need a value
const RefDOM = () => {
  const [val, setVal] = useState(0);

  const ref = useRef(0);
  //ref = {current : 0}
  let local = 26;

  return (
    <div>
      <h1>useRef</h1>
      <button
        onClick={() => {
          local = local + 1;
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
