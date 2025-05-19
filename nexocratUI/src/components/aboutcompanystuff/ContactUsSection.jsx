const ContactUsSection = () => {
  return (
    <section
      id="contact-us-section"
      className="bg-white pt-8 pb-20 px-4 text-center"
    >
      <div className="border-t border-gray-200 dark:border-gray-700 w-full max-w-6xl mx-auto"></div>
      <div className="max-w-3xl mx-auto block">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          We will tailor our process and solution to your needs.
        </h1>
        <a
          href="mailto:hello@nexora.co"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Let's talk
        </a>
      </div>
    </section>
  );
};

export default ContactUsSection;
