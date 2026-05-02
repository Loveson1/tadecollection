
import ceo from "../assets/images/tade-ceo.jpg";

export default function Founder() {
  return (
    <>
    <div className="bg-accent pb-20 ">
   <div className="py-20 container mx-auto px-10 text-center" data-aos="fade-in">
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">
            MEET THE FOUNDER
            </h2></div>
      <div className=" flex justify-center gap-10  max-sm:flex-col">
        <div className="flex-1" data-aos="fade-right">
          <img src={ceo} alt="Tade Makinwa"  className="w-full  max-h-[600px] h-auto object-cover object-[center_20%]"/>
        </div>

        <div className="flex-1 " data-aos="fade-left">
          <h1 className="px-6">TADE MAKINWA</h1>
          <p className="px-6 max-w-[550px]">
            At the heart of Tade Collective is Tade — a woman known for
            excellence, consistency, wisdom, and impact. For her, fashion is
            more than clothing. It is craftsmanship with meaning, a way to
            express strength, elegance, presence, and purpose.
            <br />
            <br />
          
            What sets the brand apart is not just style, but the spirit behind
            every piece — thoughtful design, excellent finishing, and a
            commitment to helping people show up as their best selves. With her
            eyes fixed on a bigger vision, Tade’s goal goes beyond fashion
            alone.
            <br />
            <br />

            She is driven by one bold dream:<b> the industrialization of Africa
            through the fashion industry</b>. A vision to build, create, and
            contribute to a future where African fashion becomes a force for
            transformation, excellence, and global impact.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
