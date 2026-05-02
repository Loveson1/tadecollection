import tademen0 from "../assets/images/t.png";
import tademen from "../assets/images/tade.avif";
import tademen1 from "../assets/images/tadem3.avif";
import tademen2 from "../assets/images/tadem4.avif";
import tademen3 from "../assets/images/tadem5.avif";
import tadewomen1 from "../assets/images/tadeW.avif";
import tadewomen2 from "../assets/images/tadew2.avif";
import tadewomen3 from "../assets/images/tadeW5.jpg";
import tadewomen4 from "../assets/images/tadwomen6.jpg";
import tadewomen5 from "../assets/images/tadew7.jpg";
import tadewomenvid from "../assets/video/tadewvid.mp4";
import tademenvid1 from "../assets/video/tademvid1.mp4";
import logo from "../assets/icons/tadelogo.png";


export default function Gallery() {
  const images = [
    { src: tademen1, alt: "tademen", rotation: "rotate-0", z: "z-0" },
    {
      src: tadewomen1,
      alt: "tademen",
      rotation: "-rotate-3",
      ml: "-ml-3",
      z: "z-1",
    },
    {
      src: tademen2,
      alt: "tadewomen3",
      rotation: "rotate-2",
      ml: "-ml-3",
      z: "z-2",
    },
    {
      src: tadewomen3,
      alt: "tadewomen",
      rotation: "rotate-3",
      ml: "-ml-3",
      z: "z-3",
    },
    {
      src: tademen3,
      alt: "tademen",
      rotation: "rotate-1",
      ml: "-ml-3",
      z: "z-0",
    },
    {
      src: tadewomen2,
      alt: "tademen4",
      rotation: "rotate-3",
      ml: "-ml-3",
      z: "z-1",
    },
  ];

  return (
    <>
      <div className=" bg-accent">
        <div className="container  pb-30">
          <div className="py-14 container mx-auto px-10 text-center" data-aos="fade-in">
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">
              The perfect fit, for Builders
            </h2>
            <p className="text-2xl md:text-3xl font-medium text-primary/90 max-w-3xl mx-auto leading-relaxed">
              Discover our collection of premium pieces designed for the modern
              builder.
            </p>
          </div>
         

          <div className="overflow-hidden mt-10" data-aos="fade-up">
            <div className=" flex xl:items-center xl:justify-center gap-0 max-xl:overflow-x-auto scrollbar-hide py-4 ">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={` ${image.rotation} ${image.ml} ${image.z}  rounded-2xl shrink-0 relative  hover:scale-110 hover:z-50 transition-transform duration-300  `}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className=" rounded-2xl object-cover w-[160px] h-[260px] md:w-[180px] md:h-[300px]  "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery of images */}
      <div className="bg-accent">
        {/* Tademen Gallery */}
        <div id="tademen" >
          <div className="border-t border-primary mx-auto flex justify-center " data-aos="fade-right">
            <div className="flex gap-4  max-sm:flex-col-reverse relative ">
              <img
                src={tademen0}
                alt="tademen"
                className="w-200 h-100 object-cover object-[center_30%] z-10"
              />
              <img
                      src={logo}
                      alt="hero"
                      className="w-210 h-85 max-sm:w-74 max-sm:h-30 absolute  left-1/2 lg:left-[25%] transform -translate-x-1/2 -translate-y-1/2 top-1/2  z-0  filter invert-[0%] sepia-[60%] saturate-[2000%] hue-rotate-[340deg] brightness-[80%] contrast-[90%]"
                    />
              <div className=" flex-1/2  mt-4 px-4 max-sm:px-4 z-10">
                <span className="text-primary font-bold tracking-widest text-sm mb-2">
                  Tademen Gallery -
                </span>

                <h1>Presence, Precision, and Purpose</h1>
                <p className="">We clothe Men who Build</p>
              </div>
            </div>
          </div>

          <div className="flex max-md:flex-col border-t border-primary " data-aos="fade-left">
            <div className="flex-1/2   ]">
              <img
                src={tademen}
                alt="tademen"
                className="sm:w-1/2 w-full h-[400px] object-cover flex-1 object-[center_20%] ml-auto  "
              />
            </div>

            <div className="flex-1 flex max-md:flex-col">
              <video
                src={tademenvid1}
                autoPlay
                loop
                playsInline
                muted
                alt="tademen"
                controls={true}
                className="w-full h-[400px] object-cover object-[center_0%] flex-1  "
              />
            </div>
          </div>
        </div>

        {/* Tademen women */}
        <div id="tadewomen">
          <div className="border-t border-primary mx-auto flex justify-center "  data-aos="fade-right">
            <div className="flex gap-4  max-sm:flex-col-reverse ">
              <video
                src={tadewomenvid}
                autoPlay
                loop
                playsInline
                muted
                alt="tademen"
                controls={true}
                className="w-full sm:h-[50px] sm:h-[400px] object-cover object-[center_0%] flex-1  "
              />
              <div className=" flex-1/2  mt-4 px-4 max-sm:px-4">
                <span className="text-primary font-bold tracking-widest text-sm mb-2">
                  Tadewomen Gallery -
                </span>

                <h1>Strength, Elegance, and Intention</h1>
                <p className="">We clothe Women who Build</p>
              </div>
            </div>
          </div>

          <div className="flex max-md:flex-col border-y border-primary relative "  data-aos="fade-left">
              <img
                      src={logo}
                      alt="hero"
                      className="w-210 h-85 max-sm:w-74 max-sm:h-30 absolute max-md:hidden left-1/2 lg:left-[25%] transform -translate-x-1/2 -translate-y-1/2 top-1/2  z-0  filter invert-[0%] sepia-[60%] saturate-[2000%] hue-rotate-[340deg] brightness-[80%] contrast-[90%]"
                    />
            <div className="flex-1/2   max-md:z-10">
              <img
                src={tadewomen5}
                alt="tademen"
                className="sm:w-1/2 w-full h-[400px] object-cover flex-1 object-[center_10%] ml-auto  "
              />
            </div>
            <div className="flex-1 flex max-md:flex-col">
              <img
                src={tadewomen4}
                alt="tademen"
                className="w-[800px] h-[400px] object-cover object-[center_30%]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
