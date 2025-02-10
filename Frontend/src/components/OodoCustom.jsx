import oodo from "../assets/odoo_logo.png";
import { Address } from "./Address";
import { Navbar } from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";
import Quick from "./Quick";
import WhatsApp from "./WhatsApp";

const OodoCustom = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <>
   <Navbar/>
   <Quick/>
   <WhatsApp/>
    <div>
    
      <section>
        
        <div>
          {/* Background Image */}
          <div
            className="flex items-center justify-center flex-col gap-9 h-[70vh] bg-no-repeat bg-top "   data-aos="fade-down-right"
            style={{
              backgroundImage: `url(${ "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"})`,
              backgroundSize: "cover", 
            }}
          >
            <img
              src={oodo}
              alt="Oodo product logo"
              className="rounded-lg shadow-md animate-moveUpDown"
            />
            <h1 className="text-5xl font-bold text-center text-white">
             ODOO CUSTOMIZATION
            </h1>
          </div>

          <div className=" py-16 px-6">
      <div className="max-w-screen-lg mx-auto text-center ">

      <div className="h-[150px] flex text-center justify-center px-4">
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
    When to Opt for Odoo Customization?
  </h1>
</div>

       
        <ul className="space-y-6 text-lg">
          <li className="flex items-center" data-aos="fade-right">
            <span className="text-green-500 mr-4">✔</span>
            Existing out-of-the-box Odoo features do not align with your business processes.
          </li>
          <li className="flex items-center" data-aos="fade-right">
            <span className="text-green-500 mr-4">✔</span>
            Additional features would bring about optimal usage of the ERP.
          </li>
          <li className="flex items-center" data-aos="fade-right">
            <span className="text-green-500 mr-4">✔</span>
            Newer business processes call for new functionalities that need customization.
          </li>
          <li className="flex items-center" data-aos="fade-right">
            <span className="text-green-500 mr-4">✔</span>
            Odoo customization improves user interface and hence user experience.
          </li>
          <li className="flex items-center" data-aos="fade-right">
            <span className="text-green-500 mr-4">✔</span>
            Adding newer applications require customization.
          </li>
          <li className="flex items-center" data-aos="fade-right">
            <span className="text-green-500 mr-4">✔</span>
            Changing the look of the ERP to match your brand requires customization.
          </li>
          <li className="flex items-center" data-aos="fade-right">
            <span className="text-green-500 mr-4">✔</span>
            Making the ERP mobile-friendly requires customization.
          </li>
          <li className="flex items-center " data-aos="fade-right">
            <span className="text-green-500 mr-4">✔</span>
            Want to pull advanced custom reports? You’ll need customization.
          </li>
        </ul>
      </div>
    </div>


          {/* Odoo Verticals */}
          
          <Address/>
        </div>
      </section>
    </div>
    </>
  );
};

export default OodoCustom;
