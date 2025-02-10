import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";
import { FaArrowsTurnToDots } from "react-icons/fa6";
import { MdOutlineIntegrationInstructions } from "react-icons/md";


import { GiBookshelf } from "react-icons/gi";
import { SlGraph } from "react-icons/sl";
import { BsFileEarmarkBarGraphFill } from "react-icons/bs";
import { IoMdTimer } from "react-icons/io";
import { FcApproval } from "react-icons/fc";
import { MdOutlineQrCode2 } from "react-icons/md";
import { SiTestinglibrary } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";


import { TiVendorAndroid } from "react-icons/ti";
import { TiVendorApple } from "react-icons/ti";
import {  FaCodeFork } from "react-icons/fa6";
import { RiBuilding3Fill } from "react-icons/ri";
import { MdPaid } from "react-icons/md";
import { PiStrategyBold } from "react-icons/pi";
import { TiSocialAtCircular } from "react-icons/ti";
import { SiContentstack } from "react-icons/si";
import { TiMessages } from "react-icons/ti";
import { TbBusinessplan } from "react-icons/tb";
import { FaVideo } from "react-icons/fa6";
import { TbAffiliateFilled } from "react-icons/tb";

import { MdEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineSocialDistance } from "react-icons/md";
import { GiWebSpit } from "react-icons/gi";
import { FcAdvertising } from "react-icons/fc";
import { GiJourney } from "react-icons/gi";



import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Address } from "./Address";
import { Link } from "react-router-dom";



