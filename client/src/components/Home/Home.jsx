import rizalImage from "../../assets/Rizal.png";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home-wrapper mt-5">
        <div className="home-content">
          <div className="image-container">
            <img src={rizalImage} alt="José Rizal" />
          </div>
          <div className="name-container">
            <h1
              style={{
                color: "#d4a574",
                fontWeight: "600",
                fontSize: "4rem",
                letterSpacing: "0.1em",
              }}
            >
              José Rizal
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
