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
        <h1 className="text-4xl md:text-5xl font-bold text-[#f43838] mb-5">
          C & R <span className="text-[#f43838]">INTERIORS</span>
        </h1>

        <p className="text-[#e7b174] font-semibold leading-relaxed text-base md:text-lg mb-4">
          A space where creativity meets comfort. Whether it's a modern makeover,
          elegant renovation, or fresh design ideas—offering end-to-end turnkey
          projects from concept development and design to execution and final handover.
        </p>

        <p className="text-[#e7b174] font-semibold text-sm md:text-base">
          📍 Residential & Commercial <br />
          📐 3D Visualization / Space Planning / Layout
        </p>

        <div className="mt-8 font-semibold text-[#e7b55f] text-sm md:text-base space-y-1">
          <p>📞 9444139721 / 8056034718</p>
          <p>📧 rsdesigningstudio@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
