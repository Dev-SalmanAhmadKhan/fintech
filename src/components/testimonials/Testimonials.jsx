import "./testimonials.scss";
import reviewerImg from "./../../assets/images/reviewer-img.png";
import quoteImg from "./../../assets/images/quote.png";
import { Carousel, Col, Image, Row } from "antd";
const Testimonials = () => {
  return (
    <>
      <div className="testimonials-section">
        <div className="title">Testimonials</div>
        <Row>
          <Col xxl={12} xl={14} lg={16} md={22} className="testimonilas-holder">
            <Carousel autoplay autoplaySpeed={2000}>
              <div>
                <div className="testimonials-card">

                  {/* reviewer details */}
                  
                  <div className="reviewer-details">
                    <div className="reviewer-img">
                      <Image src={reviewerImg} preview={false} />
                    </div>
                    <div className="reviewer-name">Ronald Richards</div>
                    <div className="reviewer-designation">
                      Co-Founder of MCH
                    </div>
                  </div>

                  {/* review */}

                  <div className="review">
                    <div className="quote-img">
                      <Image src={quoteImg} preview={false} />
                    </div>
                    <div className="review-text">
                      We help you managing asset, provide financial advise.
                      Leave money issue with us and focus on your core business.
                      We help you managing asset, provide financial advise. We
                      help you managing asset, provide financial advise. .
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="testimonials-card">
                  {/* reviewer details */}

                  <div className="reviewer-details">
                    <div className="reviewer-img">
                      <Image src={reviewerImg} preview={false} />
                    </div>
                    <div className="reviewer-name">Ronald Richards</div>
                    <div className="reviewer-designation">
                      Co-Founder of MCH
                    </div>
                  </div>

                  {/* review */}

                  <div className="review">
                    <div className="quote-img">
                      <Image src={quoteImg} preview={false} />
                    </div>
                    <div className="review-text">
                      We help you managing asset, provide financial advise.
                      Leave money issue with us and focus on your core business.
                      We help you managing asset, provide financial advise. We
                      help you managing asset, provide financial advise. .
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Testimonials;
