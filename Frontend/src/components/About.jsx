import { useState } from "react";
import { Navbar } from "./Navbar";
import { Address } from "./Address";

import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";


// eslint-disable-next-line react/prop-types
const Tab = ({ label, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer text-sm sm:text-lg font-medium py-1 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors duration-300 ${
      isActive ? "bg-accent hover:bg-slate-700 text-white" : "bg-gray-200 text-gray-700"
    }`}
    role="tab"
    aria-selected={isActive}
  >
    {label}
  </div>
);

// eslint-disable-next-line react/prop-types
const Description = ({ text, isActive }) => (
  <div
    className={`transition-all h-auto duration-500 ease-in-out ${
      isActive ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
    } overflow-hidden`}
  >
    <p className="lg:text-2xl px-4 sm:px-5 sm:text-lg sm:indent-6 leading-relaxed sm:w-10/12 md:w-8/12 lg:w-8/12 mx-auto">
      {text}
    </p>
  </div>
);


const About = () => {
  const [activeTab, setActiveTab] = useState("about");

    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

  const tabContent = {
    about:
      "GoExalt System is a leading and trusted software solution provider offering product portfolio across various sectors like education healthcare and fitness. We have various customized product offerings for respective segments from schools to colleges and universities, from retailer to wholesaler in healthcare and from small to high client portfolio managing fitness clubs. Founded in 2017 in Pune, India, We have a great team who are well experienced and technically sound. We always strive to provide the best possible service to our clients, be it providing support during critical situations or fulfilling their customized requirements.",
    mission:
      "Our motive is to provide premium quality products and time -ounded services to the customers at an affordable cost. We have built ourselves on the key pillars of smart people & smart solutions for business promotion. We have extensive experience in many diverse areas of software development. We provide extraordinary services that create the value of your business through information technology. In today’s economy, we fine-tune a business model design to deliver uniform client experience. Our customers have always found an integrated business promotion solution more valuable than a simple web presence.",
    vision:
      "Our vision is to be a global leader in software solutions, offering unparalleled services that transform the digital landscape for our clients. We aim to create a smarter, more connected world.",
  };

  return (
    <>
    <div>
    <Navbar/>
 



    <div className="container mx-auto py-16 px-4 sm:px-6  ">
  {/* Image Here */}
  <div className="flex flex-col">
    <div className="relative w-full h-[60vh]  bg-cover bg-no-repeat flex items-center justify-center text-white text-xl">
      {/* Background Animation */}
      <div className="absolute w-full inset-0 overflow-hidden flex items-center justify-center">
  
        <div
          className="absolute top-4  w-full h-[350px] rounded-3xl bg-center bg-no-repeat  " data-aos="fade-left"
          style={{ backgroundImage: `url(${"https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"})`, backgroundSize: "cover" }}
        ></div>

      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-white text-5xl mt-28 font-extrabold" data-aos="fade-left">ABOUT US</h1>
      </div>

      {/* Overlay for Readability */}
      <div className="absolute inset-0 "></div>
    </div>
  </div>
  {/* Images End Here */}

  <div className="flex justify-center gap-7 sm:gap-3" >
    {Object.keys(tabContent).map((tab) => (
      <Tab
        key={tab}
        label={tab.toUpperCase()}
        isActive={activeTab === tab}
        onClick={() => setActiveTab(tab)}
      />
    ))}
  </div>
</div>



      

 

 {/* MAP */}
      {Object.keys(tabContent).map((tab) => (
        <Description key={tab} 
        text={tabContent[tab]} 
        isActive={activeTab === tab} />
      ))}

      
      <div className="flex flex-wrap gap-12 mt-16 " data-aos="fade-up">
    

      
        <div className="w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-100 to-gray-300 shadow-lg rounded-lg">
        <div className="max-w-4xl space-y-6 text-center sm:text-left">
      <h1 className="text-3xl font-semibold text-gray-800">
      Why Choose Us?
      </h1>
     <p className="text-lg text-gray-700 leading-relaxed">
      GoExalt System is committed to assisting its customers to reach their goals by providing innovative and highly customized solutions. For us, every client is unique, and every situation is different. However, in most cases, it distills down to a single word: Trust. Trusting us helps in leveraging our knowledge of your business and enables us to create world-class solutions that incorporate more than just the latest technology. There is tremendous value in designing innovative products that match your needs, function the way you operate, and incorporate the workflow you prefer. With our innovative and cutting-edge technology offerings, we constantly seek new ways to increase client visibility and brand value.
      </p>
      </div>
      </div>

     
  


      <div className="w-full flex flex-col items-center relative">
  {/* Our Story Section */}
  <div className="relative mb-12">
    <div className="w-full max-w-2xl p-8 rounded-2xl bg-gradient-to-r from-indigo-500  to-pink-400 shadow-lg text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Our Story</h1>
      <p className="text-lg text-gray-200" data-aos="fade-left">
        Great companies are born from dreams and strength of will. The story of a company is made up of men, ideas, challenges, investments, sacrifices, and progress.
      </p>
      <p className="text-lg text-gray-200 mt-4" data-aos="fade-up">
        Some people regard private enterprise as a predatory tiger to be shot. Others look on it as a cow they can milk. Not enough people see it as a healthy horse, pulling a sturdy wagon.
        <br />
        (W. Churchill).
      </p>
    </div>
  </div>

  {/* Main Vertical Line */}
  <div  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-lime-600 to-lime-300 h-full -z-10"
    aria-hidden="true"></div>

  {/* Timeline Cards */}
  <div className="relative w-full max-w-5xl space-y-16 z-10">
    {/* Timeline Card 1 */}
    <div className="relative flex flex-col items-center md:flex-row md:items-start w-full" data-aos="fade-right">
      <div className="hidden mr-16 md:block w-1/2"></div>
      <div className="relative w-full md:w-1/2 sm:w-96 p-6 bg-gradient-to-b from-lime-700 to-slate-300 shadow-xl rounded-lg hover:shadow-2xl transform transition-transform duration-300">
        <h3 className="text-xl font-semibold text-gray-800">2016-2018</h3>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Company Foundation</h1>
        <p className="text-lg text-gray-700 mt-2">
          More than three years of history with a goal and vision. A company that has already been on a journey filled with experiences and success to deliver great products at the best prices.
        </p>
        {/* Connecting Line */}
        <div
          className="absolute top-0 left-0 transform -translate-x-full w-8 h-1 bg-gray-300 md:block hidden"
          aria-hidden="true"
        ></div>
      </div>
    </div>

    {/* Timeline Card 2 */}
    <div className="relative flex flex-col items-center md:flex-row-reverse md:items-start w-full" data-aos="fade-left">
      <div className="hidden ml-16 md:block w-1/2"></div>
      <div className="relative w-full md:w-1/2 sm:w-96 p-6 bg-gradient-to-b from-red-800 to-slate-300 shadow-xl rounded-lg hover:shadow-2xl transform transition-transform duration-300">
        <h3 className="text-xl font-semibold text-gray-800">2018-2019</h3>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Achieved Years</h1>
        <p className="text-lg text-gray-700 mt-2">
          A steady flow of innovations, and continuous expansions through upright growth and acquisitions.
        </p>
        {/* Connecting Line */}
        <div
          className="absolute top-0 right-0 transform translate-x-full w-8 h-1 bg-gray-300 md:block hidden"
          aria-hidden="true"
        ></div>
      </div>
    </div>

    {/* Timeline Card 3 */}

    <div className="relative flex flex-col items-center md:flex-row md:items-start w-full" data-aos="fade-right">
      <div className="hidden mr-16 md:block w-1/2"></div>
      <div className="relative w-full md:w-1/2 sm:w-96 p-6 bg-gradient-to-b from-blue-500 to-slate-300 shadow-xl rounded-lg hover:shadow-2xl transform transition-transform duration-300">
      <h3 className="text-xl font-semibold text-gray-800">2019-Recent</h3>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Project Achieved</h1>
          <p className="text-lg text-gray-700 mt-2">
            We are continuously improving our existing products and services along with building new innovative and automated software systems.
          </p>
        {/* Connecting Line */}
        <div
          className="absolute top-0 left-0 transform -translate-x-full w-8 h-1 bg-gray-300 md:block hidden"
          aria-hidden="true"
        ></div>
      </div>
    </div>

    {/*  */}

  </div>
</div>




      


      </div>
      
    </div>
    <Address/>
    </>






  );
};

export default About;
