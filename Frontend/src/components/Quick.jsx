import { FaPhone, FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from "react-icons/fa6";
import { BsArrowDownCircle, BsArrowUpCircle, BsInstagram } from "react-icons/bs";

import { useEffect, useState } from "react";

const Quick = () => {


//     const [showButtons, setShowButtons] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowButtons(window.scrollY > 100);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const scrollToBottom = () => {
//     window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
//   };

    return (
        <div className="fixed right-4  sm:right-2 flex flex-col sm:flex-col items-end sm:items-center space-y-4 sm:space-y-6 z-40">



{/* <div className="fixed right-4 sm:bottom-6 bottom-7  sm:right-2 flex flex-col sm:flex-col items-end sm:items-center space-y-4 sm:space-y-6 z-40">
      {showButtons && (
        <>
          <button
            onClick={scrollToTop}
            className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition-all"
          >
            <BsArrowUpCircle size={20} />
          </button>
          <button
            onClick={scrollToBottom}
            className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition-all"
          >
            <BsArrowDownCircle size={20} />
          </button>
        </>
      )}
    </div> */}
            {/* YouTube Icon */}
            <div
                className="p-2 sm:p-2 bg-white text-red-500 rounded-full cursor-pointer hover:bg-gray-200 hover:text-black transition-all duration-300 animate-pulse"
                onClick={() => window.open('https://www.youtube.com/@exaltsystem3880', '_blank')}
            >
                <FaYoutube className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            {/* Instagram Icon */}
            <div
                className="p-2 sm:p-2 bg-white text-pink-500 rounded-full cursor-pointer hover:bg-gray-200 hover:text-black transition-all duration-300 animate-pulse"
                onClick={() => window.open('https://instagram.com', '_blank')}
            >
                <BsInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            {/* LinkedIn Icon */}
            <div
                className="p-2 sm:p-2 bg-white text-blue-500 rounded-full cursor-pointer hover:bg-gray-200 hover:text-black transition-all duration-300 animate-pulse"
                onClick={() => window.open('https://www.linkedin.com/company/exaltsystem/posts/?feedView=all', '_blank')}
            >
                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>


             {/* Phone Icon */}
             <div
                className="p-2 sm:p-2 bg-white text-blue-600 rounded-full cursor-pointer hover:bg-gray-200 hover:text-black transition-all duration-300 sm:mt-6 animate-pulse"
                onClick={() => window.open('tel:+91-7006334491', '_blank')}
            >
                <FaPhone className="w-5 h-5 sm:w-6 sm:h-6 " />
            </div>
        </div>
    );
};

export default Quick;
