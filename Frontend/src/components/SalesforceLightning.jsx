import { Link } from 'react-router-dom'
import salesforce from '../assets/Salesforce Logo.jpeg'
import { Navbar } from "./Navbar"

import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import { Address } from './Address';

const SalesforceLightning = () => {
  useEffect(() => {
              AOS.init({ duration: 1000 });
            }, []);
  return (
    <div className='overflow-y-hidden'>
        <Navbar/>
          
          <div className="relative h-[450px] bg-cover overflow-hidden flex items-center justify-center  " data-aos="fade-right">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={salesforce}
          alt="Salesforce Lightning Background"
        />
        {/* <h1 className="relative lg:text-5xl font-extrabold  z-10 mt-12 text-black sm:text-xl overflow-y-hidden">
          SALESFORCE LIGHTNING
        </h1> */}
      </div>


      <div className="max-w-5xl mt-9 ml-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">
        Salesforce Lightning
        </h1>
        <p className="text-lg sm:text-xl  mb-6">
        Salesforce Lightning Web Components (LWC) is a modern UI framework for building web applications on the Salesforce platform. LWC is built using web standards like Web Components, JavaScript, and HTML, and it provides a powerful set of tools for building fast, responsive, and customizable applications. Some key features of LWC include: Component-based architecture: LWC is based on a component-based architecture, which makes it easy to reuse and compose components across different applications. Data binding: LWC supports data binding, which allows you to create dynamic and interactive user interfaces. Event-driven programming: LWC is event-driven, which means that components can communicate with each other through events. Server-side rendering: LWC supports server-side rendering, which can improve the performance of your application.
        </p>
        <Link
        to="/contact"
        className="bg-accent py-2 px-6 sm:py-3 sm:px-7 mt-5 rounded-2xl text-white hover:bg-slate-700 transition-colors duration-300 text-sm sm:text-base font-medium"
      >
        Get In Touch
      </Link>
    
      </div>



      <div className=" mx-auto m-4  ">
  <h1 className="text-3xl font-bold text-center mb-8"></h1>
  

  
  <div className="lg:h-[150px] mt-7 flex text-center justify-center">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
    <samp className="text-accent">-</samp> Documentation <samp className="text-accent">-</samp>
  </h1>
</div>
 
  
  <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-y-8">
  <div className="card bg-gray-900 p-4 rounded-lg shadow-md w-72 h-96 flex flex-col justify-evenly items-start" data-aos="fade-up">
    <h3 className="text-xl font-semibold mb-2 uppercase text-white">Developer Guide</h3>
    <h1 className="text-2xl font-bold text-blue-400 mb-2">Lightning Web Components</h1>
    <p className="text-white mb-8">Use the Lightning Web Components (LWC) framework to build custom user interfaces, web and mobile apps, and digital experiences on Salesforce.</p>
    <Link
      to="/contact"
      className="bg-accent py-2 px-6 sm:py-3 sm:px-7 mt-10 rounded-2xl text-white hover:bg-slate-700 transition-colors duration-300 text-sm sm:text-base font-medium"
    >
      Get In Touch
    </Link>
  </div>

  <div className="card bg-gray-700 p-4 rounded-lg shadow-md w-72 h-96 flex flex-col justify-evenly items-start" data-aos="fade-up">
    <h3 className="text-xl font-semibold  uppercase text-white ">Interactive Documentation</h3>
    <h1 className="text-2xl text-blue-400 mr-7 font-bold  mb-2">Component Library</h1>
    <p className="text-white mb-8">See Lightning base components in action and learn how to use them.</p>
    <Link
      to="/contact"
      className="bg-accent py-2 px-6 sm:py-3 sm:px-7 mt-5 rounded-2xl text-white hover:bg-slate-700 transition-colors duration-300 text-sm sm:text-base font-medium"
    >
      Get In Touch
    </Link>
  </div>

  <div className="card bg-gray-600 p-4 rounded-lg shadow-md w-72 h-96 flex flex-col justify-evenly items-start" data-aos="fade-up">
    <h3 className="text-xl font-semibold mb-2 uppercase text-white">Developer Guide</h3>
    <h1 className="text-2xl text-blue-400 font-bold mb-2">Salesforce Extensions for Visual Studio Code</h1>
    <p className="text-white mb-8">Learn how to install and use the Salesforce extensions for VS Code.</p>
    <Link
      to="/contact"
      className="bg-accent py-2 px-6 sm:py-3 sm:px-7 mt-5 rounded-2xl text-white hover:bg-slate-700 transition-colors duration-300 text-sm sm:text-base font-medium"
    >
      Get In Touch
    </Link>
  </div>

  <div className="card bg-gray-800 p-4 rounded-lg shadow-md w-72 h-96 flex flex-col justify-evenly items-start" data-aos="fade-up">
    <h3 className="text-xl font-semibold mb-2 text-white">Developer Guide</h3>
    <h1 className="text-2xl font-bold text-blue-400 mb-2">Lightning Web Components Open Source</h1>
    <p className="text-white mb-8">Learn how to use LWCs in standard web apps.</p>
    <Link
      to="/contact"
      className="bg-accent py-2 px-6 sm:py-3 sm:px-7 mt-5 rounded-2xl text-white hover:bg-slate-700 transition-colors duration-300 text-sm sm:text-base font-medium"
    >
      Get In Touch
    </Link>
  </div>
</div>




</div>



<Address/>
    </div>
  )
}

export default SalesforceLightning