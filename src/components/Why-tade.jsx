import { useRef, useEffect, useState } from "react";
import vision from "../assets/images/bvision.avif"; 
import excellent from "../assets/images/excellent.avif"; 
import builder from "../assets/images/builders.avif"; // Replace with your assets


const pillars = [
  {
    title: "Excellence in Every Detail",
    subtitle: "Crafted With Excellence",
    desc: "Every piece at TADÉ is created with patience, precision, and careful attention to detail. From fabric selection to finishing, our commitment is to deliver clothing that reflects the highest standard of craftsmanship.",
    image: excellent,
  },
  {
    title: "Made for Those Who Build",
    subtitle: "Designed for Builders",
    desc: "Whether TadeMen or TadeWomen, our designs are tailored for individuals who move with purpose, carry presence, and show up with intention in every room they enter.",
    image: builder,
    center:"object-[center_20%]"
  },
  {
    title: "A Brand With a Bigger Vision",
    subtitle: "Built With Vision",
    desc: "TADÉ is more than a bespoke fashion brand. It is part of a larger dream — contributing to Africa’s industrial awakening through fashion, systems, production, and the future of local excellence.",
    image: vision,
  },
];

export default function WhyTade() {
  const scrollRef = useRef(null);
  const ghostRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // const handleScroll = () => {
    //   if (!ghostRef.current) return;
    //   const rect = ghostRef.current.getBoundingClientRect();
    //   const height = ghostRef.current.offsetHeight - window.innerHeight;
    //   const progress = Math.max(0, Math.min(1, -rect.top / height));
    //   setScrollProgress(progress);
    // };

    const handleScroll = () => {
  if (!ghostRef.current) return;
  const rect = ghostRef.current.getBoundingClientRect();
  
  // The distance the container has traveled past the top
  const distance = -rect.top;
  
  // The total distance the user can scroll before the sticky finishes
  const totalScrollableHeight = ghostRef.current.offsetHeight - window.innerHeight;
  
  // Calculate progress and ensure it stops exactly at 1
  const progress = Math.max(0, Math.min(1, distance / totalScrollableHeight));
  
  setScrollProgress(progress);
};

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-white" id="about">
      {/* 1. Intro Header */}
      <div className="py-20 container mx-auto px-10 text-center" data-aos="fade-in">
        <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">
          Why TADÉ?
        </h2>
        <p className="text-2xl md:text-3xl font-medium text-primary max-w-3xl mx-auto leading-relaxed">
          At TADÉ, every piece is more than clothing — it is a statement of
          excellence, identity, and purpose, crafted for those who are building
          the future.
        </p>
      </div>

      {/* 2. THE STICKY WRAPPER (height controls scroll speed) */}
      <div ref={ghostRef} className="relative h-[300vh]" data-aos="fade-up">
        {/* Sticky Container: Holds the screen in place */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
          {/* Moving Track: Slides horizontally based on vertical scroll */}
    
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${scrollProgress * (pillars.length - 1) * 100}vw)`,
            }}
          >
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="w-screen h-full shrink-0 flex  items-center justify-center "
              >
                <div className="flex flex-col md:flex-row w-full max-w-7xl overflow-hidden h-[80vh] ">
                  {/* Image Side */}
                  <div className="w-full md:w-1/2 h-1/2 md:h-full px-4">
                    <img
                      src={pillar.image}
                      alt=""
                      className={`w-full h-full object-cover ${pillar.center}`}
                    />
                  </div>

                  {/* Text Side */}
                  <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                    <span className="text-primary font-bold tracking-widest text-sm mb-2 max-sm:hidden">
                      {pillar.subtitle}
                    </span>
                    <h1>{pillar.title}</h1>
                    <p className=" mb-10 max-sm:text-sm ">{pillar.desc}</p>

                    <div className="pt-6 border-t border-dark/10">
                      <p className="text-xs">
                        At TADÉ, we are not just creating clothing — we are
                        tailoring the future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// const pillars = [
//   {
//     title: "Excellence in Every Detail",
//     subtitle: "💎 Crafted With Excellence",
//     desc: "Every piece at TADÉ is created with patience, precision, and careful attention to detail. From fabric selection to finishing, our commitment is to deliver clothing that reflects the highest standard of craftsmanship.",
//     image: "https://unsplash.com",
//   },
//   {
//     title: "Made for Those Who Build",
//     subtitle: "🔥 Designed for Builders",
//     desc: "Whether TadeMen or TadeWomen, our designs are tailored for individuals who move with purpose, carry presence, and show up with intention in every room they enter.",
//     image: "https://unsplash.com",
//   },
//   {
//     title: "A Brand With a Bigger Vision",
//     subtitle: "🌍 Built With Vision",
//     desc: "TADÉ is more than a bespoke fashion brand. It is part of a larger dream — contributing to Africa’s industrial awakening through fashion, systems, production, and the future of local excellence.",
//     image: "https://unsplash.com",
//   },
// ];

// export default function WhyTade() {
//   return (
//     <section className="bg-white py-20">
//       {/* Intro Header */}
//       <div className="container mx-auto px-10 mb-16 text-center">
//         <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Why TADÉ</h2>
//         <p className="text-2xl md:text-3xl font-medium text-dark max-w-3xl mx-auto leading-relaxed">
//           At TADÉ, every piece is more than clothing — it is a statement of excellence, identity, and purpose, crafted for those who are building the future.
//         </p>
//       </div>

//       {/* HORIZONTAL SCROLL CONTAINER */}
//       <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-10">
//         {pillars.map((pillar, index) => (
//           <div
//             key={index}
//             className="w-full md:w-screen flex-shrink-0 snap-start px-6 md:px-20"
//           >
//             <div className="flex flex-col md:flex-row items-center bg-accent rounded-3xl overflow-hidden min-h-[500px] shadow-sm border border-dark/5">

//               {/* IMAGE SIDE (Left on Desktop) */}
//               <div className="w-full md:w-1/2 h-64 md:h-[600px]">
//                 <img
//                   src={pillar.image}
//                   alt={pillar.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* TEXT SIDE (Right on Desktop) */}
//               <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
//                 <span className="text-primary font-bold text-sm tracking-widest mb-4 block uppercase">
//                   {pillar.subtitle}
//                 </span>
//                 <h3 className="text-3xl md:text-5xl font-bold mb-6 text-dark">
//                   {pillar.title}
//                 </h3>
//                 <p className="text-lg text-dark/70 leading-relaxed mb-8">
//                   {pillar.desc}
//                 </p>

//                 <div className="pt-8 border-t border-dark/10">
//                   <p className="italic font-medium text-dark/90">
//                     “At TADÉ, we are not just creating clothing — we are tailoring the future.”
//                   </p>
//                 </div>
//               </div>

//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Visual Indicator for Mobile Scroll */}
//       <div className="text-center mt-4 md:hidden text-dark/30 animate-pulse">
//         Swipe to see more →
//       </div>
//     </section>
//   );
// }

// export default function WhyTade() {
//   const Card = [
//     {
//       head: "Crafted With Excellence",
//       subhead: "Excellence in Every Detail",
//       content: `Every piece at TADÉ is created with patience, precision, and
//               careful attention to detail. From fabric selection to finishing,
//               our commitment is to deliver clothing that reflects the highest
//               standard of craftsmanship.`,
//       Image: "",
//     },
//     {
//       head: "Designed for Builders",
//       subhead: "Made for Those Who Build",
//       content: `Whether TadeMen or TadeWomen, our designs are tailored for
//       individuals who move with purpose, carry presence, and show up with
//       intention in every room they enter.`,
//       Image: "",
//     },
//     {
//       head: "Built With Vision",
//       subhead: "A Brand With a Bigger Vision",
//       content: `TADÉ is more than a bespoke fashion brand. It is part of a larger
//       dream — contributing to Africa’s industrial awakening through fashion,
//       systems, production, and the future of local excellence.`,
//       Image: "",
//     },
//   ];

//   return (
//     <>
//     <div className="container">
//     <div className="flex justify-between items-center mb-10 max-sm:flex-col">

//       <h1 className="flex-1/4 ">Why Tade</h1>
//       <p className="flex-1">
//         At TADÉ, every piece is more than clothing — it is a statement of
//         excellence, identity, and purpose, crafted for those who are building
//         the future.
//       </p>   </div>
//       <div>
//         {Card.map((card, i) => {
//           <div key={i} className="card">
//             <div>
//               <img src={card.Image} alt="tade-values" />
//               <h1>{card.head}</h1>
//               <p>
//                 “At TADÉ, we are not just creating clothing — we are tailoring
//                 the future.”
//               </p>
//             </div>
//             <div>
//               <h1>{card.subhead}</h1>
//               <p>{card.content}</p>
//             </div>
//           </div>;
//         })}
//       </div>
//       </div>
//     </>
//   );
// }
