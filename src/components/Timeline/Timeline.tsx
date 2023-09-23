import starFaint from "../../assets/img/star-faint.png";
import starLight from "../../assets/img/star-light.png";
import starPurple from "../../assets/img/star-purple.png";

const Timeline = () => {
  return (
    <section className="timeline-section" id="timeline">
      <div className="container timeline-section__container">
        <div className="timeline-section__header">
          <h3 className="timeline-section__heading">Timeline</h3>
          <p className="timeline-section__heading-subtext">
            Here is the breakdown of the time we anticipate <br />
            using for the upcoming event.
          </p>
        </div>
        <div className="timeline-section__timelines timelines">
          <img src={starPurple} alt="" className="timelines__star-1 star" />
          <img src={starLight} alt="" className="timelines__star-2 star" />
          <img src={starFaint} alt="" className="timelines__star-3 star" />

          <div className="timeline">
            <div className="timeline__left">
              <div className="timeline__line timeline__line--long"></div>
              <div className="timeline__number">1</div>
            </div>
            <div className="timeline__main">
              <div className="timeline__content">
                <h4 className="timeline__heading">Hackathon Announcement</h4>
                <p className="timeline__text">
                  The getlinked tech hackathon 1.0 is formally announced to the
                  general public and teams begin to get ready to register
                </p>
              </div>
              <p className="timeline__date">November 18, 2023</p>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline__left">
              <div className="timeline__line"></div>
              <div className="timeline__number">2</div>
            </div>
            <div className="timeline__main">
              <div className="timeline__content">
                <h4 className="timeline__heading">Teams Registration begins</h4>
                <p className="timeline__text">
                  Interested teams can now show their interest in the getlinked
                  tech hackathon 1.0 2023 by proceeding to register
                </p>
              </div>
              <p className="timeline__date">November 18, 2023</p>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline__left">
              <div className="timeline__line"></div>
              <div className="timeline__number">3</div>
            </div>
            <div className="timeline__main">
              <div className="timeline__content">
                <h4 className="timeline__heading">Teams Registration ends</h4>
                <p className="timeline__text">
                  Interested Participants are no longer Allowed to register
                </p>
              </div>
              <p className="timeline__date">November 18, 2023</p>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline__left">
              <div className="timeline__line"></div>
              <div className="timeline__number">4</div>
            </div>
            <div className="timeline__main">
              <div className="timeline__content">
                <h4 className="timeline__heading">
                  Announcement of the accepted teams and ideas
                </h4>
                <p className="timeline__text">
                  All teams whom idea has been accepted into getlinked tech
                  hackathon 1.0 2023 are formally announced
                </p>
              </div>
              <p className="timeline__date">November 18, 2023</p>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline__left">
              <div className="timeline__line"></div>
              <div className="timeline__number">5</div>
            </div>
            <div className="timeline__main">
              <div className="timeline__content">
                <h4 className="timeline__heading">
                  Getlinked Hackathon 1.0 Offically Begins
                </h4>
                <p className="timeline__text">
                  Accepted teams can now proceed to build their ground breaking
                  skill driven solutions
                </p>
              </div>
              <p className="timeline__date">November 18, 2023</p>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline__left">
              <div className="timeline__line"></div>
              <div className="timeline__number">6</div>
            </div>
            <div className="timeline__main">
              <div className="timeline__content">
                <h4 className="timeline__heading">Demo Day</h4>
                <p className="timeline__text">
                  Teams get the opportunity to pitch their projects to judges.
                  The winner of the hackathon will also be announced on this day
                </p>
              </div>
              <p className="timeline__date">November 18, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
