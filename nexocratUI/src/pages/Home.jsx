import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import PillarSection from "../components/sections/PillarSection";
import DevJourney from "../components/sections/DevJourney";
import TechnologiesSection from "../components/sections/TechnologiesSection";
import FaqSection from "../components/sections/FaqSection";
import ContactUsCTABanner from "../components/sections/ContactUsCTABanner";
import BorderTop from "../components/common/BorderTop";
import ContactUsModal from "../components/modal/contactUsModal";
import HeroImage from "../components/HeroImage";
import ITServicesImg from "../assets/Images/it-services.jpg";

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
        className="h-[75vh]"
        imgclass="h-full"
        imageSrc={ITServicesImg}
      >
        <div className="overlay-content absolute top-[25%] left-[5%] text-white">
          <h2 className="max-w-[25%] text-3xl md:text-4xl font-extrabold">
            Transforming Ideas into Scalable Digital Solutions
          </h2>
          <p className="max-w-[40%] mt-10 text-lg font-semibold">
            At <span className="text-blue-600">Nexocrat</span>, we combine
            technical expertise with creative vision to build modern, reliable,
            and scalable web applications. From frontend elegance to backend
            performance, we offer full-spectrum solutions tailored to your
            business needs.
          </p>
          <div className="cta-block flex mt-6 text-xl">
            <button
              className="px-6 py-2 bg-white text-blue-600 rounded-lg"
              onClick={() => setIsModalOpen(true)}
            >
              Get a free consultation
            </button>
            <Link
              to="/services"
              className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-lg border border-blue-600"
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
      <BorderTop />
      <ContactUsCTABanner />
      {isModalOpen && <ContactUsModal ref={modalRef} />}
    </div>
  );
};

export default Home;
