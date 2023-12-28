import AboutAshram from "../../components/aboutAshram/AboutAshram";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageSlider1 from "../../components/homePageSlider1/HomePageSlider1";
import TextSection from "../../components/textSection/TextSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TextSection />
      <HomePageSlider1 />
      <AboutAshram />
    </div>
  );
};
export default Home;
