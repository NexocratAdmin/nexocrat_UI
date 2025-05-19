const PILLAR_DATA = {
  title: "Three pillars of modern software development",
  pillars: [
    {
      type: "Security",
      description:
        "We take the question of security very seriously and build digital products that ensure high-level customer data protection. Our software is compliant with all the fintech regulations and standards.",
      iconType: "lock-icon",
      alt: "Security Icon",
    },
    {
      type: "Reliability",
      description:
        "With more than seven years in the industry, we have learned how to develop stable and reliable software for various financial purposes, including banking, investment, and personal financial management.",
      iconType: "checkmark-square-icon",
      alt: "Reliability Icon",
    },
    {
      type: "Speed & Scalability",
      description:
        "We understand that financial platforms must be fast and easily scalable. We pay particular attention to these features when building products for our clients from the finance and investment industry.",
      iconType: "group-icon",
      alt: "Speed Icon",
    },
  ],
};

const JOURNEY_DATA = {
  title: "Our application development journey",
  description:
    "Nexocrat provides full-cycle application development from conceptualization to an MVP and full-fledged solution deployment.",
  steps: [
    {
      title: "Discovery and planning",
      description:
        "We know that every project is unique. Therefore, our team investigates all the business requirements and builds effective end-users journeys to make the product intuitive at maximum.",
    },
    {
      title: "UI/UX design",
      description:
        "At this fintech app development stage, we turn collected insights into an engaging and user-friendly interface that lets customers perform even the most difficult financial tasks.",
    },
    {
      title: "Coding",
      description:
        "Our broad tech-stack spans solutions for both fintech web and mobile development, making it possible to digitize various financial and banking processes.",
    },
    {
      title: "QA and testing",
      description:
        "We check every product’s aspect to ensure that software meets all the quality standards and the client's requirements.",
    },
    {
      title: "Deployment",
      description:
        "After beta testing and final bug fixes, we deploy the software product to customers and introduce it to the world.",
    },
    {
      title: "Maintenance",
      description:
        "This stage focuses on providing support to customers if they encounter challenges when using financial software.",
    },
  ],
};

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
      content: ` <p>We work in a wide range of industries, including:</p>
        <ul class="list-disc list-inside mt-2 space-y-1 text-gray-700">
          <li>MVP Development</li>
          <li>Cloud DevOps</li>
          <li>Data Science & Engineering</li>
          <li>Mobile Apps</li>
        </ul>`,
    },
  ],
};

export { PILLAR_DATA, JOURNEY_DATA, FAQ_DATA };
