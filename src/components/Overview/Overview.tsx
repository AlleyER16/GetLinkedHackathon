import { useEffect, useRef } from "react";

import starPurpleSm from "../../assets/img/star-purple-sm.png";
import starPurple from "../../assets/img/star-purple.png";

import arrow from "../../assets/img/arrow.png";

import infoImg1 from "../../assets/img/info-img-1.png";

const Overview = () => {
  const overviewSectionEl = useRef<HTMLDivElement>({} as HTMLDivElement);

  useEffect(() => {
    const obs = new IntersectionObserver(
      function (entries) {
        const [ent] = entries;

        if (ent.isIntersecting) {
          overviewSectionEl.current.classList.add("start");
        }
      },
      {
        root: null,
        threshold: 0,
      }
    );
    obs.observe(overviewSectionEl.current);
  }, []);

  return (
    <section
      className="info-section info-section--overview"
      id="overview"
      ref={overviewSectionEl}
    >
      <div className="container info-section__container">
        <div className="info-section__img-block overview-img-block align-right">
          <img
            src={starPurpleSm}
            alt=""
            className="overview-img-block__star star"
          />
          <img src={arrow} alt="" className="overview-img-block__arrow arrow" />
          <img src={infoImg1} alt="" className="info-section__img" />
        </div>
        <div className="info-section__main">
          <div className="heading-primary overview-heading heading">
            <img
              src={starPurple}
              alt=""
              className="overview-heading__star star"
            />
            Introduction to getlinked
            <br />
            <span>tech Hackathon 1.0</span>
          </div>
          <div className="info-section__content content">
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
      </div>
    </section>
  );
};

export default Overview;
