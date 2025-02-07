import heroMain from "../assets/hero-main.png";

import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";




const Humans = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto flex flex-col p-4 justify-center items-center  min-h-screen mt-16">
      <div className="flex flex-col lg:flex-row gap-6 p-6 rounded-lg shadow-lg w-full">
        {/* Image Section */}
        <div className="lg:w-1/3 flex justify-center items-center">
          <img
            src={heroMain}
            alt="Astronaut"
            className=" h-auto rounded-lg animate-bounce-updown"
          />
        </div>

        {/* Experience Section */}
        <div className="mt-6 mr-10 text-center lg:mt-0 lg:w-1/3 flex flex-col justify-center items-center">
          <h1 className="text-9xl font-extrabold text-accent" data-aos="fade-up">5</h1>
          <p className="text-2xl font-medium  mt-2" data-aos="fade-up">
            YEARS EXPERIENCED
          </p>
        </div>

        {/* Who Are We Section */}
        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="fade-up">
          <div className="p-6  rounded-lg shadow-md">
            <p className="text-sm font-medium text-accent uppercase tracking-wide">
              Who Are We
            </p>
            <h1 className="text-3xl font-bold  mt-3 leading-snug">
              We are a Perfect <br />
              IT Solution Providers
            </h1>
            <p className=" mt-4 leading-relaxed">
              GoExalt System is a leading and trusted software solution provider offering
              product portfolio across various sectors like education, healthcare, and
              fitness. We have various customized product offerings for respective
              segments—from schools to colleges and universities, from retailer to
              wholesaler in healthcare, and from small to high client portfolio managing
              fitness clubs.
            </p>
            <button className="mt-6 px-6 py-3 bg-accent  rounded-md hover:bg-slate-700 transition duration-300">
           
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Humans;
