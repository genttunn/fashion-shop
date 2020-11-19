import React from "react";
import { Navbar, Nav } from "react-bootstrap";
export default function NavigationBar() {
  return (
    <React.Fragment>
      <Navbar
        style={{ backgroundColor: "#f2f2f2" }}
        variant="light"
        expand="lg"
        sticky="top"
      >
        <Navbar.Brand href={"/"}>Fashion Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={"/jackets"}>Jackets</Nav.Link>
            <Nav.Link href={"/shirts"}>Shirts</Nav.Link>
            <Nav.Link href={"/accessories"}>Accessories</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}
