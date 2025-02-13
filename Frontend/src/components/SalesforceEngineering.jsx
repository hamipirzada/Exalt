import { Link } from 'react-router-dom'
import salesforce from '../assets/Salesforce Logo.jpeg'
import { Navbar } from "./Navbar"
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import { GiUpgrade } from 'react-icons/gi';
import { MdMiscellaneousServices, MdOutlineAssessment } from 'react-icons/md';
import { CiDatabase } from 'react-icons/ci';
import { Address } from './Address';
import Quick from './Quick';
import WhatsApp from './WhatsApp';






const SalesforceEngineering = () => {

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
                SALESFORCE DATA-ENGINEERING & Integrations
                </h1> */}
          </div>
                
                
                
  <div className="max-w-5xl h-full mt-9 ml-5 mr-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">
          Our Data Engineering & Integrations Portfolio
          </h1>
          <p className="text-lg sm:text-xl  mb-6">
          At GoExalt System, we understand your business requirements and help connect the dots using our E2E CRM solutions and services. Our specialist team ensures that the implemented CRM software enables businesses to make data-backed strategic decisions to boost overall performance
          </p>
        
          <Link
            to="/contact"
            className="bg-accent pr-5 pl-5 pt-2 pb-2 rounded-2xl  hover:bg-slate-700 transition-colors duration-300 text-sm sm:text-base font-small mt-6 inline-block"
          >
            Get In Touch
          </Link>
   </div>


       <div className="flex flex-col items-center justify-center min-h-screen p-4">
   
   
   
     <div className="flex flex-wrap gap-3 w-full max-w-6xl justify-center sm:justify-start overflow-x-hidden overflow-y-hidden" >
     {/* Card 1 */}
   
   
   
     <div className="flex flex-wrap gap-6 w-full max-w-7xl justify-center overflow-x-hidden overflow-y-hidden mx-auto">
     {/* Card 1 */}
     <div className="bg-white shadow-md rounded-2xl p-6 w-full sm:w-[calc(60%-16px)] lg:w-[calc(40%-24px)] max-w-md h-96 flex flex-col justify-between" data-aos="fade-right">
       <h1 className="text-green-500">
         <MdOutlineAssessment size={30} />
       </h1>
       <h1 className="text-xl font-semibold text-gray-800 mb-4">
       Integration Architecture, Design & Development
       </h1>
       <div>
         <p className="text-gray-600 mb-2">1. In-Depth Business Process Analysis</p>
         <p className="text-gray-600 mb-2">2. API-Led Integration Architecture Designing.</p>
         <p className="text-gray-600 mb-2">3. Defining Integration Patterns</p>
         <p className="text-gray-600 mb-2">4. Development of API -Specifications, Documentation, & Enforcing API Governance Best Practices..</p>
       </div>
     </div>
   
     {/* Card 2 */}
     <div className="bg-white shadow-md h-fit rounded-2xl p-6 w-full sm:w-[calc(60%-16px)] lg:w-[calc(40%-24px)] max-w-md  flex flex-col justify-between" data-aos="fade-right">
       <h1 className="text-green-500">
         <CiDatabase size={30} />
       </h1>
       <h1 className="text-xl font-semibold text-gray-800 mb-4">
       Integration of Disparate Systems
       </h1>
       <div>
         <p className="text-gray-600 mb-2">1. Comprehensive Assessment of Existing Systems.</p>
         <p className="text-gray-600 mb-2">2. Analyzing Data Structures & Formats of different systems to establish mappings</p>
         <p className="text-gray-600 mb-2">3. Defining Transformation Rules.</p>
         <p className="text-gray-600 mb-2">4. Implementation of Error Handling Mechanisms & Exception Management Strategies</p>
         <p className="text-gray-600">5. Data Synchronization & Real-Time Updates.</p>
         <p className="text-gray-600">6. Deployment of Security Measures (Data Encryption & Authentication) and Access Controls.</p>
       </div>
     </div>
   </div>
   
   
   
   
     <div className="bg-white shadow-md rounded-2xl p-6 w-full sm:w-[calc(60%-16px)] lg:w-[calc(40%-24px)] max-w-md h-96 flex flex-col justify-between" data-aos="fade-right">
     <h1 className='text-green-500'  ><MdMiscellaneousServices size={30}/></h1>
   
   <h1 className="text-xl font-semibold text-gray-800 mb-4">
   Pre-Built Solutions to Integrate Salesforce with NetSuite & Oracle ERP
   </h1>
       <div>
       <p className="text-gray-600 mb-2">
           1. Ready-to-Use, Standardized Connectors
         </p>
         <p className="text-gray-600 mb-2">
           2. OOTB Integration Workflows & Templates
           .
         </p>
         <p className="text-gray-600 mb-2">3. Pre-configured Business Processes
         .</p>
         
         <p className="text-gray-600 mb-2">4. Scalable & Flexible Architecture
         .</p>

         <p className="text-gray-600 mb-2">
           5. Rapid Deployment & Time-to-Value
           .
         </p>
       </div>
     </div>
   
     {/* Card 4 */}
     <div className="bg-white shadow-md rounded-2xl p-6 w-full sm:w-[calc(60%-16px)] lg:w-[calc(40%-24px)] max-w-md h-96 flex flex-col justify-between" data-aos="fade-right">
     <h1 className='text-green-500'  ><GiUpgrade size={30}/></h1>
   
   <h1 className="text-xl font-semibold text-gray-800 mb-4">
   Reusable Assets
   </h1>
       <div>
       <p className="text-gray-600 mb-2">1. Component-Based Design approach
         .</p>
         <p className="text-gray-600 mb-2">
           2. API-Led Connectivity principles
           .
         </p>
         <p className="text-gray-600 mb-2">
           3. Template & Pattern Libraries
           .
         </p>
         <p className="text-gray-600">
           4. Configuration-Based Approach
           .
         </p>
         <p className="text-gray-600">
           5. utomated Testing Frameworks & Test Suites
   
           .
         </p>
       </div>
     </div>

   </div>
   </div>
   
   <div className="flex mt-10 flex-wrap justify-center items-start gap-6">
   <div className="flex mt-10 flex-wrap justify-center items-start gap-6 w-[80%]">
   <p className='text-4xl' >Exclusive Insight</p>
   <h1 className='text-2xl lg:text:4xl  text-accent'>Know All About CPQ & How to Capitalize on Its Benefits</h1>
   </div>
   </div>
   
   

   
   <div className="flex mt-10 flex-wrap justify-center gap-6">
   
   <div className="flex flex-col lg:flex-row gap-8 bg-transparent border-white lg:h-[400px] w-[80%] mb-4 rounded-full">
   {/* Profile Image */}
   <div className="flex-shrink-0 lg:w-1/3 flex justify-center items-center"  data-aos="fade-right">
   <img
     src="https://images.pexels.com/photos/30344414/pexels-photo-30344414/free-photo-of-black-and-white-portrait-of-a-man-in-morocco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     alt="Parveez Ahmad"
     className="lg:w-96 lg:h-96 sm:w-40 sm:h-40 object-cover rounded-full border-4 border-accent"
   />
   </div>
   {/* Profile Details */}
   <div className="lg:w-2/3  flex flex-col justify-center items-start lg:items-start text-center lg:text-left">
   <h1 className="text-3xl font-bold mb-4">Parveez Ahmad</h1>
   <p className='text-2xl text-accent'>Director</p>
   <p className="text-sm ">
   Parveez Ahmad has over 20 years of experience delivering integration strategies and architectures for many prestigious clients. At GoExalt System, He leads the delivery of large business transformations involving MuleSoft integrations
   </p>
   </div>
   </div>
   </div>
           
   
   <Address/>




    </div>
  )
}

export default SalesforceEngineering