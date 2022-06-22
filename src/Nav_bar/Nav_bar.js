import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {Link} from 'react-router-dom'

export default function MyNavbar() {

  return (
    <>
      <Navbar  expand="lg" className="navbar-dark bg-dark navbar">

        <Container >
          <Navbar.Brand href="#home">Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto  ">
              <Link to="/" className="nav-link">Movies</Link>&nbsp;&nbsp;
              <Link to="/login" className="nav-link">Login</Link>&nbsp;&nbsp;
              <Link to="/regester" className="nav-link">Register</Link>&nbsp;&nbsp;
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>

  );
}
