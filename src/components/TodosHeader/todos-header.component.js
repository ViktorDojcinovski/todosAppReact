import React from "react";
import { TodosContext } from "../../contexts/todos.context";

class TodosHeader extends React.Component {
  render() {
    return (
      <>
        <TodosContext.Consumer>
          {(value) => {
            return (
              <div>
                <input
                  type="text"
                  value={value.val}
                  onChange={value.onChangeHandler}
                  onKeyUp={value.onKeyUpHandler}
                />
              </div>
            );
          }}
        </TodosContext.Consumer>
      </>
    );
  }
}

export default TodosHeader;
