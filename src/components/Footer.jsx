import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#140B1D] via-[#311A42] to-[#140B1D] text-white py-8 border-t border-[#D4AF37]/20">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        
        {/* Social Icons */}
        <div className="flex space-x-6 text-xl">
          <a href="#" className="hover:text-[#E6C76A] transition">
            <FaFacebook />
          </a>

          <a
            href="https://www.instagram.com/rameshsuthar_interiors/?igsh=MTJqaHhhajd6cnl5NA%3D%3D#"
            className="hover:text-[#E6C76A] transition"
          >
            <FaInstagram />
          </a>

          <a href="#" className="hover:text-[#E6C76A] transition">
            <FaTwitter />
          </a>

          <a href="#" className="hover:text-[#E6C76A] transition">
            <FaYoutube />
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center space-x-6 font-medium text-sm sm:text-base">
          <li>
            <a href="#" className="hover:text-[#E6C76A] transition">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-[#E6C76A] transition">
              News
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-[#E6C76A] transition">
              About
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-[#E6C76A] transition">
              Contact Us
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-[#E6C76A] transition">
              Our Team
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <p className="text-xs text-gray-300">
          © {new Date().getFullYear()} Designed by{" "}
          <span className="text-[#E6C76A] font-semibold">
            Ramkishan
          </span>
        </p>
      </div>
    </footer>
  );
}