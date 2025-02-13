import { Link } from 'react-router-dom'
import salesforce from '../assets/Salesforce Logo.jpeg'
import { Navbar } from "./Navbar"
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import { Address } from './Address';
import Quick from "./Quick"

import { MdOutlineAssessment } from "react-icons/md";
import { CiDatabase } from "react-icons/ci";
import { MdMiscellaneousServices } from "react-icons/md";
import { GiUpgrade } from "react-icons/gi";
import WhatsApp from './WhatsApp';



const SalesforceCfq = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
        }, []);
  return (
    <div>
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
                                  SALESFORCE CFQ
                                </h1> */}
            </div>
                
                
                
  <div className="max-w-5xl h-full mt-9 ml-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">
          Our Configure Price Quote (CPQ) Portfolio
          </h1>
          <p className="text-lg sm:text-xl  mb-6">
          Salesforce CPQ | Conga CPQ
          </p>
        
          <Link
            to="/contact"
            className="bg-accent pr-5 pl-5 pt-2 pb-2 rounded-2xl text-white hover:bg-slate-700 transition-colors duration-300 text-sm sm:text-base font-small mt-6 inline-block"
          >
            Get In Touch
          </Link>
   </div>



    <div className="flex flex-col items-center justify-center min-h-screen p-4">



  <div className="flex flex-wrap gap-3 w-full max-w-6xl justify-center sm:justify-start overflow-x-hidden overflow-y-hidden" >
  {/* Card 1 */}
  <div className="flex flex-wrap gap-6 w-full max-w-7xl justify-center overflow-x-hidden overflow-y-hidden mx-auto">
  {/* Card 1 */}



  <div className="flex flex-wrap gap-6 w-full max-w-7xl justify-center overflow-x-hidden overflow-y-hidden mx-auto">
  {/* Card 1 */}
  <div className="bg-white shadow-md rounded-2xl p-6 w-full sm:w-[calc(60%-16px)] lg:w-[calc(40%-24px)] max-w-md h-96 flex flex-col justify-between" data-aos="fade-right">
    <h1 className="text-green-500">
      <MdOutlineAssessment size={30} />
    </h1>
    <h1 className="text-xl font-semibold text-gray-800 mb-4">
      Assessment & Advisory
    </h1>
    <div>
      <p className="text-gray-600 mb-2">1. Business Process Analysis & Mapping</p>
      <p className="text-gray-600 mb-2">2. Strategic CPQ Selection Advisory.</p>
      <p className="text-gray-600 mb-2">3. Business Readiness Assessment for CPQ implementation</p>
      <p className="text-gray-600 mb-2">4. CPQ Solution Roadmap.</p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white shadow-md rounded-2xl p-6 w-full sm:w-[calc(60%-16px)] lg:w-[calc(40%-24px)] max-w-md h-96 flex flex-col justify-between" data-aos="fade-right">
    <h1 className="text-green-500">
      <CiDatabase size={30} />
    </h1>
    <h1 className="text-xl font-semibold text-gray-800 mb-4">
      Implementation Services
    </h1>
    <div>
      <p className="text-gray-600 mb-2">1. CPQ Solution Configuration & Customization.</p>
      <p className="text-gray-600 mb-2">2. Integration with Conga Sign, Conga Composer, Conga IWA, etc</p>
      <p className="text-gray-600 mb-2">3. Defining Rules & Logic within the CPQ system.</p>
      <p className="text-gray-600 mb-2">4. Thorough Testing & Validation of System Functionality</p>
      <p className="text-gray-600">5. Pre-built Industry Specific Solution Templates.</p>
    </div>
  </div>
</div>




  <div className="bg-white shadow-md rounded-2xl p-6 w-full sm:w-[calc(60%-16px)] lg:w-[calc(40%-24px)] max-w-md h-96 flex flex-col justify-between" data-aos="fade-right">
  <h1 className='text-green-500'  ><MdMiscellaneousServices size={30}/></h1>

<h1 className="text-xl font-semibold text-gray-800 mb-4">
  Integration & Data Migration Services
</h1>
    <div>
    <p className="text-gray-600 mb-2">
        1. Legacy CPQ Migration.
      </p>
      <p className="text-gray-600 mb-2">
        2. CPQ Integration with Product and Pricing Engines
        .
      </p>
      <p className="text-gray-600 mb-2">3. Custom Integration with ERP Systems
      .</p>
    </div>
  </div>

  {/* Card 4 */}
  <div className="bg-white shadow-md rounded-2xl p-6 w-full sm:w-[calc(60%-16px)] lg:w-[calc(40%-24px)] max-w-md h-96 flex flex-col justify-between" data-aos="fade-right">
  <h1 className='text-green-500'  ><GiUpgrade size={30}/></h1>

