import WhyUsSection from "../components/services/OneStopSolution";
import ContactUsCTABanner from "../components/sections/ContactUsCTABanner";
import OurServices from "../components/services/OurServices";
// import BorderTop from "../components/common/BorderTop";
import HeroImage from "../components/HeroImage";
import HomeImg from "../assets/Images/cloudsol1.jpg";

const Services = () => {
  return (
    <div className="services-content">
      <HeroImage
        className="w-screen"
        imgclass="w-full md:max-h-[calc(100vh-80px)]"
        imageSrc={HomeImg}
      />
      {/* <ServicesOverview /> */}
      {/* <BorderTop /> */}
      <OurServices />
      <WhyUsSection />
      <ContactUsCTABanner />
    </div>
  );
};

export default Services;
