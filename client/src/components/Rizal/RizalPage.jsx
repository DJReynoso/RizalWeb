import "./RizalPage.css";
import glassFlagArt from "../../assets/glassFlag.png";

const poemLines = [
  "In fragments unrecognizable, the pearl of the orient sea",
  "Centuries whisper of its olden glory, a nation borne of the same glass",
  "The stars still remember the time of its shattering",
  "Scattered across the seas out of distance, unified in oppression",
  "Until one man stood still to weave its pieces to life — a shot heard around the world",
  "A glimpse of its ancient wonder sprang, the sun and its eight rays rose in awe",
  "Rizal, whose death brought every shard from oppression to liberation",
  "The broken glass no longer wept apart",
  "Forged whole, its fractures remain to tell the beauty of each fragment",
];

function RizalPage() {
  return (
    <div className="rizal-wrapper mt-5">
      <div className="rizal-content">
        <header className="rizal-header">
          <h1>RIZAL IN ART & POETRY</h1>
          <p>A visual and literary tribute to national awakening.</p>
        </header>

        <section className="rizal-showcase">
          <article className="rizal-panel rizal-art-panel">
            <img
              src={glassFlagArt}
              alt="Fragmented Nation artwork"
              className="rizal-art-image"
            />
            <div className="rizal-meta">
              <h2>Fragmented Nation</h2>
              <p>Artist: Daniel Jess Reynoso</p>
            </div>
          </article>

          <article className="rizal-panel rizal-poem-panel">
            <h2>Fragments</h2>
            <p className="rizal-author">Author: Daniel Jess Reynoso</p>
            <div className="rizal-poem-text">
              {poemLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default RizalPage;
