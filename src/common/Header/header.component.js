import { Link } from "react-router-dom";

import "./header.component.css";

export default function Header() {
  return (
    <>
      <header>
        <h1>My App</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
