import { useState } from "react";

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const Toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div style={{ border: "1px solid red", margin: "5px" }}>
      <h1>Accordian</h1>
      <Panel title="India" isActive={activeIndex === 0} show={() => Toggle(0)}>
        India is a diverse place. It is beautiful beyond imagination.
      </Panel>
      <Panel title="Canada" isActive={activeIndex === 1} show={() => Toggle(1)}>
        Canada has became the IT hub for Indians and other Engineers.
      </Panel>
      <Panel title="China" isActive={activeIndex === 2} show={() => Toggle(2)}>
        China is one of the most populous country. where people speak Mandarian.
      </Panel>
    </div>
  );
};
export default Accordian;

// eslint-disable-next-line react/prop-types
const Panel = ({ title, children, show, isActive }) => {
  return (
    <div
      style={{ border: "1px solid black", margin: "2px", textAlign: "center" }}
    >
      <h2 onClick={show}>{title}</h2>
      {isActive && <p>{children}</p>}
    </div>
  );
};
