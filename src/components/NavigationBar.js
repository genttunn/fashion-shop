import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../3d-design.svg";
export default function NavigationBar() {
  return (
    <React.Fragment>
      <Navbar
        style={{ backgroundColor: "#ffffff" }}
        variant="light"
        expand="lg"
        sticky="top"
        collapseOnSelect
      >
        <Navbar.Brand href={"/"}>
          {" "}
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top mr-1"
            alt="Logo"
          />{" "}
          Stock Checker
        </Navbar.Brand>
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
