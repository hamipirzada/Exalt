import { Link } from 'react-router-dom'
import salesforce from '../assets/Salesforce Logo.jpeg'
import { Navbar } from "./Navbar"
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import digital from "../assets/Digital-Commerce.png"
import { Address } from './Address';
import Quick from './Quick';
import WhatsApp from './WhatsApp';




const SalesforceCommerce = () => {

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
                SALESFORCE-digital-commerce
              </h1> */}
          </div>
                
                
                
  <div className="max-w-5xl h-full mt-9 ml-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">
          Salesforce-digital-commerce

          </h1>
          <p className="text-lg sm:text-xl mb-6">
          GoExalt System offers Digital Commerce services to help companies enter the online space and boost their presence, increase business, and augment brand. GoExalt System has developed 25+ digital commerce projects using Conga’s Omnichannel Commerce and its own product.
          </p>
        
          <Link
            to="/contact"
            className="bg-accent pr-5 pl-5 pt-2 pb-2 rounded-2xl  hover:bg-slate-700 transition-colors duration-300 text-sm sm:text-base font-small mt-6 inline-block"
          >
            Get In Touch
          </Link>
   </div>



   <div className="flex flex-col mt-5 lg:flex-row items-center justify-between gap-8 p-6 bg-gray-50 mx-auto w-[90%] rounded-3xl shadow-lg">
  {/* Text Content */}
  <div className="flex-1 text-center lg:text-left">
    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Our Billing Portfolio</h1>
    <p className="text-gray-600 text-base sm:text-lg">
      GoExalt System develops self-service storefronts to help users (partners, customers, sales representatives) configure, price, collaborate, generate/request quotes, and place orders through a unified platform for an enhanced customer experience. Forsys is recognized for building digital commerce transformation and seamlessly bridging the gap between business, technology, and customer journey.
    </p>
  </div>

  {/* Image */}
  <div className="flex-1">
    <img 
      src={digital} 
      alt="Innovative Design" 
      className="w-full h-auto max-w-md mx-auto rounded-lg shadow-md"
    />
  </div>
</div>







<div className="lg:p-8 sm:p-4  ">
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
            src="https://images.pexels.com/photos/7651553/pexels-photo-7651553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="rounded-md mb-4 w-full"
          />
          
          <p className="text-gray-300">
          Implementation of Conga Digital Commerce Improves Customer Lifetime Value by 23% for a Fortune 500 Heavy Equipment Manufacturer
          </p>
        </div>

        {/* Card 2 */}
        <div className="card bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl  w-80 p-6"  data-aos="fade-right">
          <img
            src="https://images.pexels.com/photos/3183126/pexels-photo-3183126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Feature 2"
            className="rounded-md mb-4 w-full"
          />
         
          <p className="text-gray-300">
          GoExalt System Implements Conga Digital Commerce, Improves Customer Retention by 18% for a Video Tech Company
          </p>
        </div>

        {/* Card 3 */}
        <div className="card bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl  w-80 p-6"  data-aos="fade-right">
          <img
            src="https://images.pexels.com/photos/880840/pexels-photo-880840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Feature 3"
            className="rounded-md mb-4 w-full"
          />
         
          <p className="text-gray-300">
          GoExalt System Builds a Multi-store Compatible Portal Using Conga Digital Commerce for a Leading Apparel Brand
          </p>
        </div>
      </div>
      </div>




      <div className="flex mt-10 flex-wrap justify-center gap-6">

<div className="flex flex-col lg:flex-row gap-8 bg-transparent border-white lg:h-[400px] w-[80%] mb-4 rounded-full">
{/* Profile Image */}
<div className="flex-shrink-0 lg:w-1/3 flex justify-center items-center"  data-aos="fade-right">
<img
  src="https://images.pexels.com/photos/19230717/pexels-photo-19230717/free-photo-of-bearded-man-in-a-black-hoodie-standing-in-a-garage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  alt="Jahangir"
  className="lg:w-96 lg:h-96 sm:w-40 sm:h-40 object-cover rounded-full border-4 border-accent"
/>
</div>
{/* Profile Details */}
<div className="lg:w-2/3 flex flex-col justify-center items-start lg:items-start text-center lg:text-left">
<h1 className="text-3xl font-bold mb-4">Abrar Gul</h1>
<p className='text-2xl text-accent'>Director Solutions - CLM and E-commerce</p>
<p className="text-sm">
Abrar Gul is a certified professional in Conga CLM, Conga eCommerce, Salesforce, Salesforce.com. With 12+ years of experience, he leads our Digital Commerce solutions.
</p>
</div>
</div>
</div>



<Address/>
    </div>
  )
}

export default SalesforceCommerce