import { useState } from "react";
import FrontendIcon from "../../assets/Icons/Services/frontend.webp";
import FrontendImg from "../../assets/Services/frontend.png";
import BackendIcon from "../../assets/Icons/Services/backend.jpg";
import BackendImg from "../../assets/Services/backend.jpg";
import FullStackIcon from "../../assets/Icons/Services/fullstack.jpg";
import FullStackImg from "../../assets/Services/fullstack.jpg";
import ECommerceIcon from "../../assets/Icons/Services/e-commerce.png";
import ECommerceImg from "../../assets/Services/e-commerce.jpg";
import CmsIcon from "../../assets/Icons/Services/cms.webp";
import CmsImg from "../../assets/Services/cms.jpg";
import ApiIcon from "../../assets/Icons/Services/api.webp";
import ApiImg from "../../assets/Services/api.jpg";
import SecurityIcon from "../../assets/Icons/Services/web-perf-security.png";
import SecurityImg from "../../assets/Services/security.jpg";
import MaintenanceIcon from "../../assets/Icons/Services/maintenance.png";
import MaintenanceImg from "../../assets/Services/maintenance.jpg";
import EmergingServicesIcon from "../../assets/Icons/Services/emerging-services.avif";
import EmergingServicesImg from "../../assets/Services/healthcare.jpg";

const ourServicesData = {
  heading: "Our Services",
  description: "Services we provide, come dude!!",
  services: [
    {
      type: "frontend",
      name: "Frontend Development",
      iconUrl: FrontendIcon,
      imgUrl: FrontendImg,
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
      iconUrl: BackendIcon,
      imgUrl: BackendImg,
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
      iconUrl: FullStackIcon,
      imgUrl: FullStackImg,
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
      iconUrl: ECommerceIcon,
      imgUrl: ECommerceImg,
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
      iconUrl: CmsIcon,
      imgUrl: CmsImg,
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
      iconUrl: ApiIcon,
      imgUrl: ApiImg,
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
      iconUrl: SecurityIcon,
      imgUrl: SecurityImg,
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
      iconUrl: MaintenanceIcon,
      imgUrl: MaintenanceImg,
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
      iconUrl: EmergingServicesIcon,
      imgUrl: EmergingServicesImg,
      description: "Stay ahead of the curve with next-gen technologies:",
      isDarkTheme: true,
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
    <>
      <div className="md:max-w-[80vw] md:mx-auto border-b border-gray-200">
        <div className="md:text-xl mx-4 mt-4 md:mt-10 pb-4 md:pb-10">
          <h2 className="flex items-center">
            <span className="text-2xl md:text-4xl font-semibold">
              💼 Our Services
            </span>
          </h2>
          <p className="mt-4 mb-2">
            At <b className="text-xl md:text-3xl text-blue-600">Nexocrat</b> we
            specialize in delivering end-to-end software and web development
            solutions that drive real results. From crafting intuitive frontends
            to building powerful backends, we cover the full spectrum of digital
            development.
          </p>
          <p>
            {" "}
            Whether you're launching a new product or scaling an exisiting one,
            our team is equipped to support your journey with the following
            services:
          </p>
        </div>
      </div>
      <div
        id="services-block"
        className="flex bg-white rounded-lg overflow-hidden"
      >
        {/* Tabs on Left */}
        <div className="w-1/3 md:w-1/5 md:ml-40 mt-2">
          <div className="md:my-4 ml-2 md:ml-6">
            <span className="text-sm md:text-2xl font-bold text-gray-700">
              🚀 What We Offer :
            </span>
          </div>
          <ul className="flex flex-col py-2 text-sm font-semibold">
            {ourServicesData.services.map((service, idx) => (
              <li
                key={idx}
                className={`flex items-center cursor-pointer text-left p-2 md:p-6 border-t border-gray-300 ${
                  activeTab === idx
                    ? "md:border-blue-600 md:bg-brand-dark text-blue-600 md:text-white"
                    : "md:border-transparent text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab(idx)}
              >
                <img
                  className="inline-block service-logo icon w-6 h-6 md:w-10 md:h-10 rounded-full"
                  src={service.iconUrl}
                  alt="service icon"
                />
                <span className="ml-2 md:ml-4 md:text-lg">{service.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Content on Right */}
        <div className="w-2/3 md:w-4/5 bg-gray-100 px-2 py-4 md:p-10">
          <div className="md:mr-10 pl-2 md:pl-10">
            <h2 className="text-xl md:text-3xl text-center md:text-left font-bold text-blue-600">
              {activeTabData.name}
            </h2>
            <p className="text-gray-600 mt-2">{activeTabData.description}</p>
            <div className="about-service relative mt-10">
              <img
                className="service-image md:w-[58vw] md:h-[75vh] border"
                src={activeTabData.imgUrl}
                alt="service image"
              />
              <div className="more-data flex flex-col gap-2 md:gap-6 mt-8 md:mt-2 md:absolute top-1/2 right-0 md:transform md:-translate-y-1/2 rounded-xl text-center">
                {activeTabData.moreData.map((data, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col justify-center md:w-[300px] md:h-[100px] p-3 rounded-xl border ${
                      activeTabData.isDarkTheme
                        ? "bg-white text-black"
                        : "bg-brand-dark/90 text-white"
                    } ${idx % 2 === 1 && "md:ml-20"}`}
                  >
                    <h3 className="text-sm md:text-xl font-semibold">
                      {data.title}
                    </h3>
                    <p className="text-xs md:text-sm">{data.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
