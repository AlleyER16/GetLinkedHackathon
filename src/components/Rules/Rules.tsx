import starFaint from "../../assets/img/star-faint.png";
import starLight from "../../assets/img/star-light.png";

import infoImg2 from "../../assets/img/info-img-2.png";

const Rules = () => {
  return (
    <section className="info-section">
      <div className="container info-section__container">
        <div className="info-section__main rules-and-reg-main">
          <img
            src={starFaint}
            alt=""
            className="rules-and-reg-main__star-1 star"
          />
          <img
            src={starLight}
            alt=""
            className="rules-and-reg-main__star-2 star"
          />

          <div className="heading-primary">
            Rules and
            <br />
            <span>Guidelines</span>
          </div>
          <div className="info-section__content">
            <p>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
        </div>
        <div className="info-section__img-block">
          <img src={infoImg2} alt="" className="info-section__img" />
        </div>
      </div>
    </section>
  );
};

export default Rules;
