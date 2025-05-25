import PillarSection from "../components/sections/PillarSection";
import DevJourney from "../components/sections/DevJourney";
import TechnologiesSection from "../components/sections/TechnologiesSection";
import FaqSection from "../components/sections/FaqSection";
import ContactUsCTABanner from "../components/sections/ContactUsCTABanner";
import HeroImage from "../components/HeroImage";
import HomeImg from "../assets/Images/home_img.png";
import HomeImgLight from "../assets/Images/home_img_light.png";
import BorderTop from "../components/common/BorderTop";

const Home = () => {
  return (
    <div className="main-content">
      <HeroImage
        className="w-screen md:h-screen"
        imageSrc={HomeImg}
        lightImageSrc={HomeImgLight}
      ></HeroImage>
      <PillarSection />
      <DevJourney />
      <TechnologiesSection />
      <FaqSection />
      <BorderTop />
      <ContactUsCTABanner />
    </div>
  );
};

export default Home;
