import WhoWeAre from "../components/sections/WhoWeAre";
import OurMethodology from "../components/sections/OurMethodology";
import ContactUsCTABanner from "../components/sections/ContactUsCTABanner";
import OurResponsibilities from "../components/sections/OurResponsibilities";
import BorderTop from "../components/common/BorderTop";
import HeroImage from "../components/HeroImage";
import AboutUsBanner from "../assets/Images/aboutus-banner.webp";

const About = () => {
  return (
    <div className="aboutus-content">
      <HeroImage
        imageSrc={AboutUsBanner}
        className="w-screen h-[75vh] relative"
      >
        <div className="overlay-content absolute m-4 bottom-4 md:bottom-[20%] md:left-[8%] text-white leading-tight md:leading-none">
          <div className="text-lg md:text-xl font-medium hover:text-blue-600">
            About Nexocrat
          </div>
          <div className="mt-2 md:mt-3 text-2xl md:text-4xl font-semibold hover:text-blue-600">
            Tech That Thinks ahead.
          </div>
          <div className="mt-2 md:mt-4 text-2xl md:text-5xl font-semibold hover:text-blue-600">
            Solutions Engineered For What's Next!
          </div>
        </div>
      </HeroImage>
      <div className="additional-content relative">
        <WhoWeAre />
        <OurResponsibilities />
        <OurMethodology />
        <BorderTop />
        <ContactUsCTABanner
          additionalContentTitle="Start something exceptional today !"
          additionalContent="Let's chat about your business goals and how Nexocrat can build the technology to help you reach them. From concept to deployment - we've got you covered."
        />
      </div>
    </div>
  );
};

export default About;
