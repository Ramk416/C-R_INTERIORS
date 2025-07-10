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
      </video>

      {/* 🔹 Foreground Content */}
      <div className="relative z-10 px-4 py-6 min-h-[90vh] flex flex-col justify-between items-center text-center">
        {/* Top content: Logo + Text */}
        <div className="max-w-3xl">
          {/* C & R with INTERIORS */}
          <div className="flex flex-col items-center">
            <div className="flex gap-3 justify-center text-[3.2rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] font-bold leading-none">
              <span className="text-white stroke-text shadow-text">C</span>
              <span className="text-white stroke-text shadow-text">&</span>
              <span className="text-white stroke-text shadow-text">R</span>
            </div>
            <div className="text-[#e0e0e0] text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.3em] mt-1 font-heading shadow-text text-center ml-10 sm:ml-16 md:ml-20 lg:ml-24">
              INTERIORS
            </div>
          </div>

          {/* Description */}
          <p className="text-[#f1eeee] font-semibold leading-relaxed text-sm sm:text-base md:text-lg mt-4 mb-4 px-2">
            A space where creativity meets comfort. Whether it's a modern
            makeover, elegant renovation, or fresh design ideas—offering end-to-end
            turnkey projects from concept development and design to execution and
            final handover.
          </p>

          {/* Services Summary */}
          <p className="text-[#f1eeee] font-semibold text-sm md:text-base mt-4">
            📍 Residential & Commercial <br />
            📐 3D Visualization / Space Planning / Layout
          </p>

          {/* Contact */}
          <div className="mt-3 font-semibold text-[#f1eeee] text-sm md:text-base space-y-1">
            <p>📞 8056034718 / 9444139721</p>
            <p>📧 rsdesigningstudio@gmail.com</p>
          </div>
        </div>

        {/* Cards below but inside same screen */}
<div className="w-full mt-2 mb-9 px-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
    {/* Card 1 */}
    <div className="bg-white/5 p-4 rounded-xl shadow-lg">
      <h4 className="text-lg font-semibold text-[#e6d5c3] mb-1">Modular Interiors</h4>
      <p className="text-sm text-[#f1eeee]">
        Custom kitchens, wardrobes & functional furniture tailored to your space.
      </p>
    </div>
    {/* Card 2 */}
    <div className="bg-white/5 p-4 rounded-xl shadow-lg">
      <h4 className="text-lg font-semibold text-[#e6d5c3] mb-1">Ceiling & Lighting</h4>
      <p className="text-sm text-[#f1eeee]">
        Ceiling designs with intelligent lighting for mood and aesthetics.
      </p>
    </div>
    {/* Card 3 */}
    <div className="bg-white/5 p-4 rounded-xl shadow-lg">
      <h4 className="text-lg font-semibold text-[#e6d5c3] mb-1">3D Visualization</h4>
      <p className="text-sm text-[#f1eeee]">
        Preview your dream space before execution with stunning 3D renders.
      </p>
    </div>
    {/* Card 4 */}
    <div className="bg-white/5 p-4 rounded-xl shadow-lg">
      <h4 className="text-lg font-semibold text-[#e6d5c3] mb-1">Exterior Design</h4>
      <p className="text-sm text-[#f1eeee]">
        Elegant facade, landscaping & exterior cladding for a perfect look.
      </p>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Home;
