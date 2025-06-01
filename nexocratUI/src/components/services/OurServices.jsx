import { useState } from "react";
import WebDevLogo from "../../assets/Services/webdev-logo.jpg";
import WebDevImg from "../../assets/Services/web-dev.png";
import AppDevImg from "../../assets/Services/app-dev.jpg";

const ourServicesData = {
  heading: "Our Services",
  description: "Services we provide, come dude!!",
  services: [
    {
      type: "frontend",
      name: "Frontend Development",
      iconUrl: WebDevLogo,
      imgUrl: WebDevImg,
      description:
        "Crafting user-centric, responsive, and high-performing interfaces using the latest technologies:",
      moreData: [
        {
          title: "Responsive Web Design",
          content: "(Optimized for mobile, tablet, and desktop)",
        },
        {
          title: "Progressive Web Apps (PWAs)",
          content: "with offline support and app-like UX",
        },
        {
          title: "Single-Page Applications (SPAs)",
          content: "using React, Angular, or Vue.js",
        },
        {
          title: "Static Websites",
          content: "(HTML, CSS, JS, JAMstack) for fast-loading sites",
        },
      ],
    },
    {
      type: "backend",
      name: "Backend Development",
      iconUrl: WebDevLogo,
      imgUrl: AppDevImg,
      description: "Robust server-side systems to power your applications:",
      isDarkTheme: true,
      moreData: [
        {
          title: "Custom Backend Development",
          content:
            "with Node.js, Python (Django), Ruby on Rails, or PHP (Laravel)",
        },
        {
          title: "Database Architecture & Optimization",
          content: "using SQL, PostgreSQL, MongoDB, Firebase",
        },
        {
          title: "Secure Authentication & Authorization",
          content: "(JWT, OAuth, SSO)",
        },
        {
          title: "Cloud & Server Deployment",
          content: "on AWS, GCP, Azure, or DigitalOcean",
        },
      ],
    },
    {
      type: "fullstack",
      name: "Full-Stack Web Development",
      iconUrl: WebDevLogo,
      imgUrl: WebDevImg,
      description:
        "Complete end-to-end solutions combining frontend + backend:",
      moreData: [
        {
          title: "Custom Web Applications",
          content: "(SaaS Platforms, Admin Panels, Dashboards)",
        },
        {
          title: "E-commerce Development",
          content: "(Shopify, WooCommerce, Magento, or custom solutions)",
        },
        {
          title: "Enterprise Portals",
          content:
            "(CRM, ERP, internal tools) tailored for your business needs",
        },
        {
          title: "Pixel-Perfect UI Implementation",
          content: "from Figma, Adobe XD, or Sketch",
        },
      ],
    },
    {
      type: "ecommerce",
      name: "E-Commerce Solutions",
      iconUrl: WebDevLogo,
      imgUrl: WebDevImg,
      description: "Designing and developing high-converting online stores:",
      moreData: [
        {
          title: "E-Commerce Store Setup",
          content: "with Shopify, WooCommerce, BigCommerce",
        },
        {
          title: "Custom-Built Platforms",
          content: "for scalability and flexibility",
        },
        {
          title: "Payment Gateway Integration",
          content: "(Stripe, PayPal, Razorpay, etc.)",
        },
        {
          title: "Inventory, Shipping & Order Management Systems",
          content: "",
        },
      ],
    },
    {
      type: "cms",
      name: "CMS Development & Customization",
      iconUrl: WebDevLogo,
      imgUrl: WebDevImg,
      description: "Easy-to-manage websites built on reliable CMS platforms:",
      moreData: [
        {
          title: "WordPress Development",
          content: "(Custom themes, plugins, performance tuning)",
        },
        {
          title: "Headless CMS Integration",
          content: "(Strapi, Contentful, Sanity)",
        },
        {
          title: "Custom CMS Builds",
          content: "for unique business workflows or content strategies",
        },
      ],
    },
    {
      type: "api",
      name: "API Development & Integration",
      iconUrl: WebDevLogo,
      imgUrl: WebDevImg,
      description:
        "Connecting your systems and unlocking third-party services:",
      moreData: [
        {
          title: "REST & GraphQL API Development",
          content: "",
        },
        {
          title: "Third-Party Integrations",
          content: "(Payments, CRMs, Maps, Social Logins)",
        },
        {
          title: "Microservices Architecture",
          content: "for scalable backend solutions",
        },
        {
          title: "Internal API Gateways",
          content: "for modular architecture",
        },
      ],
    },
    {
      type: "performance",
      name: "Web Performance & Security",
      iconUrl: WebDevLogo,
      imgUrl: WebDevImg,
      description: "Delivering fast, secure, and SEO-friendly websites:",
      moreData: [
        {
          title: "Performance Optimization",
          content: "(Google Lighthouse, Core Web Vitals)",
        },
        {
          title: "SEO-Ready Development",
          content: "with semantic HTML and structured data",
        },
        {
          title: "Security Best Practices",
          content: "(HTTPS, OWASP, CSP, input sanitization)",
        },
        {
          title: "Compliance Implementation",
          content: "(GDPR, CCPA, WCAG)",
        },
      ],
    },
    {
      type: "support",
      name: "Maintenance & Ongoing Support",
      iconUrl: WebDevLogo,
      imgUrl: WebDevImg,
      description:
        "Reliable post-launch support to keep your website running smoothly:",
      moreData: [
        {
          title: "Managed Hosting & Maintenance Plans",
          content: "",
        },
        {
          title: "Regular Updates & Bug Fixes",
          content: "",
        },
        {
          title: "24/7 Uptime Monitoring & Technical Support",
          content: "",
        },
      ],
    },
    {
      type: "emerging",
      name: "Emerging & Specialized Services",
      iconUrl: WebDevLogo,
      imgUrl: WebDevImg,
      description: "Stay ahead of the curve with next-gen technologies:",
      moreData: [
        {
          title: "Web3 & Blockchain Integration",
          content: "(Smart Contracts, dApps)",
        },
        {
          title: "AI-Driven Applications",
          content: "(Chatbots, Recommendations, NLP tools)",
        },
        {
          title: "Accessibility Compliance",
          content: "(WCAG 2.1 for inclusive design)",
        },
      ],
    },
  ],
};

