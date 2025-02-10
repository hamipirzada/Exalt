import { Link } from "react-router-dom";
import hero from "../assets/hero.webp";

const Hero = () => {
  return (
    <section className="flex flex-col lg:h-[517px]  lg:flex-row justify-center items-center w-full ">
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row justify-between items-center h-full space-y-4 sm:space-y-6 lg:space-y-0">
        {/* Text Section */}
        <div className="w-full lg:w-1/2  flex flex-col justify-center items-center lg:items-start text-center lg:text-left drop-shadow-xl-inner rounded-2xl p-4 sm:flex sm:items-center sm:justify-center">
          <h3 className="font-semibold text-sm sm:text-base lg:text-xl">
            We are a leading and trusted software solution provider.
          </h3>
          <h1 className="text-2xl sm:text-3xl font-semibold my-4 lg:text-5xl">
            Grow Online with the Trusted Software Solution Provider
          </h1>
          <p className="text-sm sm:text-base lg:text-lg">
            Our team of expert professionals is dedicated to boosting your online presence and targeted traffic.
          </p>
          <Link
            to="/contact"
            className="bg-accent py-2 px-6 sm:py-3 sm:px-7 mt-5 rounded-2xl hover:bg-slate-700 transition-colors duration-300 text-sm sm:text-base font-medium"
          >
            <h1>Get In Touch</h1>
          </Link>

          
        </div>

        <div className="hidden lg:block animate-slideInFromRightWithAngle relative w-full lg:w-[400px] h-[500px] rounded-2xl overflow-hidden shadow-red-400">

          <div
            className="absolute inset-0 bg-cover bg-center h-full"
            style={{
              backgroundImage:
                "url('https://cdn.prod.website-files.com/5837424ae11409586f837994/678566be2ee6c9d4759c837e_Group%201171274550.jpg')",
            }}
          ></div>

          {/* Card Content */}
          <div className="relative flex justify-center items-center h-full">
            <img
              className="animate-smooth-up-down scale-75 sm:scale-90 lg:scale-110 h-auto"
              src={hero}
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
