import { Link } from "react-router-dom";

const ContactUsCTABanner = ({
  text = "We will tailor our process and solution to your needs.",
  btnText = "Let's talk",
  additionalContentTitle = "",
  additionalContent = "",
}) => {
  return (
    <>
      {(additionalContentTitle || additionalContent) && (
        <div className="max-w-7xl mx-4 md:mx-auto my-4 md:my-12">
          {additionalContentTitle && (
            <div className="text-2xl md:text-3xl font-medium">
              {additionalContentTitle}
            </div>
          )}
          {additionalContent && (
            <div className="mt-2 text-xl md:text-2xl text-gray-700">
              {additionalContent}
            </div>
          )}
        </div>
      )}
      <section
        id="contact-us-section"
        className="max-w-5xl mx-4 md:mx-auto my-4 md:my-12 text-center"
      >
        <div className="flex items-center justify-evenly px-2 py-2 md:py-8 bg-gray-100 rounded-lg border border-gray-200 shadow-sm">
          <div className="text-lg md:text-2xl text-gray-800 font-medium">
            {text}
          </div>
          <Link
            to="/contact"
            className="py-2 md:py-3 px-3 md:px-6 bg-blue-700 text-white font-semibold rounded-lg"
          >
            {btnText}
          </Link>
        </div>
      </section>
    </>
  );
};

export default ContactUsCTABanner;
