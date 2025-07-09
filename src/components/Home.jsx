// Home.jsx

const Home = () => {
  return (
    <section
      id="home"
      className="relative bg-black text-white min-h-[90vh] overflow-hidden"
    >
      {/* 🔹 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-50"
      >
        <source src="/bg_video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Foreground Content */}
      <div className="relative z-10 px-4 py-10 min-h-[85vh] flex flex-col justify-center items-center text-center max-w-3xl mx-auto">
        <h1 className="text-center font-bold leading-tight mb-6">
          <div className="flex gap-3 justify-center text-6xl md:text-7xl font-bold mb-2">
            <span className="stroke-text shadow-text">C</span>
            <span className="stroke-text shadow-text">&</span>
            <span className="stroke-text shadow-text">R</span>
          </div>

          <div className="text-[#d0c0b0] text-lg md:text-xl tracking-[0.3em] mt-2 font-[Playfair Display] text-right md:ml-28 shadow-text">
            INTERIORS
          </div>
        </h1>

        <p className="text-[#f1eeee] font-semibold leading-relaxed text-base md:text-lg mb-4">
          A space where creativity meets comfort. Whether it's a modern
          makeover, elegant renovation, or fresh design ideas—offering
          end-to-end turnkey projects from concept development and design to
          execution and final handover.
        </p>

        <p className="text-[#f1eeee] font-semibold text-sm md:text-base">
          📍 Residential & Commercial <br />
          📐 3D Visualization / Space Planning / Layout
        </p>

        <div className="mt-8 font-semibold text-[#f1eeee] text-sm md:text-base space-y-1">
          <p>📞 9444139721 / 8056034718</p>
          <p>📧 rsdesigningstudio@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
