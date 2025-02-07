import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_white.png";
import ThemeProvider from './ThemeProvider'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [activeDropdown, setActiveDropdown] = useState(""); 

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown("");
  };

  return (
    <>
      <section className="h-28 w-full flex justify-center z-50 ">
        <div className="fixed  flex justify-between backdrop-blur-3xl items-center  h-20 w-full rounded-xl shadow-white  px-4 z-50">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/home" className="flex items-center">
              <img src={logo} alt="logo" className="h-12 w-12 mr-2 mb-2" />
              <h1 className="font-bold lg:text-2xl sm:xl">GoExalt System</h1>
            </Link>
          </div>



    


          {/* Desktop Links */}
          <div className="hidden md:flex z-50 items-center mix-blend-exclusion">
            <Link
              to="/home"
              className="font-bold text-sm mx-4 transition-colors duration-300"

            >
              HOME
            </Link>

            <Link
              to="/about"
              className="font-bold text-sm mx-4 hover:text-accent transition-colors duration-300 "
            >
              ABOUT
            </Link>


            



            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("odoo")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="font-bold text-sm mx-4 hover:text-accent transition-colors duration-300">
                ODOO
              </button>
              {activeDropdown === "odoo" && (
                <div className="absolute bg-white lg:w-[280px]  shadow-lg mt-0 rounded-xl z-50 ">
                  <Link
                    to="/odoo-customization"
                    className="block px-4 py-2 text-black  hover:bg-slate-500  "
                  >
                    Odoo Customization
                  </Link>
                  <Link
                    to="/odoo-products"
                    className="block px-4 py-2 text-black hover:bg-slate-500"
                  >
                    Odoo Products
                  </Link>
                  <Link
                    to="/odoo-integration"
                    className="block px-4 py-2 text-black  hover:bg-slate-500 "
                  >
                    Odoo Integration
                  </Link>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("salesforce")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="font-bold text-sm mx-4 hover:text-accent transition-colors duration-300">
                SALESFORCE
              </button>
              {activeDropdown === "salesforce" && (
                <div className="absolute lg:w-[280px] bg-white shadow-lg mt-0 rounded-xl z-50">
                  <Link
                    to="/salesforce-development"
                    className="block px-3 py-1 text-black hover:bg-slate-500"
                  >
                    Salesforce Development
                  </Link>
                  <Link
                    to="/salesforce-lightning"
                     className="block px-3 py-1 text-black hover:bg-slate-500"
                  >
                    Salesforce Lightning & (LWC)
                  </Link>
                  <Link
                    to="/salesforce-consulting"
                    className="block px-3 py-1 text-black  hover:bg-slate-500"
                  >
                    Salesforce Consulting
                  </Link>
                  <Link
                    to="/salesforce-training"
                    className="block px-3 py-1 text-black hover:bg-slate-500 "
                  >
                    Salesforce Training Program
                  </Link>

                  <Link
                    to="/salesforce-billing"
                    className="block px-3 py-1 text-black hover:bg-slate-500"
                    onClick={() => setIsOpen(false)}
                  >
                   Billing
                  </Link>
                  <Link
                    to="/salesforce-clm"
                   className="block px-3 py-1 text-black hover:bg-slate-500"
                    onClick={() => setIsOpen(false)}
                  >
                   CLM
                  </Link>
                  <Link
                    to="/salesforce-cfq"
                    className="block px-3 py-1 text-black hover:bg-slate-500"
                    onClick={() => setIsOpen(false)}
                  >
                  CPQ
                  </Link>
                  <Link
                    to="/salesforce-crm"
                    className="block px-3 py-1 text-black hover:bg-slate-500"
                    onClick={() => setIsOpen(false)}
                  >
                   CRM
                  </Link>
                  <Link
                    to="/salesforce-engineering"
                   className="block px-3 py-1 text-black hover:bg-slate-500"
                    onClick={() => setIsOpen(false)}
                  >
                   Data Engineering & Integration 
                  </Link>
                  <Link
                    to="/salesforce-commerce"
                    className="block px-3 py-1 text-black hover:bg-slate-500"
                    onClick={() => setIsOpen(false)}
                  >
                   Digital Commerce
                  </Link>
                  <Link
                    to="/salesforce-erp"
                    className="block px-3 py-1 text-black hover:bg-slate-500"
                    onClick={() => setIsOpen(false)}
                  >
                  ERP
                  </Link>
                  <Link
                    to="/salesforce-finacials"
                    className="block px-3 py-1 text-black hover:bg-slate-500"
                    onClick={() => setIsOpen(false)}
                  >
                   Finance
                  </Link>
                  <Link
                    to="/salesforce-service"
                    className="block px-3 py-1 text-black hover:bg-slate-500"
                    onClick={() => setIsOpen(false)}
                  >
                   Managed Services
                  </Link>
                  <Link
                    to="/salesforce-chain"
                    className="block px-3 py-1 text-black hover:bg-slate-500"
                    onClick={() => setIsOpen(false)}
                  >
                   Supply Chain
                  </Link>
                </div>
              )}
            </div>



            <Link
              to="/services"
              className="font-bold text-sm mx-4 hover:text-accent transition-colors duration-300"
            >
               SERVICES
            </Link>

        

            <Link
              to="/contact"
              className="font-bold text-sm mx-4 hover:text-accent transition-colors duration-300"
            >
              CONTACT
            </Link>



          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="font-bold text-2xl focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="bg-gray-600 w-11/12 rounded-xl shadow-lg mt-2 fixed top-20 z-50">
            <div className="flex flex-col py-4 md:hidden">
              <Link
                to="/home"
                className="font-bold text-sm mx-4 py-2 hover:text-blue-500 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>

              <Link
                to="/about"
                className="font-bold text-sm mx-4 py-2 hover:text-blue-500 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </Link>

{/* ODOO */}
<button
  onClick={() =>
    setActiveDropdown(
      activeDropdown === "mobile-odoo" ? "" : "mobile-odoo"
    )
  }
  className="font-bold text-sm mx-4 py-2 hover:text-blue-500 transition-colors duration-300 text-start"
>
  ODOO
</button>
{activeDropdown === "mobile-odoo" && (
  <div className="bg-gray-800 rounded shadow-md text-start">
    <Link
      to="/odoo-customization"
      className="block px-4 py-2 text-white hover:bg-gray-600"
      onClick={() => setIsOpen(false)}
    >
      Odoo Customization
    </Link>
    <Link
      to="/odoo-products"
      className="block px-4 py-2 text-white hover:bg-gray-600"
      onClick={() => setIsOpen(false)}
    >
      Odoo Products
    </Link>
    <Link
      to="/odoo-integration"
      className="block px-4 py-2 text-white hover:bg-gray-600"
      onClick={() => setIsOpen(false)}
    >
      Odoo Integration
    </Link>
  </div>
)}



              {/* ODOO END */}







              
{/* Salesforce */}
          <button
             onClick={() =>
              setActiveDropdown(
              activeDropdown === "mobile-salesforce" ? "" : "mobile-salesforce"
                  )
                }
                className="font-bold text-sm mx-4 py-2 hover:text-blue-500 transition-colors duration-300 text-start"
              >
                SALESFORCE
              </button>
              {activeDropdown === "mobile-salesforce" && (
                <div className="bg-gray-800 rounded shadow-md text-start">
                  <Link
                    to="/salesforce-development"
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                   Salesforce Development
                  </Link>
                  <Link
                    to="/salesforce-lightning"
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Lightning and LWC
                  </Link>
                  <Link
                    to="/salesforce-consulting"
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                   Salesforce Consulting
                  </Link>

                  <Link
                    to="/salesforce-training"
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                   Salesforce Training Program
                  </Link>
                  <Link
                    to="/salesforce-billing"
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                   Billing
                  </Link>
                  <Link
                    to="/salesforce-clm"
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                   CLM
                  </Link>
                  <Link
                    to="/salesforce-cfq"
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                  CPQ
                  </Link>
                  <Link
                    to="/salesforce-crm"
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                   CRM
                  </Link>
                  <Link
                    to="/salesforce-engineering"
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                   Data Engineering & Intergration 
                  </Link>
                  <Link
                    to="/salesforce-commerce"
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                   Digital Commerce
                  </Link>
                  <Link
                    to="/salesforce-erp"
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                  ERP
                  </Link>
                  <Link
                    to="/salesforce-finacials"
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                   Financials
                  </Link>
                  <Link
                    to="/salesforce-service"
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                   Managed Services
                  </Link>
                  <Link
                    to="/salesforce-chain"
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                   Supply Chain
                  </Link>
                </div>
              )}


              {/* Salesforce END */}




              {/* Services Start */}

              <Link
                to="/services"
                className="font-bold text-sm mx-4 py-2 hover:text-blue-500 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                SERVICES
              </Link>



            

              {/* Services END */}


              <Link
                to="/contact"
                className="font-bold text-sm mx-4 py-2 hover:text-blue-500 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
                      {/* themes */}
<div className="relative">
  <button
    onClick={toggleDropdown}
    className="font-bold text-sm mx-4 hover:text-accent transition-colors duration-300"
  >
    
  </button>

  {isDropdownOpen && (
    <div className="absolute right-0 mt-2 w-[400px] bg-slate-800 text-white rounded-lg shadow-lg flex flex-col">
      <ThemeProvider />
    </div>
  )}
</div>
{/* themes end */}

              
            </div>
          </div>
        )}
      </section>
    </>
  );
};
