import "./Works.css";

function Works() {
  const cards = [
    {
      id: "work1",
      title: "To the Filipino Youth (1879)",
      link: "https://www.kapitbisig.com/philippines/poems-written-by-dr-jose-rizal-to-the-philippine-youth-by-dr-jose-rizal-english-version-of-a-la-juventud-filipina_610.html",
    },
    {
      id: "work2",
      title: "Love of Country (1888)",
      link: "https://www.scribd.com/document/950103067/text-El-Amor-Patrio?utm_source=chatgpt.com",
    },
    {
      id: "work3",
      title: "Noli Me Tangere (1887)",
      link: "https://ebookhub.ph/function/reader/read/web/viewer.php?id=test/pdf/Noli%20Me%20Tangere.pdf&di=71",
    },
    {
      id: "work4",
      title: "The Philippines a Century Hence (1889)",
      link: "https://www.gutenberg.org/files/35899/35899-h/35899-h.htm",
    },
    {
      id: "work5",
      title: "Annotations to Morga's History (1889)",
      link: "https://sirmykel.wordpress.com/wp-content/uploads/2016/07/jose-rizal-annotations-to-morgas-sucesos.pdf",
    },
    {
      id: "work6",
      title: "The Indolence of the Filipinos (1890)",
      link: "https://www.gutenberg.org/cache/epub/6885/pg6885-images.html",
    },
    {
      id: "work7",
      title: "El Filibusterismo (1891)",
      link: "https://ebookhub.ph/function/reader/read/web/viewer.php?id=test/pdf/El%20Filibusterismo.pdf&di=54",
    },
    {
      id: "work8",
      title: "Hymn to Labor (1895)",
      link: "https://www.scribd.com/doc/98006578/Hymn-to-Labor-for-the-Motherland-in-War",
    },
    {
      id: "work9",
      title: "Kundiman (1896)",
      link: "https://www.kapitbisig.com/philippines/songs-written-by-dr-jose-rizal-kundiman-ni-dr-jose-rizal-original-text-in-tagalog_530.html",
    },
    {
      id: "work10",
      title: "Mi Último Adiós (1896)",
      link: "https://www.kapitbisig.com/philippines/poems-written-by-dr-jose-rizal-my-last-farewell-by-dr-jose-rizal-english-version-of-mi-ultimo-adios_87.html",
    },
  ];

  const handleCardClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div className="works-wrapper mt-5">
        <div className="works-content">
          <div className="works-title">
            <h1>WORKS</h1>
          </div>
        </div>
        <div className="works-grid">
          {cards.map((card, index) => (
            <div
              key={index}
              className="works-card"
              onClick={() => handleCardClick(card.link)}
              style={{ cursor: "pointer" }}
            >
              {card.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Works;
