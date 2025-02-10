
import { HiBuildingOffice } from "react-icons/hi2";
import { GiTreeBranch } from "react-icons/gi";


import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";




export const Address = () => {

    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

    const date = new Date();
   const year = date.getFullYear()
    console.log(year);
    
  return (
    <>

<footer className=" py-10">
     
     <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
       
      
       

       
       <div className="flex flex-col space-y-4 ml-8 mt-16" data-aos="fade-up">
       <div className="flex items-center bg-red space-x-2 rounded-full">
          <div className="h-16 w-16 bg-accent flex items-center justify-center rounded-full">
          <HiBuildingOffice className="text-3xl " />
          </div>
      

        </div>
         <h1 className="text-xl font-bold ">HEAD OFFICE</h1>
         <p className="text-lg ">
           Office No. 136 & 137, First Floor, <br />
            Right Wing, 
           Arish Complex, <br /> Model Town-D, 
         193201 </p>
          <p>info@exaltsystem.com <br />
         +91-7006334491</p>
         
       </div>

       <div  className="flex flex-col items-start space-y-4 ml-0 bg-contain  mt-0">

       <div className="flex flex-col space-y-4 ml-8 mt-16" data-aos="fade-up">
       <div className="flex items-center bg-red space-x-2 rounded-full">
          <div className="h-16 w-16 bg-accent flex items-center justify-center rounded-full">
          <GiTreeBranch className="text-3xl " />
          </div>
      

        </div>
         <h1 className="text-xl font-bold uppercase">Branch Office USA</h1>
         <p className="text-lg ">
         3255 Normandy Woods  <br />
         Dr. Ellicott City Maryland, <br />
         MD 21043, USA</p>
         <p>
          sales@exaltsystem.com <br />
          +1-443-851-3193
          </p>
         
       </div>
    
         
       </div>

       
       <div className="flex flex-col  space-y-4 ml-8 mt-16" data-aos="fade-up">
        <div className="flex items-center bg-red space-x-2 rounded-full">
          <div className="h-16 w-16 bg-accent flex items-center justify-center rounded-full">
          <GiTreeBranch className="text-3xl " />
          </div>
      

        </div>
         
         <h1 className="text-xl font-bold  ">BRANCH OFFICE IND</h1>
         <p className="text-lg ">
           602 - Chester, Nyati Eternity,
           <br /> Pune 411060, Maharashtra
         </p>
         <p className="text-lg ">sales@exaltsystem.com <br /> +91-7051294074</p>
           
         
       </div>


      


     </div>

     
     <div className=" mt-10 py-4 border-t-2 border-black">
       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm px-6 space-y-2 md:space-y-0">
         <p className="">&copy; {year} GoExalt System LLP</p>
         <div className="flex space-x-4">
           <p className=" hover:text-gray-700 cursor-pointer">Privacy Policy</p>
           <p className=" hover:text-gray-700 cursor-pointer">Cookie Policy</p>
           <p className=" hover:text-gray-700 cursor-pointer">Terms & Conditions</p>
         </div>
       </div>
     </div>
   </footer>

    </>
  )
}
