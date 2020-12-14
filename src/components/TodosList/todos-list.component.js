import "./todos-list.component.css";

const TodosList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={function () {
                return props.onChangeCheckbox(todo.id);
              }}
            />
            {todo.text}
            <button
              onClick={function () {
                return props.onDelete(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodosList;
