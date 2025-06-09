import { useState } from "react";
const tabs = [
  {
    id: "our_mission",
    title: "Our Mission",
    heading:
      "At Nexocrat, our mission is to innovate and evolve, crafting digital solutions that withstand the test of time.",
    content:
      "Our mission is to transform ideas into impactful digital experiences through innovation, integrity, and cutting-edge technology. We partner with businesses to design scalable, reliable, and future-ready IT solutions that solve real problems, streamline operations, and drive growth. At Nexocrat, we’re not just building software—we’re building trust, relationships, and a smarter digital future.",
  },
  {
    id: "our_vision",
    title: "Our Vision",
    heading:
      "At Nexocrat, we dream of a future where innovation knows no bounds.",
    content:
      "At Nexocrat, we envision a future where innovation knows no boundaries. Our goal is to lead the way in shaping a digital world that is not only groundbreaking but also inclusive and accessible to all. Fueled by a passion for excellence and a relentless drive for creativity, we are committed to crafting digital solutions that empower businesses and individuals to thrive in an ever-evolving technological landscape.",
  },
  {
    id: "our_approach",
    title: "Our Approach",
    contents: [
      {
        title: "1. Discovery & Alignment",
        content:
          "We begin by understanding your goals, challenges, and users. Through strategic conversations and research, we align our vision with yours.",
      },
      {
        title: "2. Ideation & Planning",
        content:
          "Our team brainstorms smart, scalable solutions. We map out user journeys, technical architecture, and delivery milestones with clear roadmaps.",
      },
      {
        title: "3. Design-Driven Development",
        content:
          "We merge clean UI/UX design with robust, scalable code—building modern, responsive, and secure applications with performance at their core.",
      },
      {
        title: "4. Iterative Delivery",
        content:
          "Using agile methodology, we release in phases, gathering feedback early and often to refine, adapt, and accelerate time-to-value.",
      },
      {
        title: "5. Quality Assurance",
        content:
          "Every component is tested rigorously—automated and manual—to ensure reliability, performance, and user satisfaction across all devices.",
      },
      {
        title: "6. Launch & Beyond",
        content:
          "We deploy confidently and support continuously. From post-launch maintenance to scaling infrastructure, Nexocrat is your long-term partner in growth.",
      },
    ],
  },
  {
    id: "our_values",
    title: "Our Values",
    contents: [
      {
        title: "Innovation at the Core",
        heading: `"We don't follow trends—we create them."`,
        content:
          "We believe technology should inspire progress. At Nexocrat, we harness emerging tools and bold thinking to craft solutions that not only solve today’s problems but also anticipate tomorrow’s challenges.",
      },
      {
        title: " Customer-Centric Mindset",
        heading: `"Your goals drive our mission."`,
        content:
          "Everything we do starts with your needs. We listen, adapt, and deliver with a focus on building lasting partnerships where your success becomes our shared achievement.",
      },
      {
        title: "Uncompromising Reliability",
        heading: `"Promises made, promises kept."`,
        content:
          "You can count on us. From project kick-off to deployment, we stay committed to deadlines, deliverables, and top-tier performance, so you never have to worry about what’s next.",
      },
      {
        title: "Integrity in Action",
        heading: `"Transparency is our default setting."`,
        content:
          "We build trust through open communication and ethical choices. Our team stands by every commitment, taking responsibility with honesty and professionalism.",
      },
      {
        title: "Collaboration that Elevates",
        heading: `"Great work is never done alone."`,
        content:
          "We bring people and ideas together—clients, developers, and designers working as one. Through teamwork, we unlock smarter solutions and create meaningful impact.",
      },
      {
        title: "Excellence as a Standard",
        heading: `"Good enough is never enough."`,
        content:
          "Our commitment to quality fuels everything we build. From clean code to seamless UX, we strive for excellence at every layer of development and delivery.",
      },
    ],
  },
  {
    id: "our_culture",
    title: "Our Culture",
    heading:
      "United by a shared passion for technology and a drive to make an impact.",
    content:
      "At Nexocrat, culture isn't just a buzzword; it's the soul of our existence. Picture it as this invisible force that binds us together, infusing life into every project, meeting, and conversation. It's like this pulsating energy fueled by collaboration, innovation, and empowerment. Think of it as a lively tapestry where every voice sings, every idea bursts forth, and growth sprouts in abundance.",
  },
];

const OurMethodology = () => {
  const [activeTab, setActiveTab] = useState("our_vision");

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-16">
        <div className="mb-6 md:mb-10">
          <span className="text-indigo-600 font-semibold uppercase tracking-wide text-sm">
            Our Methodology
          </span>
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mt-3">
            Our systematic approach blends innovation with tried-and-tested
            strategies to deliver tailored solutions that exceed expectations.
          </h2>
        </div>

        {/* Tab Navigation */}
        <ul className="flex overflow-auto md:gap-4 mb-3 md:mb-6 border-b border-gray-200">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-2 md:px-4 text-xs md:text-sm md:font-medium border-b-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-600 hover:text-indigo-600"
                }`}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>

        {/* Tab Content */}
        <div className="text-left">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`${activeTab === tab.id ? "block" : "hidden"}`}
            >
              {tab.id === "our_values" || tab.id === "our_approach" ? (
                <div className="our-values grid md:grid-cols-3 gap-4 md:gap-10">
                  {tab.contents.map((value, i) => (
                    <div className="our-value " key={i}>
                      {value.title && (
                        <h3 className="textlg md:text-xl font-semibold text-gray-800">
                          {value.title}
                        </h3>
                      )}
                      {value.heading && (
                        <h4 className="text-sm md:text-md font-medium text-gray-800">
                          {value.heading}
                        </h4>
                      )}
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        {value.content}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {tab.heading}
                  </h3>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {tab.content}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMethodology;
