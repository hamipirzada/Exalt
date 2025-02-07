import { Link } from 'react-router-dom'
import salesforce from '../assets/Salesforce Logo.jpeg'
import { Navbar } from './Navbar'

import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import { Address } from './Address';

const SalesforceConsulting = () => {
         useEffect(() => {
            AOS.init({ duration: 1000 });
          }, []);
  return (
    <div>
        <Navbar/>
                  
                  <div className="relative h-[450px] bg-cover overflow-hidden flex items-center justify-center"  data-aos="fade-right">
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={salesforce}
                  alt=""
                />
                {/* <h1 className="relative lg:text-5xl font-extrabold  z-10 mt-14 text-black sm:text-xl">
                  SALESFORCE CONSULTING
                </h1> */}
              </div>




    <div className="max-w-3xl mt-6 ml-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">
        Salesforce Consulting 
        </h1>
        <p className="text-lg sm:text-xl  mb-6">
        Salesforce consulting services are aimed to support your sales, marketing and customer service needs. We apply our ample CRM consulting experience to help the enterprises in professional services, retail, IT, manufacturing, finance and banking, healthcare, and other industries benefit from Salesforce use.
        </p>
        <Link
        to="/contact"
        className="bg-accent py-2 px-6 sm:py-3 sm:px-7 mt-5 rounded-2xl  hover:bg-slate-700 transition-colors duration-300 text-sm sm:text-base font-medium"
      >
        Get In Touch
      </Link>
    
    </div>


    <div className="container mx-auto mt-12 p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">

        
  {/* Card 1 */}
  <div className="card bg-gray-300 p-4 rounded-lg shadow-md w-full h-screen" data-aos="fade-right">
    <img
      src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Card Image 1"
      className="rounded-lg mb-4"
    />
    <h3 className="text-xl font-bold mb-2">
      Implementation of a new Salesforce solution
    </h3>
    <p className="text-gray-600">
      We provide implementation consulting services if there’s a need for
      migration from another CRM to Salesforce, or if you are only planning to
      get your sales, marketing or customer service activities digitized with
      CRM. We analyze the customer’s requirements and business needs and offer
      ways of addressing them in full with Salesforce capabilities.
    </p>
  </div>

  {/* Card 2 */}
  <div className="card bg-gray-300 p-4 rounded-lg shadow-md w-full h-screen" data-aos="fade-left" >
    <img
      src="https://images.pexels.com/photos/3854816/pexels-photo-3854816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Card Image 2"
      className="rounded-lg mb-4"
    />
    <h3 className="text-xl font-bold mb-2">
      Improvement of an existing solution for better coverage of business needs
    </h3>
    <p className="text-gray-600">
      We provide implementation consulting services if there’s a need for
      migration from another CRM to Salesforce, or if you are only planning to
      get your sales, marketing or customer service activities digitized with
      CRM. We analyze the customer’s requirements and business needs and offer
      ways of addressing them in full with Salesforce capabilities.
    </p>
  </div>





</div>





<div className="container mx-auto mt-12 p-4 ">
<h1 className="text-3xl sm:text-4xl lg:text-5xl ml-10 font-bold text-accent mb-4">

        </h1>

        <div className="lg:h-[150px] mt-5 pb-4 flex text-center justify-center">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
    <samp className="text-accent">-</samp> What Our Salesforce Consultants Do <samp className="text-accent">-</samp>
  </h1>
</div>

        

     
        
  <p className="text-center ml-10 w-[90%] bg-gradient-to-r from-gray-500 via-lime-700 text-lg mb-8">
    If you plan to implement Salesforce or improve your existing solution, ScienceSoft provides comprehensive consulting, which includes:
  </p>

  <div className="space-y-8">
    {/* Business Objectives */}
    <div className="bg-gradient-to-t from-white via-slate-50 to-black p-6 rounded-lg shadow-md max-w-3xl mx-auto" data-aos="fade-down">
      <h3 className="text-2xl font-semibold mb-4">Defining Business Objectives</h3>
      <p className="text-gray-600">
        Salesforce is to support your business objectives. Whether you need to enable reports with increased visibility, reduce long sales cycles or case resolution time, introduce efficient email marketing campaigns or automate your sales and customer service-related processes, Salesforce consulting helps to address your challenges timely and efficiently.
      </p>
    </div>

    {/* Mapping Business Objectives */}
    <div className="bg-gradient-to-t from-slate-500 via-yellow-200 to-cyan-500 p-6 rounded-lg shadow-md max-w-3xl mx-auto" data-aos="fade-down">
      <h3 className="text-2xl font-semibold mb-4">Mapping Business Objectives into Salesforce Features</h3>
      <p className="text-gray-600">
        After your business goals are clear, it&apos;s time to choose the appropriate Salesforce functionality (either default or custom) to achieve them.
      </p>
    </div>

    {/* Recommending Salesforce Edition */}
    <div className="bg-gradient-to-b from-black via-cyan-300 to-blue-300 p-6 rounded-lg shadow-md max-w-3xl mx-auto" data-aos="fade-down">
      <h3 className="text-2xl font-semibold mb-4">Recommending the Most Suitable Salesforce Edition</h3>
      <p className="text-gray-600">
        Choosing the right edition means that you get your business challenges addressed without paying for unneeded features. We analyze your requirements and suggest an edition, which will be a perfect match for your business.
      </p>
    </div>

    {/* Designing Processes */}
    <div className="bg-gradient-to-b from-slate-700 via-teal-400 to-blue-300 p-6 rounded-lg shadow-md max-w-3xl mx-auto" data-aos="fade-down">
      <h3 className="text-2xl font-semibold mb-4">Designing Sales, Customer Service, and Marketing Processes</h3>
      <p className="text-gray-600">
        We design and automate sales, customer service, and marketing processes using Salesforce Sales, Service, and Marketing Clouds. This includes personalized customer journeys, targeted advertising campaigns, and more to help you reach your business goals.
      </p>
    </div>

    {/* User Adoption Strategy */}
    <div className="bg-gradient-to-b from-slate-700 via-emerald-400 to-purple-300 p-6 rounded-lg shadow-md max-w-3xl mx-auto" data-aos="fade-down">
      <h3 className="text-2xl font-semibold mb-4">Designing a User Adoption Strategy</h3>
      <p className="text-gray-600">
        To help your users master the new system, we create a user adoption strategy that includes iterative user training, timely user support by the Salesforce admin, release notes, and rewards for advanced Salesforce users.
      </p>
    </div>

    
  </div>
</div>







<Address/>
    </div>
  )
}

export default SalesforceConsulting