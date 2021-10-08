import React from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar({ logout }) {
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
          {localStorage["queenhive-token"] ?
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
