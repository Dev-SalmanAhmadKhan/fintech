import Header from "../../components/common/header/Header";
import About from "../../components/pages/Home/Aboutus/About";
import Hero from "../../components/pages/Home/Hero/Hero";
import Services from "../../components/pages/Home/Services/Services";
import "./home.scss";
const Home = () => {
  return (
    <>
      <div className="herosection">
        <Header />
        <Hero />
      </div>
      <Services />
      <About />
    </>
  );
};

export default Home;
