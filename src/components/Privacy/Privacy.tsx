import { IonIcon } from "@ionic/react";
import { checkmarkOutline } from "ionicons/icons";

import starPurple from "../../assets/img/star-purple.png";
import starPurpleSm from "../../assets/img/star-purple-sm.png";
import starFaint from "../../assets/img/star-faint.png";

import securityImg from "../../assets/img/security-img.png";

const Privacy = () => {
  return (
    <section className="privacy-section">
      <div className="container privacy-section__container">
        <div className="privacy-section__main privacy">
          <img src={starFaint} alt="" className="privacy__star-1 star" />
          <img src={starPurpleSm} alt="" className="privacy__star-2 star" />
          <img src={starPurple} alt="" className="privacy__star-3 star" />
          <h3 className="heading-primary">
            Privacy Policy and <br />
            <span>Terms</span>
          </h3>
          <div className="info-section__content mb-large">
            <p>Last updated on September 12, 2023</p>
            <p className="privacy-heading">
              Below are our privacy & policy, which outline a lot of goodies.
              <br />
              it’s our aim to always take of our participant
            </p>
          </div>
          <div className="privacy-section__info">
            <p className="mb-large">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <div className="mb-small">
              <h3 className="privacy-section__info-heading">
                Licensing Policy
              </h3>
              <p className="privacy-section__info-sub-heading">
                Here are terms of our Standard License:
              </p>
            </div>
            <ul className="mb-small privacy-section__list">
              <li>
                <span>
                  <IonIcon icon={checkmarkOutline} />
                </span>
                <p>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </li>
              <li>
                <span>
                  <IonIcon icon={checkmarkOutline} />
                </span>
                <p>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </li>
            </ul>
            <div className="align-center">
              <button className="btn">Read More</button>
            </div>
          </div>
        </div>
        <div className="privacy-section__img-block">
          <img src={securityImg} alt="" className="privacy-section__img" />
        </div>
      </div>
    </section>
  );
};

export default Privacy;
