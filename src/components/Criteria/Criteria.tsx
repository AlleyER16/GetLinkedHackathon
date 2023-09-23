import starFaint from "../../assets/img/star-faint.png";
import starLight from "../../assets/img/star-light.png";
import starPurple from "../../assets/img/star-purple.png";

import infoImg3 from "../../assets/img/info-img-3.png";

const Criteria = () => {
  return (
    <section className="info-section criteria-section">
      <img src={starLight} alt="" className="criteria-section__star star" />
      <div className="container info-section__container">
        <div className="info-section__img-block criteria-img-block align-right">
          <img
            src={starPurple}
            alt=""
            className="criteria-img-block__star-1 star"
          />
          <img
            src={starFaint}
            alt=""
            className="criteria-img-block__star-2 star"
          />
          <img
            src={starLight}
            alt=""
            className="criteria-img-block__star-3 star"
          />
          <img
            src={infoImg3}
            alt=""
            className="info-section__img info-section__img--mobile-reduce"
          />
        </div>
        <div className="info-section__main">
          <div className="heading-primary">
            Judging Criteria
            <br />
            <span>Key attributes</span>
          </div>
          <div className="info-section__content mb-medium">
            <p>
              <span>Innovation and Creativity:</span> Evaluate the uniqueness
              and creativity of the solution. Consider whether it addresses a
              real-world problem in a novel way or introduces innovative
              features.
            </p>
            <p>
              <span>Functionality:</span> Assess how well the solution works.
              Does it perform its intended functions effectively and without
              major issues? Judges would consider the completeness and
              robustness of the solution.
            </p>
            <p>
              <span>Impact and Relevance:</span> Determine the potential impact
              of the solution in the real world. Does it address a significant
              problem, and is it relevant to the target audience? Judges would
              assess the potential social, economic, or environmental benefits.
            </p>
            <p>
              <span>Technical Complexity:</span> Evaluate the technical
              sophistication of the solution. Judges would consider the
              complexity of the code, the use of advanced technologies or
              algorithms, and the scalability of the solution.
            </p>
            <p>
              <span>Adherence to Hackathon Rules:</span> Judges will Ensure that
              the team adhered to the rules and guidelines of the hackathon,
              including deadlines, use of specific technologies or APIs, and any
              other competition-specific requirements.
            </p>
          </div>
          <button className="btn">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Criteria;
