import whyusIcon1 from "./../../assets/images/why-us-icon1.png";
import whyusIcon2 from "./../../assets/images/why-us-icon2.png";
import whyusIcon3 from "./../../assets/images/why-us-icon3.png";
import { Col, Image, Row } from "antd";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import "./whyus.scss";
const WhyUS = () => {
  const ref = useRef(null);
  const isinview = useInView(ref, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    if (isinview) {
      controls.start("visible");
    }
  }, [isinview]);
  return (
    <>
      <div ref={ref}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 250 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <div className="title">Why Us</div>
          <Row className="whyus-section">
            <Col md={14} xs={24}>
              <div className="section-text why-us-section-text">
                <div className="title-pera">
                  We provide innovative, tailored, and effective solutions to
                  our clients!
                </div>
                <div className="pera">
                  We help you managing asset, provide financial advise. Leave
                  money issue with us and focus on your core business. We help
                  you managing asset, provide financial advise.
                  <div className="our-process-section">
                    <div className="our-process">
                      <div className="our-process-img">
                        <Image src={whyusIcon1} preview={false} />
                      </div>
                      <div className="our-process-title">Confidential</div>
                      <div className="our-process-pera">
                        We help you managing asset, provide financial advise.
                        Leave money issue.
                      </div>
                    </div>

                    <div className="our-process">
                      <div className="our-process-img">
                        <Image src={whyusIcon2} preview={false} />
                      </div>
                      <div className="our-process-title">Flexible</div>
                      <div className="our-process-pera">
                        We help you managing asset, provide financial advise.
                        Leave money issue.
                      </div>
                    </div>

                    <div className="our-process">
                      <div className="our-process-img">
                        <Image src={whyusIcon3} preview={false} />
                      </div>
                      <div className="our-process-title">Affordable</div>
                      <div className="our-process-pera">
                        We help you managing asset, provide financial advise.
                        Leave money issue.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={10} xs={24}>
              <div className="why-us-img"></div>
            </Col>
          </Row>
        </motion.div>
      </div>
    </>
  );
};

export default WhyUS;
