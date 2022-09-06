import "./service.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Service = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <BsPatchCheckFill className="experience__details-icon" />
          <div className="service__head">
            <h3>Figma to Web Page</h3>
            <small className="text-light">Html, React</small>
          </div>
        </article>
        <article className="service">
          <BsPatchCheckFill className="experience__details-icon" />
          <div className="service__head">
            <h3>Responsive Websites</h3>
            <small className="text-light">Desktop, Ipad, Mobile</small>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Service;
