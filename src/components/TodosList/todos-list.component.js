import { TodosContext } from "../../contexts/todos.context";

import "./todos-list.component.css";

const TodosList = () => {
  return (
    <>
      <TodosContext.Consumer>
        {(value) => {
          return (
            <ul>
              {value.todos.map((todo) => {
                return (
                  <li key={todo.id}>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={function () {
                        return value.onChangeCheckboxHandler(todo.id);
                      }}
                    />
                    {todo.text}
                    <button
                      onClick={function () {
                        return value.onDeleteHandler(todo.id);
                      }}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          );
        }}
      </TodosContext.Consumer>
    </>
  );
};

export default TodosList;
