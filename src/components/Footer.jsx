import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#001f3f] text-white py-8">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        {/* Social Icons */}
        <div className="flex space-x-6 text-xl">
          <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
          <a href="https://www.instagram.com/rameshsuthar_interiors/?igsh=MTJqaHhhajd6cnl5NA%3D%3D#" className="hover:text-gray-400"><FaInstagram /></a>
          <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-400"><FaYoutube /></a>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center space-x-6 font-medium text-sm sm:text-base">
          <li><a href="#" className="hover:text-gray-400">Home</a></li>
          <li><a href="#" className="hover:text-gray-400">News</a></li>
          <li><a href="#" className="hover:text-gray-400">About</a></li>
          <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
          <li><a href="#" className="hover:text-gray-400">Our Team</a></li>
        </ul>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Designed by <span className="text-white font-semibold">Ramkishan</span>
        </p>
      </div>
    </footer>
  );
}
