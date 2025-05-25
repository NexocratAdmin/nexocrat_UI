import checkmarkIcon from "../../assets/CheckmarkCircle.png";

const JOURNEY_DATA = {
  title: "Our application development journey",
  description:
    "Nexocrat provides full-cycle application development from conceptualization to an MVP and full-fledged solution deployment.",
  steps: [
    {
      title: "Discovery and planning",
      description:
        "We know that every project is unique. Therefore, our team investigates all the business requirements and builds effective end-users journeys to make the product intuitive at maximum.",
    },
    {
      title: "UI/UX design",
      description:
        "At this fintech app development stage, we turn collected insights into an engaging and user-friendly interface that lets customers perform even the most difficult financial tasks.",
    },
    {
      title: "Coding",
      description:
        "Our broad tech-stack spans solutions for both fintech web and mobile development, making it possible to digitize various financial and banking processes.",
    },
    {
      title: "QA and testing",
      description:
        "We check every product’s aspect to ensure that software meets all the quality standards and the client's requirements.",
    },
    {
      title: "Deployment",
      description:
        "After beta testing and final bug fixes, we deploy the software product to customers and introduce it to the world.",
    },
    {
      title: "Maintenance",
      description:
        "This stage focuses on providing support to customers if they encounter challenges when using financial software.",
    },
  ],
};

const DevJourney = () => {
  return (
    <section className="bg-[#0f173e] text-white py-4 md:py-16 px-6 md:px-12 dark:bg-white dark:text-black">
      <div className="text-center mb-6 md:mb-12">
        <h1 className="text-4xl font-bold mb-4">{JOURNEY_DATA.title}</h1>
        <p className="text-lg max-w-2xl mx-auto">{JOURNEY_DATA.description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-3 md:gap-10 max-w-5xl mx-auto">
        {JOURNEY_DATA.steps.map((step, index) => (
          <div
            key={index}
            className="flex gap-4 items-start opacity-80 hover:opacity-100"
          >
            <img
              src={checkmarkIcon}
              alt="Check icon"
              className="w-6 h-6 md:w-8 md:h-8 mt-1"
            />
            <div>
              <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
              <p className="text-gray-300">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DevJourney;
