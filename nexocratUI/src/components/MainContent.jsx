import DevJourney from "./aboutcompanystuff/DevJourney";
import FaqSection from "./aboutcompanystuff/FaqSection";
import PillarSection from "./aboutcompanystuff/PillarSection";
// import GradientBg from "../components/animations/GradientBg";
import ContactUsSection from "./aboutcompanystuff/ContactUsSection";
import TechnologiesSection from "./aboutcompanystuff/TechnologiesSection";

const MainContent = () => {
  return (
    <div className="main-content">
      <PillarSection />
      <DevJourney />
      <TechnologiesSection />
      <FaqSection />
      <ContactUsSection />
      {/* <GradientBg /> */}
    </div>
  );
};

export default MainContent;
