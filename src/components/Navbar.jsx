import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="bg-gradient-to-r from-[#140B1D] via-[#311A42] to-[#140B1D] text-white px-4 md:px-6 py-4 shadow-xl sticky top-0 z-50 w-full border-b border-[#D4AF37]/20 backdrop-blur-md">
      <div className="flex justify-between items-center w-full">

        {/* Logo & Brand */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-10 object-contain rounded-[15px]"
          />

          <span className="text-xl font-bold tracking-wide">
            RAMESH SUTHAR INTERIOR
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {["home", "projects", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => handleScrollToSection(section)}
              className="relative transition-all duration-300 hover:text-[#E6C76A] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#E6C76A] after:transition-all after:duration-300 hover:after:w-full"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-6 h-6 text-[#E6C76A]" />
            ) : (
              <Menu className="w-6 h-6 text-[#E6C76A]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 rounded-xl overflow-hidden border border-[#D4AF37]/20 bg-[#22122E]/95 backdrop-blur-md shadow-xl">
          {["home", "projects", "contact"].map((section) => (
            <div
              key={section}
              onClick={() => handleScrollToSection(section)}
              className="px-4 py-3 cursor-pointer transition-all duration-300 hover:bg-[#E6C76A] hover:text-[#140B1D]"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}