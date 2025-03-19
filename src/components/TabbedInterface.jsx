import { useState } from "react";

//create a tabbed interface - a page with many tabs - tab1,tab2,tab3
const Tabs = () => {
  const [tab, setTab] = useState("");

  const handleClick = (e) => {
    setTab(e.target.textContent);
  };

  return (
    <>
      <h1>Tabbed Interface</h1>
      <div className="tabs">
        <div className="tabHead">
          <h2 onClick={handleClick}>Tab 1</h2>
          <h2 onClick={handleClick}>Tab 2</h2>
          <h2 onClick={handleClick}>Tab 3</h2>
        </div>
        <div className="tabBody">
         {(tab === '' || tab === 'Tab 1') && <p>This content is for Tab 1. please dont modify</p>}
         {tab === "Tab 2" &&  <p>This content is for Tab 2. please dont modify</p>}
         {tab === "Tab 3" &&  <p>This content is for Tab 3. please dont modify</p>}
        </div>
      </div>
    </>
  );
};
export default Tabs;
