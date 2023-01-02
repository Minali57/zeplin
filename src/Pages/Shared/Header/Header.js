import { useState } from "react";
import { Container, NavDropdown } from "react-bootstrap";
// import "./Header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <ToastContainer position="top-center" />
      <Navbar style={{ padding: "0px 120px" }} className="border-bottom">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/")}>Explore</Nav.Link>
              <Nav.Link onClick={() => navigate("/story")}>Stories</Nav.Link>
              <NavDropdown title="Policy" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => navigate("/policy")}>
                  cookies policy
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav className="ms-auto">
              <img
                src={"/assets/userimg.png"}
                alt="profileIMage"
                style={{ borderRadius: "90%", width: "35px", height: "35px" }}
              />
              <NavDropdown title="Evan Donohue" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => navigate("/edit")}>
                  Edit profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/timesheet")}>
                  Volunteering timesheet
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/edit")}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <hr /> */}
      <Outlet />
    </div>
  );
}

export default Header;
