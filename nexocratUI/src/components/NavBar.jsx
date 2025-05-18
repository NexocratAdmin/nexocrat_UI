import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavItem from "./NavItem";
import ThemeToggleButton from "./ThemeToggleButton";
import MainContent from "./MainContent";
import heroImage from "../assets/heroImage.png";
import NexocratLogo from "../assets/NexocratLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50 transition-colors text-black dark:text-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center flex-shrink-0 text-xl font-bold text-blue-600 dark:text-blue-400">
              <img
                src={NexocratLogo}
                alt="nexocrat logo"
                width={42}
                height={42}
              />
              <span>Nexocrat</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/services">Services</NavItem>
              <NavItem to="/about">About Us</NavItem>
              <NavItem to="/contact">Contact</NavItem>
              <ThemeToggleButton />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-4">
              <ThemeToggleButton />
              <button
                onClick={toggleMenu}
                className="text-gray-700 dark:text-gray-200"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 space-y-2 shadow">
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
      <div className="flex align-center justify-center">
        <img src={heroImage} alt="brand-image" />
      </div>
      <MainContent />
    </>
  );
};

export default Navbar;
