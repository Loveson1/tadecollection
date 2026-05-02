import tademen from "../assets/images/tadem.avif";
import tadewomen from "../assets/images/tadewomen.avif";

export default function Brand() {
  return (
    <>
      {/* Tademen */}
      <div className="bg-accent" id="brand">
        <div className=" container flex justify-center items-center sm:gap-20 max-sm:flex-col bg-accent">
          <div className="flex-1" data-aos="fade-right">
            <img
              src={tademen}
              alt="tade-men"
              className="w-full  h-full sm:h-1/2 object-contain mb-4 "
            />{" "}
          </div>
          <div className="flex-1 max-sm:mt-4" data-aos="fade-left">
            <h1>Tademen</h1>
            <p className="max-w-md">
              Every design under Tademen is built with presence, precision, and
              purpose for men who are building with vision and that's you.
            </p>
            <a href="#tademen" className="button mb-5">
              Explore Tademen
            </a>
          </div>
        </div>
      </div>

      <div className="">
        {/* Tadewomen */}
        <div className="flex flex-row-reverse lg:-mt-40  justify-center items-center sm:gap-20 max-sm:flex-col">
          <div className="flex-1 max-sm:mt-0" data-aos="fade-up">
            <img
              src={tadewomen}
              alt="tade-men"
              className="w-full  h-full sm:h-1/2 object-contain mb-4 "
            />{" "}
          </div>
          <div className="flex-1 max-sm:mt-4 container" data-aos="fade-right">
            <h1>Tadewomen</h1>
            <p className="max-w-md">
              We clothe Women who Build. Every piece created under Tadewomen is
              crafted for women who carry strength, elegance, and intention and
              that's you.
            </p>
            <a href="#tadewomen" className="button mb-5">
              Explore Tadewomen
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
