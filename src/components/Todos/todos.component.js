import { useState } from "react";

import TodosList from "../TodosList/todos-list.component";
import TodosHeader from "../TodosHeader/todos-header.component";

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
    setVal(e.target.value);
  };

  const onKeyUpHandler = (e) => {
    if (e.key === "Enter" && val !== "") {
      setTodos(
        todos.concat({ id: todos.length + 1, text: val, completed: false })
      );
      setVal("");
    }
  };

  const onChangeCheckboxHandler = (id) => {
    console.log(id);
    const newTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <div>
      <TodosHeader
        val={val}
        onChangeHandler={onChangeHandler}
        onKeyUpHandler={onKeyUpHandler}
      />
      <TodosList
        todos={todos}
        onChangeCheckbox={(id) => onChangeCheckboxHandler(id)}
      />
    </div>
  );
};

export default Todos;
