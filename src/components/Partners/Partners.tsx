import starLight from "../../assets/img/star-light.png";
import starPurple from "../../assets/img/star-purple.png";
import starPurpleSm from "../../assets/img/star-purple-sm.png";

import partner1 from "../../assets/img/partner-1.png";
import partner2 from "../../assets/img/partner-2.png";
import partner3 from "../../assets/img/partner-3.png";
import partner4 from "../../assets/img/partner-4.png";
import partner5 from "../../assets/img/partner-5.png";
import partner6 from "../../assets/img/partner-6.png";

const Partners = () => {
  return (
    <section className="partners-section">
      <div className="container partners-section__container">
        <div className="timeline-section__header mb-large">
          <h3 className="timeline-section__heading">Partners and Sponsors</h3>
          <p className="timeline-section__heading-subtext">
            Getlinked Hackathon 1.0 is honored to have the following major
            <br />
            companies as its partners and sponsors
          </p>
        </div>
        <div className="partners-section__block partners">
          <img src={starPurple} alt="" className="partners__star-1 star" />
          <img src={starPurpleSm} alt="" className="partners__star-2 star" />
          <img src={starLight} alt="" className="partners__star-3 star" />
          <div>
            <img src={partner1} alt="" />
          </div>
          <div className="partners-section__v-divider"></div>
          <div>
            <img src={partner2} alt="" />
          </div>
          <div className="partners-section__v-divider"></div>
          <div>
            <img src={partner3} alt="" />
          </div>

          <div className="partners-section__h-divider"></div>
          <div></div>
          <div className="partners-section__h-divider"></div>
          <div></div>
          <div className="partners-section__h-divider"></div>

          <div>
            <img src={partner4} alt="" />
          </div>
          <div className="partners-section__v-divider"></div>
          <div>
            <img src={partner5} alt="" />
          </div>
          <div className="partners-section__v-divider"></div>
          <div>
            <img src={partner6} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
