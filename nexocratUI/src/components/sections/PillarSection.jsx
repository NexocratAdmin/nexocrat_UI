import SecurityIcon from "../../assets/Icons/Security.png";
import ReliabilityIcon from "../../assets/Icons/Reliability.png";
import SpeedScalability_Icon from "../../assets/Icons/SpeedScalability.png";

const PILLAR_DATA = {
  title: "Three pillars of modern software development",
  pillars: [
    {
      type: "Security",
      description:
        // "Security isn’t an add-on-it’s a foundation. At Nexocrat, we embed robust security practices into every layer of development, from code to cloud. Whether we’re building enterprise software or deploying DevOps pipelines, we ensure your data, systems, and users remain protected at every touchpoint.",
        "Security isn't an afterthought - it's the foundation of everything we do. At Nexocrat, we integrate advanced security protocols into every layer of the development process, from code to cloud. Whether we're crafting enterprise software or implementing DevOps pipelines, we protect your data, systems, and users at every step - ensuring end-to-end security by design.",
      icon: SecurityIcon,
      alt: "Security Icon",
    },
    {
      type: "Reliability",
      description:
        "At Nexocrat, reliability drives everything we build. Our expert team delivers stable, secure, and scalable digital solutions that keep business-critical operations running smoothly. From enterprise software and CRM systems to QA, DevOps, and branded applications, we engineer every solution with long-term performance and precision in mind.",
      // "At Nexocrat, reliability is at the core of everything we build. Our team of seasoned professionals delivers stable, secure, and scalable digital solutions that power business-critical operations. From custom software and CRM systems to DevOps, QA, and product branding, we ensure every solution is built with precision and long-term performance in mind.",
      icon: ReliabilityIcon,
      alt: "Reliability Icon",
    },
    {
      type: "Speed & Scalability",
      description:
        // "Our architecture-first mindset allows us to create scalable systems that evolve with your business. Nexocrat solutions are optimized for speed, efficient performance, and seamless handling of growing user demands - ideal for startups to global enterprises.",
        "Our architecture-first approach ensures your systems are not only fast but built to grow with your business. Nexocrat solutions are optimized for performance, seamless scaling, and responsiveness—making them ideal for startups and enterprises alike that demand agility and efficiency in a global market.",
      icon: SpeedScalability_Icon,
      alt: "Speed Icon",
    },
  ],
};

const PillarSection = () => {
  return (
    <section id="pillar-section" className="md:py-16 bg-white dark:bg-gray-900">
      <div className="border-t border-gray-200 dark:border-gray-700 w-full max-w-6xl mx-auto"></div>
      <div className="text-center my-4 md:my-12">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          {PILLAR_DATA.title}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 my-4 md:my-10">
        {PILLAR_DATA.pillars.map((pillar, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center">
              <img
                src={pillar.icon}
                alt={pillar.alt}
                className="w-8 h-8 md:w-12 md:h-12"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white my-2">
              {pillar.type}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 w-full max-w-6xl mx-auto"></div>
    </section>
  );
};

export default PillarSection;
