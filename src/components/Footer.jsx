import logo from "../assets/icons/tadelogo.png";
import tadewoman from "../assets/images/tadew4.jpg";
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  const address = "Musa Mamman Crescent, Dawaki Abuja"; // Change this to your actual address
  const googleMapsUrl = `https://google.com/maps?q=${encodeURIComponent(address)}`;
  const phoneNumber = "2348039361942";

  // 2. The pre-filled message you want them to send
  const initialMessage = "Hello TADÉ, I would like to book a fitting session.";

  // 3. Combine them into the universal URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(initialMessage)}`;

  return (
    <>
      <div className="bg-primary  ">
        <div className="container">
          <div className="flex justify-center py-20" data-aos="fade-in">
            <img
              src={logo}
              alt="hero"
              className="w-200 h-70 max-sm:w-74 max-sm:h-30  "
            />
          </div>

          <div className=" flex justify-center mx-auto  item-center border border-accent">
            <div className="w-full p-4 flex flex-col justify-between ">
              <div className=" flex flex-col gap-2">
                <h2 className="text-sm font-bold tracking-[0.2em] text-accent/80 uppercase mb-4">
                  contact us
                </h2>
                <div className="link">
                  
                  <a href="tel:08039361942">(+234) 8039361942</a>
                </div>
                
                <a href="mailto:tadecollective@gmail.com " className="link">
                  tadecollective@gmail.com
                </a>

              
                <div className="link">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Musa Mamman Crescent, Dawaki Abuja
                  </a>
                </div>
                <div className="flex gap-4 my-4 ">
                  <a
                    href="https://www.facebook.com/makinwa.omotade"
                    target="_blank"
                    rel="noopener noreferrer link"
                  >
                    <FaFacebook className="link"/>
                  </a>
                  <a
                    href="https://www.instagram.com/tade_makinwa/"
                    target="_blank"
                    rel="noopener noreferrer link"
                  >
                    <FaInstagram  className="link"/>
                  </a>
                  <a href="https://www.tiktok.com/@tade_makinwa" target="_blank" rel="noopener noreferrer link">
                    <FaTiktok  className="link"/>
                  </a>
                </div>
              </div>

              <div className="text-xs text-accent opacity-60">
                © 2026. Tadecollective. All rights reserved
              </div>
            </div>

            <div className="w-full p-4 ">
              <div className="flex justify-between flex-col h-full">
                <div className="flex flex-col gap-2">
                  <h2 className="text-sm font-bold tracking-[0.2em] text-accent/80 uppercase mb-4">
                    Company
                  </h2>
                
                 
                      <a href="#hero" className="link">
                        Home
                      </a>
                    
                    <a href="#brand" className="link">
                      Brand
                    </a>

                   
                      <a href="#about" className="link">
                        About
                      </a>
                      
                </div>

                <div className="text-xs text-accent opacity-60 sm:flex  gap-10">
                  <div className="">Privacy Policy</div>
                  <div className="">Terms of Service</div>
                </div>
              </div>
            </div>

            <div className=" w-full relative max-sm:hidden flex justify-end  ">
              <img
                src={tadewoman}
                alt="tadewoman"
                className=" w-[80%] h-full object-cover"
              />

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button absolute bottom-4 left-[60%] transform -translate-x-1/2 w-[60%] text-center"
              >
                Book Your Fitting
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
