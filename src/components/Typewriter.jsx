//Typewriter - give delay of half second bw every characters

import { useState } from "react";

export default function Typewriter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const handleClick = () => {
    const array = input.split("");
    array.map((ele, index) =>
      setTimeout(() => {
        //display values only ones
        setOutput((prevOutput) => [...prevOutput, ele]);
      }, index * 500)
    );
  };
  return (
    <div>
      <h1>Typewriter</h1>
      <textarea
        placeholder="start typing.."
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button onClick={handleClick}>Start</button>
      <p>Type writer effect : {output} </p>
    </div>
  );
}
