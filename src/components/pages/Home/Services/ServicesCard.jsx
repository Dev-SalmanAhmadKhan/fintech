import { Image } from "antd";
import data from "./data";
const ServicesCard = () => {
  return (
    <>
      {data.map((data) => (
        <div className="services-card">
          <div className="card-header">
            <div className="card-header-img-holder">
              <Image src={data.img} preview={false} />
            </div>
            <div className="card-title">{data.title}</div>
          </div>
          <div className="card-pera">{data.pera}</div>
          <div className="card-butn">See Details</div>
        </div>
      ))}
    </>
  );
};

export default ServicesCard;
