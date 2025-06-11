import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const footerData = {
  companyDetails: {
    name: "Nexocrat",
    slogan: "Empowering businesses with innovative software solutions.",
  },
  socialMediaData: [
    {
      type: "linkedin",
      href: "https://www.linkedin.com/in/nexocrat-it-solutions/",
      ariaLabel: "Linkedin",
      icon: <Linkedin />,
    },
    {
      type: "insta",
      href: "https://www.instagram.com/nexocrat_official/",
      ariaLabel: "Instagram",
      icon: <Instagram />,
    },
  ],
  services: [
    "Frontend Development",
    "Backend Development",
    "Full-Stack Web Development",
    "E-Commerce Solutions",
    "CMS Development & Customization",
    "API Development & Integration",
    "Web Performance & Security",
    "Maintenance & Ongoing Support",
    "Emerging & Specialized Services",
  ],
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <a href="/" className="text-2xl font-bold text-white">
              {footerData.companyDetails.name}
            </a>
            <p className="mt-2 text-sm">{footerData.companyDetails.slogan}</p>
            <div className="flex space-x-4 mt-4">
              {footerData.socialMediaData.map((media, idx) => (
                <a
                  key={idx}
                  href={media.href}
                  rel="noreferrer"
                  aria-label={media.ariaLabel}
                >
                  {media.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {footerData.services.map((service, idx) => (
                <li key={idx}>
                  <Link to="/services" className="hover:underline">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
            <p className="text-sm">
              <strong>Email:</strong> business@nexocrat.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} <strong>Nexocrat</strong>. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
