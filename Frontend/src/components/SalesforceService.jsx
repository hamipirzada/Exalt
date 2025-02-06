import { Link } from 'react-router-dom'
import salesforce from '../assets/Salesforce Logo.jpeg'

import { Navbar } from "./Navbar"
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import { Address } from './Address';


 

const SalesforceService = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
        }, []);
  return (
    <div>
        <Navbar/>



         <div className="relative h-[450px] bg-cover overflow-hidden flex items-center justify-center  " data-aos="fade-right">
            <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={salesforce}
                 alt="Salesforce Training Background"
             />
                {/* <h1 className="relative uppercase lg:text-5xl font-extrabold  z-10 mt-12 text-black sm:text-xl overflow-y-hidden">
                  SALESFORCE Management Service
                  </h1> */}
        </div>
                
                
                
  <div className="max-w-5xl h-full mt-9 ml-10">


           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">
          SALESFORCE MANAGEMENT SERVICES

          </h1> 
          <p className="text-lg sm:text-xl mb-6">
          At Exalt System, our Managed Services for Salesforce, Conga, Oracle, and NetSuite optimize performance with a progressive value realization framework, transforming operations, reducing TCO, and enhancing quality, all while providing unmatched transparency and value.

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
    <h1 className="text-xl font-semibold text-gray-800 mb-2">Cloud
    Infrastructure</h1>
    <p className="text-gray-600 text-center">
    <span className="text-green-500 mr-4">✔</span>
    Comprehensive Cloud Optimization.</p>
    <p className="text-gray-600 text-center">
    <span className="text-green-500 mr-4">✔</span>
    Seamless Cloud Migration.</p>
        <p className="text-gray-600 text-center">
    <span className="text-green-500 mr-4">✔</span>
    Cloud Infrastructure Modernization.</p>
        <p className="text-gray-600 text-center">
    <span className="text-green-500 mr-4">✔</span>
    Scalable Solutions.</p>
        <p className="text-gray-600 text-center">
    <span className="text-green-500 mr-4">✔</span>
    Robust Cybersecurity.</p>
  </div>

  {/* Card 2 */}
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-start transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
    <div className="bg-green-100 text-green-600 p-4 rounded-full mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-3.866 0-7 3.582-7 8s3.134 8 7 8 7-3.582 7-8-3.134-8-7-8z" />
      </svg>
    </div>
    <h1 className="text-xl font-semibold text-gray-800 mb-2">Infrastructure
    Services</h1>
    <p className="text-gray-600 text-center">
    <span className="text-green-500 mr-4">✔</span>
    IT Infrastructure Management.</p>
        <p className="text-gray-600 text-center">
    <span className="text-green-500 mr-4">✔</span>
    Digital Workplace Transformation.</p>
        <p className="text-gray-600 text-center">
    <span className="text-green-500 mr-4">✔</span>
    Advanced Network Solutions.</p>
        <p className="text-gray-600 text-center">
    <span className="text-green-500 mr-4">✔</span>
    Data Center Modernization.</p>
  </div>

  {/* Card 3 */}
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-start transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
    <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    <h1 className="text-xl font-semibold text-gray-800 mb-2">Application
    Management</h1>
    <p className="text-gray-600 text-center">
    <span className="text-green-500 mr-4">✔</span>
        Defining Business Objectives.</p>
        <p className="text-gray-600 text-center">
    <span className="text-green-500 mr-4">✔</span>
    Existing IT Landscape Evaluation.</p>
        <p className="text-gray-600 text-center">
    <span className="text-green-500 mr-4">✔</span>
    ROI Analysis.</p>
        <p className="text-gray-600 text-center">
    <span className="text-green-500 mr-4">✔</span>
    Application Performance Review.</p>
  </div>




    {/* Card 3 */}
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-start transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
    <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    <h1 className="text-xl font-semibold text-gray-800 mb-2">IT
    Outsourcing</h1>
   
        <p className="text-gray-600 text-center">
    <span className="text-green-500 mr-4">✔</span>
    Issue Detection & Resolution.</p>
        <p className="text-gray-600 text-center">
    <span className="text-green-500 mr-4">✔</span>
    Application Management.</p>
        <p className="text-gray-600 text-center">
    <span className="text-green-500 mr-4">✔</span>
    Expert Project Management.</p>
  </div>
  </div>





  <div className="flex mt-10 flex-wrap justify-center items-start gap-6">
<div className="flex mt-10 flex-wrap justify-center items-start gap-6 w-[80%]">
<p className='text-4xl' >Exclusive Insight</p>
<h1 className='text-4xl text-accent'>The Advantages of Choosing Top Branded CRM Over an In-House Solutions</h1>
</div>
</div>







   <div className="lg:p-8 sm:p-4   ">
      {/* Centered Heading */}
      <div className="lg:h-[150px] mt-5 pb-4 flex text-center justify-center">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
    <samp className="text-accent">-</samp>  Our Success Stories  <samp className="text-accent">-</samp>
  </h1>
</div>


      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-6"  data-aos="fade-right">
        {/* Card 1 */}
        <div className="card bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl  w-80 p-6">
          <img
            src="https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="rounded-md mb-4 w-full"
          />
          
          <p className="text-gray-300">
          24% Jump in Annual Savings with Optimization & Management of IT Infrastructure For a Global Manufacturer
          </p>
        </div>

        {/* Card 2 */}
        <div className="card bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl  w-80 p-6"  data-aos="fade-right">
          <img
            src="https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Feature 2"
            className="rounded-md mb-4 w-full"
          />
         
          <p className="text-gray-300">
          ~20% Reduction in Infrastructure Costs with Managed Services Engagement Model Resulting in ISO 27001 Certification for a Subsidiary of a Top Japanese Electronics Conglomerate
          </p>
        </div>

        {/* Card 3 */}
        <div className="card bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl  w-80 p-6"  data-aos="fade-right">
          <img
            src="https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Feature 3"
            className="rounded-md mb-4 w-full"
          />
         
          <p className="text-gray-300">
          Engineer-to-Order Process Automation with Conga CPQ Configuration Optimization & Periodic Upgrades Leading to 20% Reduction in IT Costs for a Leading Construction Company
          </p>
        </div>
      </div>
      </div>





      <div className="flex mt-10 flex-wrap justify-center gap-6">




<div className="flex flex-col lg:flex-row gap-8 bg-transparent border-white lg:h-[400px] w-[80%] mb-4 rounded-full">
{/* Profile Image */}
<div className="flex-shrink-0 lg:w-1/3 flex justify-center items-center"  data-aos="fade-right">
<img
src="https://images.pexels.com/photos/30207232/pexels-photo-30207232/free-photo-of-moody-portrait-of-a-man-with-a-beard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
alt="Mohammad Iqbal"
className="lg:w-96 lg:h-96 sm:w-40 sm:h-40 object-cover rounded-full border-4 border-accent"
/>
</div>
{/* Profile Details */}
<div className="lg:w-2/3  flex flex-col justify-center items-start lg:items-start text-center lg:text-left">
<h1 className="text-3xl font-bold mb-4">Mohammad Iqbal</h1>
<p className='text-2xl text-accent'>Managing Director - Strategic Alliances

</p>


<p className="text-sm ">
Iqbal is a strategic leader with over 20 years of experience in IT, specializing in business strategy, partnerships, and sales management. Prior to Exalt System, he was responsible for driving growth and innovation at HCL Technologies, Accenture, and Tech Mahindra.
</p>
</div>
</div>
</div>

<div className='w-full lg:h-[350px] sm:h-[200px] bg-slate-800 flex justify-center items-center' >
    <h1 className='text-4xl text-white'>Let’s discuss your Managed Services needs</h1>

</div>

   <Address/>
    </div>
  )
}

export default SalesforceService