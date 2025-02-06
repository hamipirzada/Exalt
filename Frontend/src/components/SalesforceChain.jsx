import { Link } from 'react-router-dom'
import salesforce from '../assets/Salesforce Logo.jpeg'

import { Navbar } from "./Navbar"
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import { Address } from './Address';

import { VscMapFilled } from "react-icons/vsc";
import { IoCloudDoneOutline } from "react-icons/io5";
import { SiOracle } from "react-icons/si";
import { MdManageSearch } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";
import { MdPrecisionManufacturing } from "react-icons/md";
import { MdOutlineInventory } from "react-icons/md";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { FaFileContract } from "react-icons/fa6";
import { MdDeviceHub } from "react-icons/md";



 

const SalesforceChain = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
        }, []);




        const cards = [
            { id: 1, title: "SCMaaS", icon: <VscMapFilled /> },
            { id: 2, title: "Oracle SCM Cloud", icon: <IoCloudDoneOutline /> },
            { id: 3, title: "Oracle Planning Central", icon: <SiOracle /> },
            { id: 4, title: "Oracle Order Management", icon: <MdManageSearch /> },
            { id: 5, title: "Global Order Promising", icon: <MdBorderColor />},
            { id: 6, title: "Manufacturing", icon: <MdPrecisionManufacturing /> },
            { id: 7, title: "Inventory Management", icon: <MdOutlineInventory /> },
            { id: 8, title: "Purchasing", icon: <BiPurchaseTagAlt />},
            { id: 9, title: "Procurement Contracts", icon: <FaFileContract />, },
            { id: 10, title: "Product Hub & Supplier Portal", icon: <MdDeviceHub /> },
          ];
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
                  SALESFORCE SUPPLY CHAIN
                  </h1> */}
        </div>
                
                
                
  <div className="max-w-5xl h-full mt-9 ml-10">


          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">
          SALESFORCE SUPPLY CHAIN

          </h1>
          <p className="text-lg sm:text-xl  mb-6">
          Exalt System is a leading service provider in automating and streamlining Financial Management and specializes in Revenue Management, Revenue Operations, and Revenue Recognition. Exalt System uses in-house accelerators, bolt-on solutions, industry templates, and standardized frameworks to seamlessly execute projects, transform businesses, and optimize processes.

          </p>

        
          <Link
            to="/contact"
            className="bg-accent pr-5 pl-5 pt-2 pb-2 rounded-2xl text-white hover:bg-slate-700 transition-colors duration-300 text-sm sm:text-base font-small mt-6 inline-block"
          >
            Get In Touch
          </Link>
   </div>


  


   <div className="p-6 flex flex-col items-center">
   <div className="lg:h-[150px] mt-5 pb-4 flex text-center justify-center">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
    <samp className="text-accent">-</samp>  Our SCM Portfolio  <samp className="text-accent">-</samp>
  </h1>
</div>

      <p className="text-xl font-bold mb-6">Exalt System SCM expertise reduces disruptions, lowers costs, and gives real-time supply chain visibility to operations and finances. Our expertise include:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="lg:w-52 sm:w-56 bg-white shadow-lg rounded-2xl p-4 border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:border-indigo-500 hover:bg-indigo-100 flex flex-col items-center text-center"
          >
            <div className="text-indigo-600 mb-4 text-4xl">
              {card.icon}
            </div>
            <h1 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-indigo-700">
              {card.title}
            </h1>
            <p className="text-gray-600 group-hover:text-gray-800">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>










   <div className="lg:p-8 sm:p-4 ">
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
          Exalt System implements oracle order management, saves 50% time on TPI validation
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
          Manufacturing Company Saves Initial $1M within a Year, Forsys Optimizes Demand & Supply Planning Process
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
          Exalt System’ Customized Solution on Resource Capacity Streamlines Planned Orders Data & Contributes to 20% Reduction in Carbon Footprint
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
<p className='text-2xl text-accent'>Director - Cloud Solutions ERP

</p>


<p className="text-sm text-black">
Iqbal Sonaullah is a certified professional in Oracle Cloud OM, Procurement, Inventory, Planning, Manufacturing & Costing. He has over 6 years of experience in Solution Architect (Oracle) and leads our SCM solutions.
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

export default SalesforceChain