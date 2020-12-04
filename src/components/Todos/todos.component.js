import { useState } from "react";

import TodosList from "../TodosList/todos-list.component";

const Todos = () => {
  const [val, setVal] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      completed: true,
    },
    { id: 2, text: "Learn JavaScript", completed: false },
    { id: 3, text: "Learn CSS", completed: false },
  ]);

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setVal(e.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" value={val} onChange={onChangeHandler} />
      </div>
      <TodosList todos={todos} />
    </div>
  );
};

export default Todos;
