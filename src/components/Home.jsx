const Home = () => {
  return (
    <section
      id="home"
      className="bg-black text-white overflow-hidden"
    >
      {/* Hero Banner */}

      {/* Desktop Banner */}
      <img
        src="/hero-desktop.PNG"
        alt="Ramesh Suthar Interior"
        className="hidden md:block w-full h-auto object-cover"
      />

      {/* Mobile Banner */}
      <img
        src="/hero-mobile.png"
        alt="Ramesh Suthar Interior"
        className="block md:hidden w-full h-auto object-cover"
      />

      {/* Desktop Cards Only */}
      <div className="hidden md:block bg-[#12091d] px-4 py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4">

          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-md border border-yellow-500/30 p-4 rounded-xl shadow-lg text-center transition duration-300 hover:bg-white/15">
            <h4 className="text-base font-semibold text-white">
              Modular Interiors
            </h4>

            <p className="text-sm text-gray-300 mt-2">
              Custom kitchens, wardrobes & functional furniture tailored to your
              space.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-md border border-yellow-500/30 p-4 rounded-xl shadow-lg text-center transition duration-300 hover:bg-white/15">
            <h4 className="text-base font-semibold text-white">
              Ceiling & Lighting
            </h4>

            <p className="text-sm text-gray-300 mt-2">
              Ceiling designs with intelligent lighting for mood and aesthetics.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-md border border-yellow-500/30 p-4 rounded-xl shadow-lg text-center transition duration-300 hover:bg-white/15">
            <h4 className="text-base font-semibold text-white">
              3D Visualization
            </h4>

            <p className="text-sm text-gray-300 mt-2">
              Preview your dream space before execution with stunning 3D
              renders.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/10 backdrop-blur-md border border-yellow-500/30 p-4 rounded-xl shadow-lg text-center transition duration-300 hover:bg-white/15">
            <h4 className="text-base font-semibold text-white">
              Exterior Design
            </h4>

            <p className="text-sm text-gray-300 mt-2">
              Elegant facade, landscaping & exterior cladding for a perfect
              look.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;