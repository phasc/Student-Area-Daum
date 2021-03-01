import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#dashboard">Daum School</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#dashboard">Dashboard</Nav.Link>
        <Nav.Link href="#adddrop">Add/Drop</Nav.Link>
        <Nav.Link href="#schedule">Schedule</Nav.Link>
        <Nav.Link href="#user">User</Nav.Link>
      </Nav>
    </Navbar>
  )
}