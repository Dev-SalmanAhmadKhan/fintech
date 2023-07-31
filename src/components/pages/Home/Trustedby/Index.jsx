import "./styles-module.scss";
import { Image } from "antd";
import {trustedbyData} from "../../../content/Content";
const Trustedby = () => {
  return (
    <>
      <div className="trustedby-section">
        {trustedbyData.map((data) => (
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
