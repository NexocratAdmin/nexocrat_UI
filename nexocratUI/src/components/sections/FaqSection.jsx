import { useState } from "react";
import Accordion from "../common/Accordion";

const FAQ_DATA = {
  title: "Frequently Asked Questions",
  description:
    "Get quick answers to common queries and questions about Nexocrat.",
  faqs: [
    {
      title: "What is Nexocrat?",
      content: `<p class="mb-4">
          <strong class="text-blue-600">Nexocrat</strong> is a forward-thinking software development company
          dedicated to transforming innovative IT ideas into fully functional, impactful
          digital solutions.
        </p>
        <p class="mb-4">
          We specialize in end-to-end software services — from concept validation and
          UI/UX design to scalable development and post-launch support.
        </p>
        <p>
          At Nexocrat, we don’t just write code; we architect robust, future-ready
          products tailored to each client’s unique business goals. Whether you're
          building an MVP, a fintech platform, or a complex enterprise application, our
          mission is to turn your vision into reality with precision, agility, and a deep
          commitment to quality.
        </p>`,
    },
    {
      title: "How do I get started with Nexocrat's services?",
      content: `
        <ol class="list-decimal list-inside space-y-1 mb-3 text-gray-700">
          <li>Reach out to our team to discuss your software needs.</li>
          <li>
            We'll work closely with you to understand your requirements and
            challenges.
          </li>
          <li>
            Together, we'll develop a tailored solution that meets your unique
            business goals.
          </li>
        </ol>
        <p>
          Our client-centric approach ensures we deliver innovative,
          high-quality software that drives tangible results for your
          organization.
        </p>`,
    },
    {
      title: "How long does it take to complete a project?",
      content: `<p>
        At Nexocrat, we typically complete projects in 8–16 weeks, depending on
        complexity.
        </p>
        <p>
          After an initial 4-week requirement gathering phase, we
          provide a detailed timeline estimate tailored to your project needs.
        </p>`,
    },
    {
      title: "What is your project model?",
      content: `<p>
          We follow an Agile methodology. Our process starts with building an
          MVP, keeping you closely involved throughout.
        </p>
        <p class="mt-2">
          We propose multiple tiers, giving you flexibility on timeline and
          budget. This approach helps validate ideas quickly and efficiently.
        </p>`,
    },
    {
      title: "What industries do you specialize in?",
      content: ` <p>We work in a wide range of industries, including: </p>
        <ul class="mt-2 space-y-1 text-gray-700">
          <li>🚀 MVP Development for Startups & Innovators</li>
          <li>☁️ Cloud & DevOps Engineering</li>
          <li>📊 Data Science & Advanced Analytics</li>
          <li> 📱 Next-Gen Mobile App Development</li>
          <li>🌐 Web Platforms & SaaS Solutions</li>
          <li>🤖 AI & Machine Learning Solutions</li>
          <li>🛒 eCommerce & Retail Tech</li>
          <li>🏥 Healthcare & MedTech</li>
          <li>📦 Logistics & Supply Chain Tech</li>
        </ul>`,
    },
  ],
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section
      id="faq-section"
      className="mx-4 mt-6 md:mt-16 pb-6 bg-white text-gray-800"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
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
