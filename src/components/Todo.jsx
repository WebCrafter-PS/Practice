//create a Todo - add , delete, edit
//input -> Enter -> add todo
//add todo at particular index
//checkbox
//delete -> if checked - get the index - update the array
//edit -> on double click -> get that todo in input(DOM manipulation) - edit it - update array
import { useState, useRef } from "react";
const Todo = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const editRef = useRef(); //editRef = {current:null}
  const editIndex = useRef(null);

  const handlerEnter = (e) => {
    if (e.key === "Enter") {
      if (editIndex.current !== null) {
        //replace the array element
        todo.splice(editIndex.current, 1, input);

        editIndex.current = null;
      } else {
        setTodo([...todo, input]);
      }
      setInput("");
    }
  };

  const handlerCheck = (deleteIdIndex, e) => {
    if (e.target.checked === true) {
      const result = todo.filter(
        (_, index) => index !== parseInt(deleteIdIndex)
      );
      setTodo(result);
    }
  };

  const handlerEdit = (e, eIndex) => {
    //show Editable value in Input
    editRef.current.value = e.target.textContent;
    editIndex.current = eIndex;
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
        ref={editRef}
      ></input>

      <div className="list">
        {todo.map((item, index) => (
          <div key={index + "id"}>
            <input
              type="checkbox"
              name="todo"
              value={item}
              onClick={(e) => {
                handlerCheck(index + "id", e);
              }}
            />
            <div onDoubleClick={(e) => handlerEdit(e, index)}>{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Todo;
