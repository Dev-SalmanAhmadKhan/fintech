import data from "./data";
import { Image } from "antd";
const AchievementsCard = () => {
  return (
    <>
      {data.map((data) => (
        <div className="achievements-card">
          <div className="achievements-img">
            <Image src={data.img} preview={false} />
          </div>
          <div className="achievements-title">{data.number}</div>
          <div className="achievements-pera">{data.title}</div>
        </div>
      ))}
    </>
  );
};

export default AchievementsCard;
