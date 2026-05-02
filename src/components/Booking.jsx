import { useState, useEffect, useRef } from "react";
import delivery from "../assets/images/deliver.avif";
import measure from "../assets/images/measure.avif";
import design from "../assets/images/design.avif";
import vision from "../assets/images/vision.avif";

const steps = [
  {
    title: "01. Share Your Vision",
    desc: "Start by booking a session with us. Share your preferred style, where you’ll wear it, and how you want it to feel. We guide you through fabric choices, design direction, and details to ensure your outfit reflects your identity with precision and elegance",
    image: vision, // Replace with your asset
    center:"object-[center_50%]"
  },
  {
    title: "02. Guided Measurement (Anywhere You Are)",
    desc: "Location is never a barrier. We schedule a guided session where we walk you step-by-step through taking your measurements — ensuring accuracy and confidence, whether you're at home or abroad.",
    image: measure, // Replace with your asset
  },
  {
    title: "03. Design & Craftsmanship",
    desc: "Once your details are confirmed, we begin the creation process. Every piece is carefully designed, cut, and tailored from scratch — with attention to detail, structure, and finishing that reflects true craftsmanship.",
    image: design, // Replace with your asset
  },
  {
    title: "04. Delivery & Experience",
    desc: "Your outfit is completed and delivered to you, wherever you are. Every piece is made to fit, designed to stand out, and crafted to carry presence, precision, and purpose.",
    image: delivery, // Replace with your asset
  },
];

export default function BookingSteps() {
  const containerRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       if (!containerRef.current) return;

  //       const rect = containerRef.current.getBoundingClientRect();
  //       const sectionHeight = containerRef.current.offsetHeight;
  //       const progress = -rect.top / (sectionHeight - window.innerHeight);

  //       // Map scroll progress to the steps
  //       let activeStep = 0;
  //       if (progress > 0.33 && progress <= 0.66) activeStep = 1;
  //       if (progress > 0.66) activeStep = 2;

  //       if (activeStep !== currentStep) {
  //         setIsTransitioning(true);
  //         setCurrentStep(activeStep);
  //         // Remove the blur after the transition animation completes
  //         setTimeout(() => setIsTransitioning(false), 500);
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, [currentStep]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!containerRef.current) return;

  //     const rect = containerRef.current.getBoundingClientRect();
  //     const windowHeight = window.innerHeight;
  //     const sectionHeight = containerRef.current.offsetHeight;

  //     // Calculate progress (0 to 1)
  //     // We add a clamp to ensure it stays between 0 and 1
  //     const progress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - windowHeight)));

  //     let activeStep = 0;
  //     if (progress > 0.33) activeStep = 1;
  //     if (progress > 0.66) activeStep = 2;

  //     // IMPORTANT: If the step changes, trigger the transition
  //     if (activeStep !== currentStep) {
  //       setIsTransitioning(true); // Start blurring

  //       // Wait a tiny bit (100ms) for the blur to start before swapping content
  //       setTimeout(() => {
  //         setCurrentStep(activeStep);
  //       }, 150);

  //       // Remove the blur once the swap is done
  //       setTimeout(() => {
  //         setIsTransitioning(false);
  //       }, 600);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [currentStep]); // Listen for step changes

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const sectionHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate progress of the whole 400vh container (0 to 1)
      const progress = Math.max(
        0,
        Math.min(1, -rect.top / (sectionHeight - windowHeight)),
      );

      // Logic: map progress to 0, 1, 2, 3
      const totalSteps = steps.length;
      const activeStep = Math.min(
        totalSteps - 1,
        Math.floor(progress * totalSteps),
      );

     if (activeStep !== currentStep) {
  // 1. Start the blur immediately
  setIsTransitioning(true);

  // 2. Wait 200ms (so the screen is blurry/invisible) before swapping content
  setTimeout(() => {
    setCurrentStep(activeStep);
  }, 200);

  // 3. Wait 600ms (total) to clear the blur so the new content fades in
  setTimeout(() => {
    setIsTransitioning(false);
  }, 400);
}

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentStep]);

  return (
    <div className="bg-accent">
      <div className="py-20 container mx-auto px-10 text-center"  data-aos="fade-in">
        <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">
          Your Custom Piece, Made Simple
        </h2>
        <p className="text-2xl md:text-3xl font-medium text-primary max-w-3xl mx-auto leading-relaxed">
          From anywhere in the world, we guide you step-by-step to create a
          perfectly tailored outfit — crafted with precision, delivered with
          excellence.
        </p>
      </div>

      {/*  We make the section tall (300vh) to give it scrolling room */}
      <div ref={containerRef} className="relative h-[300vh] bg-accent "  data-aos="fade-up ">
        {/* This holds the elements in place while you scroll the 300vh */}
        <div className="sticky top-0 h-screen w-full flex max-md:flex-col items-center justify-center overflow-hidden">
          {/* LEFT SIDE: Content */}
          <div
            className={`flex-1 flex flex-col justify-center container transition-all duration-500 ease-in-out ${
              isTransitioning ? "blur-2xl opacity-0" : "blur-0 opacity-100"
            }`}
          >
            <span className="text-primary font-bold tracking-widest text-sm my-2 ">
              How to Order from TADÉ
            </span>

            <h1 className="">{steps[currentStep].title}</h1>
            <p className=" max-w-md text-lg max-sm:text-sm">{steps[currentStep].desc}</p>

            {/* Visual Step Indicator dots */}
            <div className="flex gap-2 mt-8 max-sm:mt-4">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentStep ? "w-8 bg-primary" : "w-2 bg-dark/20"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Supporting Image */}
          <div className="flex-1 h-full w-full relative flex items-center justify-center">
            <div
              className={`w-[80%] h-[80%] max-sm:w-full max-sm:h-full max-sm:max-w-[400px] max-sm:max-h-[400px] transition-all duration-700 ease-in-out ${
                isTransitioning
                  ? "blur-2xl scale-95 opacity-50"
                  : "blur-0 scale-100 opacity-100"
              }`}
            >
              <img
                src={steps[currentStep].image}
                alt={steps[currentStep].title}
                className={`w-full h-full object-cover [${steps[currentStep].center}] `}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
