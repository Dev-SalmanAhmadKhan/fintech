import Header from "../../components/common/header/Header";
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
      <Services/>
    </>
  );
};

export default Home;