const Services = () => {
    const cards = [
        {
          steps: "Step 1",
          icon: <GiBookshelf className="text-blue-500 text-4xl mb-4" />,
          title: "Requirement Gathering",
          description: "We will schedule a meeting with you and our technical team, to gather information on your needs and requirements.",
        },
        {
            steps: "Step 2",
          icon: <SlGraph className="text-green-500 text-4xl mb-4" />,
          title: "GAP Analysis",
          description: "We analyze the gap between the available features of Odoo and your requirements.",
        },
        {
            steps: "Step 3",
          icon: <BsFileEarmarkBarGraphFill className="text-yellow-500 text-4xl mb-4" />,
          title: "Feasibility",
          description: "A study on the feasibility to do the requested modifications in Odoo without, compromising the performance as well as breaking default functionalities of the platform.",
        },
        {
            steps: "Step 4",
          icon: <IoMdTimer className="text-red-500 text-4xl mb-4" />,
          title: "Estimation",
          description: "An estimation of the cost and duration and implementation will be shared with you.",
        },
        {
            steps: "Step 5",
          icon: <FcApproval className="text-orange-500 text-4xl mb-4" />,
          title: "Customer Approval",
          description: "We wait for your approval to proceed further.",
        },
        {
            steps: "Step 6",
          icon: <MdOutlineQrCode2 className="text-blue-700 text-4xl mb-4" />,
          title: "Development",
          description: "The platform will be developed as per the needs and requirements also as per the standards.",
        },
        {
            steps: "Step 7",
          icon: <SiTestinglibrary className="text-yellow-400 text-4xl mb-4" />,
          title: "Testing",
          description: "Multiple integrated, as well as unit testing, will be undertaken to estimate the reliability.",
        },
        {
            steps: "Step 8",
          icon: <TbTruckDelivery className="text-purple-500 text-4xl mb-4" />,
          title: "Delivery",
          description: "The completed and tested modules will be delivered to you",
        },
      ];

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

  return (
    <>
    <Navbar/>
  
    <div className="relative h-[450px] bg-cover overflow-hidden flex items-center justify-center">
  <img
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="https://images.pexels.com/photos/574080/pexels-photo-574080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    alt=""
  />
  <h1 className="relative text-5xl font-extrabold text-white z-10">
    SERVICES
  </h1>
</div>


    <div>
        <h1 className="text-center text-4xl font-bold mt-10">Salesforce Development</h1>
        <p className="text-center text-xl mt-5 p-6">From startups to enterprises, we help organizations make more out of their Salesforce CRM. We are end-to-end Salesforce experts. And yes, we will forever redefine how you use Salesforce.</p>
    </div>

    <div>
        <div className="flex flex-wrap justify-center gap-8" data-aos="fade-left">
                       
            <div className="mt-10">
                <div className="   p-6 rounded-lg shadow-2xl hover:shadow-black hover:scale-105 transform transition-all duration-300 ease-in-out w-80" data-aos="fade-left">
                    <MdOutlineSettingsInputComponent className="text-7xl"/>
                    <h3 className="text-2xl font-semibold mb-4 text-accent">Customization Services</h3>
                    <p className="text-lg">
                        Elevate your business to new heights by tailoring it to perfection with our unparalleled Salesforce customization services, designed to meet your unique needs and drive exceptional results!
                    </p>
             </div>
        
                 
             <div className="bg-gradient-to-r  mt-6 p-6 rounded-lg shadow-2xl hover:shadow-black hover:scale-105 transform transition-all duration-300 ease-in-out w-80" data-aos="fade-left">
                <FaLaptopCode className="text-7xl"/>
                    <h3 className="text-2xl font-semibold mb-4 text-accent">Development</h3>
                        <p className="text-lg">
                        Expansion of Salesforce CRM with help of various available force.com technologies including Apex, Aura Lightning, Lightning Web, Salesforce Lightning Design System etc
                        </p>
                </div>
         </div>
        
                       
        <div className="mt-10">
                <div className="bg-gradient-to-r  p-6 rounded-lg shadow-2xl hover:shadow-black hover:scale-105 transform transition-all duration-300 ease-in-out w-80" data-aos="fade-left">
                    <FaArrowsTurnToDots className="text-7xl"/>
                    <h3 className="text-2xl font-semibold mb-4 text-accent">Migration</h3>
                     <p className="text-lg">
                        Expansion of Salesforce CRM with help of various available force.com technologies including Apex, Aura Lightning, Lightning Web Components, Salesforce Lightning Design System etc
                     </p>
                    </div>
        
                         
                    <div className="bg-gradient-to-r  mt-6 p-6 rounded-lg shadow-2xl hover:shadow-black hover:scale-102 transform transition-all duration-300 ease-in-out w-80" data-aos="fade-left">
                        <MdOutlineIntegrationInstructions className="text-7xl" data-aos="fade-left"/>
                        <h3 className="text-2xl font-semibold mb-4 text-accent">Integration</h3>
                        <p className="text-lg" data-aos="fade-left">
                            Supercharge your running applications by integrating them with Salesforce, unlocking relentless management efficiency and boundless innovation opportunities!
                        </p>
                        </div>
                </div>
            </div>


            <div className="w-full">
      {/* Header Title */}
     

      <div className="lg:h-[150px] mt-5  flex text-center justify-center">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
    <samp className="text-accent">-</samp>  Our Expertise In Salesforce  <samp className="text-accent">-</samp>
  </h1>
</div>





<div className="lg:h-[100px] mt-5 pb-4 flex text-center justify-center">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
      Salesforce Development  
  </h1>
</div>



      {/* Main Container */}
      <div 
  className="w-[90%] mx-auto rounded-3xl p-4 flex flex-col md:flex-row items-center shadow-lg 
  bg-gradient-to-r from-emerald-200 via-violet-400 to-indigo-200 
  lg:bg-gradient-to-r lg:from-blue-200 lg:via-purple-400 lg:to-pink-500"
  data-aos="fade-left"
>
        {/* Text Div */}
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Salesforce Development</h2>
          <p className="text-gray-600">
          Our expert developers can build comprehensive <span  className="font-semibold"> Custom Salesforce Development</span> Custom Salesforce Development solutions for your business utilizing any required Salesforce technologies such as Salesforce Sales Cloud, Wave Analytics, Service Cloud, Marketing Cloud and more </p>
          <p className="text-gray-600 ">
          We can assist your organization in designing and implementing robust Salesforce-based solutions and reap long-term benefits, whether you’re a startup or a large Enterprise. </p>
          <p className="text-gray-600 text-center">
            <span  className="font-semibold "> <samp className='text-accent text-3xl'>-</samp>Salesforce Implementation Consulting <samp className='text-accent text-3xl'>-</samp></span> <br />
            Our Dedicated Salesforce Developers will check your business needs and design a solution that would perfectly suit your requirements and assist you in choosing the ideal customizations for your business. 
            </p>

            <p className="text-gray-600 text-center"> 
            <span className="font-semibold">  <samp className='text-accent text-3xl'>-</samp>Force.com Development  <samp className='text-accent text-3xl'>-</samp></span> <br />
            Force.com is a major part of the Salesforce app cloud. MetaDesign Solutions can assist organizations in developing and implementing robust and scalable Force.com solutions.
            </p>

            <p className="text-gray-600 text-center">
            <span className="font-semibold">  <samp className='text-accent text-3xl'>-</samp>Force.com Integration and Migration  <samp className='text-accent text-3xl'>-</samp></span> <br />
            We can assist companies with integrating <span className="font-semibold"> Custom Salesforce Development </span> solutions to connect Force.com apps with various sources and services. We can also assist organizations to migrate their legacy solutions onto Force.com based automation solutions.
            </p>


        </div>

        {/* Image Div */}
        <div className="flex-1 p-4">
          <img
            src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Placeholder"
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </div>
    </div>

    
    <div className="lg:h-[100px] mt-10   flex text-center justify-center">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
      Salesforce Mobile Development  
  </h1>
</div>

    <div className="w-full mt-5">
    <div 
  className="w-[90%] mx-auto rounded-3xl p-4 flex flex-col md:flex-row items-center shadow-lg 
  bg-gradient-to-r from-slate-200 via-red-400 to-red-300 
  lg:bg-gradient-to-r lg:from-black lg:via-red-200 lg:to-slate-200 "
  data-aos="fade-left"
>

      <div className="flex-1 p-4 bg-cover ">
          <img
            src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Placeholder"
            className="w-full h-auto rounded-3xl bg-center"
          />
        </div>
        {/* Text Div */}
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Salesforce Mobile Development</h2>
          <p className="text-gray-600">
          Our expert developers can build comprehensive <span  className="font-semibold"> Custom Salesforce Development</span> Custom Salesforce Development solutions for your business utilizing any required Salesforce technologies such as Salesforce Sales Cloud, Wave Analytics, Service Cloud, Marketing Cloud and more </p>
          <p className="text-gray-600">
          We can assist your organization in designing and implementing robust Salesforce-based solutions and reap long-term benefits, whether you’re a startup or a large Enterprise. </p>
          <p className="text-gray-600 text-center">
            <span  className="font-semibold">  <samp className='text-accent text-3xl'>-</samp>Salesforce Implementation Consulting  <samp className='text-accent text-3xl'>-</samp></span> <br />
            Our Dedicated Salesforce Developers will check your business needs and design a solution that would perfectly suit your requirements and assist you in choosing the ideal customizations for your business. 
            </p>

            <p className="text-gray-600 text-center">
            <span className="font-semibold">  <samp className='text-accent text-3xl'>-</samp>Force.com Development  <samp className='text-accent text-3xl'>-</samp></span> <br />
            Force.com is a major part of the Salesforce app cloud. MetaDesign Solutions can assist organizations in developing and implementing robust and scalable Force.com solutions.
            </p>

            <p className="text-gray-600 text-center">
            <span className="font-semibold text-center ">  <samp className='text-accent text-3xl'>-</samp>Force.com Integration and Migration <samp className='text-accent text-3xl'>-</samp></span> <br />
            We can assist companies with integrating <span className="font-semibold"> Custom Salesforce Development </span> solutions to connect Force.com apps with various sources and services. We can also assist organizations to migrate their legacy solutions onto Force.com based automation solutions.
            </p>


        </div>

       
      </div>
    </div>




    <div className="w-full mt-5">
    


    <div className="lg:h-[100px] mt-10   flex text-center justify-center">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
      Salesforce App-Exchange Development  
  </h1>
</div>

      <div className="w-[90%] mx-auto 
      bg-gradient-to-r from-white via-violet-400  
      rounded-3xl p-4 flex flex-col md:flex-row items-center shadow-lg"data-aos="fade-right">
        {/* Text Div */}
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Salesforce App-Exchange Development</h2>
          <p className="text-gray-600">
          AppExchange is a marketplace featuring apps which can greatly enhance Salesforce existing functionality or even provide additional features. With MDS  <span  className="font-semibold">Salesforce Development Services, </span>  you can create custom apps for AppExchange and enable prospective clients to add unique features in their Salesforce instances.
          </p>
        
          <p className="text-gray-600 text-center">
            <span  className="font-semibold ">  <samp className='text-accent text-center text-3xl'>-</samp>App Consulting  <samp className='text-accent text-3xl'>-</samp></span> <br />
            With our  <span  className="font-semibold"> Salesforce Development Services in India, </span> you can consult with our experts and strategize on creating solutions which would best make use of AppExchange.
            </p>

            <p className="text-gray-600 text-center">
            <span className="font-semibold text-center">  <samp className='text-accent text-3xl'>-</samp>App Development <samp className='text-accent text-3xl'>-</samp></span> <br />
            As a highly experienced <span className="font-semibold">Salesforce Development </span>  Company in India, you can avail our services to create robust and scalable apps for AppExchange.
            </p>

            <p className="text-gray-600 text-center">
            <span className="font-semibold text-center">  <samp className='text-accent text-3xl'>-</samp>Lighting Apps  <samp className='text-accent text-3xl'>-</samp></span> <br />
            Our <span className="font-semibold"> Dedicated Salesforce Developers </span> can create rich applications that work perfectly with Salesforce Lightning.
            </p>


        </div>

        {/* Image Div */}
        <div className="flex-1 p-4">
          <img
            src="https://images.pexels.com/photos/30366457/pexels-photo-30366457/free-photo-of-home-entertainment-setup-with-streaming-services.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Placeholder"
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </div>
    </div>


    <div className="lg:h-[100px] mt-10  flex text-center justify-center">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
      Salesforce Lighting Development  
  </h1>
</div>


    <div className="w-full lg:mt-5 sm:mt-1">

      <div className="w-[90%] mx-auto 
 bg-gradient-to-r from-emerald-200 via-red-200 to-yellow-500
  lg:bg-gradient-to-r lg:from-black  lg:via-red-200 lg:to-yellow-500 
       rounded-3xl p-4 flex flex-col md:flex-row items-center shadow-lg" data-aos="fade-left">

      <div className="flex-1 p-4 bg-cover ">
          <img
            src="https://images.pexels.com/photos/1681437/pexels-photo-1681437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Placeholder"
            className="w-full h-auto rounded-3xl bg-center"
          />
        </div>
        {/* Text Div */}
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Salesforce Lighting  Development</h2>
          <p className="text-gray-600">
          The lightning experience has completely revitalized how businesses use Salesforce enabling a greater number of users to be able to use Salesforce. As a leading <span  className="font-semibold"> Salesforce Consulting Company, </span> MetaDesign Solutions can help your organization take complete advantage of Salesforce Lightning to make your Salesforce implementation more approachable and intuitive. </p>
          
          <p className="text-gray-600 text-center">
            <span  className="font-semibold text-center">  <samp className='text-accent text-3xl'>-</samp>Salesforce Lightning  Consulting   <samp className='text-accent text-3xl'>-</samp></span> <br />
            We can assist your organization to develop a strategy for a seamless Salesforce Lightning implementation
            </p>

            <p className="text-gray-600 text-center">
            <span className="font-semibold "> <samp className='text-accent text-3xl text-center'>-</samp>Salesforce App Development  <samp className='text-accent text-3xl'>-</samp></span> <br />
            You can <span className="font-semibold"> Hire Salesforce Developers </span> from MDS to create Lightning ready Salesforce AppExchange apps
            </p>

            <p className="text-gray-600 text-center">
            <span className="font-semibold text-center">  <samp className='text-accent text-3xl'>-</samp>Component Development for Salesforce Lightning  <samp className='text-accent text-3xl'>-</samp></span> <br />
            With our  <span className="font-semibold">Salesforce Development Services </span>  can develop custom components for Salesforce lightning that meet your exact business requirements.
            </p>


        </div>

       
      </div>
    </div>



    {/* PYTHON DEVELOPMENT */}
    <div className="w-full">
      {/* Header Title */}


      <div className="lg:h-[150px] mt-20  pb-4 flex text-center justify-center">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
    <samp className="text-accent">-</samp>  Python Developing  <samp className="text-accent">-</samp>
  </h1>
</div>
      
      {/* Main Container */}
      <div className="w-[90%] mx-auto bg-gradient-to-r from-slate-600 via-violet-400  rounded-3xl p-4 flex flex-col md:flex-row items-center shadow-lg" data-aos="fade-left">
        {/* Text Div */}
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">What You&apos;ll learn</h2>
          <li className="flex items-center" data-aos="fade-right">
            <span className="text-green-500 mr-4">✔</span>
            Master the fundamentals of Python programming, including variables, data types, and syntax
          </li>
          <li className="flex items-center" data-aos="fade-right">
            <span className="text-green-500 mr-4">✔</span>
            Develop the skills to write and run Python programs using an IDE or text editor
          </li>
          <li className="flex items-center" data-aos="fade-right">
            <span className="text-green-500 mr-4">✔</span>
            Gain proficiency in control flow, decision-making, and loops in Python
          </li>

          <li className="flex items-center" data-aos="fade-right">
            <span className="text-green-500 mr-4">✔</span>
            Learn essential data structures and algorithms in Python for problem-solving
          </li>

           


        </div>

        {/* Image Div */}
        <div className="flex-1 p-4">
          <img
            src="https://images.pexels.com/photos/11035474/pexels-photo-11035474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Placeholder"
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </div>
    </div>



      {/* PHP DEVELOPMENT */}
      <div className="w-full">
      {/* Header Title */}
    



      <div className="lg:h-[150px] mt-20  pb-4 flex text-center justify-center">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
    <samp className="text-accent">-</samp>  PHP Website Application Development Service  <samp className="text-accent">-</samp>
  </h1>
</div>

      {/* Main Container */}
      <div className="w-[90%] mx-auto bg-gradient-to-r from-slate-600 via-yellow-500 rounded-3xl p-4 flex flex-col md:flex-row items-center shadow-lg" data-aos="fade-left">
        {/* Text Div */}
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">PHP Service</h2>
          <p className="flex items-center" data-aos="fade-right">
            
          GoExalt System  is a trusted PHP web application development company, offering unmatched custom PHP development services to help your online business outshine your competitors. We have expert developers and provide PHP innovative solutions that enable us to help you achieve a next level of excellence.
          </p>
  
           


        </div>

        {/* Image Div */}


        <div className="flex-1 p-4">
          <img
            src="https://images.pexels.com/photos/11035390/pexels-photo-11035390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Placeholder"
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </div>
    </div>





     {/* Frontend Development*/}
     <div className="w-full">
      {/* Header Title */}

      <div className="lg:h-[150px] mt-20  pb-4 flex text-center justify-center">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
    <samp className="text-accent">-</samp>  HTML CSS & JS  <samp className="text-accent">-</samp>
  </h1>
</div>

      {/* Main Container */}
      <div className="w-[90%] mx-auto bg-gradient-to-r from-slate-600 via-pink-300 rounded-3xl p-4 flex flex-col md:flex-row items-center shadow-lg" data-aos="fade-left">


      
        {/* Text Div */}
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Frontend Service</h2>
          <p className="flex items-center" data-aos="fade-right">
            
          GoExalt System offers a full range of brand-driving front-end development services that are focused on creating software frontend with a powerful first impression. We have a wide pool of experienced frontend engineers ready to deliver solutions of any scope based on your business goals.
          </p>
  
           


        </div>

        {/* Image Div */}
        <div className="flex-1 p-4">
          <img
            src="https://images.pexels.com/photos/11035371/pexels-photo-11035371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Placeholder"
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </div>
    </div>



    <div className="lg:h-[150px] mt-20  pb-4 flex text-center justify-center">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
    <samp className="text-accent">-</samp>  CUSTOMIZATION  <samp className="text-accent">-</samp>
  </h1>
</div>

    </div>
   
    <div>
        
          
            <div className="relative h-[450px] mt-1 bg-cover overflow-hidden flex items-center justify-center">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <h1 className="relative text-5xl font-extrabold text-white z-10">
             Customization
          </h1>

        </div>

<div className="w-full mt-5">


<div className="lg:h-[100px] mt-10  flex text-center justify-center">
  <h1 className="text-4xl sm:text-4xl md:text-6xl font-extrabold">
      Salesforce Customization  
  </h1>
</div>
<div className="w-[90%] mx-auto lg:bg-gradient-to-l lg:from-slate-200 lg:via-red-200 lg:to-black rounded-3xl p-4 flex flex-col md:flex-row items-center shadow-lg" 
data-aos="fade-right" >
<div className="flex-1 p-4 bg-cover ">
    <img
      src="https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="Placeholder"
      className="w-full h-auto rounded-3xl bg-center"
    />
  </div>


 
  {/* Text Div */}
  <div className="flex-1 p-4">
    <h2 className="text-2xl font-bold text-gray-800 mb-2">SALESFORCE CUSTOMIZATION</h2>
    <p className="text-gray-600">
    Salesforce is a cloud-based customer relationship management (CRM) platform that allows businesses to manage customer interactions and sales processes. Salesforce customization services refer to the process of modifying or enhancing the functionality of the Salesforce platform to meet the unique needs of a particular business. Salesforce customization services can help businesses to optimize their use of Salesforce by tailoring the platform to their specific needs. Some of the key benefits of Salesforce customization services include: Improved Efficiency: Customizing Salesforce can help streamline business processes, automate tasks, and improve overall efficiency. Enhanced User Experience: By customizing Salesforce to meet the specific needs of your business, you can improve the user experience for your team and customers. Improved Data Management: Salesforce customization services can help businesses to better manage and analyze their data, resulting in better insights and decision-making. Increased Productivity: Customized Salesforce solutions can help businesses to increase productivity by enabling teams to work more efficiently and collaboratively. Competitive Advantage: Customizing Salesforce can give businesses a competitive edge by enabling them to leverage the platform to its full potential and differentiate themselves from competitors. To get started with Salesforce customization services, businesses can work with a certified Salesforce partner or consultant to assess their needs and identify areas where customization can provide the most value. The consultant can then design and implement custom solutions that meet the specific needs of the business, while ensuring compatibility and scalability with the Salesforce platform
      </p>
      </div>

  </div>



  <div className="lg:h-[100px] mt-10  flex text-center justify-center">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
      Odoo Customization  
  </h1>
</div>


  <div className="w-[90%] mx-auto mt-10 bg-gradient-to-r from-slate-200 via-red-200 to-yellow-600 rounded-3xl p-4 flex flex-col md:flex-row items-center shadow-lg" 
data-aos="fade-right" >
    


   <div className="flex-1 p-4">
     <h2 className="text-2xl font-bold text-gray-800 mb-2">ODOO CUSTOMIZATION</h2>
     <p className="text-gray-600">
     An enterprise application must go by client&apos;s way. Customization provides that personalized experience in an application focusing on the client’s requirements and ideas. Odoo provides a fully functional package to meet up an enterprise requirement, but there will be always an extra required by the clients. At GoExalt System we analyze your requirement on the additional needs and there by setting the right strategy for fulfilling the functionalities. We deliver high end customization services so that customers get the full benefit of using their application, there by achieving the business goals. Extending Odoo&apos;s modular approach, our technical team assist you to achieve your all desired needs.
       </p>
       </div>
       <div className="flex-1 p-4 bg-cover ">
             <img
      src="https://images.pexels.com/photos/5474035/pexels-photo-5474035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
       alt="Placeholder"
       className="w-full h-auto rounded-3xl bg-center"
    />
   </div> 

  </div>

    

</div>


<div>
         
          



        <div className="w-full mt-5">
        <div className="lg:h-[100px] mt-10  flex text-center justify-center">
  <h1 className="text-4xl sm:text-4xl md:text-6xl font-extrabold">
      Odoo Customization  Process
  </h1>
</div>



<div className="container mx-auto px-4 py-3 items-center justify-center">
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center items-start">
        {cards.map((card, index) => (
            
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-3 flex flex-col  hover:shadow-xl transition-shadow  h-[300px]" data-aos="fade-right"
          >
            <p className="text-gray-600">{card.steps}</p> 
            {card.icon} 
            
            <h1 className="text-2xl text-black font-bold mb-2">{card.title}</h1>
            <p className="text-gray-600">{card.description}</p> 
          </div>
        ))}
      </div>
    </div>
   

</div>
        
    </div>
        
    </div>

    <div>
             
        <div className="lg:h-[150px] mt-20  pb-4 flex text-center justify-center">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
    <samp className="text-accent">-</samp>  OTHER SERVICES  <samp className="text-accent">-</samp>
  </h1>
</div>


    <div className="relative h-[450px] bg-cover overflow-hidden  flex items-center justify-center">
        <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://images.pexels.com/photos/9830805/pexels-photo-9830805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
        />
        <h1 className="relative text-5xl font-extrabold text-white z-10">
        OTHER SERVICES
        </h1>
    </div>
    
    
{/* Websit */}

    <div className="flex flex-col items-start justify-start min-h-screen overflow-hidden  px-4 sm:px-8 lg:px-16 py-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">
        Web Design & Development
        </h1>
        <p className="text-lg sm:text-xl  mb-6">
        Client-focused, customer-centric, creating website solutions that deliver tangible business results, GoExalt System web developers helps brands the ever-changing digital landscape.
        </p>
        <Link
        to="/contact"
        className="bg-accent py-2 px-6 sm:py-3 sm:px-7 mt-5 rounded-2xl  hover:bg-slate-700 transition-colors duration-300 text-sm sm:text-base font-medium"
      >
        Get In Touch
      </Link>
    
      </div>



      {/* CArd */}


        <div className="max-w-7xl mx-auto p-8" data-aos="fade-up" >
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-center  mb-8" data-aos="fade-up">
      Explore in Detail
      </h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
          <h1 className="text-xl font-semibold text-gray-900 mb-4">
          Enterprise Web Development & Design
          </h1>
          <p className="text-gray-700">
        
          We work closely with enterprise level customers to create outstanding high performing and secure custom websites with a focus on unique, professional web design. Whatever your project requires, GoExalt System has the tools and experience to ensure that your goals are not only met, but exceeded.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
          <h1 className="text-xl font-semibold text-gray-900 mb-4">
          Drupal Design & Development
          </h1>
          <p className="text-gray-700">
          GoExalt System has unmatched experience in creating and supporting professional, innovative and highly customized Drupal-based solutions. Since our founding in 2016, Drupal remains a cornerstone of our development, design and consulting efforts today.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
          <h1 className="text-xl font-semibold text-gray-900 mb-4">
          HTML5 Web Design & Development
          </h1>
          <p className="text-gray-700">
          GoExalt System HTML5 Web Development Services can deliver and deploy a complete HTML5 solution into your business environment that is optimized for high performance with quick loading times, scalable and responsive and able to handle any increases in visitor traffic.
          </p>
        </div>
      </div>
    </div>
    </div>



    {/* Mobile */}

    <div className="flex flex-col items-start justify-start min-h-screen overflow-hidden px-4 sm:px-8 lg:px-16 py-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">
        Mobile App Development
        </h1>
        <p className="text-lg sm:text-xl mb-6">
        We develop beautiful mobile applications, with excellent UX, across multiple platforms        </p>
        <Link
        to="/contact"
        className="bg-accent py-2 px-6 sm:py-3 sm:px-7 mt-5 rounded-2xl hover:bg-slate-700 transition-colors duration-300 text-sm sm:text-base font-medium"
      >
        Get In Touch
      </Link>
    
      </div>



      {/* Card */}


        <div className="max-w-7xl mx-auto p-8" data-aos="fade-up" >
      {/* Main Heading */}
      <h2 className="text-4xl font-bold text-center  mb-8" data-aos="fade-up">
      Building apps on mobile platforms where your customers are
      </h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
        <TiVendorAndroid size={35} className="text-green-500"/>
        <h1 className="text-xl font-semibold text-gray-900 mb-4">
          ANDROID
          </h1>
          <p className="text-gray-700">
          Create mobile apps for all the Android-based devices out there – smartphones, tablets, and TVs.
          
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white mt-12 shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
        <TiVendorApple size={35} className="text-fuchsia-300"/>

          <h1 className="text-xl font-semibold text-gray-900 mb-4">
          IOS
          </h1>
          <p className="text-gray-700">
          Architect Cutting-Edge Mobile Apps for the iOS Ecosystem: Empower iPhones, iPads, Apple TVs, and App Clips with Seamless Performance and Design Excellence.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg mt-24 rounded-lg p-6 hover:shadow-2xl transition duration-300">
        <FaCodeFork size={35} className="text-slate-400"/>

          <h1 className="text-xl font-semibold text-gray-900 mb-4">
          CROSS-PLATORM
          </h1>
          <p className="text-gray-700">
          Build mobile apps that can be deployed on both iOS and Android and even as desktop and web apps.
          </p>
        </div>
      </div>
    </div>
    </div>



  {/* Digital */}

  <div className="flex flex-col items-start justify-start min-h-screen overflow-hidden px-4 sm:px-8 lg:px-16 py-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">
        Digital Marketing
        </h1>
        <p className="text-lg sm:text-xl  mb-6">
        Build A Formidable Brand Identity With Our Digital Marketing Services
               </p>
        <Link
        to="/contact"
        className="bg-accent py-2 px-6 sm:py-3 sm:px-7 mt-5 rounded-2xl hover:bg-slate-700 transition-colors duration-300 text-sm sm:text-base font-medium"
      >
        Get In Touch
      </Link>
    
      </div>

        <div className="max-w-7xl mx-auto p-8" data-aos="fade-up" >
      {/* Main Heading */}
      <h2 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">
      Skyrocket your visibility, foster lasting customer relationships, and soar ahead of your competitors.
      </h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
        <RiBuilding3Fill size={35} className="text-green-500"/>
        <h1 className="text-xl font-semibold text-gray-900 mb-4">
        Brand Building
          </h1>
          <p className="text-gray-700">
          Our full service digital marketing agency will make sure that your brand registers itself on the radar of your target audience. With our brand building service, you’ll soon find your products and offerings becoming the talk of the town.
          
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
        <MdPaid size={35} className="text-fuchsia-300"/>

          <h1 className="text-xl font-semibold text-gray-900 mb-4">
          Paid Search
          </h1>
          <p className="text-gray-700">
          Rank higher on search engine results pages with our paid search service. We’ll combine inventive PPC strategies with high quality ads to maximize your campaign’s ROI.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg  rounded-lg p-6 hover:shadow-2xl transition duration-300">
        <PiStrategyBold size={35} className="text-slate-400"/>

          <h1 className="text-xl font-semibold text-gray-900 mb-4">
          Marketing Strategy          </h1>
          <p className="text-gray-700">
          Want to know what’s the best way to reach your customers? Our marketing strategy service will help! From effectively giving you the lay of the land to helping you increase sales opportunities, we’ll look to it that you always stay ahead of the curve.
          </p>
        </div>

        <div className="bg-white shadow-lg  rounded-lg p-6 hover:shadow-2xl transition duration-300">
        <SiContentstack size={35} className="text-fuchsia-500"/>

          <h1 className="text-xl font-semibold text-gray-900 mb-4">
          Content Marketing          </h1>
          <p className="text-gray-700">
          Cut through the noise and carve a unique brand identity for yourself. Our messaging and positioning service will help you cast an indelible impression on your audience’s minds.
          </p>
        </div>



        <div className="bg-white shadow-lg  rounded-lg p-6 hover:shadow-2xl transition duration-300">
        <TbBusinessplan size={35} className="text-emerald-600"/>

          <h1 className="text-xl font-semibold text-gray-900 mb-4">
          B2B Marketing          </h1>
          <p className="text-gray-700">
          Looking to effectively market your offerings to other businesses and organizations? Our B2B marketing experts have got you covered. We’ll help you chalk out airtight strategies, identify the right channels, and run high-performing campaigns.
          </p>
        </div>



        <div className="bg-white shadow-lg  rounded-lg p-6 hover:shadow-2xl transition duration-300">
        <TiMessages size={35} className="text-yellow-400"/>

          <h1 className="text-xl font-semibold text-gray-900 mb-4">
          Messaging and Positioning          </h1>
          <p className="text-gray-700">
          Cut through the noise and carve a unique brand identity for yourself. Our messaging and positioning service will help you cast an indelible impression on your audience’s minds.
          </p>
        </div>


        <div className="bg-white shadow-lg  rounded-lg p-6 hover:shadow-2xl transition duration-300">
        <FaVideo size={35} className="text-teal-500"/>

          <h1 className="text-xl font-semibold text-gray-900 mb-4">
          Video Production          </h1>
          <p className="text-gray-700">
          Explain the USPs of your products in an immersive and comprehensive manner with the help of our video production services. Capture your audience’s imagination with ease and successfully drive home your value proposition without breaking a sweat.
          </p>
        </div>


        <div className="bg-white shadow-lg  rounded-lg p-6 hover:shadow-2xl transition duration-300">
        <TbAffiliateFilled size={35} className="text-blue-500"/>

          <h1 className="text-xl font-semibold text-gray-900 mb-4">
          Affiliate Marketing
          </h1>
          <p className="text-gray-700">
          Set up an additional revenue source for your business with our affiliate marketing service. Uncover new networking opportunities and drive more traffic to your page.


          </p>
        </div>


        <div className="bg-white shadow-lg  rounded-lg p-6 hover:shadow-2xl transition duration-300">
        <TiSocialAtCircular size={35} className="text-amber-700"/>

          <h1 className="text-xl font-semibold text-gray-900 mb-4">
          Paid Social          </h1>
          <p className="text-gray-700">
          Tap into the immense potential of social media with our paid social service. We help boost the visibility and reach of your brand by crafting ads that are perfectly in sync with your audience’s user profiles.          </p>
        </div>

      </div>
    </div>
    </div>



    <div className="flex flex-col items-start justify-start min-h-screen overflow-hidden  px-4 sm:px-8 lg:px-16 py-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">
        Bulk Email and SMS Service
        </h1>
        <p className="text-lg sm:text-xl  mb-6">
        Create personalized emails, target precisely with behavior-based automations and segments, and optimize with real-time reporting.
        </p>
        <Link
        to="/contact"
        className="bg-accent py-2 px-6 sm:py-3 sm:px-7 mt-5 rounded-2xl  hover:bg-slate-700 transition-colors duration-300 text-sm sm:text-base font-medium"
      >
        Get In Touch
      </Link>
    
      </div>



      {/* CArd */}


        <div className="max-w-7xl mx-auto p-8" data-aos="fade-up" >
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">
      Explore
      </h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
          <h1 className="text-xl font-semibold text-gray-900 mb-4">
          Reach more customers
          </h1>
          <p className="text-gray-700">
        
          With Our automations help you engage your audience at the right time, with the right message, and without any manual intervention.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
          <h1 className="text-xl font-semibold text-gray-900 mb-4">
          Generate ROI 
          </h1>
          <p className="text-gray-700">
          Our powerful segmentation logic and filters help you use relevant and timely communication to target the customers most likely to purchase.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
          <h1 className="text-xl font-semibold text-gray-900 mb-4">
          Maintain brand consistency and recognition          </h1>
          <p className="text-gray-700">
          Our drag-and-drop interface makes it simple for you to build a brand library of email templates for every occasion. You can also import your own templates from other programs. 
          </p>
        </div>
      </div>
    </div>
    </div>





    <div className="flex flex-col items-start justify-start min-h-screen overflow-hidden  px-4 sm:px-8 lg:px-16 py-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">
          Salesforce Marketing
        </h1>
        <p className="text-lg sm:text-xl  mb-6">
        Salesforce is a cloud-based customer relationship management (CRM) software that helps businesses manage their sales, marketing, customer service, and other important aspects of their operations. Salesforce is one of the most popular CRM platforms used by businesses of all sizes and industries. 
        </p>
        <Link
        to="/contact"
        className="bg-accent py-2 px-6 sm:py-3 sm:px-7 mt-5 rounded-2xl hover:bg-slate-700 transition-colors duration-300 text-sm sm:text-base font-medium"
      >
        Get In Touch
      </Link>
    
      </div>



      {/* CArd */}


        <div className="max-w-7xl mx-auto p-8" data-aos="fade-up" >
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-center  mb-8" data-aos="fade-up">
      Make the most out of your Marketing Cloud investment
      </h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg  gap-5 rounded-lg p-6 hover:shadow-2xl transition duration-300">
          <h1 className="text-xl font-semibold text-gray-900 mb-4">
            <MdEmail size={35} className="text-blue-600"/>
          Email Studio
          </h1>
          <p className="text-gray-700">
        
          Email Studio serves as a powerful email marketing tool within Salesforce Marketing Cloud, enabling marketers to design, deliver, and monitor customized email campaigns. With its intuitive drag-and-drop interface, marketers can design responsive emails, automate email sends, and monitor campaign performance with detailed analytics. 
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
          <h1 className="text-xl font-semibold text-gray-900 mb-4">
          <FaMobileAlt size={35} className="text-purple-600"/>

          Mobile Studio
          </h1>
          <p className="text-gray-700">
          Mobile Studio allows marketers to interact with customers via SMS, MMS, push notifications, and messages within applications. This tool helps businesses reach their audience on their preferred channel and deliver targeted, timely, and relevant messages that drive engagement and conversions.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
        <MdOutlineSocialDistance size={35} className="text-fuchsia-500"/>

          <h1 className="text-xl font-semibold text-gray-900 mb-4">
          Social Studio          </h1>
          <p className="text-gray-700">
          Social Studio allows organizations to manage, schedule, and share content across diverse social media platforms. Additionally, it allows them to observe discussions, evaluate sentiment, and analyze performance data to make informed decisions and refine their social media approach. 
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
          <h1 className="text-xl font-semibold text-gray-900 mb-4">
          <FcAdvertising size={35} className="text-yellow-600"/>

          Advertising Studio
          </h1>
          <p className="text-gray-700">
        
          EAdvertising Studio empowers marketers to oversee and enhance their digital advertising efforts across various platforms such as Facebook, Google, and Instagram. This tool helps businesses target the right audience, automate ad creation, and monitor ad performance to maximize return on investment.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
        <GiWebSpit size={35} className="text-yellow-600"/>

          <h1 className="text-xl font-semibold text-gray-900 mb-4">
          Web Studio
          </h1>
          <p className="text-gray-700">
          Web Studio enables businesses to create personalized and dynamic web content that adapts to individual customer preferences. With this tool, marketers can design and publish responsive landing pages, forms, and microcytes that enhance user experience and boost conversions.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
        <GiJourney size={35} className="text-green-500"/>

          <h1 className="text-xl font-semibold text-gray-900 mb-4">
          Journey Builder          </h1>
          <p className="text-gray-700">
          Journey Builder is a powerful tool that helps marketers create personalized customer journeys across multiple channels, including email, mobile, social, and advertising. By designing and automating these journeys, companies can ensure a smooth and uniform customer experience throughout the marketing cycle.
          </p>
        </div>
      </div>
    </div>
    </div>


    




    <Address/>
    </div>
  
    </>
  )
}

export default Services