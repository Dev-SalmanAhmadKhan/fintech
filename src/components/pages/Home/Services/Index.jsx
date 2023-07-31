import { motion } from "framer-motion";
import ServicesCard from "./ServicesCard";
import "./styles-module.scss";
import SectionHeading from "../../../layouts/SectionHeader/Index";
import { Button } from "antd";
const Services = () => {
  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3, duration: 2 }}
      >
        <SectionHeading class={"title"}>Services We Provide</SectionHeading>
        <div className="services-section">
          <div className="services-card-holder">
            <ServicesCard />
          </div>
          <Button className="services-btn">Learn more</Button>
        </div>
      </motion.div>
    </>
  );
};

export default Services;
