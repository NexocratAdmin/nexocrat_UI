import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import NavItem from "./common/NavItem";
import AppLogo from "../assets/app-logo.png";
// import ThemeToggleButton from "./ThemeToggleButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-brand-dark dark:bg-gray-900 shadow-md fixed w-full z-50 transition-colors text-black dark:text-white shadow">
      <div className="md:max-w-[80vw] mx-auto px-4 md:py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/">
            <div className="flex items-center flex-shrink-0 text-xl font-bold text-blue-600 dark:text-blue-400">
              <img
                className="rounded-2xl"
                src={AppLogo}
                alt="nexocrat logo"
                width={42}
                height={42}
              />
              <span className="ml-4 text-2xl text-white">Nexocrat</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/services">Services</NavItem>
            <NavItem to="/about">About Us</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            {/* <ThemeToggleButton /> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            {/* <ThemeToggleButton /> */}
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-200"
            >
              {isOpen ? (
                <X color="white" size={24} />
              ) : (
                <Menu color="white" size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 space-y-2 text-center">
          <NavItem to="/" onClick={toggleMenu}>
            Home
          </NavItem>
          <NavItem to="/services" onClick={toggleMenu}>
            Services
          </NavItem>
          <NavItem to="/about" onClick={toggleMenu}>
            About Us
          </NavItem>
          <NavItem to="/contact" onClick={toggleMenu}>
            Contact
          </NavItem>
        </div>
      )}
    </nav>
  );
};

export default Header;
