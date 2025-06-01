import ContactUsForm from "../forms/ContactUsForm";

const ContactUsModal = ({ ref }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-white rounded shadow-lg" ref={ref}>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactUsModal;
