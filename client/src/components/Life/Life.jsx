import "./Life.css";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Life() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: "basicProfile",
      title: "BASIC PROFILE",
      content: `Full Name: José Protacio Rizal Mercado y Alonso Realonda

Birth and Death Dates: June 19, 1861 – December 30, 1896

Birthplace: Calamba, Laguna

Nationality: Filipino

Occupations: Writer, Physician, Nationalist, Polymath

José Protacio Rizal Mercado y Alonso Realonda was a Filipino polymath, nationalist, and the most prominent advocate for reform in the Spanish colony of the Philippines during the late nineteenth century. Born into a family of landowners and hacienda tenants in Calamba, Rizal was the seventh of eleven children. The Mercado family was engaged in agriculture, especially sugar farming, and had become financially stable and socially influential. He was fluent in multiple languages including Spanish, English, German, French, Italian, Portuguese, and his native Tagalog. His works as a writer and physician combined with his nationalist ideals made him one of the most influential figures in Philippine history.

Rizal's impact extended far beyond his lifetime. His novels and essays exposed the injustices of Spanish colonial rule and inspired a generation of Filipino revolutionaries. Although he was executed by the Spanish authorities, his legacy as a national hero and reformist continues to shape Philippine national identity to this day.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

REFERENCES:

Guerrero, W. E. (1963). The Life and Works of Jose Rizal. National Historical Institute.

Schumacher, J. N. (1997). The Propaganda Movement: 1880-1895. Ateneo de Manila University Press.

Zaide, G. F., & Zaide, S. M. (2004). Jose Rizal: Life, Works, and Writings of a Genius, Writer, Scientist, and National Hero. All Nations Publishing Co.`,
    },
    {
      id: "familyBackground",
      title: "FAMILY BACKGROUND",
      content: `Rizal was born on June 19, 1861, in Calamba, Laguna, to Francisco Mercado and Teodora Alonso. He was the seventh child among eleven children in a family of Filipino-Chinese descent. His father, Francisco Mercado, was a successful farmer and merchant, while his mother, Teodora Alonso Realonda, came from a prominent mestiza family.

The Mercado family was relatively well-to-do, which allowed Rizal to receive a quality education. His siblings included Paciano (his eldest brother and confidant), Maria, Soledad, Justina, Josefa, Narcisa, and others. Paciano would later play an important role in Rizal's life as both a family representative and supporter of nationalist ideals.

The family lived during a time of Spanish colonial rule, and their mestizo status provided them with certain privileges and educational opportunities not available to pure Filipinos. However, this position also made them aware of the inequalities and injustices within the colonial system. The family's influence and values instilled in Rizal a sense of responsibility toward his people and a desire for social reform.

Despite the family's relative comfort, they were not immune to the hardships of colonial life. The experience of witnessing injustice and witnessing his family members' struggles contributed to Rizal's conviction that change was necessary.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

REFERENCES

Agoncillo, T. A. (1990). History of the Filipino People (8th ed.). Garotech Publishing.

Golay, F. H. (1997). Face of Empire: United States-Philippine Relations, 1898-1946. Pacific Monograph.

Zaide, G. F., & Zaide, S. M. (2004). Jose Rizal: Life, Works, and Writings of a Genius, Writer, Scientist, and National Hero. All Nations Publishing Co.`,
    },
    {
      id: "relationships",
      title: "RELATIONSHIPS",
      content: `Rizal's personal and intellectual relationships profoundly shaped his character, work, and contributions to Philippine nationalism. Among his most influential relationships was his bond with his brother Paciano, who served as a mentor, confidant, and supporter of Rizal's nationalist ideals. Paciano's involvement in reform movements and his financial support enabled many of Rizal's endeavors.

In matters of the heart, Rizal experienced several romantic relationships that influenced his personal life and literary work. He had a significant romantic attachment to Segunda Katigbak during his youth, and later developed feelings for Leonor Rivera, the daughter of a wealthy Filipino merchant. Leonor remained an important figure in his life and corresponded with him during his time in Europe. Later, while exiled in Dapitan, Rizal formed a relationship with Josephine Bracken, an Irish woman who lived with him and bore him a son.

Beyond his personal life, Rizal's intellectual relationships were equally significant. He collaborated closely with fellow members of the Propaganda Movement, including Marcelo H. del Pilar, Graciano López Jaena, and Mariano Jhocson. These intellectuals shared Rizal's vision of reform and worked together to expose injustices through writings and activism. His correspondence with Spanish reformers and European intellectuals provided crucial intellectual influences.

Rizal also maintained close relationships with mentors such as Domingo Faustino Sarmiento in Argentina, whom he befriended during his travels. These connections broadened his perspective and reinforced his commitment to social progress and human rights. His relationships with various people—family, romantic partners, colleagues, and mentors—collectively reinforced his conviction that individual connections and shared ideals could drive meaningful social change.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

REFERENCES

Guerrero, W. E. (1963). The Life and Works of Jose Rizal. National Historical Institute.

Zaide, G. F., & Zaide, S. M. (2004). Jose Rizal: Life, Works, and Writings of a Genius, Writer, Scientist, and National Hero. All Nations Publishing Co.

Agoncillo, T. A. (1990). History of the Filipino People (8th ed.). Garotech Publishing.`,
    },
    {
      id: "education",
      title: "EDUCATION",
      content: `Rizal received his primary education in Calamba under a private tutor before attending schools in Binan and Manila. He studied at the Ateneo Municipal de Manila from 1872 to 1877, where he excelled in various subjects and earned the nickname "Maestrillo" (little teacher) due to his intelligence and academic prowess.

After his studies at the Ateneo, Rizal enrolled at the University of Santo Tomas to study medicine and philosophy. He later pursued additional medical studies in Spain, attending the Universidad de Madrid from 1882 to 1885. During his time in Europe, he continued his education in Berlin, where he studied ophthalmology and other medical specialties.

Rizal's education was comprehensive and multilingual. He became proficient in Spanish, English, German, French, Italian, Portuguese, and other languages. His academic pursuits extended beyond medicine to include literature, history, philosophy, and social sciences. He attended lectures on anthropology and studied works by contemporary European thinkers.

His education abroad exposed him to liberal ideas, democratic principles, and Enlightenment philosophy that would significantly influence his political thought. He corresponded with Spanish reformers and intellectuals, absorbing progressive ideas about governance, social justice, and national independence. These experiences abroad transformed Rizal into not just a physician and writer, but a committed reformer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

REFERENCES

Corpuz, O. D. (1997). The Roots of Filipino Nationalism. Aklahi Foundation.

Guerrero, W. E. (1963). The Life and Works of Jose Rizal. National Historical Institute.

Schumacher, J. N. (1997). The Propaganda Movement: 1880-1895. Ateneo de Manila University Press.`,
    },
    {
      id: "travels",
      title: "TRAVELS",
      content: `Rizal's travels throughout Europe from 1882 to 1892 were transformative experiences that shaped his political ideology and social consciousness. He first traveled to Spain in 1882 to continue his medical studies at the Universidad de Madrid, but he also used this opportunity to observe Spanish society and political systems.

During his time in Europe, Rizal visited multiple countries including France, Germany, Belgium, Switzerland, and Austria. In each location, he studied local customs, observed social conditions, and engaged with intellectual communities. In Paris, he studied ophthalmology at the Université de Paris. In Berlin, he attended university lectures and conducted research while working with prominent ophthalmologists.

These travels exposed Rizal to the ideas of the European Enlightenment, liberalism, and nationalist movements. He witnessed the scientific and technological advances of industrialized Europe and contrasted these with the conditions in the Philippines under Spanish colonial rule. He traveled during a period of active political reform movements across Europe, where he encountered ideas about democracy, national self-determination, and social justice.

Rizal maintained detailed travel journals and correspondence during these journeys. His observations formed the basis of many of his political writings and influenced his vision for Philippine reform. He met with Filipino expatriates, Spanish reformers, and European intellectuals who shared his concerns about social progress and human rights. These international connections strengthened his resolve to work for change in his homeland.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

REFERENCES

Fernández, D. G. (1996). The Life and Times of Jose Rizal. National Historical Institute.

Letigio, J. (1977). Jose Rizal and His Time. National Historical Institute.

Schumacher, J. N. (1997). The Propaganda Movement: 1880-1895. Ateneo de Manila University Press.`,
    },
    {
      id: "reformist",
      title: "LIFE AS A REFORMIST",
      content: `Rizal's life as a reformist was marked by his commitment to social change through intellectual and literary means. Rather than advocating for immediate armed rebellion, he believed that education, exposure of injustice, and moral reform could inspire lasting change. His strategy of peaceful reform made him unique among Filipino nationalist leaders.

His most significant contributions were his two novels: "Noli Me Tangere" (Touch Me Not, 1887) and "El Filibusterismo" (The Subversion, 1891). These works depicted the corruption and abuses of Spanish colonial administrators, the injustices of the church, and the exploitation of Filipino workers. Through vivid characters and compelling narratives, Rizal exposed the realities of colonial life to an educated Filipino audience.

Beyond his novels, Rizal was active in the Propaganda Movement, a reform organization that advocated for Filipino representation in the Spanish Cortes, secular education, and civil rights. He contributed essays and articles to Filipino periodicals and newspapers, discussing topics ranging from social reform to scientific progress.

Rizal also worked as a physician, treating patients regardless of their social status. He established a small clinic in Dapitan where he provided medical services to the local population. This work demonstrated his commitment to improving the lives of ordinary Filipinos and using his skills for the benefit of his people.

His correspondence with other reformers and intellectuals formed a network of change-makers. However, as the Spanish authorities grew increasingly threatened by his influence, they arrested him, and he was eventually executed for sedition and rebellion.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

REFERENCES

Guerrero, W. E. (1963). The Life and Works of Jose Rizal. National Historical Institute.

Locsin, L. A. (2003). The Rizal Code: The Life, Works, and Writings of Jose Rizal. Philippine National Historical Society.

Schumacher, J. N. (1997). The Propaganda Movement: 1880-1895. Ateneo de Manila University Press.`,
    },
    {
      id: "death",
      title: "DEATH",
      content: `Rizal was executed by firing squad on December 30, 1896, at Bagumbayan (now known as Luneta Park), Manila. He was accused of inciting sedition and rebellion against Spanish colonial rule. Although Rizal himself denied direct involvement in armed revolutionary activities, his influential writings and ideological contributions to the nationalist cause made him a target for Spanish authorities.

His arrest came during a period of heightened tension in the Philippines. The Katipunan, a secret revolutionary society founded by Andrés Bonifacio, had begun an armed rebellion in August 1896. Spanish officials blamed Rizal's nationalist writings for inspiring the uprising and ordered his execution to prevent further unrest.

The charges against Rizal were controversial even at the time. Many observers noted that Rizal's published works advocated for reform, not revolution. However, the Spanish colonial government viewed his influence as a threat to their authority and used his execution as a warning to other Filipino intellectuals.

In his final moments, Rizal maintained his dignity and composure. According to historical accounts, he faced the firing squad with remarkable courage. His last act was to hide a message in his prison cell expressing his patriotic love for the Philippines. This message, known as his "final goodbye," became an enduring symbol of his commitment to his country.

Rizal's death did not end his influence; rather, it transformed him into a martyr for Philippine independence. His execution on December 30 became a significant date in Filipino national consciousness, commemorated annually as Rizal Day. His vision of reform through education and moral change continued to inspire Filipino revolutionaries and nation-builders for generations to come.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

REFERENCES

Agoncillo, T. A. (1990). History of the Filipino People (8th ed.). Garotech Publishing.

Guerrero, W. E. (1963). The Life and Works of Jose Rizal. National Historical Institute.

Schumacher, J. N. (1997). The Propaganda Movement: 1880-1895. Ateneo de Manila University Press.`,
    },
  ];

  return (
    <>
      <div className="life-wrapper mt-5">
        <div className="life-content">
          <div className="life-title">
            <h1>LIFE</h1>
          </div>
        </div>
        <div className="content-grid">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`content-card ${index === 0 ? "basic-profile" : ""}`}
              onClick={() => setSelectedCard(card)}
              style={{ cursor: "pointer" }}
            >
              {card.title}
            </div>
          ))}
        </div>

        <Modal
          show={Boolean(selectedCard)}
          onHide={() => setSelectedCard(null)}
          size="lg"
          centered
          dialogClassName="life-modal-dialog"
          contentClassName="life-modal"
        >
          <Modal.Header closeButton className="life-modal-header">
            <Modal.Title>{selectedCard?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="life-modal-body">
            {selectedCard?.content}
          </Modal.Body>
          <Modal.Footer className="life-modal-footer">
            <Button variant="secondary" onClick={() => setSelectedCard(null)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Life;
