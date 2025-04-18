import "./App.css";
// import LocalStorage from "./components/LocalStorage";
// import Login from "./components/Login";
// import Todo from "./components/Todo";
// import Counter from "./components/Counter";
// import Toggle from "./components/Toggle";
// import Timer from "./components/Timer";
// import Search from "./components/SearchBar";
// import Accordian from "./components/Accordian";
// import DropDown from "./components/DropDown";
// import TwoDropDown from "./components/TwoDropdown";
// import Tooltip from "./components/Tooltip";
// import Theme from "./components/Theme";
// import { useState, useContext } from "react";
// import { ThemeContext } from "./utility/context";
// import OTP from "./components/OTPgenerator";
// import PasswordGenerator from "./components/PasswordGen";
// import StarRating from "./components/StarRating";
// import ApiCall from "./components/Api";
// import ProgressBar from "./components/ProgressBar";
// import SearchDebounce from "./components/SearchDebounce";
// import Memoization from "./components/useMemo";
// import Callback from "./components/useCallback";
// import RefDOM from "./components/useRef";
// import Typewriter from "./components/Typewriter";
// import DragDrop from "./components/Drag&Drop";
// import FormLogin from "./components/Forms";
// import Tabs from "./components/TabbedInterface";
// import CopyToClipboard from "./components/Clipboard";
// import ParentProgress from "./components/ProgressBar";
// import Pagination from "./components/Pagination";
import MemoryGame from "./components/Game";
import Pomodoro from "./components/Pomodoro";

function App() {
  // const data = useContext(ThemeContext);
  // const { theme } = data;
  // const [mode, setMode] = useState(theme);

  return (
    <>
      <div className="app">
        {/* <Todo />
        <Counter />
        <Toggle />
        <Timer />
        <Tooltip />
        <Accordian />
        <Search />
        <DropDown />
        <TwoDropDown />
        <ThemeContext.Provider value={{ theme: mode, setMode }}>
          <Theme />
        </ThemeContext.Provider>
        <OTP />
        <PasswordGenerator />
        <StarRating />
        <ApiCall/>
        <ProgressBar/>
        <SearchDebounce/>
        <Memoization/>
        <RefDOM/> 
        <LocalStorage />
        <Login/>
         <Callback/>
          <Typewriter/> 
              <Tabs />
         <DragDrop/>
        <FormLogin /> 
        <CopyToClipboard/>
        <ParentProgress />
        <Pagination/>*/}
        {/* <MemoryGame /> */}
        <Pomodoro/>
      </div>
    </>
  );
}

export default App;
