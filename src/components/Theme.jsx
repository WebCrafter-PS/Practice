//light and dark mode/theme toggle- keep in header
//should apply to whole app
//background color change & font color change & font-size
//store it in context - so we can apply it to whole app(header + body)
import { useContext } from "react";
import { ThemeContext } from "../utility/context";

const Theme = () => {
  const data = useContext(ThemeContext);
  const { theme, setMode } = data;

  const clickHandler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  return (
    <div className={`container ${theme}`}>
      <button onClick={clickHandler}>{theme}</button>
    </div>
  );
};
export default Theme;