<h1 className="text-xl font-semibold text-gray-800 mb-4">
  Managed Services & Upgrades
</h1>
    <div>
    <p className="text-gray-600 mb-2">1. CPQ Administration & Version Upgrades
      .</p>
      <p className="text-gray-600 mb-2">
        2. CPQ Administration & Version Upgrades
        .
      </p>
      <p className="text-gray-600 mb-2">
        3. Upgrade Assessment Report
        .
      </p>
      <p className="text-gray-600">
        4. Change Management Strategy to Facilitate Smooth CPQ Adoption
        .
      </p>
      <p className="text-gray-600">
        5. Regularly Monitoring System Performance, Analyzing Data, & User Feedback

        .
      </p>
    </div>
  </div>
</div>
</div>
</div>

<div className="flex mt-10 flex-wrap justify-center items-start gap-6">
<div className="flex mt-10 flex-wrap justify-center items-start gap-6 w-[80%]">
<p className='text-4xl' >Exclusive Insight</p>
<h1 className='lg:text-4xl text-3xl text-accent'>Know All About CPQ & How to Capitalize on Its Benefits</h1>
</div>
</div>




<div className="lg:p-8 sm:p-4 ">
      {/* Centered Heading */}

      <div className="lg:h-[150px] mt-5 pb-4 flex text-center justify-center">
  <h1 className="lg:text-5xl text-2xl  font-extrabold">
    <samp className="text-accent">-</samp>  Our Success Stories  <samp className="text-accent">-</samp>
  </h1>
</div>
    

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-6 sm:pt-4"  data-aos="fade-right">
        {/* Card 1 */}
        <div className="card bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl  w-80 p-6">
          <img
            src="https://images.pexels.com/photos/9034765/pexels-photo-9034765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="rounded-md mb-4 w-full"
          />
          
          <p className="text-gray-300">
          100% Accurate Quote Generation with Conga CPQ Implementation For a Fortune 500 Manufacturing Conglomerate
          </p>
        </div>

        {/* Card 2 */}
        <div className="card bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl  w-80 p-6"  data-aos="fade-right">
          <img
            src="https://images.pexels.com/photos/4439425/pexels-photo-4439425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Feature 2"
            className="rounded-md mb-4 w-full"
          />
         
          <p className="text-gray-300">
          ~30% Decline in Pricing Errors with Quoting Solution Integration, Elimination of Manual Processes Using Salesforce CPQ For a Leading Tech Firm
          </p>
        </div>

        {/* Card 3 */}
        <div className="card bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl  w-80 p-6"  data-aos="fade-right">
          <img
            src="https://images.pexels.com/photos/7172856/pexels-photo-7172856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Feature 3"
            className="rounded-md mb-4 w-full"
          />
         
          <p className="text-gray-300">
          25% Increase in Sales Revenue with Modernization of Quote-to-Cash Processes Using Conga CPQ For a Top Construction Company
          </p>
        </div>
      </div>
      </div>





<div className="flex mt-10 flex-wrap justify-center gap-6">

<div className="flex flex-col lg:flex-row gap-8 bg-transparent border-white lg:h-[400px] w-[80%] mb-4 rounded-full">
{/* Profile Image */}
<div className="flex-shrink-0 lg:w-1/3 flex justify-center items-center"  data-aos="fade-right">
<img
  src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  alt="Uzair Rather"
  className="lg:w-96 lg:h-96 sm:w-40 sm:h-40 object-cover rounded-full border-4 border-accent"
/>
</div>
{/* Profile Details */}
<div className="lg:w-2/3  flex flex-col justify-center items-start lg:items-start text-center lg:text-left">
<h1 className="text-3xl font-bold mb-4">Uzair Rather</h1>
<p className='text-2xl text-accent'>System Analyst and Solution Architect</p>
<p className="text-sm ">
Certified in Salesforce Admin and CPQ, Admin (Conga Composer), ScrumMaster, and SAFe® 5 Product Owner/Product Manager, Uzair Rather is a CPQ specialist with over 8+ years of experience and leads our CPQ solutions
</p>
</div>
</div>
</div>
        

<Address/>
    </div>
  )
}

export default SalesforceCfq