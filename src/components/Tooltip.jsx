import { useState } from "react";

//display some information when you hover over something - hint
const Tooltip = () => {
  const [visible, setVisible] = useState(false);

  const handleHover = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <h2>Tooltip</h2>
      {visible && <p>Humans are in Animal Kingdom</p>}
      <h1 onMouseOver={handleHover}>Animal</h1>
    </div>
  );
};
export default Tooltip;