const OurServices = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeTabData = ourServicesData.services[activeTab];
  return (
    <div
      id="services-block"
      className="flex md:max-w-[90vw] mx-auto bg-white rounded-lg overflow-hidden"
    >
      {/* Tabs on Left */}
      <div className="w-1/5 mt-10">
        <ul className="flex flex-col pt-10">
          {ourServicesData.services.map((service, idx) => (
            <li key={idx} className="service-item rounded-lg">
              <button
                onClick={() => setActiveTab(idx)}
                className={`flex items-center w-full text-left p-6 text-sm font-medium transition-all duration-200 rounded-lg ${
                  activeTab === idx
                    ? "border-blue-600 bg-brand-dark text-white"
                    : "border-transparent text-gray-600 hover:bg-gray-200"
                }`}
              >
                <img
                  className="service-logo icon w-6 h-6 rounded-full"
                  src={service.iconUrl}
                  alt="service icon"
                />
                <span className="name ml-2 text-lg">{service.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Content on Right */}
      <div className="w-4/5 mt-10 p-10">
        <h2 className="text-3xl font-bold text-blue-600 mb-4 pl-10">
          {activeTabData.name}
        </h2>
        <p className="text-gray-600 pl-10">{activeTabData.description}</p>
        <div className="about-service relative p-10">
          <img
            className="service-image w-[95%] border"
            src={activeTabData.imgUrl}
            alt="service image"
          />
          <div className="more-data absolute top-1/2 left-1/2 transform -translate-y-1/2 grid gap-4 md:gap-10 md:grid-cols-2 text-center">
            {activeTabData.moreData.map((data, idx) => (
              <div
                key={idx}
                className={`p-3 md:p-3 rounded-xl shadow-lg hover:shadow-2xl ${
                  activeTabData.isDarkTheme
                    ? "bg-white text-black"
                    : "bg-brand-dark/90 text-white"
                }`}
              >
                <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
                <p className="text-sm">{data.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
