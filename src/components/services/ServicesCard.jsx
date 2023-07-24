import { Image } from "antd";
import img1 from "./../../assets/images/serbvices-vector1.png";
import img2 from "./../../assets/images/serbvices-vector2.png";
import img3 from "./../../assets/images/serbvices-vector3.png";
import img4 from "./../../assets/images/serbvices-vector4.png";

const data = [
  {
    key: 1,
    img: img1,
    title: "Risk Management",
    pera: " We help you managing asset, provide financial advise. Leave money issue with us and focus on your core business. We help you managing asset, provide financial advise. ",
  },
  {
    key: 2,
    img: img2,
    title: "Tax Planning",
    pera: " We help you managing asset, provide financial advise. Leave money issue with us and focus on your core business. We help you managing asset, provide financial advise.  ",
  },
  {
    key: 3,
    img: img3,
    title: "Stock Management",
    pera: " We help you managing asset, provide financial advise. Leave money issue with us and focus on your core business. We help you managing asset, provide financial advise. ",
  },
  {
    key: 4,
    img: img4,
    title: "Investment Advisory",
    pera: " We help you managing asset, provide financial advise. Leave money issue with us and focus on your core business. We help you managing asset, provide financial advise. ",
  },
];
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
