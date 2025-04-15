import { useState } from "react";

const Pomodoro = () => {
  const [start, setStart] = useState(false);
  const handleToggle = () => {
    setStart(!start);
  };
  return (
    <div>
      <h1>Pomodoro</h1>
      <div className="pomodoro">
        <h1>25:00</h1>
        <button onClick={handleToggle}>{!start ? "Start" : "Pause"}</button>
      </div>
    </div>
  );
};
export default Pomodoro;
