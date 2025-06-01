import HeroImage from "../components/HeroImage";
import AboutUsBanner from "../assets/Images/about_us_hero.webp";
import WhoWeAre from "../components/sections/WhoWeAre";
import OurMethodology from "../components/sections/OurMethodology";
import ContactUsCTABanner from "../components/sections/ContactUsCTABanner";
import BorderTop from "../components/common/BorderTop";
import OurResponsibilities from "../components/sections/OurResponsibilities";

const About = () => {
  return (
    <div className="aboutus-content">
      <HeroImage
        imageSrc={AboutUsBanner}
        className="w-screen md:h-[70vh] relative"
      >
        <div className="overlay-content absolute top-[45%] left-[8%] text-white text-2xl md:text-6xl leading-tight md:leading-none font-semibold">
          <div className="text-xl font-medium">About Nexocrat</div>
          <div className="mt-2">Tech That Thinks ahead.</div>
          <div className="mt-6">Solutions Engineered For What's Next!</div>
        </div>
      </HeroImage>
      <div className="additional-content relative">
        <WhoWeAre />
        <BorderTop />
        <OurResponsibilities />
        <OurMethodology />
        <BorderTop />
        <ContactUsCTABanner />
      </div>
    </div>
  );
};

export default About;
