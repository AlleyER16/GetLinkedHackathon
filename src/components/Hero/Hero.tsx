import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Typewriter from "typewriter-effect";

import { convertRemToPixels } from "../../utils/func";

import heroTopImg from "../../assets/img/hero-top-img.png";

import starLight from "../../assets/img/star-light.png";
import starFaint from "../../assets/img/star-faint.png";

import lightBulb from "../../assets/img/light-bulb.png";

import heroChain from "../../assets/img/hero-chain.png";
import heroFire from "../../assets/img/hero-fire.png";

import heroImg from "../../assets/img/hero-img-2.png";

const Hero = () => {
  const navigate = useNavigate();

  const heroSectionEl = useRef<HTMLDivElement>({} as HTMLDivElement);

  useEffect(() => {
    const obs = new IntersectionObserver(
      function (entries) {
        const [ent] = entries;

        if (!ent.isIntersecting) {
          document.body.classList.add("sticky");
        } else {
          document.body.classList.remove("sticky");
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: `-${convertRemToPixels(8.2)}px`,
      }
    );
    obs.observe(heroSectionEl.current);

    heroSectionEl.current.classList.add("start");
  }, []);

  return (
    <section className="hero" ref={heroSectionEl}>
      <div className="hero__top">
        <h3 className="hero__top-heading">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Igniting a Revolution in HR Innovation")
                .start();
            }}
          />
        </h3>
        <img src={heroTopImg} alt="" className="hero__top-img" />
      </div>
      <div className="hero__container">
        <div className="hero__main container">
          <div className="hero__main-content">
            <img src={starLight} alt="" className="star hero__star-1" />
            <img src={starFaint} alt="" className="star hero__star-2" />
            <img src={starFaint} alt="" className="star hero__star-3" />

            <h1 className="hero__heading">
              <img src={lightBulb} className="hero__bulb-img" alt="" />
              getlinked Tech
              <br />
              Hackathon <span>1.0</span>
              <img src={heroChain} className="hero__heading-img" alt="" />
              <img src={heroFire} className="hero__heading-img" alt="" />
            </h1>
            <p className="hero__text">
              Participate in getlinked tech Hackathon 2023 stand
              <br />a chance to win a Big prize
            </p>
            <button
              className="btn hero__btn"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
            <div className="hero__time-blocks">
              <div className="hero__time-block">
                <p className="hero__time">00</p>
                <span className="hero__time-unit">H</span>
              </div>
              <div className="hero__time-block">
                <p className="hero__time">00</p>
                <span className="hero__time-unit">M</span>
              </div>
              <div className="hero__time-block">
                <p className="hero__time">00</p>
                <span className="hero__time-unit">S</span>
              </div>
            </div>
          </div>
          <img src={heroImg} alt="" className="hero__img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
