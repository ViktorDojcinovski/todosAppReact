import { BrowserRouter, Route, Link } from "react-router-dom";

import Todos from "./components/Todos/todos.component";
import { TodosContextProvider } from "./contexts/todos.context";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <TodosContextProvider>
        <div>
          <header>
            <h1>My Todos App</h1>
          </header>
          <h2>
            <a href="/todos">List of todos</a>
          </h2>
          <Route path="/todos" component={Todos} />
        </div>
      </TodosContextProvider>
    </BrowserRouter>
  );
}

export default App;
