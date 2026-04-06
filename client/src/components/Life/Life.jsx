import "./Life.css";

function Life() {
  return (
    <>
      <div className="life-wrapper mt-5">
        <div className="life-content">
          <div className="life-title">
            <h1>LIFE</h1>
          </div>
        </div>
        <div className="content-grid">
          <div className="content-card basic-profile">BASIC PROFILE</div>
          <div className="content-card">FAMILY BACKGROUND</div>
          <div className="content-card">EDUCATION</div>
          <div className="content-card">TRAVELS</div>
          <div className="content-card">LIFE AS A REFORMIST</div>
          <div className="content-card">DEATH</div>
        </div>
      </div>
    </>
  );
}

export default Life;
