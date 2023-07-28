import "./styles-module.scss";
import { Image } from "antd";
import data from "./data";
const Trustedby = () => {
  return (
    <>
      <div className="trustedby-section">
        {data.map((data) => (
          <div className="trustedby-card">
            <div className="trustedby-card-img">
              <Image src={data.img} preview={false} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Trustedby;
