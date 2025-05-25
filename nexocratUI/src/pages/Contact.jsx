import ContactUsForm from "../components/forms/ContactUsForm";
import ContactContextSection from "../components/sections/ContactContextSection";
import BorderTop from "../components/common/BorderTop";

const Contact = () => {
  return (
    <div className="contactus-content max-w-7xl mx-auto">
      <ContactContextSection />
      <BorderTop />
      <ContactUsForm />
    </div>
  );
};

export default Contact;
