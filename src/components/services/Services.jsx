import { motion } from "framer-motion";
import ServicesCard from "./ServicesCard";
import "./services.scss";
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
        <div className="title">Services</div>
        <div className="services-section">
          <div className="services-card-holder">
            <ServicesCard />
          </div>

          <div className="services-btn">learn More</div>
        </div>
      </motion.div>
    </>
  );
};

export default Services;
