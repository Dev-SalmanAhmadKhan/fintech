import "./footer.scss";
import logo1 from "./../../../assets/logos/footerlogo.png";
import { Button, Image, Input } from "antd";
const data = [
  { socialIcon: "fa fa-facebook" },
  { socialIcon: "fa fa-instagram" },
  { socialIcon: "fa fa-twitter" },
];
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-section">
          <div className="footer-content-div">
            <div className="footer-logo">
              <Image src={logo1} preview={false} />
            </div>
            <div className="footer-icon-holder">
              {data.map((data) => (
                <div className="footer-icon">
                  <i className={data.socialIcon}></i>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-content-div-2">
            <Button type="link">Help & Support</Button>
            <Button type="link">About</Button>{" "}
            <Button type="link">Services</Button>{" "}
            <Button type="link">Business</Button>
          </div>

          <div className="footer-content-div">
            <div className="footer-contact-title">Get the latest news</div>
            <Input placeholder="Enter your email" />
            <Button className="newsletter-btn">subscribe</Button>
          </div>
        </div>

        <div className="copyright">All rights reserved © DEV-SALMAN</div>
      </footer>
    </>
  );
};

export default Footer;
