import { useState } from "react";
import Accordion from "../common/Accordion";
import { FAQ_DATA } from "../../data/constantData";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section
      id="faq-section"
      className="bg-white text-gray-800 py-16 px-6 lg:px-24"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div>
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h3>
          <p className="text-gray-600">{FAQ_DATA.description}</p>
        </div>

        <div className="lg:col-span-2 space-y-4">
          {FAQ_DATA.faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
            >
              <Accordion
                index={index + 1}
                title={faq.title}
                content={faq.content}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              ></Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
