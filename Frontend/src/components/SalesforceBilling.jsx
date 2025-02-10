import { Link } from 'react-router-dom'
import salesforce from '../assets/Salesforce Logo.jpeg'
import { Navbar } from "./Navbar"
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import { Address } from './Address';
import Quick from './Quick';
import WhatsApp from './WhatsApp';

const SalesforceBilling = () => {
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
                      SALESFORCE BILLING
                    </h1> */}
            </div>
    
    
    
            <div className="max-w-5xl mt-9 ml-10">

   
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">
            Salesforce Billing
            </h1>
            <p className="text-lg sm:text-xl  mb-6">
            GoExalt System, as a Lead-to-Revenue specialist, offers Billing Services & Invoice Automation Solutions. A partner of choice for Conga, Salesforce, and Oracle billing solutions, GoExalt System helps customers generate accurate invoices even for the most complex pricing model.
            </p>
            <Link
            to="/contact"
            className="bg-accent py-2 px-6 sm:py-3 sm:px-7 mt-5 rounded-2xl hover:bg-slate-200 transition-colors duration-300 text-sm sm:text-base font-medium"
          >
            Get In Touch
          </Link>
        
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 p-8 lg:flex-row flex-col">
  {/* Text Section */}
  <div className="flex-1 max-w-md text-center lg:text-left">
    <h1 className="text-4xl font-bold mb-4">Our Billing Portfolio</h1>
    <p className="text-lg">
      GoExalt System can simplify different pricing models, including flat rate, custom billing, subscription, consumption-based, renewal, blended, and more.
    </p>
  </div>

  {/* Image Section */}
  <div className="flex-1 flex justify-center items-center lg:ml-28">
    <img 
      src="https://images.pexels.com/photos/4476375/pexels-photo-4476375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      alt="Features Illustration" 
      className="rounded-lg shadow-lg w-full max-w-sm"
    />
  </div>
</div>


            <div className="p-8  ">
      {/* Centered Heading */}
   

     

    <div className="lg:h-[150px] mt-5 pb-4 flex text-center justify-center">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
    <samp className="text-accent">-</samp> Our Success Stories <samp className="text-accent">-</samp>
  </h1>
</div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Card 1 */}
        <div className="card bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 w-80 p-6">
          <img
            src="https://images.pexels.com/photos/6170399/pexels-photo-6170399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="rounded-md mb-4 w-full"
          />
          
          <p className="text-gray-300">
          GoExalt System’ Oracle Order Management Solution Results in 100% Accurate Reconciliation, Provides Real-time Visibility in Revenue
          </p>
        </div>

        {/* Card 2 */}
        <div className="card bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 w-80 p-6">
          <img
            src="https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Feature 2"
            className="rounded-md mb-4 w-full"
          />
         
          <p className="text-gray-300">
          Implementation of Conga Billing Automates Subscription Model for a Video Delivery Technology Company
          </p>
        </div>

        {/* Card 3 */}
        <div className="card bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 w-80 p-6">
          <img
            src="https://images.pexels.com/photos/4449786/pexels-photo-4449786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Feature 3"
            className="rounded-md mb-4 w-full"
          />
         
          <p className="text-gray-300">
          Implementation of Salesforce Billing & Integration with NetSuite Reduces Pricing Inaccuracies for a Broadcast Technology Company
          </p>
        </div>
      </div>
                </div>



    
    <div className="flex mt-10 flex-wrap justify-center gap-6">
    <div className="card w-[550px]  bg-transparent rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300  p-6">
          <img
            src="https://images.pexels.com/photos/30344414/pexels-photo-30344414/free-photo-of-black-and-white-portrait-of-a-man-in-morocco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Feature 3"
            className="rounded-md mb-4 w-full"
          />
          <h1 className="text-4xl font-bold mb-4">Parveez Ahmad <span></span></h1>
          <p className='text-2xl text-accent'>Director Solutions - CPQ and Billing</p>
          <p className="">
          Parveez Ahmad is a Conga-certified Billing professional with 15+ years of IT experience. He is a CPQ & Billing expert working with us and empowering businesses by automating their invoice management using Salesforce, Conga, & Oracle solutions and creating new revenue opportunities.
          </p>
          
        </div>

    </div>


    <Address/>

    </div>




  )
}

export default SalesforceBilling