import { useState } from "react";

import TodosList from "../TodosList/todos-list.component";
import TodosHeader from "../TodosHeader/todos-header.component";
import TodosFooter from "../TodosFooter/todos-footer.component";

const Todos = () => {
  return (
    <div id="todos">
      <TodosHeader />
      <TodosList />
      <TodosFooter />
    </div>
  );
};

export default Todos;
