import rizalImage from "../../assets/Rizal.png";
import "./Home.css";
import { useState } from "react";

function Home() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <div className="home-wrapper mt-5">
        <div className="home-content">
          <div className="image-container">
            <img src={rizalImage} alt="José Rizal" />
          </div>
          <div
            className="name-container"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <h1
              style={{
                color: "#d4a574",
                fontWeight: "600",
                fontSize: "4rem",
                letterSpacing: "0.1em",
                opacity: isHovering ? 0 : 1,
                transition: "all 0.3s ease-out",
                position: "absolute",
                whiteSpace: "nowrap",
              }}
            >
              José Rizal
            </h1>
            <h1
              style={{
                color: "#d4a574",
                fontWeight: "600",
                fontSize: "2rem",
                letterSpacing: "0.1em",
                opacity: isHovering ? 1 : 0,
                transition: "all 0.3s ease-out",
                maxWidth: "600px",
                textAlign: "center",
                lineHeight: "1.3",
              }}
            >
              José Protacio Rizal Mercado y Alonso Realonda
            </h1>
          </div>
          <div className="title-container">
            <h2
              style={{
                fontSize: "1.5rem",
                color: "#d4a574",
                fontWeight: "400",
                letterSpacing: "0.05em",
              }}
            >
              Philippine National Hero | 1861 - 1896
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#d0d0d0",
                fontStyle: "italic",
                marginTop: "1rem",
                maxWidth: "600px",
              }}
            >
              "Ang kabataan ang pag-asa ng bayan."
            </p>
          </div>
          <div className="timeline-container">
            <h3
              style={{
                fontSize: "2rem",
                color: "#d4a574",
              }}
            >
              Significant Life Events
            </h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">1861</div>
                <div className="timeline-event">Born in Calamba, Laguna</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">1872</div>
                <div className="timeline-event">
                  Three Filipino priests (GOMBURZA) executed, sparking
                  nationalist movement
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">1882</div>
                <div className="timeline-event">
                  Left for Europe to pursue higher education
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">1887</div>
                <div className="timeline-event">
                  Published "Noli Me Tangere"
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">1891</div>
                <div className="timeline-event">
                  Published "El Filibusterismo"
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">1892</div>
                <div className="timeline-event">
                  Returned to Philippines; arrested for sedition
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">1896</div>
                <div className="timeline-event">
                  Executed by firing squad; became a martyr
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
