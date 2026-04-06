import "./NavigationBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavigationBar() {
  return (
    <>
      <Navbar bg="black" data-bs-theme="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand
            as={NavLink}
            to="/"
            className="fs-3"
            style={{
              color: "#d4a574",
              fontWeight: "bold",
              letterSpacing: "0.1em",
            }}
          >
            RIZAL
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" className="fs-6 ms-3">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/life" className="fs-6 ms-3">
                Life
              </Nav.Link>
              <Nav.Link as={NavLink} to="/works" className="fs-6 ms-3">
                Works
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
