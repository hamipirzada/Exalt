import { Link } from 'react-router-dom'
import salesforce from '../assets/Salesforce Logo.jpeg'
import erp from '../assets/erp.png'
import erpHero from '../assets/erp-hero.png'
import migrate from '../assets/migrate.png'
import { Navbar } from "./Navbar"
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import { Address } from './Address';
import Quick from './Quick'
import WhatsApp from './WhatsApp'




const SalesforceErp = () => {

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
                  SALESFORCE ERP
                  </h1> */}
        </div>
                
                
                
  <div className="max-w-5xl h-full mt-9 ml-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">
          SALESFORCE ERP

          </h1>
          <p className="text-lg sm:text-xl  mb-6">
          GoExalt System as a one-stop shop for Enterprise Resource Planning (ERP) system implementation empowers businesses of all sizes – small, medium, and large – to leverage the power of Oracle and NetSuite solutions and transform businesses. Our expertise covers the entire ERP lifecycle, from selecting the best cloud-based ERP system for your needs to seamless implementation and ongoing support.

          </p>

          <p className="text-lg sm:text-xl  mb-6">
          Whether you are new to ERP or looking to optimize your existing system, GoExalt System delivers custom-fit ERP solutions that drive efficiency and growth across various industries like manufacturing, healthcare, Hi-Tech, and others.

          </p>
        
          <Link
            to="/contact"
            className="bg-accent pr-5 pl-5 pt-2 pb-2 rounded-2xl  hover:bg-slate-700 transition-colors duration-300 text-sm sm:text-base font-small mt-6 inline-block"
          >
            Get In Touch
          </Link>
   </div>



  <div className="flex flex-col mt-5 lg:flex-row items-center justify-between gap-8 p-6 bg-gray-50 mx-auto w-[90%] rounded-3xl shadow-lg">


     {/* Image */}
  <div className="flex-1">
    <img 
      src={erpHero} 
      alt="Innovative Design" 
      className="w-full h-auto max-w-md mx-auto rounded-lg shadow-md"
    />
  </div>
  {/* Text Content */}
  <div className="flex-1 text-center lg:text-left">
    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Our ERP Services Portfolio</h1>
    <p className="text-gray-600 text-base sm:text-lg">
    With over 20 years of expertise, GoExalt System’ ERP team has successfully delivered multiple implementation and managed services projects and is recognized for providing exceptional customer support, seamless integrations, and other initiatives..
    </p>
  </div>

 
</div>







<div className="flex flex-wrap gap-6 w-full max-w-7xl justify-center overflow-x-hidden overflow-y-hidden mx-auto mt-14">
     {/* Card 1 */}
     <div className="bg-transparent border-dotted  rounded-2xl p-6 w-full sm:w-[calc(60%-16px)] lg:w-[calc(40%-24px)] max-w-md h-96 flex flex-col justify-between" data-aos="fade-right">
       
       <h1 className="text-xl font-semibold  mb-4">
       Adopt automation over manual processes with your first Cloud ERP and accelerate business growth.
       </h1>
       <div>


      
         <img className='w-52' src={erp} alt="" />



         <Link
            to="/contact"
            className="bg-accent pr-5 pl-5 pt-2 pb-2 rounded-2xl  hover:bg-slate-700 transition-colors duration-300 text-sm sm:text-base font-small mt-6 inline-block"
          >
            First Cloud ERP
          </Link>
        
       </div>
     </div>
   
     {/* Card 2 */}
     <div className="bg-transparent border-dotted  rounded-2xl p-6 w-full sm:w-[calc(60%-16px)] lg:w-[calc(40%-24px)] max-w-md h-96 flex flex-col justify-between" data-aos="fade-right">
       
       <h1 className="text-xl font-semibold  mb-4">
       Migrate to a customized cloud solution from the ineffective software for optimal growth opportunities.
       </h1>
       <div>


      
         <img className='w-52' src={migrate} alt="" />



         <Link
            to="/contact"
            className="bg-accent pr-5 pl-5 pt-2 pb-2 rounded-2xl  hover:bg-slate-700 transition-colors duration-300 text-sm sm:text-base font-small mt-6 inline-block"
          >
            Migrate to Custom-fit ERP
          </Link>
        
       </div>
     </div>
   </div>






<div className="lg:p-8 sm:p-4  ">
      {/* Centered Heading */}
      <div className='  h-[100px] flex text-center mt-7 justify-center'>
        <h1 className='text-2xl lg:text-5xl font-extrabold '><samp className='text-accent'>-</samp> Our Success Stories <samp className='text-accent'>-</samp> </h1>
    </div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-6"  data-aos="fade-right">
        {/* Card 1 */}
        <div className="card bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl  w-80 p-6">
          <img
            src="https://images.pexels.com/photos/4064824/pexels-photo-4064824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="rounded-md mb-4 w-full"
          />
          
          <p className="text-gray-300">
          Improvement in Productivity with E2E Automation of Manual Product Price Updates in Oracle Fusion Cloud ERP with FloData
          </p>
        </div>

        {/* Card 2 */}
        <div className="card bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl  w-80 p-6"  data-aos="fade-right">
          <img
            src="https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Feature 2"
            className="rounded-md mb-4 w-full"
          />
         
          <p className="text-gray-300">
          Data Quality Improvement with SAP Data Standardization & E2E ERP Retirement
          </p>
        </div>

        {/* Card 3 */}
        <div className="card bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl  w-80 p-6"  data-aos="fade-right">
          <img
            src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Feature 3"
            className="rounded-md mb-4 w-full"
          />
         
          <p className="text-gray-300">
          GoExalt System Enables Migration to Oracle Cloud, Re-Engineers the Business Process to Improve Productivity by 80%
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
<p className='text-2xl text-accent'>Director Solutions - CLM and E-commerce</p>
<p className="text-sm ">
Chief Information Officer & Vice President Sales - APAC
</p>

<p className="text-sm ">
Uzair Rather is a certified professional in ERP, Salesforce, Salesforce.com. With 7+ years of experience.
</p>
</div>
</div>
</div>



<Address/>
    </div>
  )
}

export default SalesforceErp