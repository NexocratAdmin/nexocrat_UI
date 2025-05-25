const ContactContextSection = () => {
  return (
    <div className="contact-us-context mb-4 md:mb-16 px-10">
      <div className="md:col-span-9 sm:col-span-9 text-left p-4 md:p-12 relative">
        <h1 className="text-3xl md:text-4xl text-center md:text-5xl font-bold text-gray-800">
          We’re just a{" "}
          <span className="text-blue-600 relative inline-block">
            <span className="after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-300">
              Conversation
            </span>
          </span>{" "}
          away!
        </h1>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Why Reach Out?
      </h3>
      <p className="text-gray-600 mb-3">
        At Nexocrat, we don’t just deliver IT solutions — we build long-term
        partnerships. Whether you're a startup aiming to scale, an enterprise
        modernizing infrastructure, or a curious innovator exploring
        possibilities, we're here to guide you every step of the way. Expect a
        response from our team within 24 hours.
      </p>
      <p className="text-gray-600 mb-3">Reach out to us for:</p>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>
          <strong>Consulting:</strong> Get expert advice tailored to your unique
          business needs.
        </li>
        <li>
          <strong>Project Inquiries:</strong> Have a project in mind? Let's
          explore the best way to bring it to life.
        </li>
        <li>
          <strong>Support:</strong> Need help with an existing solution or
          service? Our team is here to assist you.
        </li>
        <li>
          <strong>Partnerships:</strong> Collaborate with us to drive innovation
          in your industry.
        </li>
        <li>
          <strong>Careers:</strong> Interested in joining Nexocrat? Drop us a
          message — we’re always looking for exceptional talent.
        </li>
      </ul>
      <p className="text-gray-600 mt-4">
        No matter the question or idea, your journey with Nexocrat starts with a
        conversation. Let’s build something great together.
      </p>
    </div>
  );
};

export default ContactContextSection;
