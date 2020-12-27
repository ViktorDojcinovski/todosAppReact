import { NavLink } from "react-router-dom";

import "./header.component.css";

export default function Header() {
  return (
    <>
      <header>
        <h1>My App</h1>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/todos" activeClassName="active">
              Todos
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" activeClassName="active">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
}
