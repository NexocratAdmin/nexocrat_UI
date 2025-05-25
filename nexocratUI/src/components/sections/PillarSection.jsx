import lockIcon from "../../assets/lockIcon.png";
import checkmarkSquareIcon from "../../assets/checkmarkSquareIcon.png";
import groupIcon from "../../assets/GroupIcon.png";

const IconMapping = {
  "lock-icon": lockIcon,
  "checkmark-square-icon": checkmarkSquareIcon,
  "group-icon": groupIcon,
};

const PILLAR_DATA = {
  title: "Three pillars of modern software development",
  pillars: [
    {
      type: "Security",
      description:
        "We take the question of security very seriously and build digital products that ensure high-level customer data protection. Our software is compliant with all the fintech regulations and standards.",
      iconType: "lock-icon",
      alt: "Security Icon",
    },
    {
      type: "Reliability",
      description:
        "With more than seven years in the industry, we have learned how to develop stable and reliable software for various financial purposes, including banking, investment, and personal financial management.",
      iconType: "checkmark-square-icon",
      alt: "Reliability Icon",
    },
    {
      type: "Speed & Scalability",
      description:
        "We understand that financial platforms must be fast and easily scalable. We pay particular attention to these features when building products for our clients from the finance and investment industry.",
      iconType: "group-icon",
      alt: "Speed Icon",
    },
  ],
};

const getIcon = (iconType) => {
  return IconMapping[iconType] || IconMapping["group-icon"];
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
            <div className="flex justify-center mb-4">
              <img
                src={getIcon(pillar.iconType)}
                alt={pillar.alt}
                className="w-8 h-8"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
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
