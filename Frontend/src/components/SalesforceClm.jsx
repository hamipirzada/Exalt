import { Link } from 'react-router-dom'
import salesforce from '../assets/Salesforce Logo.jpeg'
import { Navbar } from "./Navbar"
import  { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import { Address } from './Address';

import { TbContract } from "react-icons/tb";
import { GiMicrochip } from "react-icons/gi";
import { TbAutomation } from "react-icons/tb";
import { MdOutlineMovieCreation } from "react-icons/md";
import { RiUserSharedLine } from "react-icons/ri";
import { MdOutlineAutorenew } from "react-icons/md";
import { FaFileSignature } from "react-icons/fa";
import Quick from './Quick';
import WhatsApp from './WhatsApp';


const SalesforceClm = () => {

  const [position, setPosition] = useState ({ x: 0, y: 0 });

  const handleMouseMove = (e, setPosition) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x, y });
  };

   const cardData = [
    { icon: <TbContract/>, text: "Conga Contracts For Salesforce." },
    { icon: <GiMicrochip/>, text: "Contract Intelligence." },
    { icon: <TbAutomation/>, text: "Document Automation." },
    { icon: <MdOutlineMovieCreation/>, text: "Contract Creation and Execution." },
    { icon: <RiUserSharedLine/>, text: "Negotiation & Redlining." },
    { icon: <MdOutlineAutorenew/>, text: "Renewal / Termination." },
    { icon: <FaFileSignature/>, text: "eSigniture." },
  ];


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
                        {/* <h1 className="relative uppercase lg:text-5xl font-extrabold  z-10 mt-12 text-black sm:text-xl overflow-y-hidden">
                          SALESFORCE CLM
                        </h1> */}
                </div>
        
        
        
        <div className="max-w-5xl h-full mt-9 ml-10">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">
    Salesforce CLM
  </h1>
  <p className="text-lg sm:text-xl  mb-6">
    GoExalt System, as a Lead-to-Revenue partner of Conga, provides a range of CLM solutions and services to streamline, simplify, and accelerate the entire process of contract lifecycle management. We specialize in:
  </p>
  <ul className="space-y-3 text-lg">
    <li className="flex items-center" data-aos="fade-right">
      <span className="text-green-500 mr-4">✔</span>
      Healthcare
    </li>
    <li className="flex items-center" data-aos="fade-right">
      <span className="text-green-500 mr-4">✔</span>
      Manufacturing
    </li>
    <li className="flex items-center" data-aos="fade-right">
      <span className="text-green-500 mr-4">✔</span>
      Hi-Tech
    </li>
    <li className="flex items-center" data-aos="fade-right">
      <span className="text-green-500 mr-4">✔</span>
      Financial Service
    </li>
    <li className="flex items-center" data-aos="fade-right">
      <span className="text-green-500 mr-4">✔</span>
      Software & Business Services
    </li>
  </ul>
  <Link
    to="/contact"
    className="bg-accent pr-5 pl-5 pt-2 pb-2 rounded-2xl  hover:bg-slate-700 transition-colors duration-300 text-sm sm:text-base font-small mt-6 inline-block"
  >
    Get In Touch
  </Link>
        </div>


<div className='flex items-center justify-center flex-col mt-6'>
<h1 className='text-3xl lg:text-5xl  p-4'>Conga CLM Offerings & GoExalt System Services </h1>
<h4 className='text-xl pl-5 pr-5'>
GoExalt System is a preferred Conga partner for transforming manual contracting process into a smarter technology.
</h4>
</div>



<div className="max-w-6xl mx-auto p-6">





    <div className="lg:h-[150px] mt-5 pb-4 flex text-center justify-center">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
    <samp className="text-accent">-</samp> CLM Offerings  <samp className="text-accent">-</samp>
  </h1>
