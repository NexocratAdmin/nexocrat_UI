import { ChevronDown, ChevronUp } from "lucide-react";

const Accordion = ({ index, title, content, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;
  return (
    <div className="accordion-item border-b">
      <button
        className="w-full flex justify-between items-center text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 transition"
        onClick={() => setOpenIndex(index === openIndex ? null : index)}
      >
        <span className="flex items-center gap-2 font-medium text-gray-900">
          {index && <span className="text-blue-600 font-bold">{index}.</span>}
          {title}
        </span>
        <span className="text-2xl text-blue-500">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>

      {isOpen && (
        <div
          className="px-6 py-4 bg-white border-t border-gray-200 text-gray-700 transition-all duration-300"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      )}
    </div>
  );
};

export default Accordion;
