//create a Todo - add , delete, edit
//input -> Enter -> add todo
//add todo at particular index
//checkbox
//delete -> if checked - get the index - update the array
//edit -> on double click -> get that todo in input(DOM manipulation) - edit it - update array
import { useState } from "react";
const Todo = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const handlerEnter = (e) => {
    if (e.key === "Enter") {
      setTodo([...todo, input]);
      setInput("");
    }
  };

  const handlerCheck = (deleteIndex, e) => {
    if (e.target.checked === true) {
      const result = todo.filter((item, index) => index !== deleteIndex);
      setTodo(result);
    }
  };

  const handlerEdit = (editIndex) => {
    
    console.log(editIndex);
    
  };

  return (
    <div className="todo">
      <h2>TO-DO</h2>
      <input
        type="text"
        className="input"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onKeyDown={handlerEnter}
      ></input>

      <div className="list">
        {todo.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              name="todo"
              value={item}
              onClick={(e) => {
                handlerCheck(index, e);
              }}
              
            />
          <div onDoubleClick={(e) => handlerEdit(index, e)}>{item}</div>  
          </div>
        ))}
      </div>
    </div>
  );
};
export default Todo;
