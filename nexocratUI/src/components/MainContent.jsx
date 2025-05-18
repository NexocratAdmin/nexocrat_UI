import DevJourney from "./aboutcompanystuff/DevJourney";
import FaqSection from "./aboutcompanystuff/FaqSection";
import PillarSection from "./aboutcompanystuff/PillarSection";
import GradientBg from "../components/animations/GradientBg";

const MainContent = () => {
  return (
    <div className="main-content">
      <PillarSection />
      <DevJourney />
      <FaqSection />
      {/* <GradientBg /> */}
    </div>
  );
};

export default MainContent;
