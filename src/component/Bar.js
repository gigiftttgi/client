import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Bar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Collage Clubs & Activities</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Clubs">Clubs</Nav.Link>
            <Nav.Link href="/Activities">Activities</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Bar;
