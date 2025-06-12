import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import PillarSection from "../components/sections/PillarSection";
import DevJourney from "../components/sections/DevJourney";
import TechnologiesSection from "../components/sections/TechnologiesSection";
import FaqSection from "../components/sections/FaqSection";
import ContactUsCTABanner from "../components/sections/ContactUsCTABanner";
import ContactUsModal from "../components/modal/contactUsModal";
import HeroImage from "../components/HeroImage";
import BannerImg from "../assets/Images/home-banner.jpg";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);
  return (
    <div className="main-content">
      <HeroImage
        className="w-screen h-[70vh] md:h-[calc(100vh-80px)] screen relative"
        imageSrc={BannerImg}
      >
        <div className="overlay-content absolute bottom-4 m-4 md:top-[25%] md:left-[5%] text-white">
          <h2 className="md:max-w-[25%] text-xl md:text-4xl font-extrabold">
            Transforming Ideas into Scalable Digital Solutions
          </h2>
          <p className="md:max-w-[40%] mt-4 md:mt-10 text-lg font-semibold">
            At <span className="text-xl text-blue-600">Nexocrat</span>, we
            combine technical expertise with creative vision to build modern,
            reliable, and scalable web applications. From frontend elegance to
            backend performance, we offer full-spectrum solutions tailored to
            your business needs.
          </p>
          <div className="cta-block flex mt-6 text-xl">
            <button
              className="px-2 md:px-6 py-2 bg-white text-blue-600 rounded-lg"
              onClick={() => setIsModalOpen(true)}
            >
              Get a free consultation
            </button>
            <Link
              to="/services"
              className="ml-4 px-2 md:px-6 py-2 bg-blue-600 text-white rounded-lg border border-blue-600"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </HeroImage>
      <PillarSection />
      <DevJourney />
      <TechnologiesSection />
      <FaqSection />
      <ContactUsCTABanner
        additionalContentTitle="We've got the expertise. You've got the vision."
        additionalContent="Reach out and let's explore how we can help you scale smarter and faster."
      />
      {isModalOpen && <ContactUsModal ref={modalRef} />}
    </div>
  );
};

export default Home;
