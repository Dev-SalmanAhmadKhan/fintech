import { Col, Image, Row } from "antd";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import "./index-module.scss";
import SectionHeading from "../../../layouts/SectionHeader/Index";
import Heading from "../../../layouts/Heading/Index";
import Pera from "../../../layouts/Pera/Index";
import data from "./data";

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
          <SectionHeading className="title"> WhyUs </SectionHeading>

          <Row className="whyus-section">
            <Col md={14} xs={24}>
              <div className="section-text why-us-section-text">
                <Heading className="title-pera">
                  We provide innovative, tailored, and effective solutions to
                  our clients!
                </Heading>
                <Pera className="pera">
                  We help you managing asset, provide financial advise. Leave
                  money issue with us and focus on your core business. We help
                  you managing asset, provide financial advise.
                  <div className="our-process-section">
                    {data.map((data) => (
                      <div className="our-process">
                        <div className="our-process-img">
                          <Image src={data.img} preview={false} />
                        </div>
                        <div className="our-process-title">{data.title}</div>
                        <div className="our-process-pera">{data.pera}</div>
                      </div>
                    ))}
                  </div>
                </Pera>
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
