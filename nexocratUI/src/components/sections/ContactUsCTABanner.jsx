import { Link } from "react-router-dom";

const ContactUsCTABanner = ({
  text = "We will tailor our process and solution to your needs.",
  btnText = "Let's talk",
}) => {
  return (
    <section id="contact-us-section" className="py-4 md:py-12 px-4 text-center">
      <div className="flex items-center justify-center max-w-5xl mx-auto rounded-lg border border-border-dark bg-gray-100 p-4 md:p-12 gap-2 md:gap-10">
        <div className="text-lg md:text-2xl leading-tight md:text-[40px] font-medium text-gray-800 max-w-[75%] gap-10">
          {text}
        </div>
        <Link
          to="/contact"
          className="inline-block bg-blue-700 hover:bg-brand-dark text-white font-semibold py-2 md:py-3 px-3 md:px-6 rounded-lg"
        >
          {btnText}
        </Link>
      </div>
    </section>
  );
};

export default ContactUsCTABanner;
