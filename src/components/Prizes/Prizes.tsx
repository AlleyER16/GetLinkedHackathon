import starFaint from "../../assets/img/star-faint.png";
import starLight from "../../assets/img/star-light.png";
import starPurple from "../../assets/img/star-purple.png";

import prizesSectionBg from "../../assets/img/prizes-section-bg.png";

import cup from "../../assets/img/cup.png";

import medal1 from "../../assets/img/medal-1.png";
import medal2 from "../../assets/img/medal-2.png";
import medal3 from "../../assets/img/medal-3.png";

const Prizes = () => {
  return (
    <section className="prizes-section">
      <img src={prizesSectionBg} alt="" className="prizes-section__bg-img" />
      <div className="container prizes-section__container prizes-container">
        <img
          src={starPurple}
          alt=""
          className="prizes-container__star-1 star"
        />
        <img src={starLight} alt="" className="prizes-container__star-2 star" />
        <div className="prizes-section__img-block"></div>
        <div className="prizes-section__main">
          <div className="prizes-section__header mb-medium">
            <div className="heading-primary prizes-heading">
              <img
                src={starPurple}
                alt=""
                className="prizes-heading__star star"
              />
              Prizes and
              <br />
              <span>Rewards</span>
            </div>
            <p>
              Highlight of the prizes or rewards for winners and <br />
              for participants.
            </p>
          </div>
          <div className="prizes-section__img-container">
            <img src={cup} alt="" className="prizes-section__prize-img" />
          </div>
          <div className="prizes-section__prizes prizes">
            <img src={starLight} alt="" className="prizes__star-1 star" />
            <img src={starLight} alt="" className="prizes__star-2 star" />
            <img src={starFaint} alt="" className="prizes__star-3 star" />
            <div className="prize">
              <img src={medal2} alt="" className="prize__img" />
              <div className="prize__main">
                <div className="prize__position">
                  <span>2nd</span>
                  <span>Runner</span>
                </div>
                <p className="prize__price">N300,000</p>
              </div>
            </div>
            <div className="prize prize--first">
              <img src={medal1} alt="" className="prize__img" />
              <div className="prize__main">
                <div className="prize__position">
                  <span>1st</span>
                  <span>Runner</span>
                </div>
                <p className="prize__price">N400,000</p>
              </div>
            </div>
            <div className="prize">
              <img src={medal3} alt="" className="prize__img" />
              <div className="prize__main">
                <div className="prize__position">
                  <span>3rd</span>
                  <span>Runner</span>
                </div>
                <p className="prize__price">N150,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
