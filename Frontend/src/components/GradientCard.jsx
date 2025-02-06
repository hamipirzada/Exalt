import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";

const GradientCard = () => {
     useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  const cards = [
    {
      id: 1,
      title: "Odoo",
      subtitle: "Implementation",
      description:
        "Odoo is the right tool for your business however, without the proper usage, it would create more harm to your business. Therefore, you should not compromise in seeking the right expertise for Odoo implementation.",
      image:
        "https://images.pexels.com/photos/23638660/pexels-photo-23638660/free-photo-of-man-sitting-and-working-at-workshop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      gradient: "from-gray-900 via-blue-900 to-green-900",
    },
    {
      id: 2,
      title: "Odoo",
      subtitle: "Integration",
      description:
        "Odoo integration the solution moves ahead with your Odoo platform as well as the unique tools which support your business operations. However, Odoo ERP Integration should be done with the right expertise ExaltSystem is your trustful expert Odoo Official partner with 16+ years of service. ",
      image:
        "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      gradient: "from-purple-600 via-slate-500 to-purple-900",
    },
    {
      id: 3,

      title: "Odoo",
      subtitle: "Customization",
      description:
        "An enterprise application must go by client's way. Customization provides that personalized experience in an application focusing on the client’s requirements and ideas. Odoo provides a fully functional package to meet up an enterprise requirement, but there will be always an extra required by the clients. ",
      image:
      
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      gradient: "from-blue-900 via-blue-700 to-pink-400",
    },

    {
      id: 4,
      title: "Salesforce",
      subtitle: "Consulting ",
      description:
        "Salesforce consulting services are aimed to support your sales, marketing and customer service needs. We apply our ample CRM consulting experience to help the enterprises in professional services, retail, IT, manufacturing, finance and banking, healthcare, and other industries benefit from Salesforce use.",
      image:
        "https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      gradient: "from-indigo-900 via-indigo-700 to-indigo-500" ,
    },

    {
      id: 5,
      title: "Salesforce",
      subtitle: "Development",
      description:
        "From startups to enterprises, we help organizations make more out of their Salesforce CRM. We are end-to-end Salesforce experts. And yes, we will forever redefine how you use Salesforce",
      image:
        "https://images.pexels.com/photos/5475784/pexels-photo-5475784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      gradient: "from-black via-teal-700 to-teal-900",
    },
    
    {
      id: 6,
      title: "Salesforce",
      subtitle: "Training",
      description:
        "Salesforce is a cloud-based customer relationship management (CRM) software that helps businesses manage their sales, marketing, customer service, and other important aspects of their operations. Salesforce is one of the most popular CRM platforms used by businesses of all sizes and industries. ",
      image:
        "https://images.pexels.com/photos/8134067/pexels-photo-8134067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      gradient: "from-black via-green-700 to-green-800",
    },
   
    
  ];

  return (
    <div className="flex flex-col items-center gap-8 p-8  min-h-screen "  >
      
      <div className=' h-[250px] flex flex-col text-center justify-center '>
        <div>
          <h1 className='lg:text-6xl font-extrabold  sm:text-3xl'>
            <span className='text-accent'>-</span> Odoo <span className='text-accent'>-</span>
          </h1> 
          <h1 className='lg:text-6xl font-extrabold  sm:text-3xl'>
            <span className='text-accent'>-</span> Salesforce <span className='text-accent'>-</span>
          </h1>
          </div>
          <div>
          <h2 className='lg:text-3xl font-extrabold mt-2  sm:text-xl'>
          is Your Right Choice
          </h2>
          <h2 className='lg:text-3xl font-extrabold mt-2 t sm:text-xl'>
          But You Need Expert&apos;s Help
       
          </h2>
          <h1 className='lg:text-6xl font-extrabold  sm:text-3xl'>Don&apos;t Compromise.</h1>
        </div>
        </div>
        
      {cards.map((card) => (
        <div
          key={card.id}
          className={`flex flex-col md:flex-row items-center justify-between  bg-gradient-to-r ${card.gradient} text-white p-8 rounded-3xl shadow-lg h-auto w-full`} data-aos="fade-left"
        >
          {/* Image Section */}
          <div className="md:w-1/2 w-full flex justify-center">
            <img
              src={card.image}
              alt={card.title}
              className="rounded-3xl shadow-2xl max-w-full h-auto" data-aos="fade-left"
            />
          </div>

          {/* Text Content Section */}
          <div className="md:w-1/2 w-full mt-6 md:mt-0 md:pl-6" data-aos="fade-left">
            <h1 className="text-4xl font-bold mb-2 text-lime-400" data-aos="fade-left">{card.title}</h1>
            <h1 className="text-3xl font-semibold mb-3" data-aos="fade-left">{card.subtitle}</h1>
            <p className="text-gray-300 mb-4" data-aos="fade-left">{card.description}</p>
            <Link
              to="/contact"
              className="bg-accent py-2 px-6 sm:py-3 sm:px-7 mt-5 rounded-2xl text-white hover:bg-slate-700 transition-colors duration-300 text-sm sm:text-base" 
            >
              Get In Touch
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GradientCard;
