import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio1.jpg";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Netflix-Clone",
    demo: "https://sktsandeep1.github.io/netflix-clone/",
  },

  {
    id: 2,
    image: IMG1,
    title: "Indian Gaming Zone",
    demo: "https://sktsandeep1.github.io/indiangamingzone/",
  },

];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h4>{title}</h4>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
