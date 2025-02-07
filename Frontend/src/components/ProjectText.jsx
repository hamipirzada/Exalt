import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";

const ProjectText = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className=" w-full py-8">
      <div 
        className=" w-full sm:w-[800px] p-6 rounded-lg shadow-lg mx-auto"
        data-aos="fade-up"  
      >
        <h3 
          className="text-lg text-accent font-semibold mb-2 text-center"
          data-aos="fade-up"  
        >
          OUR PRODUCTS AND SERVICES
        </h3>
        <h1 
          className="text-3xl font-bold mb-4 text-center"
          data-aos="fade-up" 
        >
          Creative Solutions
        </h1>
        <p 
          className=" text-center"
          data-aos="fade-up" 
        >
          When it comes to the core, We at GoExalt System always believe in providing creative solutions to clients within the allotted time frame.
        </p>
      </div>
    </div>
  );
};

export default ProjectText;
