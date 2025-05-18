import { PILLAR_DATA } from "../../data/constantData";
import lockIcon from "../assets/CheckmarkCircle.png";
import checkmarkSquareIcon from "../assets/checkmarkSquareIcon.png";
import groupIcon from "../assets/GroupIcon.png";

const IconMapping = {
  "lock-icon": lockIcon,
  "checkmark-square-icon": checkmarkSquareIcon,
  "group-icon": groupIcon,
};

const getIcon = (iconType) => {
  return IconMapping(iconType) || IconMapping["group-icon"];
};

const Pillars = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          {PILLAR_DATA.title}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
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

      {/* <!-- Optional Divider --> */}
      <div className="mt-12 border-t border-gray-200 dark:border-gray-700 w-full max-w-6xl mx-auto"></div>
    </section>
  );
};

export default Pillars;
