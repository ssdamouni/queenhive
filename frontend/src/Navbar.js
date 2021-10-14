import React, { useContext} from "react";
import './Navbar.css'
import UserContext from "./UserContext";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar({ logout }) {
  const { currentUser } = useContext(UserContext);
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          queenHive
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/users">Users</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/messages">Reads</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/queens">Queens</NavLink>
          </NavItem>
          {currentUser ?
            <NavItem>
              <button onClick={logout}>LogOut</button>
            </NavItem> :
            <NavItem>
              <NavLink to="/users/login">Login/</NavLink>
              <NavLink to="/users/signup">Signup</NavLink>
            </NavItem>}
         
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
