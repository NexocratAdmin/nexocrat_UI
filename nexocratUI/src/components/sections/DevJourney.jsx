import DiscoveryIcon from "../../assets/Icons/DevJourney/discovery.webp";
import UIUXIcon from "../../assets/Icons/DevJourney/ui_ux.png";
import CodingIcon from "../../assets/Icons/DevJourney/coding.png";
import QAIcon from "../../assets/Icons/DevJourney/qa.png";
import DeployIcon from "../../assets/Icons/DevJourney/deploy.png";
import MaintenanceIcon from "../../assets/Icons/DevJourney/maintenance.png";

const JOURNEY_DATA = {
  title: "Our Application Development Journey",
  description:
    "Nexocrat delivers full-cycle application development — from ideation and MVP to enterprise-grade deployment.",
  steps: [
    {
      title: "Discovery & Planning",
      icon: DiscoveryIcon,
      description:
        "We begin by deeply understanding your business needs, goals, and user expectations. Through structured workshops and requirement analysis, we map out the optimal solution strategy tailored to your vision.",
    },
    {
      title: "UI/UX Design",
      icon: UIUXIcon,
      description:
        "Our design team transforms your concept into intuitive and engaging interfaces. We prioritize user experience, ensuring ease of use, aesthetic appeal, and seamless interactions — especially for complex workflows.",
    },
    {
      title: "Coding & Development",
      icon: CodingIcon,
      description:
        "Our engineers build robust applications using modern, scalable technologies. Whether it's fintech, healthtech, or enterprise apps, we ensure secure, accessible, high-performance code aligned with industry best practices.",
    },
    {
      title: "QA and Testing",
      icon: QAIcon,
      description:
        "Quality is non-negotiable. We perform rigorous manual and automated testing at every stage to eliminate bugs and ensure compliance with performance, usability, and security standards.",
    },
    {
      title: "Deployment",
      icon: DeployIcon,
      description:
        "Post final validation, we handle seamless deployment to your preferred cloud or on-premise environment. We also support version control, rollback strategies, and staging environments for risk-free launches.",
    },
    {
      title: "Maintenance & Support",
      icon: MaintenanceIcon,
      description:
        "Our commitment doesn't end at deployment. We offer ongoing maintenance, feature enhancements, security updates, and technical support to keep your solution performing at its best.",
    },
  ],
};

const DevJourney = () => {
  return (
    <section className="px-6 md:px-12 py-6 md:py-16 bg-brand-dark dark:bg-white text-white dark:text-black">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold">{JOURNEY_DATA.title}</h1>
        <p className="text-lg max-w-2xl mx-auto mt-4">
          {JOURNEY_DATA.description}
        </p>
      </div>
      <div className="dev-journey-steps grid md:grid-cols-2 gap-3 md:gap-10 max-w-5xl mx-auto mt-8 md:mt-12">
        {JOURNEY_DATA.steps.map((step, index) => (
          <div key={index} className="journey-item flex gap-4 items-start">
            <img
              src={step.icon}
              alt="Check icon"
              className="icon w-6 h-6 md:w-8 md:h-8 mt-1 rounded-lg"
            />
            <div>
              <h2 className="title text-xl font-semibold mb-2 hover:text-blue-600">
                {step.title}
              </h2>
              <p className="text-gray-300">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DevJourney;
