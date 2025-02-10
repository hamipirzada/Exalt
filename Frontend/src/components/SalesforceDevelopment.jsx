import { Navbar } from "./Navbar"
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";
import { FaArrowsTurnToDots } from "react-icons/fa6";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { Address } from "./Address";
import salesforce from '../assets/Salesforce Logo.jpeg'
import Quick from "./Quick";
import WhatsApp from "./WhatsApp";

const SalesforceDevelopment = () => {
  return (
    <div>
          <Navbar/>
          <Quick/>
          <WhatsApp/>
          
            <div className="relative h-[450px] bg-cover overflow-hidden flex items-center justify-center">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={salesforce}
            alt=""
          />
          {/* <h1 className="relative text-5xl font-extrabold  z-10 mt-12 text-black">
            SALESFORCE DEVELOPMENT
          </h1> */}
        </div>


        <div>
        <h1 className="text-center text-4xl font-bold mt-10">Salesforce Development</h1>
        <p className="text-center text-xl mt-5 p-24">From startups to enterprises, we help organizations make more out of their Salesforce CRM. We are end-to-end Salesforce experts. And yes, we will forever redefine how you use Salesforce.</p>
    </div>






      <div>
            <div className="flex flex-wrap justify-center gap-8" data-aos="fade-left">
                           
                <div className="mt-10">
                    <div className="bg-gradient-to-r   p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out w-80" data-aos="fade-left">
                        <MdOutlineSettingsInputComponent className="text-7xl"/>
                        <h3 className="text-2xl font-semibold mb-4 text-accent">Customization Services</h3>
                        <p className="text-lg">
                            Elevate your business to new heights by tailoring it to perfection with our unparalleled Salesforce customization services, designed to meet your unique needs and drive exceptional results!
                        </p>
                 </div>
            
                     
                 <div className="bg-gradient-to-r  mt-6 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out w-80" data-aos="fade-left">
                    <FaLaptopCode className="text-7xl"/>
                        <h3 className="text-2xl font-semibold mb-4 text-accent">Development</h3>
                            <p className="text-lg">
                            Expansion of Salesforce CRM with help of various available force.com technologies including Apex, Aura Lightning, Lightning Web, Salesforce Lightning Design System etc
                            </p>
                    </div>
             </div>
            
                           
            <div className="mt-10">
                    <div className="bg-gradient-to-r  p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out w-80" data-aos="fade-left">
                        <FaArrowsTurnToDots className="text-7xl"/>
                        <h3 className="text-2xl font-semibold mb-4 text-accent">Migration</h3>
                         <p className="text-lg">
                            Expansion of Salesforce CRM with help of various available force.com technologies including Apex, Aura Lightning, Lightning Web Components, Salesforce Lightning Design System etc
                         </p>
                        </div>
            
                             
       <div className="bg-gradient-to-r mt-6 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out w-80" data-aos="fade-left">
         <MdOutlineIntegrationInstructions className="text-7xl" data-aos="fade-left"/>
         <h3 className="text-2xl font-semibold mb-4 text-accent">Integration</h3>
          <p className="text-lg" data-aos="fade-left">
            Supercharge your running applications by integrating them with Salesforce, unlocking relentless management efficiency and boundless innovation opportunities!
            </p>
          </div>
          </div>
          </div>
    
    
                <div className="w-full">
         

                <div className="lg:h-[150px] mt-7 flex text-center justify-center">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
    <samp className="text-accent">-</samp> Our Expertise in Salesforce <samp className="text-accent">-</samp>
  </h1>
</div>

      
    
          {/* Main Container */}
          <div className="w-[90%] mx-auto bg-gradient-to-r from-emerald-200 via-violet-400  rounded-3xl p-4 flex flex-col md:flex-row items-center shadow-lg" data-aos="fade-left">
            {/* Text Div */}
            <div className="flex-1 p-4  rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Salesforce Development</h2>
              <p className="text-gray-600">
              Our expert developers can build comprehensive <span  className="font-semibold"> Custom Salesforce Development</span> Custom Salesforce Development solutions for your business utilizing any required Salesforce technologies such as Salesforce Sales Cloud, Wave Analytics, Service Cloud, Marketing Cloud and more </p>
              <p className="text-gray-600">
              We can assist your organization in designing and implementing robust Salesforce-based solutions and reap long-term benefits, whether you’re a startup or a large Enterprise. </p>
              <p className="text-gray-600 text-center">
                <span  className="font-semibold"><samp className='text-accent text-3xl'>-</samp> Salesforce Implementation Consulting<samp className='text-accent text-3xl'>-</samp></span> <br />
                Our Dedicated Salesforce Developers will check your business needs and design a solution that would perfectly suit your requirements and assist you in choosing the ideal customizations for your business. 
                </p>
    
                <p className="text-gray-600 text-center">
                <span className="font-semibold"> <samp className='text-accent text-3xl'>-</samp>Force.com Development<samp className='text-accent text-3xl'>-</samp></span> <br />
                Force.com is a major part of the Salesforce app cloud. MetaDesign Solutions can assist organizations in developing and implementing robust and scalable Force.com solutions.
                </p>
    
                <p className="text-gray-600 text-center">
                <span className="font-semibold"> <samp className='text-accent text-3xl'>-</samp>Force.com Integration and Migration<samp className='text-accent text-3xl'>-</samp></span> <br />
                We can assist companies with integrating <span className="font-semibold"> Custom Salesforce Development </span> solutions to connect Force.com apps with various sources and services. We can also assist organizations to migrate their legacy solutions onto Force.com based automation solutions.
                </p>
    
    
            </div>
    
            {/* Image Div */}
            <div className="flex-1 p-4">
              <img
                src="https://images.pexels.com/photos/935977/pexels-photo-935977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Placeholder"
                className="w-fit h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
    
        <div className="w-full mt-5">
    
          <div className="w-[90%] mx-auto lg:bg-gradient-to-l lg:from-slate-200 lg:via-red-200 lg:to-black sm:bg-gradient-to-l sm:from-slate-200 sm:via-red-200 sm:to-slate-400 rounded-3xl p-4 flex flex-col md:flex-row items-center shadow-lg" 
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
              <h2 className="text-2xl font-bold lg:text-gray-800 mb-2">Salesforce Mobile Development</h2>
              <p className="text-gray-600">
              Our expert developers can build comprehensive <span  className="font-semibold"> Custom Salesforce Development</span> Custom Salesforce Development solutions for your business utilizing any required Salesforce technologies such as Salesforce Sales Cloud, Wave Analytics, Service Cloud, Marketing Cloud and more </p>
              <p className="text-gray-600">
              We can assist your organization in designing and implementing robust Salesforce-based solutions and reap long-term benefits, whether you’re a startup or a large Enterprise. </p>
              <p className="text-gray-600 text-center">
                <span  className="font-semibold"><samp className='text-accent text-3xl'>-</samp>Salesforce Implementation Consulting<samp className='text-accent text-3xl'>-</samp></span> <br />
                Our Dedicated Salesforce Developers will check your business needs and design a solution that would perfectly suit your requirements and assist you in choosing the ideal customizations for your business. 
                </p>
    
                <p className="text-gray-600 text-center">
                <span className="font-semibold"><samp className='text-accent text-3xl'>-</samp>Force.com Development<samp className='text-accent text-3xl'>-</samp></span> <br />
                Force.com is a major part of the Salesforce app cloud. MetaDesign Solutions can assist organizations in developing and implementing robust and scalable Force.com solutions.
                </p>
    
                <p className="text-gray-600 text-center">
                <span className="font-semibold"><samp className='text-accent text-3xl'>-</samp>Force.com Integration and Migration<samp className='text-accent text-3xl'>-</samp></span> <br />
                We can assist companies with integrating <span className="font-semibold"> Custom Salesforce Development </span> solutions to connect Force.com apps with various sources and services. We can also assist organizations to migrate their legacy solutions onto Force.com based automation solutions.
                </p>
    
    
            </div>
    
           
          </div>
        </div>
    
    
    
    
        <div className="w-full mt-5">
        
    
    
          <div className="w-[90%] mx-auto bg-gradient-to-r from-white via-violet-400  rounded-3xl p-4 flex flex-col md:flex-row items-center shadow-lg"data-aos="fade-right">
            {/* Text Div */}
            <div className="flex-1 p-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Salesforce App-Exchange Development</h2>
              <p className="text-gray-600">
              AppExchange is a marketplace featuring apps which can greatly enhance Salesforce existing functionality or even provide additional features. With MDS  <span  className="font-semibold">Salesforce Development Services, </span>  you can create custom apps for AppExchange and enable prospective clients to add unique features in their Salesforce instances.
              </p>
            
              <p className="text-gray-600 text-center">
                <span  className="font-semibold"><samp className='text-accent text-3xl'>-</samp>App Consulting<samp className='text-accent text-3xl'>-</samp></span> <br />
                With our  <span  className="font-semibold"> Salesforce Development Services in India, </span> you can consult with our experts and strategize on creating solutions which would best make use of AppExchange.
                </p>
    
                <p className="text-gray-600 text-center">
                <span className="font-semibold"><samp className='text-accent text-3xl'>-</samp>App Development<samp className='text-accent text-3xl'>-</samp></span> <br />
                As a highly experienced <span className="font-semibold">Salesforce Development </span>  Company in India, you can avail our services to create robust and scalable apps for AppExchange.
                </p>
    
                <p className="text-gray-600 text-center">
                <span className="font-semibold"><samp className='text-accent text-3xl'>-</samp>Lighting Apps<samp className='text-accent text-3xl'>-</samp></span> <br />
                Our <span className="font-semibold"> Dedicated Salesforce Developers </span> can create rich applications that work perfectly with Salesforce Lightning.
                </p>
    
    
            </div>
    
            {/* Image Div */}
            <div className="flex-1 p-4">
              <img
                src="https://images.pexels.com/photos/6686442/pexels-photo-6686442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Placeholder"
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
    
    
    
    
    
        <div className="w-full mt-5">
    
          <div className="w-[90%] mx-auto lg:bg-gradient-to-l lg:from-yellow-500 lg:via-red-200 lg:to-black sm:bg-gradient-to-l sm:from-yellow-500 sm:via-red-200 rounded-3xl p-4 flex flex-col md:flex-row items-center shadow-lg" data-aos="fade-left">
    
          <div className="flex-1 p-4 bg-cover ">
              <img
                src="https://images.pexels.com/photos/3583877/pexels-photo-3583877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
                <span  className="font-semibold"><samp className='text-accent text-3xl'>-</samp>Salesforce Lightning  Consulting<samp className='text-accent text-3xl'>-</samp></span> <br />
                We can assist your organization to develop a strategy for a seamless Salesforce Lightning implementation
                </p>
    
                <p className="text-gray-600 text-center">
                <span className="font-semibold"><samp className='text-accent text-3xl'>-</samp>Salesforce App Development<samp className='text-accent text-3xl'>-</samp></span> <br />
                You can <span className="font-semibold"> Hire Salesforce Developers </span> from MDS to create Lightning ready Salesforce AppExchange apps
                </p>
    
                <p className="text-gray-600 text-center">
                <span className="font-semibold"><samp className='text-accent text-3xl'>-</samp>Component Development for Salesforce Lightning<samp className='text-accent text-3xl'>-</samp></span> <br />
                With our  <span className="font-semibold">Salesforce Development Services </span>  can develop custom components for Salesforce lightning that meet your exact business requirements.
                </p>
    
    
            </div>
    
           
          </div>
        </div>
    

    </div>


    <Address/>
    </div>
  )
}

export default SalesforceDevelopment