import { Col, Row } from "antd";
import "./about.scss";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const About = () => {
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
          <div className="title">About us</div>
          <Row className="section">
            <Col md={14} xs={24}>
              <div className="section-text">
                <div className="title-pera">
                  We Provide The Best Financial Solution For Your Business
                </div>
                <div className="pera">
                  We help you managing asset, provide financial advise. Leave
                  money issue with us and focus on your core business. We help
                  you managing asset, provide financial advise.We help you
                  managing asset.
                </div>
                <div className="our-aim-section">
                  <div className="about-aim">
                    <div className="title-pera">Mission</div>
                    <div className="pera">
                      We help you managing asset, provide financial advise.
                      Leave money issue with us and focus on your core business.
                      We help you managing asset, provide financial advise.
                    </div>
                  </div>
                  <div className="about-aim">
                    <div className="title-pera">Vision</div>
                    <div className="pera">
                      We help you managing asset, provide financial advise.
                      Leave money issue with us and focus on your core business.
                      We help you managing asset, provide financial advise.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={10} xs={24}>
              <div className="about-img"></div>
            </Col>
          </Row>
        </motion.div>
      </div>
    </>
  );
};

export default About;
