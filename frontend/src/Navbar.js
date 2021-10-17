import React, { useContext} from "react";
import UserContext from "./UserContext";
import './Navbar.css'
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar({ logout }) {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="Navbar">
      <Navbar collapseOnSelect className="mb-2" sticky='top' fixed='top' expand="sm" bg="dark" variant='dark'>
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
                <Nav.Link href="/" className="navbar-brand">queenHive</Nav.Link>
                <Nav.Link href="/users">Users</Nav.Link>
                <Nav.Link href="/messages">Reads</Nav.Link>
                <Nav.Link href="/queens">Queens</Nav.Link>
                {currentUser ?
                    <button onClick={logout}>LogOut</button>
                  :
                    <Nav>
                      <Nav.Link href="/users/login">Login</Nav.Link>
                      <Nav.Link href="/users/signup">Signup</Nav.Link>
                    </Nav>
                  }
            
                </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
