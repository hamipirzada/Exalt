import { Link } from 'react-router-dom'
import salesforce from '../assets/Salesforce Logo.jpeg'
import { Navbar } from "./Navbar"
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"

import { FaLaptopCode } from "react-icons/fa6";
import { SiFuturelearn } from "react-icons/si";
import { PiCampfireBold } from "react-icons/pi";



import { Address } from './Address';
import Quick from './Quick';
import WhatsApp from './WhatsApp';

const SalesforceTraining = () => {
      useEffect(() => {
        AOS.init({ duration: 1000 });
         }, []);
  return (
    <div className='overflow-y-hidden'>


        <Navbar/>
        <Quick/>
        <WhatsApp/>
                  
        <div className="relative h-[450px] bg-cover overflow-hidden flex items-center justify-center  " data-aos="fade-right">
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={salesforce}
                  alt="Salesforce Training Background"
                />
                {/* <h1 className="relative lg:text-5xl font-extrabold  z-10 mt-12 text-black sm:text-xl overflow-y-hidden">
                  SALESFORCE TRAINING
                </h1> */}
        </div>



        <div className="max-w-5xl mt-9 ml-5 mt-5">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">
        Salesforce Training
        </h1>
        <p className="text-lg sm:text-xl  mb-6">
        Salesforce is a cloud-based customer relationship management (CRM) software that helps businesses manage their sales, marketing, customer service, and other important aspects of their operations. Salesforce is one of the most popular CRM platforms used by businesses of all sizes and industries. Salesforce training is designed to teach individuals and teams how to use the Salesforce platform to its fullest potential. The training covers various aspects of Salesforce, including data management, sales and marketing automation, customer service management, analytics and reporting, and customization and configuration. Salesforce training is beneficial for sales and marketing professionals, customer service agents, system administrators, developers, and anyone who wants to learn how to use Salesforce to improve their business operations. The training is available in different formats, including online courses, in-person classes, and self-paced learning modules. The benefits of Salesforce training include gaining proficiency in Salesforce, increasing productivity and efficiency, improving customer satisfaction, boosting sales and revenue, and staying up-to-date with the latest Salesforce features and updates.
        </p>
        <Link
        to="/contact"
        className="bg-accent py-2 px-6 sm:py-3 sm:px-7 mt-5 rounded-2xl  hover:bg-slate-700 transition-colors duration-300 text-sm sm:text-base font-medium"
      >
        Get In Touch
      </Link>
    
        </div>


    <div className="flex flex-col  items-center justify-center h-fit  ">

    <div className="lg:h-[150px] mt-5 pb-4 flex text-center justify-center">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
    <samp className="text-accent">-</samp> LEARN<samp className="text-accent">-</samp>
  </h1>
</div>
    
  <h3 className="text-2xl font-semibold mb-2 text-center">Choose your own training adventure</h3>
  <p className="text-lg text-center max-w-3xl">
  Follow guided learning paths at your own pace, sign up for expert-led classes, and problem solve with fellow Trailblazers in our community.
  </p>
    </div>



    <div className="flex flex-wrap justify-center items-center gap-6 p-8 ">
      {/* Card 1 */}
      <div className="card bg-gray-700  rounded-2xl shadow-lg p-6 w-72 flex flex-col items-center text-center" data-aos="fade-down">
        <FaLaptopCode className="text-blue-400 text-5xl mb-4" />
        <h1 className="text-xl font-bold mb-2">Learn Online</h1>
        <p className="text-gray-300">
        Get hands-on experience
        with self-paced training.
        </p>
      </div>

      {/* Card 2 */}
      <div className="card bg-gray-700  rounded-2xl shadow-lg p-6 w-72 flex flex-col items-center text-center" data-aos="fade-right">
        <SiFuturelearn className="text-green-400 text-5xl mb-4" />
        <h1 className="text-xl font-bold mb-2">Learn In Class</h1>
        <p className="text-gray-300">
        Get in-depth training from our experts
        in live classes and workshops
        </p>
      </div>

      {/* Card 3 */}
      <div className="card bg-gray-700  rounded-2xl shadow-lg p-6 w-72 flex flex-col items-center text-center" data-aos="fade-up" >
        <PiCampfireBold className="text-red-400 text-5xl mb-4" />
        <h1 className="text-xl font-bold mb-2">Learn For Each Other</h1>
        <p className="text-gray-300">
          Share tips and tricks
          with fellow Students.
        </p>
      </div>
    </div>

<Address/>
    </div>
  )
}

export default SalesforceTraining