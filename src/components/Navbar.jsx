import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToSection = (sectionId) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-[#001f3f] text-white px-4 md:px-6 py-4 shadow-md sticky top-0 z-50 w-full">
      <div className="flex justify-between items-center w-full">
        {/* Logo & Brand - aligned to far left */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.avif"
            alt="Logo"
            className="h-10 w-10 object-contain rounded-[15px]"
          />
          <span className="text-xl font-bold font-body">
            C & R INTERIORS
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-sm font-medium font-body">
          {["home", "projects", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => handleScrollToSection(section)}
              className="hover:text-yellow-300 transition duration-200 cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 text-sm font-body text-white">
          {["home", "projects", "contact"].map((section) => (
            <div
              key={section}
              onClick={() => handleScrollToSection(section)}
              className="px-4 py-2 hover:bg-yellow-300 hover:text-[#001f3f] cursor-pointer transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
