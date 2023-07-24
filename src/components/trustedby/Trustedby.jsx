import "./trustedby.scss";
import logo1 from "./../../assets/images/company-img-1.png";
import logo2 from "./../../assets/images/company-img-2.png";
import logo3 from "./../../assets/images/company-img-3.png";
import logo4 from "./../../assets/images/company-img-4.png";
import logo5 from "./../../assets/images/company-img-5.png";
import { Image } from "antd";
const data = [
  { img: logo1 },
  { img: logo2 },
  { img: logo3 },
  { img: logo4 },
  { img: logo5 },
];
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
