import WhyUsSection from "../components/services/OneStopSolution";
import ContactUsCTABanner from "../components/sections/ContactUsCTABanner";
import OurServices from "../components/services/OurServices";
import HeroImage from "../components/HeroImage";
import BannerImg from "../assets/Images/services-banner.jpg";

const Services = () => {
  return (
    <div className="services-content">
      <HeroImage
        className="w-screen h-[50vh] md:h-[75vh]"
        imageSrc={BannerImg}
      />
      <OurServices />
      <WhyUsSection />
      <ContactUsCTABanner
        text="Let's discuss how we can turn your ideas into reality"
        btnText="Contact Our Team"
        additionalContentTitle="Let's bring your vision to life"
        additionalContent="Whether you're starting a new project or need expert guidance on scaling your digital solutions, we're here to help. Let's turn your challenges into opportunities."
      />
    </div>
  );
};

export default Services;
