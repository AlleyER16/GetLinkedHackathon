import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { convertRemToPixels } from "../../utils/func";

import Criteria from "../../components/Criteria/Criteria";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Overview from "../../components/Overview/Overview";
import Partners from "../../components/Partners/Partners";
import Privacy from "../../components/Privacy/Privacy";
import Prizes from "../../components/Prizes/Prizes";
import Rules from "../../components/Rules/Rules";
import Timeline from "../../components/Timeline/Timeline";

import flare1 from "../../assets/img/flare-1.png";
import flare2 from "../../assets/img/flare-2.png";
import flare3 from "../../assets/img/flare-3.png";
import flare4 from "../../assets/img/flare-4.png";
import flare5 from "../../assets/img/flare-5.png";
import flare6 from "../../assets/img/flare-6.png";
import flare7 from "../../assets/img/flare-7.png";
import flare8 from "../../assets/img/flare-8.png";
import flare9 from "../../assets/img/flare-9.png";
import flare10 from "../../assets/img/flare-10.png";
import flare11 from "../../assets/img/flare-11.png";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const Home = () => {
  const href = useLocation().hash;

  useEffect(() => {
    if (!href) return;

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const scrollEl = document.querySelector(href)! as HTMLDivElement;
      const headerEl = document.querySelector(".header")! as HTMLDivElement;

      const overviewToFaqSection = document.querySelector(
        ".overview-to-faq-section"
      )! as HTMLDivElement;

      window.scroll({
        top:
          (["#faqs", "#overview"].includes(href)
            ? overviewToFaqSection.offsetTop
            : 0) +
          scrollEl.offsetTop -
          convertRemToPixels(8.2),
        behavior: "smooth",
      });

      headerEl.classList.remove("navbar--open");
    }
  }, [href]);

  return (
    <>
      <div className="header-hero">
        <img src={flare1} alt="" className="header-hero__flare-1" />
        <img src={flare2} alt="" className="header-hero__flare-2" />

        <Header />
        <Hero />
      </div>
      <div className="overview-to-faq-section">
        <img src={flare3} alt="" className="overview-to-faq-section__flare-1" />
        <img src={flare4} alt="" className="overview-to-faq-section__flare-2" />
        <img src={flare5} alt="" className="overview-to-faq-section__flare-3" />
        <img src={flare6} alt="" className="overview-to-faq-section__flare-4" />
        <Overview />
        <Rules />
        <Criteria />
        <FAQ />
      </div>
      <Timeline />
      <div className="prizes-to-privacy-section">
        <img
          src={flare7}
          alt=""
          className="prizes-to-privacy-section__flare-1"
        />
        <img
          src={flare8}
          alt=""
          className="prizes-to-privacy-section__flare-2"
        />
        <img
          src={flare9}
          alt=""
          className="prizes-to-privacy-section__flare-3"
        />
        <img
          src={flare10}
          alt=""
          className="prizes-to-privacy-section__flare-4"
        />
        <img
          src={flare11}
          alt=""
          className="prizes-to-privacy-section__flare-5"
        />
        <Prizes />
        <Partners />
        <Privacy />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
