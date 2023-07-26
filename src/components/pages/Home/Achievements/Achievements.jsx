import achievementsIcon1 from "./../../../../assets/images/about-us-icon-1.png";
import achievementsIcon2 from "./../../../../assets/images/about-us-icon-2.png";
import achievementsIcon3 from "./../../../../assets/images/about-us-icon-3.png";
import achievementsIcon4 from "./../../../../assets/images/about-us-icon-4.png";
import { Col, Image, Row } from "antd";
import "./achievements.scss";
const data = [ 
{img:achievementsIcon1 ,number:"1500+",title:"Successful Cases"},
{img:achievementsIcon2 ,number:"93%",title:"Client Retention Rate"},
{img:achievementsIcon3 ,number:"$567",title:"Millions Revenue"},
{img:achievementsIcon4 ,number:"15+",title:"Professional Assistants"},
]
const Achievements = () => {
  return (
    <>
      <Row className="achievements-section">
        {data.map((data)=>(
        <div className="achievements-card">
          <div className="achievements-img">
            <Image src={data.img} preview={false} />
          </div>
          <div className="achievements-title">{data.number}</div>
          <div className="achievements-pera">{data.title}</div>
        </div>
        ))}
      </Row>
    </>
  );
};

export default Achievements;
