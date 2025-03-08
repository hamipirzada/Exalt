import { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import { Address } from "./Address";

import { FaRegAddressCard } from "react-icons/fa6";
import { TiSocialAtCircular } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import Quick from "./Quick";
import WhatsApp from "./WhatsApp";

import emailjs from "emailjs-com";

const Contact = () => {
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries()); 
    console.log(formData);
    console.log(data);
    
    

    try {
      await emailjs.sendForm(
       "service_owxbiju",
          "template_o7drm5a",
          e.target,
          "lQsxj_EfLgIDPcdMg"
      );

      const response = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setMessage("Message sent and saved successfully!");
        setMessageType("success");
        e.target.reset(); // Clear form fields
      } else {
        throw new Error("Failed to save in database");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to send or save message. Please try again.");
      setMessageType("error");
    }
  };


  return (
    <>
      <Navbar />
      <Quick />
      <WhatsApp />
      <div className="min-h-screen flex flex-col md:flex-row p-6">
      <div className="shadow-md rounded-tl-full p-3 w-full md:w-1/2 mb-6 md:mb-0">
        <h1 className="font-extrabold text-3xl mb-4">Contact Us</h1>

        <form
          onSubmit={sendEmail}
          className="backdrop-blur-lg p-4 rounded-lg shadow-xl outline-double space-y-6"
        >
          {/* Success or Error Message */}
          {message && (
            <p
              className={`text-center p-3 rounded-lg ${
                messageType === "success"
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {message}
            </p>
          )}

          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-transparent rounded-xl outline-double focus:ring-2 focus:ring-accent focus:outline-none transition duration-300 ease-in-out z-50"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-transparent outline-double rounded-xl focus:ring-2 focus:ring-accent focus:outline-none transition duration-300 ease-in-out"
              required
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full px-4 py-3 bg-transparent outline-double rounded-xl focus:ring-2 focus:ring-accent focus:outline-none transition duration-300 ease-in-out"
              required
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 outline-double bg-transparent rounded-xl focus:ring-2 focus:ring-accent focus:outline-none transition duration-300 ease-in-out"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-slate-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

        {/* Right side content (Address, Working hours, Social Media, etc.) */}
        <div className="rounded-br-full p-3 w-full md:w-1/2">
          <div className="flex flex-row items-center mb-6">
            <div className="text-3xl flex justify-center items-center outline-double w-[65px] h-[65px] rounded-full font-bold mb-3 sm:w-[50px] sm:h-[50px]">
              <FaRegAddressCard className="text-accent lg:text-2xl sm:text-xl" />
            </div>
            <div className="ml-3">
              <p className="font-bold lg:text-lg sm:text-sm">Office No. 136 & 137, First Floor,</p>
              <p className="font-bold lg:text-lg sm:text-sm">Right Wing Arish Complex,</p>
              <p className="font-bold lg:text-lg sm:text-sm">Model Town-D, 193201</p>
            </div>
          </div>

          <div className="flex flex-row items-center mb-6">
            <div className="text-3xl flex justify-center items-center outline-double w-[65px] h-[65px] rounded-full font-bold mb-3 sm:w-[50px] sm:h-[50px]">
              <FaPhoneAlt className="text-accent lg:text-2xl sm:text-xl" />
            </div>
            <div className="ml-3">
              <p className="font-extrabold lg:text-lg sm:text-sm">Email: sales@exaltsystem.com,</p>
              <p className="font-bold lg:text-lg sm:text-sm">Phone: +1-443-851-3193</p>
              <p className="font-bold lg:text-lg sm:text-sm">(+91)7006334491</p>
            </div>
          </div>

          <div className="flex flex-row items-center mb-6">
            <div className="text-3xl flex justify-center items-center outline-double w-[65px] h-[65px] rounded-full font-bold mb-3 sm:w-[50px] sm:h-[50px]">
              <MdOutlineAccessTime className="text-accent lg:text-2xl sm:text-xl" />
            </div>
            <div className="ml-3 mt-2">
              <p className="font-bold lg:text-lg sm:text-sm">Mon – Fri: 09:00 AM – 06:00 PM</p>
            </div>
          </div>

          <div className="flex flex-row items-center">
            <div className="text-3xl flex justify-center items-center outline-double w-[65px] h-[65px] rounded-full font-bold mb-3 sm:w-[50px] sm:h-[50px]">
              <TiSocialAtCircular className="text-accent lg:text-2xl sm:text-xl" />
            </div>
            <div className="flex flex-row space-x-4 ml-3 mt-2">
              <Link className="text-xl hover:text-orange-700 transition duration-300 sm:text-base" to="">
                <FaFacebook />
              </Link>
              <Link className="text-xl hover:text-orange-700 transition duration-300 sm:text-base" to="">
                <FaTwitter />
              </Link>
              <Link className="text-xl hover:text-orange-700 transition duration-300 sm:text-base" to="">
                <IoMdMail />
              </Link>
              <Link
                className="text-xl hover:text-orange-700 transition duration-300 sm:text-base"
                to="https://www.linkedin.com/company/exaltsystem/"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
          <div className="w-full max-w-4xl p-4 bg-white shadow-lg rounded-lg">
       
       <div className="aspect-w-16 aspect-h-9">
         <iframe
           title="Map to My Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7050.954477782946!2d74.43927901790236!3d34.30651944479686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e10fb052de0635%3A0xafe9d668178d6d84!2sGoExalt%20System%20LLC!5e0!3m2!1sen!2sin!4v1737605539647!5m2!1sen!2sin"
           className="w-full h-full border-0"
           allowFullScreen=""
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
       </div>
     </div>
        </div>
      </div>

      <Address />
    </>
  );
};

export default Contact;
