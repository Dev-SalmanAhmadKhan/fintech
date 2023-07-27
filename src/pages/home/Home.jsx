import Header from "../../components/common/header/Header";
import About from "../../components/pages/Home/Aboutus/About";
import Hero from "../../components/pages/Home/Hero/Hero";
import Services from "../../components/pages/Home/Services/Services";
import Achievements from "../../components/pages/Home/Achievements/Achievements";
import "./home.scss";
import WhyUS from "../../components/pages/Home/Whyus/WhyUs";
import Testimonials from "../../components/pages/Home/Testimonials/Testimonials";
const Home = () => {
  return (
    <>
      <div className="herosection">
        <Header />
        <Hero />
      </div>
      <Services />
      <About />
      <Achievements/>
      <WhyUS/>
      <Testimonials/>
    </>
  );
};

export default Home;
