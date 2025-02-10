import { IoLogoWhatsapp } from "react-icons/io";

const WhatsApp = () => {
  return (
    <>
    <div
            className="ml-2 sm:p-3 z-50  bg-white text-green-500 rounded-full cursor-pointer hover:bg-gray-200 hover:text-black transition-all duration-300 fixed left-0 animate-moveUpDown"
            onClick={() => window.open('https://wa.me/917006334491?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20services', '_blank')}
          >
            <IoLogoWhatsapp className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
    </>
  )
}

export default WhatsApp