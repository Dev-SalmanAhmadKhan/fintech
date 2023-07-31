import About from "../../components/pages/Home/Aboutus/Index";
import Hero from "../../components/pages/Home/Hero/Index";
import Services from "../../components/pages/Home/Services/Index";
import Achievements from "../../components/pages/Home/Achievements/Index";
import "./styles-module.scss";
import WhyUS from "../../components/pages/Home/Whyus/Index";
import Testimonials from "../../components/pages/Home/Testimonials/Index";
import Trustedby from "../../components/pages/Home/Trustedby/Index";
import Footer from "../../components/common/Footer/Index";
import Header from "../../components/common/Header/Index";
const Home = () => {
  return (
    <>
      <div className="herosection">
        <Header/>
        <Hero />
      </div>
      <Services />
      <About />
      <Achievements />
      <WhyUS />
      <Testimonials />
      <Trustedby />
      <Footer />
    </>
  );
};

export default Home;
