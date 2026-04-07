import "./NavigationBar.css";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import gunshotSound from "../../assets/gunshot.mp3";

function NavigationBar({ onNavigate }) {
  const [isMuted, setIsMuted] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.localStorage.getItem("rizalweb-audio-muted") === "true";
  });
  const gunshotAudioRef = useRef(new Audio(gunshotSound));

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("rizalweb-audio-muted", String(isMuted));
    }
  }, [isMuted]);

  const playGunshotSound = () => {
    if (!isMuted) {
      const audio = gunshotAudioRef.current;
      audio.currentTime = 0;
      audio.volume = 0.35;
      audio.play().catch(() => {});
    }
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
            className="fs-3 brand-link"
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
                className="fs-6 ms-3 nav-item-link"
                onClick={playGunshotSound}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/life"
                className="fs-6 ms-3 nav-item-link"
                onClick={playGunshotSound}
              >
                Life
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/works"
                className="fs-6 ms-3 nav-item-link"
                onClick={playGunshotSound}
              >
                Works
              </Nav.Link>
              <button
                type="button"
                className="audio-mute-toggle ms-3"
                aria-label={
                  isMuted ? "Unmute sound effects" : "Mute sound effects"
                }
                onClick={() => setIsMuted((prevMuted) => !prevMuted)}
              >
                <span className="audio-mute-icon" aria-hidden="true">
                  {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </span>
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
