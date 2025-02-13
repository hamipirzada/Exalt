import { Link } from 'react-router-dom'
import salesforce from '../assets/Salesforce Logo.jpeg'
import { Navbar } from "./Navbar"
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import { Address } from './Address';
import Quick from './Quick';
import WhatsApp from './WhatsApp';






const SalesforceCrm = () => {

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
                    SALESFORCE CRM
                    </h1> */}
          </div>
                
                
                
  <div className="max-w-5xl h-full mt-9 ml-5 mr-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">
          Our CRM Portfolio
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








   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">
  {/* Card 1 */}
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
    <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11M9 21V3m12 7h-4m4 4h-4m4 4h-4m4 4h-4" />
      </svg>
    </div>
    <h1 className="text-xl font-semibold text-gray-800 mb-2">Audit</h1>
    <p className="text-gray-600 text-center">Thorough analysis of processes, goals, and apps within the CRM lifecycle, and the formulation of a comprehensive report.</p>
  </div>

  {/* Card 2 */}
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
    <div className="bg-green-100 text-green-600 p-4 rounded-full mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-3.866 0-7 3.582-7 8s3.134 8 7 8 7-3.582 7-8-3.134-8-7-8z" />
      </svg>
    </div>
    <h1 className="text-xl font-semibold text-gray-800 mb-2">Strategy & Planning</h1>
    <p className="text-gray-600 text-center">Find solutions that match your organizational and decision-making requirements .</p>
  </div>

  {/* Card 3 */}
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
    <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    <h1 className="text-xl font-semibold text-gray-800 mb-2">Solution Design</h1>
    <p className="text-gray-600 text-center">Custom CRM development and solutions with meticulous attention to business needs, data management, Quality Assurance (QA), UX, & scalable architecture..</p>
  </div>

  {/* Card 4 */}
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
    <div className="bg-red-100 text-red-600 p-4 rounded-full mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 3v12a4 4 0 004 4h6a4 4 0 004-4V3m-4 0a2 2 0 00-2-2m-4 0a2 2 0 00-2 2m6 4H6" />
      </svg>
    </div>
    <h1 className="text-xl font-semibold text-gray-800 mb-2">Process Modernization</h1>
    <p className="text-gray-600 text-center">Uncover any business process lags & revamp legacy processes by utilizing innovative techniques.</p>
  </div>

  {/* Card 5 */}
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
    <div className="bg-purple-100 text-purple-600 p-4 rounded-full mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m2 7H7m2-5h8" />
      </svg>
    </div>
    <h1 className="text-xl font-semibold text-gray-800 mb-2">Data Integration & Migration</h1>
    <p className="text-gray-600 text-center">Seamlessly digitize CRM data & integrate using bolt-on solution, FloData.</p>
  </div>
</div>






   <div className="flex mt-10 flex-wrap justify-center items-start gap-6">
<div className="flex mt-10 flex-wrap justify-center items-start gap-6 w-[80%]">
<p className='text-4xl' >Exclusive Insight</p>
<h1 className='lg:text-4xl text-2xl text-accent'>Know All About CPQ & How to Capitalize on Its Benefits</h1>
</div>
</div>





<div className="lg:p-8 sm:p-4 ">
      {/* Centered Heading */}
      <div className="lg:h-[150px] mt-5 pb-4 flex text-center justify-center">
  <h1 className="text-2xl sm:text-5xl md:text-6xl font-extrabold">
    <samp className="lg:text-4xl text-3xl text-accent">-</samp>  Our Success Stories  <samp className="text-accent">-</samp>
  </h1>
</div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-6"  data-aos="fade-right">
        {/* Card 1 */}
        <div className="card bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl  w-80 p-6">
          <img
            src="https://images.pexels.com/photos/7567525/pexels-photo-7567525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="rounded-md mb-4 w-full"
          />
          
          <p className="text-gray-300">
          44% Rise in Sales Productivity with lead-to-cash automation using Salesforce CRM for a Manufacturing Firm
          </p>
        </div>

        {/* Card 2 */}
        <div className="card bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl  w-80 p-6"  data-aos="fade-right">
          <img
            src="https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Feature 2"
            className="rounded-md mb-4 w-full"
          />
         
          <p className="text-gray-300">
          25% Jump in Qualified Leads with 360-Degree Transformation of Students’ Campus Journey for a Premier UniversityFirm
          </p>
        </div>

        {/* Card 3 */}
        <div className="card bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl  w-80 p-6"  data-aos="fade-right">
          <img
            src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Feature 3"
            className="rounded-md mb-4 w-full"
          />
         
          <p className="text-gray-300">
          Seamless Migration of 23-M Data Records & Consolidation of Multiple Salesforce Orgs for a Top Revenue Lifecycle Management Company
          </p>
        </div>
      </div>
      </div>




      <div className="flex mt-10 flex-wrap justify-center gap-6">

<div className="flex flex-col lg:flex-row gap-8 bg-transparent border-white lg:h-[400px] w-[80%] mb-4 rounded-full">
{/* Profile Image */}
<div className="flex-shrink-0 lg:w-1/3 flex justify-center items-center"  data-aos="fade-right">
<img
  src="https://images.pexels.com/photos/842569/pexels-photo-842569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  alt="Jahangir"
  className="lg:w-96 lg:h-96 sm:w-40 sm:h-40 object-cover rounded-full border-4 border-accent"
/>
</div>
{/* Profile Details */}
<div className="lg:w-2/3  flex flex-col justify-center items-start lg:items-start text-center lg:text-left">
<h1 className="text-3xl font-bold mb-4">Jahangir BH</h1>
<p className='text-2xl text-accent'>Director Solutions - CPQ and Billing</p>
<p className="text-sm ">
Jahangir is a Salesforce-certified CRM professional with 10+ years of IT experience. He has built process automation and a single source of truth for customer data, & drove Salesforce CRM implementation & integration for our enterprise customers.
</p>
</div>
</div>
</div>


<Address/>
</div>
  
     )
   }
   
   export default SalesforceCrm