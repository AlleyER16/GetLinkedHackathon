import { FormEvent, useState, useRef, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import {
  logoFacebook,
  logoInstagram,
  logoLinkedin,
  logoTwitter,
} from "ionicons/icons";

import api_client from "../../api/client";

import Header from "../../components/Header/Header";

import flare12 from "../../assets/img/flare-12.png";
import flare13 from "../../assets/img/flare-13.png";

import back from "../../assets/img/back.svg";

import starFaint from "../../assets/img/star-faint.png";
import starLight from "../../assets/img/star-light.png";
import starPurple from "../../assets/img/star-purple.png";
import useAlert from "../../hooks/useAlert/useAlert";

const Contact = () => {
  const navigate = useNavigate();

  const [contactData, setContactData] = useState({
    email: "",
    phone_number: "",
    first_name: "",
    message: "",
  });

  const submitBtnRef = useRef<HTMLButtonElement>({} as HTMLButtonElement);

  const [message, setMessage, clearMessage] = useAlert();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(contactData).some((v) => !v))
      return setMessage("warning", "Fill in all fields");

    submitBtnRef.current.innerHTML = `<div class="ripple ripple--sm"><div></div><div></div></div>`;
    submitBtnRef.current.setAttribute("disabled", "disabled");

    api_client({
      url: "/hackathon/contact-form",
      method: "POST",
      data: JSON.stringify(contactData),
    })
      .then((res) => {
        setMessage("success", "Information received successfully");

        const interval = window.setInterval(() => {
          clearRegisterData();
          window.clearInterval(interval);
        }, 3000);
      })
      .catch((err) => {
        if (err.code === "ERR_BAD_REQUEST") {
          setMessage("warning", "Make sure to fill in valid data");
        } else {
          setMessage("error", err.message);
        }
      })
      .finally(() => {
        submitBtnRef.current.innerHTML = "Register Now";
        submitBtnRef.current.removeAttribute("disabled");
      });
  };

  const clearRegisterData = () => {
    setContactData({
      email: "",
      phone_number: "",
      first_name: "",
      message: "",
    });
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactData((cntData) => ({
      ...cntData,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    clearMessage();
  }, [clearMessage, contactData]);

  return (
    <div className="contact-section">
      <img src={flare12} alt="" className="contact-section__flare-1" />
      <img src={flare13} alt="" className="contact-section__flare-2" />
      <Header custom />
      <section className="contact">
        <div className="container-2 contact__container contact-container">
          <img
            src="./assets/img/star-purple.png"
            alt=""
            className="contact-container__star star"
          />
          <div className="contact__left">
            <h1 className="contact__heading"> Get in touch </h1>
            <div className="contact__infos">
              <p>
                Contact <br />
                Information
              </p>
              <p>
                27, Alara Street <br />
                Yaba 100012 <br />
                Lagos State
              </p>
              <p>Call Us : 07067981819</p>
              <p>
                we are open from Monday-Friday
                <br />
                08:00am - 05:00pm
              </p>
            </div>
            <div className="contact__share">
              <p>Share on</p>
              <div className="footer__socials">
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
          </div>
          <div className="contact__main contact-main">
            <img src={starFaint} alt="" className="contact-main__star-1 star" />
            <img
              src={starPurple}
              alt=""
              className="contact-main__star-2 star"
            />
            <img src={starLight} alt="" className="contact-main__star-3 star" />
            <button className="contact__back" onClick={() => navigate("/")}>
              <img src={back} alt="" />
            </button>
            <div className="contact__header">
              <h3>Questions or need assistance?</h3>
              <h3>Let us know about it!</h3>
            </div>
            <p className="contact__text">
              Email us below to any question related to our event
            </p>
            <form className="contact__form" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-input"
                placeholder="First Name"
                name="first_name"
                value={contactData.first_name}
                onChange={handleInputChange}
                required
                autoComplete="off"
              />
              <input
                type="text"
                className="form-input"
                placeholder="Phone Number"
                name="phone_number"
                value={contactData.phone_number}
                onChange={handleInputChange}
                required
                autoComplete="off"
              />
              <input
                type="email"
                className="form-input"
                placeholder="Email"
                name="email"
                value={contactData.email}
                onChange={handleInputChange}
                required
                autoComplete="off"
              />
              <textarea
                rows={6}
                className="form-input"
                placeholder="Message"
                name="message"
                value={contactData.message}
                onChange={handleInputChange}
                required
                autoComplete="off"
              ></textarea>
              {message}
              <div className="align-center">
                <button className="btn" ref={submitBtnRef}>
                  Submit
                </button>
              </div>
            </form>
            <div className="contact__share contact__share--1">
              <p>Share on</p>
              <div className="footer__socials">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
