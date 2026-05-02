import { useState } from "react";
import {
  Navbar,
  Hero,
  Brand,
  Gallery,
  Booking,
  WhyTade,
  Founder,
  Footer,
} from "./components/export";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      easing: "ease-in-out", // Animation easing
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down
      distance: "50px", // Distance to move elements when animating
    });
      AOS.refresh(); 
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Brand />
      <Gallery />
      <Booking />

      <WhyTade />
      <Founder />
      <Footer />
    </>
  );
}

export default App;
