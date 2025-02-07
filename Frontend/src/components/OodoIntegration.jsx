import { FaSalesforce } from "react-icons/fa";
import { FaShopify } from "react-icons/fa6";
import { SiPrestashop } from "react-icons/si";
import { FaMagento } from "react-icons/fa6";
import { SiQuickbooks } from "react-icons/si";
import { SiZoho } from "react-icons/si";
import { SiHubspot } from "react-icons/si";




import Acu from "../assets/Acu.svg";
import oodo from "../assets/odoo_logo.png";
import { Address } from "./Address";
import { Navbar } from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";

const OodoIntegration = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <>
      <Navbar />
      <div>
        <section>
          <div>
            {/* Background Image */}
            <div
              className="flex items-center justify-center flex-col gap-9 h-[80vh] w-full bg-center"  data-aos="fade-down-right"
              style={{
                backgroundImage: `url(${ "https://images.pexels.com/photos/23638660/pexels-photo-23638660/free-photo-of-man-sitting-and-working-at-workshop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"})`,
                backgroundSize: "cover", 
              }}
            >
              <img
                src={oodo}
                alt="Oodo product logo"
                className="rounded-lg shadow-md animate-moveUpDown"
              />
              <h1 className="text-5xl font-bold text-center text-white uppercase">
                Odoo Integration
              </h1>
            </div>
            

            {/* Odoo ERP Integration Services */}
            <div className=" py-16 px-6 " data-aos="fade-left">
             
              <div className="max-w-screen-xl mx-auto text-center " data-aos="fade-left">

              <p className="mb-9" data-aos="fade-left"> Our ERP Developers are Skilled at Integrating Popular Enterprise Platforms like Salesforce, Shopify, Quickbooks, Acumatica, Zoho and HubSpot</p>

                <h2 className="text-4xl font-bold mb-8">Odoo ERP Integration Services</h2>

                {/* Flex container for cards */}
                <div className="flex flex-wrap justify-center gap-8" data-aos="fade-left">
                  {/* Salesforce */}
                  <div className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out w-80" data-aos="fade-left">
                    <FaSalesforce className="text-7xl"/>
                    <h3 className="text-2xl font-semibold mb-4  ">Salesforce</h3>
                    <p className="text-lg">
                      Gain complete customer visibility with Salesforce integration to streamline customer engagement activities.
                    </p>
                  </div>

                  {/* Shopify */}
                  <div className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out w-80" data-aos="fade-left">
                  <FaShopify className="text-7xl"/>
                    <h3 className="text-2xl font-semibold mb-4  ">Shopify</h3>
                    <p className="text-lg">
                      Streamline your e-commerce inventory management and sales management activities with our Shopify integration services.
                    </p>
                  </div>

                  {/* Prestashop */}
                  <div className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out w-80" data-aos="fade-left">
                  <SiPrestashop className="text-7xl"/>
                    <h3 className="text-2xl font-semibold mb-4  ">Prestashop</h3>
                    <p className="text-lg">
                      Fulfill your opensource development objectives with our Prestashop integration services to set up a fully customized online store.
                    </p>
                  </div>

                  {/* Magento */}
                  <div className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out w-80" data-aos="fade-left">
                  <FaMagento className="text-7xl" data-aos="fade-left"/>
                    <h3 className="text-2xl font-semibold mb-4  ">Magento</h3>
                    <p className="text-lg" data-aos="fade-left">
                      Organize all e-commerce activities with Magento integrations that enable end-to-end management including payments, shipping, and order management.
                    </p>
                  </div>

                  {/* Quickbooks */}
                  <div className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out w-80" data-aos="fade-left">
                  <SiQuickbooks className="text-7xl" data-aos="fade-left"/>
                    <h3 className="text-2xl font-semibold mb-4  ">Quickbooks</h3>
                    <p className="text-lg" data-aos="fade-left">
                      Meet your accounting requirements and fulfill tax obligations with Quickbook integrations that simplify invoicing, reporting, and cash flow management tasks.
                    </p>
                  </div>

                  {/* Zoho */}
                  <div className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out w-80" data-aos="fade-left">
                  <SiZoho className="text-7xl" data-aos="fade-left"/>
                    <h3 className="text-2xl font-semibold mb-4  " data-aos="fade-left">Zoho</h3>
                    <p className="text-lg" data-aos="fade-left">
                      Boost organization efficiency with our Zoho integration services to fulfill requirements ranging from inventory management to workforce management.
                    </p>
                  </div>

                  {/* Acumatica */}
                  <div className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out w-80" data-aos="fade-left">
                  <img className="" data-aos="fade-left" src={Acu} alt="" />
                    <h3 className="text-2xl font-semibold mb-4  " data-aos="fade-left">Acumatica</h3>
                    <p className="text-lg" data-aos="fade-left">
                      Accelerate business growth with Acumatica’s cloud ERP applications like CRM, financial management, distribution management, and project accounting.
                    </p>
                  </div>

                  {/* HubSpot */}
                  <div className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out w-80" data-aos="fade-left">
                  <SiHubspot className="text-7xl" data-aos="fade-left"/>
                    <h3 className="text-2xl font-semibold mb-4  " data-aos="fade-left">HubSpot</h3>
                    <p className="text-lg">
                      Augment your marketing efforts with the services of our seasoned HubSpot integration team to strengthen customer relations and improve sales.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Odoo Verticals */}
            <Address />
          </div>
        </section>
      </div>
    </>
  );
};

export default OodoIntegration;
