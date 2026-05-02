import logo from "../assets/icons/tadelogo.png";
import heroimage from "../assets/images/hero.jpg";
import herovideo from "../assets/video/tade.mp4";
import { useState } from "react";

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="relative w-full overflow-hidden" id="hero" > 
      <img
        src={logo}
        alt="hero"
        className="w-210 h-85 max-sm:w-74 max-sm:h-30 absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2  z-10 " data-aos="fade-down" data-aos-duration="1000"
      />
      <p data-aos="fade-up" data-aos-delay="1000" className="absolute w-[85%] top-[75%] max-md:top-[60%] max-xl:top-[63%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 text-light  ">
       Tailoring the future for those who are building it.
      </p>
      
      <div className="overlay bg-black/30 z-1  absolute inset-0 "></div>

      <video
        src={herovideo}
        autoPlay
        loop
        playsInline
        muted
        fetchPriority="high"
        loading="eager"
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`relative  w-full h-screen transition-opacity object-cover duration-10 ${isVideoLoaded ? "opacity-100" : "opacity-0"} `}
      ></video>

      {!isVideoLoaded && (
        <img
          src={heroimage}
          alt="hero-image"
          className="w-full h-auto max-sm:h-screen object-cover absolute top-0 left-0 "
        />
      )}

      <div>
     <p className="text-light text-sm text-center z-10 absolute left-1/2 transform -translate-x-1/2 top-[85%] ">Scroll Down</p>
     <div className="animate-bounce w-0.5 h-10 absolute bg-light opacity-80 left-1/2 transform -translate-x-1/2 top-[95%] z-10"></div>
      </div>
    </div>
  );
}
      