</div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => {
         
          return (
            <div
              key={index}
              className="group relative bg-gradient-to-r from-blue-500 to-teal-500 p-6 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300"
              onMouseMove={(e) => handleMouseMove(e, setPosition)}
              onMouseLeave={() => setPosition({ x: 0, y: 0 })}
              style={{
                transform: `perspective(1000px) rotateX(${position.y / 20}deg) rotateY(${position.x / 20}deg)`,
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-5xl">{card.icon}</div>
                <h1 className="text-3xl">{card.text}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
   


    <div className="flex flex-col items-center justify-center min-h-screen p-4">
  {/* <!-- Main Heading --> */}

  <div className="lg:h-[150px] mt-5 pb-4 flex text-center justify-center">
  <h1 className="text-2xl sm:text-5xl md:text-6xl font-extrabold">
   <samp className="text-accent">-</samp> GoExalt System Services  <samp className="text-accent">-</samp>
  </h1>
</div>
  

  


  <div className="flex flex-wrap gap-3 w-full max-w-6xl justify-center sm:justify-start overflow-x-hidden overflow-y-hidden">
  {/* Card 1 */}
  <div className="bg-white shadow-md rounded-2xl p-4 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-16px)] max-w-sm h-96 flex flex-col justify-between transform transition-transform hover:scale-105 hover:shadow-lg">
    <h1 className="text-xl font-semibold text-gray-800 mb-4"  data-aos="fade-right">
      Assessment & Advisory
    </h1>
    <div>
      <p className="text-gray-600 mb-2">1. Business Process Mapping.</p>
      <p className="text-gray-600 mb-2">
        2. Expert advice in CLM Software Selection (Conga CLM, Conga Contracts for Salesforce).
      </p>
      <p className="text-gray-600 mb-2">3. Assessment of Implementation Readiness.</p>
      <p className="text-gray-600 mb-2">4. CLM Solution Roadmap.</p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white shadow-md rounded-2xl p-4 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-16px)] max-w-sm h-96 flex flex-col justify-between transform transition-transform hover:scale-105 hover:shadow-lg"  data-aos="fade-right" >
    <h1 className="text-xl font-semibold text-gray-800 mb-4">
      Implementation Services
    </h1>
    <div>
      <p className="text-gray-600 mb-2">1. Global Delivery Model.</p>
      <p className="text-gray-600 mb-2">
        2. Highly Synergic Approach for easy Implementation and Adoption.
      </p>
      <p className="text-gray-600 mb-2">3. Expertise in Providing Rapid Implementation.</p>
      <p className="text-gray-600 mb-2">
        4. Template Rationalization Techniques & Electronic Signature process.
      </p>
      <p className="text-gray-600">5. Industry Best Practices with Domain Expertise.</p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-white shadow-md rounded-2xl p-4 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-16px)] max-w-sm h-96 flex flex-col justify-between transform transition-transform hover:scale-105 hover:shadow-lg"  data-aos="fade-right">
    <h1 className="text-xl font-semibold text-gray-800 mb-4">
      Integration & Data Migration Services
    </h1>
    <div>
      <p className="text-gray-600 mb-2">
        1. Innovative Solutions for Data Migrations, Handling Large Volumes of Data.
      </p>
      <p className="text-gray-600 mb-2">
        2. Custom Integration of Conga CLM with other systems (ERP, SharePoint, etc.).
      </p>
      <p className="text-gray-600 mb-2">3. Contract Migration Services & Template Maintenance.</p>
    </div>
  </div>

  {/* Card 4 */}
  <div className="bg-white shadow-md rounded-2xl p-4 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-16px)] max-w-sm h-96 flex flex-col justify-between transform transition-transform hover:scale-105 hover:shadow-lg"  data-aos="fade-right">
    <h1 className="text-xl font-semibold text-gray-800 mb-4">
      Managed Services & Upgrades
    </h1>
    <div>
      <p className="text-gray-600 mb-2">1. CLM Solution Enhancements & Upgrades.</p>
      <p className="text-gray-600 mb-2">
        2. Deliver Business-centric CLM Training Sessions.
      </p>
      <p className="text-gray-600 mb-2">
        3. Configuration Activities within Conga Suite of Products.
      </p>
      <p className="text-gray-600">
        4. Prepare Change Management and Adoption Plan for CLM Rollouts.
      </p>
    </div>
  </div>
</div>



</div>





<div className="p-8 ">
  {/* Centered Heading */}

  <div className="lg:h-[150px] mt-5 pb-4 flex text-center justify-center">
  <h1 className="text-2xl sm:text-5xl md:text-6xl font-extrabold">
    <samp className="lg:text-4xl text-3xl text-accent">-</samp> Our Success Stories <samp className="text-accent">-</samp>
  </h1>
</div>

  
  

  {/* Cards Container */}
  <div className="flex flex-wrap justify-center gap-6">
    {/* Card 1 */}
    <div
      className="card bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 w-80 p-6 aos-animate"
      data-aos="fade-right"
    >
      <img
        src="https://images.pexels.com/photos/1824273/pexels-photo-1824273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="rounded-md mb-4 w-full"
      />
      <p className="text-gray-300">
        Implementation of Conga CLM to Digitize Contracting Process for Telecom Giant
      </p>
    </div>

    {/* Card 2 */}
    <div
      className="card bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 w-80 p-6 aos-animate"
      data-aos="fade-right"
    >
      <img
        src="https://images.pexels.com/photos/7688374/pexels-photo-7688374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Feature 2"
        className="rounded-md mb-4 w-full"
      />
      <p className="text-gray-300">
        GoExalt System Implements Conga CLM for a $6B Insurance Company, Results in 45% Increment in
        Contract Accuracy
      </p>
    </div>

    {/* Card 3 */}
    <div
      className="card bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 w-80 p-6 aos-animate"
      data-aos="fade-right"
    >
      <img
        src="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Feature 3"
        className="rounded-md mb-4 w-full"
      />
      <p className="text-gray-300">
      Leading Healthcare Platform Provider Relies on GoExalt System Managed Services for Conga CLM Solution, Reduces IT Costs by ~25%
      </p>
    </div>
  </div>
</div>




    
    <div className="flex mt-10 flex-wrap justify-center gap-6">

    <div className="flex flex-col lg:flex-row gap-8 bg-transparent border-white lg:h-[400px] w-[80%] mb-4 rounded-full">
  {/* Profile Image */}
  <div className="flex-shrink-0 lg:w-1/3 flex justify-center items-center"  data-aos="fade-right">
    <img
      src="https://images.pexels.com/photos/775091/pexels-photo-775091.jpeg?auto=compress&cs=tinysrgb&w=400"
      alt="Mudassir"
      className="lg:w-96 lg:h-96 sm:w-40 sm:h-40 object-cover rounded-full border-4 border-accent"
    />
  </div>
  {/* Profile Details */}
  <div className="lg:w-2/3  flex flex-col justify-center items-start lg:items-start text-center lg:text-left">
    <h1 className="text-3xl font-bold mb-4">Mudassir Dar</h1>
    <p className='text-2xl text-accent'>Director Solutions - CLM</p>
    <p className="text-sm ">
    Mudassir is a Salesforce-certified professional skilled in Conga CLM & CPQ, and Salesforce CRM with expertise in QTC & 10+ years of experience. He is a CLM expert with us, helping businesses to streamline their CLM E2E.    </p>
  </div>
</div>
</div>



<Address/>
    
  </div>
  )
}

export default SalesforceClm