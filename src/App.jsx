// App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProjectsGallery from "./components/ProjectsGallery";
import ProjectDetail from "./components/ProjectDetail";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url('/images/bg-furniture.jpg')" }} // ✅ Your background image path
    >
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <ProjectsGallery />
              <Contact />
            </>
          }
        />
        <Route path="/projects" element={<ProjectsGallery />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>

      <Footer />

      {/* ✅ WhatsApp Floating Button */}
      <a
        href="https://wa.me/918056034718"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/whatsapp1.png"
          alt="Chat on WhatsApp"
          className="fixed bottom-10 right-5 h-12 w-12 z-50 hover:scale-110 transition-transform duration-200"
        />
      </a>
    </div>
  );
}

export default App;
