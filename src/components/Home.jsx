
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [];
    timers.push(setTimeout(() => setStep(1), 1200));   // Paragraph
    timers.push(setTimeout(() => setStep(2), 7500));   // 📍
    timers.push(setTimeout(() => setStep(3), 9700));   // 📐
    timers.push(setTimeout(() => setStep(4), 12000));  // 📞
    timers.push(setTimeout(() => setStep(5), 14000));  // 📧
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-black text-white min-h-[90vh] overflow-hidden font-body"
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
        
        {/* ✅ C & R INTERIORS Logo */}
        <div className="flex flex-col items-start leading-none mb-4">
          {/* C & R */}
          <div className="flex gap-4 text-[4rem] sm:text-[4.5rem] md:text-[5rem] font-bold -mb-1">
            <span className="cr-logo-text">C</span>
            <span className="cr-logo-text">&</span>
            <span className="cr-logo-text">R</span>
          </div>
          {/* INTERIORS aligned right */}
          <div className="text-[#d6c4b3] text-[1.1rem] sm:text-[1.3rem] tracking-[0.4em] font-heading ml-16 sm:ml-24 -mt-1">
            INTERIORS
          </div>
        </div>

        {/* ✅ Typewriter Content */}
        <div className="text-[#f1eeee] font-semibold text-sm sm:text-base px-4 text-center font-body">
          
          {/* Paragraph */}
          {step === 1 && (
            <Typewriter
              words={[
                "A space where creativity meets comfort. Whether it's a modern makeover, elegant renovation, or fresh design ideas—offering end-to-end turnkey projects from concept development and design to execution and final handover.",
              ]}
              typeSpeed={26}
              cursor={false}
            />
          )}
          {step > 1 && (
            <p className="mb-5 leading-relaxed">
              A space where creativity meets comfort. Whether it's a modern
              makeover, elegant renovation, or fresh design ideas—offering
              end-to-end turnkey projects from concept development and design to
              execution and final handover.
            </p>
          )}

          {/* 📍 */}
          {step === 2 && (
            <Typewriter
              words={["📍 Residential & Commercial"]}
              typeSpeed={28}
              cursor={false}
            />
          )}
          {step > 2 && <p className="mb-1">📍 Residential & Commercial</p>}

          {/* 📐 */}
          {step === 3 && (
            <Typewriter
              words={["📐 3D Visualization / Space Planning / Layout"]}
              typeSpeed={28}
              cursor={false}
            />
          )}
          {step > 3 && (
            <p className="mb-3">
              📐 3D Visualization / Space Planning / Layout
            </p>
          )}

          {/* 📞 */}
          {step === 4 && (
            <Typewriter
              words={["📞 9444139721 / 8056034718"]}
              typeSpeed={28}
              cursor={false}
            />
          )}
          {step > 4 && <p className="mb-1">📞 9444139721 / 8056034718</p>}

          {/* 📧 */}
          {step === 5 && (
            <Typewriter
              words={["📧 rsdesigningstudio@gmail.com"]}
              typeSpeed={28}
              cursor={false}
            />
          )}
          {step > 5 && <p>📧 rsdesigningstudio@gmail.com</p>}
        </div>
      </div>
    </section>
  );
};

export default Home;
