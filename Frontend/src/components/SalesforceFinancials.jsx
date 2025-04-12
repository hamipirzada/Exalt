import { Link } from 'react-router-dom'
import salesforce from '../assets/Salesforce Logo.jpeg'
import financials from '../assets/finalcial.png'
import { Navbar } from "./Navbar"
import  { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import { Address } from './Address';
import Quick from './Quick';
import WhatsApp from './WhatsApp';
import emailjs from "emailjs-com";



 

const SalesforceFinancials = () => {

  const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(""); // "success" or "error"
  
    useEffect(() => {
      if (message) {
        const timer = setTimeout(() => {
          setMessage(null);
        }, 3000);
        return () => clearTimeout(timer);
      }
    }, [message]);
  
    const sendEmail = async (e) => {
      e.preventDefault();
    
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
    
      console.log(formData);
      console.log(data);
    
      try {
        await emailjs.sendForm(
          "service_prvtuqo",
          "template_a35xsvn",
          e.target,
          "kgIQhBrJ1-5h1FbC-"
        );
    
        setMessage("Message sent successfully!");
        setMessageType("success");
        e.target.reset(); // Clear form fields
      } catch (error) {
        console.error("Error:", error);
        setMessage("Failed to send message. Please try again.");
        setMessageType("error");
      }
    };
  

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
                  SALESFORCE Financials
                  </h1> */}
        </div>
                
                
                
  <div className="max-w-5xl h-full mt-9 ml-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">
          SALESFORCE FINANCIALS

          </h1>
          <p className="text-lg sm:text-xl mb-6">
          GoExalt System is a leading service provider in automating and streamlining Financial Management and specializes in Revenue Management, Revenue Operations, and Revenue Recognition. Forsys uses in-house accelerators, bolt-on solutions, industry templates, and standardized frameworks to seamlessly execute projects, transform businesses, and optimize processes.

          </p>

        
          <Link
            to="/contact"
            className="bg-accent pr-5 pl-5 pt-2 pb-2 rounded-2xl hover:bg-slate-700 transition-colors duration-300 text-sm sm:text-base font-small mt-6 inline-block"
          >
            Get In Touch
          </Link>
   </div>



   <div className="flex flex-col mt-5 lg:flex-row items-center justify-between gap-8 p-6 bg-gray-50 mx-auto w-[90%] rounded-3xl shadow-lg">
  {/* Text Content */}
  <div className="flex-1 text-center lg:text-left">
    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Our  Portfolio</h1>
    <p className="text-gray-600 text-base sm:text-lg">
    As an Oracle Gold Certified & Cloud Excellence partner and End-to-End NetSuite partner, GoExalt System has executed 30+ projects in various industries.
    </p>
  </div>

  {/* Image */}
  <div className="flex-1">
    <img 
      src={financials} 
      alt="Innovative Design" 
      className="w-full h-auto max-w-md mx-auto rounded-lg shadow-md"
    />
  </div>
</div>







<div className='flex justify-center items-center '>

<div className="lg:h-[100px] mt-10 flex text-center justify-center">
  <h1 className="text-3xl lg:text-5xl md:text-6xl font-extrabold">
    <samp className="text-accent">-</samp>  Why GoExalt System for Financial Management  <samp className="text-accent">-</samp>
  </h1>
</div>
<h1 className="text-2xl sm:text-4xl font-bold text-accent mb-4"></h1>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">



  {/* Card 1 */}
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
    <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11M9 21V3m12 7h-4m4 4h-4m4 4h-4m4 4h-4" />
      </svg>
    </div>
    <h1 className="text-xl font-semibold text-gray-800 mb-2">Pre-built
    Accelerators</h1>
    <p className="text-gray-600 text-center">Accelerate data integration and migration and simplify complex integrations using our pre-built accelerator.</p>
  </div>

  {/* Card 2 */}
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
    <div className="bg-green-100 text-green-600 p-4 rounded-full mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-3.866 0-7 3.582-7 8s3.134 8 7 8 7-3.582 7-8-3.134-8-7-8z" />
      </svg>
    </div>
    <h1 className="text-xl font-semibold text-gray-800 mb-2">End-to-End
    Support</h1>
    <p className="text-gray-600 text-center">Get complete support for Oracle Fusion Applications and NetSuite ERP migration, integration, implementation, deployment, and upgrade .</p>
  </div>

  {/* Card 3 */}
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
    <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    <h1 className="text-xl font-semibold text-gray-800 mb-2">Domain
    Expertise</h1>
    <p className="text-gray-600 text-center">Access a team of certified resources with strong domain expertise in Accounting and Finance modules</p>
  </div>

  {/* Card 4 */}
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
    <div className="bg-red-100 text-red-600 p-4 rounded-full mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 3v12a4 4 0 004 4h6a4 4 0 004-4V3m-4 0a2 2 0 00-2-2m-4 0a2 2 0 00-2 2m6 4H6" />
      </svg>
    </div>
    <h1 className="text-xl font-semibold text-gray-800 mb-2">Experts in Advanced Features</h1>
    <p className="text-gray-600 text-center">Implements advanced features like Advanced Revenue Management, Dunning Letters, Intercompany, Vendor Amortization, Projects Management</p>
  </div>

  {/* Card 5 */}
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
    <div className="bg-purple-100 text-purple-600 p-4 rounded-full mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m2 7H7m2-5h8" />
      </svg>
    </div>
    <h1 className="text-xl font-semibold text-gray-800 mb-2">Global
    Delivery Model</h1>
    <p className="text-gray-600 text-center">Onshore, Nearshore and Offshore highly experience and knowledgeable resources for Implementations, Migrations, and Managed Services.</p>
  </div>


    {/* Card 6 */}
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
    <div className="bg-purple-100 text-purple-600 p-4 rounded-full mb-4">
    <svg className="w-6 h-6 text-gray-800 dark:text-fuchsia-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
    <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z"/>
</svg>
    </div>
    <h1 className="text-xl font-semibold text-gray-800 mb-2">Next-Gen QA Automation Framework</h1>
    <p className="text-gray-600 text-center">Simplify and streamline the auto-upgrades from NetSuite and Oracle.</p>
  </div>
</div>









<div className="lg:p-8 sm:p-4   ">
      {/* Centered Heading */}
      <div className="lg:h-[100px] mt-5 pb-4 flex text-center justify-center">
  <h1 className="text-2xl lg:text-5xl font-extrabold">
    <samp className="text-accent">-</samp>  Our Success Stories  <samp className="text-accent">-</samp>
  </h1>
</div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-6"  data-aos="fade-right">
        {/* Card 1 */}
        <div className="card bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl  w-80 p-6">
          <img
            src="https://images.pexels.com/photos/14887693/pexels-photo-14887693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="rounded-md mb-4 w-full"
          />
          
          <p className="text-gray-300">
          GoExalt System Integrates Mainframes & Oracle Financial Clouds, Improves Financial Data Management for an Ivy League
          </p>
        </div>

        {/* Card 2 */}
        <div className="card bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl  w-80 p-6"  data-aos="fade-right">
          <img
            src="https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Feature 2"
            className="rounded-md mb-4 w-full"
          />
         
          <p className="text-gray-300">
          50% Improvement in Business Productivity with Automation of Planning & Budgeting Processes
          </p>
        </div>

        {/* Card 3 */}
        <div className="card bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl  w-80 p-6"  data-aos="fade-right">
          <img
            src="https://images.pexels.com/photos/30515366/pexels-photo-30515366/free-photo-of-euro-banknotes-and-coins-on-financial-charts.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Feature 3"
            className="rounded-md mb-4 w-full"
          />
         
          <p className="text-gray-300">
          Oracle Enabled 50% Man Hours Savings with Modernization of Budgeting, Forecasting & Reporting Processes
          </p>
        </div>
      </div>
      </div>




      <div className="flex mt-10 flex-wrap justify-center gap-6">


      <div className="shadow-md rounded-tl-full p-8 w-full md:w-1/2 mb-6 md:mb-0">
     
     <h1 className="font-extrabold text-3xl ">Talk To Our Expert</h1>
    
     <form
      onSubmit={sendEmail}
       className="bg-black/30 backdrop-blur-lg p-8 rounded-lg shadow-xl border border-white/30 space-y-6"
     >

{message && (
            <p
              className={`text-center p-3 rounded-lg ${
                messageType === "success"
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {message}
            </p>
          )}


       
       <div>
         <input
           type="text"
           name="fullName"
           placeholder="Full Name"
           className="w-full px-4 py-3 bg-transparent  border border-white/30 rounded-2xl focus:ring-2 focus:ring-accent focus:outline-none placeholder-white/80 transition duration-300 ease-in-out z-50"
           required
         />
       </div>


       <div>
         <input
           type="text"
           name="companyName"
           placeholder="Company Name"
           className="w-full px-4 py-3 bg-transparent  border border-white/30 rounded-2xl focus:ring-2 focus:ring-accent focus:outline-none placeholder-white/80 transition duration-300 ease-in-out z-50"
           required
         />
       </div>

     
       <div>
         <input
           type="email"
           name="email"
           placeholder="Your Email"
           className="w-full px-4 py-3 bg-transparent  border border-white/30 rounded-2xl focus:ring-2 focus:ring-accent focus:outline-none placeholder-white/80 transition duration-300 ease-in-out"
           required
         />
       </div>

       
       <div>
         <input
           type="tel"
           name="phone"
           placeholder="Phone Number"
           className="w-full px-4 py-3 bg-transparent  border border-white/30 rounded-2xl focus:ring-2 focus:ring-accent focus:outline-none placeholder-white/80 transition duration-300 ease-in-out"
           required
         />
       </div>

      
       <div>
         <textarea
           name="message"
           placeholder="Your Message"
           rows="4"
           className="w-full px-4 py-3 bg-transparent  border border-white/30 rounded-2xl focus:ring-2 focus:ring-accent focus:outline-none placeholder-white/80 transition duration-300 ease-in-out"
           required
         >


         </textarea>
          
       </div>
     

     
       <div className="text-center">
         <button
           type="submit"
           className="px-6 py-3 bg-accent font-semibold rounded-full hover:bg-slate-700 transition duration-300"
         >
           Send Message
         </button>
       </div>
     </form>
   </div>

<div className="flex flex-col lg:flex-row gap-8 bg-transparent border-white lg:h-[400px] w-[80%] mb-4 rounded-full">
{/* Profile Image */}
<div className="flex-shrink-0 lg:w-1/3 flex justify-center items-center"  data-aos="fade-right">
<img
  src="https://images.pexels.com/photos/5490267/pexels-photo-5490267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  alt="Naveed Ahmed"
  className="lg:w-96 lg:h-96 sm:w-40 sm:h-40 object-cover rounded-full border-4 border-accent"
/>
</div>
{/* Profile Details */}
<div className="lg:w-2/3  flex flex-col justify-center items-start lg:items-start text-center lg:text-left">
<h1 className="text-3xl font-bold mb-4">Naveed Ahmed</h1>
<p className='text-2xl text-accent'>Vice President - Cloud Solutions ERP

</p>


<p className="text-sm ">
Naveed Ahmad has over 20 years of experience and is an expert in Oracle ERP – Oracle Projects Suite, Oracle Financials, Oracle CRM, and HR. He leads Financial Management solutions at GoExalt System
</p>
</div>
</div>
</div>






<Address/>
    </div>
  )
}

export default SalesforceFinancials