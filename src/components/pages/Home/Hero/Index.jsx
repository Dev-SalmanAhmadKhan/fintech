import { Button, Col, Row } from "antd";
import "./index-module.scss";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <Row className="hero-section">
        <Col md={14} xs={24}>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 1.5 }}
          >
            <div className="hero-text">
              <h1 className="hero-title">
                Discover Our Personalized Approach to the Commercial{" "}
                <span>Fintech</span> Market.
              </h1>
              <p className="hero-pera">
                We help you managing asset, provide financial advise. Leave
                money issue with us and focus on your core business. We help you
                managing asset, provide financial advise. Leave money issue with
                us and focus on your core business.
              </p>
              <Button className="hero-btn">Get started</Button>
            </div>
          </motion.div>
        </Col>
        <Col md={10} xs={24}>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6, duration: 1.5 }}
            className="hero-img-holder"
          >
            <div className="hero-img"></div>
          </motion.div>
        </Col>
      </Row>
    </>
  );
};

export default Hero;
