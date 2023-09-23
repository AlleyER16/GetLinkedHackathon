import { IonIcon } from "@ionic/react";
import { addOutline, removeOutline } from "ionicons/icons";

import starPurple from "../../assets/img/star-purple.png";

import infoImg4 from "../../assets/img/info-img-4.png";

const FAQ = () => {
  return (
    <section className="info-section faq-section" id="faqs">
      <div className="container info-section__container">
        <div className="info-section__main">
          <div className="heading-primary faq-header">
            <img src={starPurple} alt="" className="faq-header__star star" />
            Frequently Ask
            <br />
            <span>Questions</span>
          </div>
          <p className="faq-heading mb-large">
            We got answers to the questions that you might
            <br />
            want to ask about
            <span className="light">getlinked Hackathon 1.0</span>
          </p>
          <div>
            <div className="accordion">
              <div className="accordion__header">
                <p>Can I work on a project I started before the hackathon?</p>
                <span className="accordion__toggle">
                  <IonIcon icon={addOutline} />
                  <IonIcon icon={removeOutline} />
                </span>
              </div>
              <div className="accordion__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                est officia consequatur laborum veritatis impedit et sapiente,
                aliquid a. Quaerat atque ex excepturi quod praesentium soluta at
                molestias. Placeat, consectetur.
              </div>
            </div>
            <div className="accordion">
              <div className="accordion__header">
                <p>What happens if I need help during the hackathon?</p>
                <span className="accordion__toggle">
                  <IonIcon icon={addOutline} />
                  <IonIcon icon={removeOutline} />
                </span>
              </div>
              <div className="accordion__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                est officia consequatur laborum veritatis impedit et sapiente,
                aliquid a. Quaerat atque ex excepturi quod praesentium soluta at
                molestias. Placeat, consectetur.
              </div>
            </div>
            <div className="accordion">
              <div className="accordion__header">
                <p>What happens if I don't have an idea for a project?</p>
                <span className="accordion__toggle">
                  <IonIcon icon={addOutline} />
                  <IonIcon icon={removeOutline} />
                </span>
              </div>
              <div className="accordion__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                est officia consequatur laborum veritatis impedit et sapiente,
                aliquid a. Quaerat atque ex excepturi quod praesentium soluta at
                molestias. Placeat, consectetur.
              </div>
            </div>
            <div className="accordion">
              <div className="accordion__header">
                <p>Can I join a team or do I have to come with one?</p>
                <span className="accordion__toggle">
                  <IonIcon icon={addOutline} />
                  <IonIcon icon={removeOutline} />
                </span>
              </div>
              <div className="accordion__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                est officia consequatur laborum veritatis impedit et sapiente,
                aliquid a. Quaerat atque ex excepturi quod praesentium soluta at
                molestias. Placeat, consectetur.
              </div>
            </div>
            <div className="accordion">
              <div className="accordion__header">
                <p>What happens after the hackathon ends</p>
                <span className="accordion__toggle">
                  <IonIcon icon={addOutline} />
                  <IonIcon icon={removeOutline} />
                </span>
              </div>
              <div className="accordion__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                est officia consequatur laborum veritatis impedit et sapiente,
                aliquid a. Quaerat atque ex excepturi quod praesentium soluta at
                molestias. Placeat, consectetur.
              </div>
            </div>
            <div className="accordion">
              <div className="accordion__header">
                <p>Can I work on a project I started before the hackathon?</p>
                <span className="accordion__toggle">
                  <IonIcon icon={addOutline} />
                  <IonIcon icon={removeOutline} />
                </span>
              </div>
              <div className="accordion__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                est officia consequatur laborum veritatis impedit et sapiente,
                aliquid a. Quaerat atque ex excepturi quod praesentium soluta at
                molestias. Placeat, consectetur.
              </div>
            </div>
          </div>
        </div>
        <div className="info-section__img-block info-section__img-block--lg align-right">
          <img src={infoImg4} alt="" className="info-section__img" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
