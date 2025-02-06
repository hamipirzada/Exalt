import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 


const Projects = () => {
 
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
     
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-8">
     
     

    <div className="sm:flex-row bg-gradient-to-r from-blue-400 via-blue-700 to-black flex flex-col md:flex-row items-center justify-between rounded-3xl">
  <div
    className="shadow-lg rounded-lg overflow-hidden h-auto flex items-center justify-center flex-col sm:flex-row "
    data-aos="fade-up"
  >
    <img
      className="w-full sm:w-1/2 h-[300px] p-2 object-cover rounded-3xl flex"
      src="https://images.pexels.com/photos/8423051/pexels-photo-8423051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      data-aos="fade-right"
      alt="Image 1"
    />
    <div className="p-4 w-full sm:w-1/2 flex flex-col justify-center">
      <h1 className="text-xl font-semibold mb-2 text-yellow-300">School Management System</h1>
      <p className="text-white">
      Comprehensive software for institutions of all sizes to manage the day to day activities hassle-free be it admissions, fee collection, employee management, budgeting etc.
      </p>
    </div>
  </div>
      </div>





      {/* Card 2 */}

       <div className="sm:flex-row bg-gradient-to-r from-emerald-500 via-emerald-700 to-black flex flex-col md:flex-row items-center justify-between rounded-3xl">
  <div
    className="shadow-lg rounded-lg overflow-hidden h-auto flex flex-col sm:flex-row items-center"
    data-aos="fade-up"
  >
    <img
      className="w-full sm:w-1/2 h-[300px] p-2 object-cover rounded-3xl"
      src="https://images.pexels.com/photos/4481530/pexels-photo-4481530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      data-aos="fade-right"
      alt="Image 1"
    />
    <div className="p-4 w-full sm:w-1/2 flex flex-col justify-center">
      <h1 className="text-xl font-semibold mb-2 text-yellow-300">Wholesalers And Distributors ERP</h1>
      <p className="text-white">
      We offer customized ERP solutions to healthcare organizations. Our
            ERP platform integrates all critical business processes like sales
            and purchase, accounting and billing, stock inventory, etc.
      </p>
    </div>
  </div>
      </div> 








    

      {/* Card 3 */}

      <div className="sm:flex-row bg-gradient-to-r from-green-500 via-fuchsia-600 to-black flex flex-col md:flex-row items-center justify-between rounded-3xl">
  <div
    className="shadow-lg rounded-2xl overflow-hidden h-auto flex flex-col sm:flex-row items-center"
    data-aos="fade-up"
  >
    <img
      className="w-full sm:w-1/2 h-[300px] p-2 object-cover rounded-3xl"
      src="https://images.pexels.com/photos/12935078/pexels-photo-12935078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      data-aos="fade-right"
      alt="Image 1"
    />
    <div className="p-4 w-full sm:w-1/2 flex flex-col justify-center">
      <h1 className="text-xl font-semibold mb-2 text-yellow-300">Restaurant Management System</h1>
      <p className="text-white">
        Little more than an ordinary restaurant management system. Our restaurant software takes care of your business, while you take care of your guests.
      </p>
    </div>
  </div>
      </div>


   

      {/* Card 4 */}
      <div className="sm:flex-row bg-gradient-to-r from-accent via-primary to-black flex flex-col md:flex-row items-center justify-between rounded-3xl">
  <div
    className="shadow-lg rounded-lg overflow-hidden h-auto flex flex-col sm:flex-row items-center"
    data-aos="fade-up"
  >
    <img
      className="w-full sm:w-1/2 h-[300px] p-2 object-cover rounded-3xl"
      src="https://images.pexels.com/photos/6298479/pexels-photo-6298479.jpeg"
      data-aos="fade-right"
      alt="Image 1"
    />
    <div className="p-4 w-full sm:w-1/2 flex flex-col justify-center">
      <h1 className="text-xl font-semibold mb-2 text-yellow-300">Healthcare And Fitness Software</h1>
      <p className="text-white">
      Our cutting-edge gym and fitness software solution reduces day-to-day
            redundancies in the business of fitness clubs so that they can focus
            more on increasing market penetration.
      </p>
    </div>
  </div>
      </div>







     

    
    </div>
    </>
  );
};

export default Projects;
