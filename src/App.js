import Todos from "./components/Todos/todos.component";
import { TodosContextProvider } from "./contexts/todos.context";

import "./App.css";

function App() {
  return (
    <TodosContextProvider>
      <div>
        <header>
          <h1>My Todos App</h1>
        </header>
        <h2>List of todos</h2>
        <Todos />
      </div>
    </TodosContextProvider>
  );
}

export default App;
