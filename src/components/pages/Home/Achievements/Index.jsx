import { Row } from "antd";
import "./styles-module.scss";
import AchievementsCard from "./AchievementsCard";

const Achievements = () => {
  return (
    <>
      <Row className="achievements-section">
        <AchievementsCard />
      </Row>
    </>
  );
};

export default Achievements;
