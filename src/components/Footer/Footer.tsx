import { Link, useNavigate } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import {
  call,
  location,
  logoFacebook,
  logoInstagram,
  logoLinkedin,
  logoTwitter,
} from "ionicons/icons";

import starPurpleSm from "../../assets/img/star-purple-sm.png";
import starFaint from "../../assets/img/star-faint.png";
import starLight from "../../assets/img/star-light.png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__grid footer-section">
          <img src={starLight} alt="" className="footer-section__star-1 star" />
          <img
            src={starPurpleSm}
            alt=""
            className="footer-section__star-2 star"
          />
          <img src={starFaint} alt="" className="footer-section__star-3 star" />
          <img src={starLight} alt="" className="footer-section__star-4 star" />
          <div className="footer__block">
            <h1 className="header__brand" onClick={() => navigate("/")}>
              <span>get</span>
              <span>linked</span>
            </h1>
            <p>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <div className="footer__quick-links">
              <Link to="#" className="footer__link">
                Terms of Use
              </Link>
              <div></div>
              <Link to="#" className="footer__link">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="footer__block">
            <h3 className="footer__block-heading">Useful Links</h3>
            <ul className="footer__menu">
              <li>
                <Link to="/#overview" className="footer__link">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/#timeline" className="footer__link">
                  Timeline
                </Link>
              </li>
              <li>
                <Link to="/#faqs" className="footer__link">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/register" className="footer__link">
                  Register
                </Link>
              </li>
            </ul>
            <div className="footer__socials">
              <span>Follow us</span>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <IonIcon icon={logoInstagram} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <IonIcon icon={logoTwitter} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <IonIcon icon={logoFacebook} />
              </a>
              <a
                href="https://www.linkedln.com"
                target="_blank"
                rel="noreferrer"
              >
                <IonIcon icon={logoLinkedin} />
              </a>
            </div>
          </div>
          <div className="footer__block">
            <h3 className="footer__block-heading">Contact Us</h3>
            <div className="footer__contacts">
              <div className="footer__contact">
                <IonIcon icon={call} />
                <p>+234 679 81819</p>
              </div>
              <div className="footer__contact">
                <IonIcon icon={location} />
                <p>
                  27,Alara Street
                  <br />
                  Yaba 100012
                  <br />
                  Lagos State
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          All rights reserved. © getlinked Ltd.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
