import { useEffect } from "react";
import { GoBookmarkFill } from "react-icons/go";

import AOS from "aos";
import "aos/dist/aos.css"; 
import oodo from "../assets/odoo_logo.png";
import { Address } from "./Address";
import { Navbar } from "./Navbar";

const OodoProducts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
   <Navbar/>
    <div>
    
      <section>
        
        <div>
          {/* Background Image */}
          <div
            className="flex items-center justify-center flex-col gap-9 h-[70vh] bg-no-repeat bg-center"  data-aos="fade-down-right"
            style={{
              backgroundImage: `url(${"https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"})`,
              backgroundSize: "cover", 
            }}
          >
            <img
              src={oodo}
              alt="Oodo product logo"
              className="rounded-lg shadow-md animate-moveUpDown"
            />
            <h1 className="text-5xl font-bold text-center text-white">
              ODOO PRODUCTS
            </h1>
       
          </div>

          {/* Odoo Verticals */}
        
 
    <div className=" min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto">

      <div className="mb-9 ml-10 max-w-7xl mx-auto ">
            <h1 className="text-3xl font-sans font-extrabold  uppercase ">We serve a variety of Odoo products with <br />flexible customizations</h1>
          </div>
        {/* Odoo Verticals */}
        <section className=" ml-6 mr-6">

        <div className="h-[100px] lg:h-[120px] flex text-center justify-center  ">
  <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold">
Odoo  Verticals
  </h1>
</div>
         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Odoo Healthcare Management",
              "Odoo Hotel Management",
              "Odoo Training Management",
              "Odoo Fleet Management",
              "Odoo Construction Management",
              "Odoo Tour & Travel Management",
              "Odoo Repair Management",
              "Odoo Consulting Management",
              "Odoo Insurance Management",
              "Odoo Retail POS Management",
              "Odoo School Management",
              "Odoo Restaurant Management",
              "Odoo Property Leasing",
              "Odoo University Management System",
              "Xero Accounting integration with Odoo",
              "Delivery Control System",
              "Odoo Veterinary Medical Module",
              "Odoo Automobile Spare Parts Retail POS",
              "Odoo Hostel Management",
              "Odoo Manufacturing Management",
              "Odoo Clinic Management System",
              "Odoo Rental Management System",
              "Odoo POS-Gift Coupon Management",
              "Odoo Dental Clinic Management",
              "Odoo Pathology Lab Management System",
              "Odoo POS Loyalty Management System",
              "Odoo POS Promotional Scheme",
              "Odoo Loan Management",
              "Odoo Eye Clinic Management",
              "Odoo Hubspot Integration",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-400 items-center shadow-md p-4 rounded-lg transition-shadow duration-300 flex flex-row" data-aos="fade-up"
              >
                <GoBookmarkFill className="text-accent mr-2" /> 
                <p className="text-white " data-aos="fade-up">  {item} 
                </p>
                
              </div>
            ))}
          </div>
        </section>

        {/* Connectors / Integrations */}
        <section className="mt-6 ml-6 mr-6">

        <div className="h-[100px] lg:h-[120px] flex text-center justify-center px-4">
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
    Connectors /  Integrations
  </h1>
</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-left">
            {[
              "Odoo Quickbooks Connector",
              "Odoo Salesforce Connector",
              "Odoo Freshbook Connector",
              "Odoo – Ebay Connector",
              "Odoo Mautic Connector",
              "Odoo Zoho CRM Connector",
            ].map((item, index) => (
                <div
                key={index}
                className="bg-slate-400 items-center shadow-md p-4 rounded-lg transition-shadow duration-300 flex flex-row" data-aos="fade-up"
              >
                <GoBookmarkFill className="text-accent mr-2" /> 
                <p className="text-white ">  {item} 
                </p>
                
              </div>
            ))}
          </div>
        </section>

        {/* Our Services */}
        <section className="mt-10 ml-6 mr-6">
       <div className="h-[70px] lg:h-[120px] flex text-center justify-center px-4">
       <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">Our Services  </h1>
    </div>
          <h2 className="text-2xl font-semibold  mb-6"></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-right">
            {[
              "Odoo Development",
              "Odoo Customization",
              "Odoo Installation",
              "Odoo Configuration",
              "Odoo Consultancy",
              "Odoo Upgradation",
              "Odoo Training",
              "Odoo Support",
            ].map((item, index) => (
                <div
                key={index}
                className="bg-slate-400 items-center shadow-md p-4 rounded-lg transition-shadow duration-300 flex flex-row" data-aos="fade-up"
              >
                <GoBookmarkFill className="text-accent mr-2" /> 
                <p className="text-white " data-aos="fade-up">  {item} 
                </p>
                
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>



      
          <Address/>
        </div>
      </section>
    </div>
    </>
  );
};

export default OodoProducts;
