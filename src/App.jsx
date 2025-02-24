import "./App.css";

import Todo from "./components/Todo";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import Timer from "./components/Timer";
import Search from "./components/SearchBar";
import Accordian from "./components/Accordian";
import DropDown from "./components/DropDown";
import TwoDropDown from "./components/TwoDropdown";
import Tooltip from "./components/Tooltip"
import Theme from "./components/Theme";
import { useState, useContext } from "react";
import { ThemeContext } from "./utility/context";

function App() {
  const data = useContext(ThemeContext);
  const { theme } = data;
  const [mode, setMode] = useState(theme);
  
  return (
    <>
      <div>
        <Todo />
        <Counter/>
        <Toggle/>
        <Timer/>
        <Tooltip/>
        <Accordian/>
        <Search/> 
        <DropDown/>
        <TwoDropDown/>
        <ThemeContext.Provider value={{ theme: mode,setMode }}>
          <Theme />
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
