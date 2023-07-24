import achievementsIcon1 from "./../../assets/images/about-us-icon-1.png";
import achievementsIcon2 from "./../../assets/images/about-us-icon-2.png";
import achievementsIcon3 from "./../../assets/images/about-us-icon-3.png";
import achievementsIcon4 from "./../../assets/images/about-us-icon-4.png";
import { Col, Image, Row } from "antd";
import "./achievements.scss";
const Achievements = () => {
  return (
    <>
      <Row className="achievements-section">
        <div className="achievements-card">
          <div className="achievements-img">
            <Image src={achievementsIcon1} preview={false} />
          </div>

          <div className="achievements-title">1500+</div>

          <div className="achievements-pera">Successful Cases</div>
        </div>

        <div className="achievements-card">
          <div className="achievements-img">
            <Image src={achievementsIcon2} preview={false} />
          </div>

          <div className="achievements-title">93%</div>

          <div className="achievements-pera">Client Retention Rate</div>
        </div>

        <div className="achievements-card">
          <div className="achievements-img">
            <Image src={achievementsIcon3} preview={false} />
          </div>

          <div className="achievements-title">$567</div>

          <div className="achievements-pera">Millions Revenue</div>
        </div>

        <div className="achievements-card">
          <div className="achievements-img">
            <Image src={achievementsIcon4} preview={false} />
          </div>

          <div className="achievements-title">15+</div>

          <div className="achievements-pera">Professional Assistants</div>
        </div>
      </Row>
    </>
  );
};

export default Achievements;
