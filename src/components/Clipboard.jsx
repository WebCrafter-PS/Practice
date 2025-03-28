/* eslint-disable react/prop-types */
//copy to Clipboard
import { useState } from "react";
const CopyToClipboard = ({ str = "test-input" }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(true);
    setTimeout(() => {
      setToggle(false);
    }, 1000);
    navigator.clipboard.writeText(str);
  };
  return <button onClick={handleClick}>{toggle ? "Copied" : "Copy"}</button>;
};
export default CopyToClipboard;
