import DiscoveryIcon from "../../assets/Icons/DevJourney/discovery.webp";
import UIUXIcon from "../../assets/Icons/DevJourney/ui_ux.png";
import CodingIcon from "../../assets/Icons/DevJourney/coding.png";
import QAIcon from "../../assets/Icons/DevJourney/qa.png";
import DeployIcon from "../../assets/Icons/DevJourney/deploy.png";
import MaintenanceIcon from "../../assets/Icons/DevJourney/maintenance.png";

const JOURNEY_DATA = {
  title: "Our Application Development Journey",
  description:
    "Nexocrat provides full-cycle application development from conceptualization to an MVP and full-fledged solution deployment.",
  steps: [
    {
      title: "Discovery and planning",
      icon: DiscoveryIcon,
      description:
        "We know that every project is unique. Therefore, our team investigates all the business requirements and builds effective end-users journeys to make the product intuitive at maximum.",
    },
    {
      title: "UI/UX design",
      icon: UIUXIcon,
      description:
        "At this fintech app development stage, we turn collected insights into an engaging and user-friendly interface that lets customers perform even the most difficult financial tasks.",
    },
    {
      title: "Coding",
      icon: CodingIcon,
      description:
        "Our broad tech-stack spans solutions for both fintech web and mobile development, making it possible to digitize various financial and banking processes.",
    },
    {
      title: "QA and testing",
      icon: QAIcon,
      description:
        "We check every product’s aspect to ensure that software meets all the quality standards and the client's requirements.",
    },
    {
      title: "Deployment",
      icon: DeployIcon,
      description:
        "After beta testing and final bug fixes, we deploy the software product to customers and introduce it to the world.",
    },
    {
      title: "Maintenance",
      icon: MaintenanceIcon,
      description:
        "This stage focuses on providing support to customers if they encounter challenges when using financial software.",
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
