import "./NavigationBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import gunshotSound from "../../assets/gunshot.mp3";

function NavigationBar({ onNavigate }) {
  const playGunshotSound = () => {
    const audio = new Audio(gunshotSound);
    audio.play();
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <>
      <Navbar bg="black" data-bs-theme="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand
            as={NavLink}
            to="/rizal"
            className="fs-3"
            style={{
              color: "#d4a574",
              fontWeight: "bold",
              letterSpacing: "0.1em",
            }}
            onClick={playGunshotSound}
          >
            RIZAL
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={NavLink}
                to="/"
                className="fs-6 ms-3"
                onClick={playGunshotSound}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/life"
                className="fs-6 ms-3"
                onClick={playGunshotSound}
              >
                Life
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/works"
                className="fs-6 ms-3"
                onClick={playGunshotSound}
              >
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
