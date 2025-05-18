import { JOURNEY_DATA } from "../../data/constantData";
import checkmarkIcon from "../assets/CheckmarkCircle.png";

const DevJourney = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-12 dark:bg-white dark:text-black">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{JOURNEY_DATA.title}</h1>
        <p className="text-lg max-w-2xl mx-auto">{JOURNEY_DATA.description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {JOURNEY_DATA.steps.map((step, index) => (
          <div key={index} className="flex gap-4 items-start">
            <img
              src={checkmarkIcon}
              alt="Check icon"
              className="w-8 h-8 mt-1"
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
