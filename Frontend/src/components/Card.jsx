import { BsBuildings } from "react-icons/bs";
import { FaHospitalUser } from "react-icons/fa";
import { GiGrowth } from "react-icons/gi";
import { useEffect, useState, useRef } from "react";


const Card = () => {
  const cards = [
    {
      id: 1,
      target: 200,
      description: "PROJECTS",
      icon: <BsBuildings className="text-6xl text-gray-400 mb-4" />,
      animationDelay: "0s",
    },
    {
      id: 2,
      target: 20,
      description: "EMPLOYEES",
      icon: <FaHospitalUser className="text-6xl text-gray-400 mb-4" />,
      animationDelay: "1s",
    },
    {
      id: 3,
      target: 50,
      description: "CLIENTS",
      icon: <GiGrowth className="text-6xl text-gray-400 mb-4" />,
      animationDelay: "2s",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {cards.map((card) => (
        <CounterCard
          key={card.id}
          target={card.target}
          description={card.description}
          icon={card.icon}
          animationDelay={card.animationDelay}
        />
      ))}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const CounterCard = ({ target, description, icon, animationDelay }) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; 
      const stepTime = Math.abs(Math.floor(duration / target));

      const timer = setInterval(() => {
        start += 1;
        if (start > target) {
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return (
    <>

    <div
      ref={cardRef}
      className="relative w-72 h-64 rounded-lg p-[1px] bg-gradient-radial from-white via-gray-800 to-black"
      style={{ animationDelay }}
    >
      {/* Animated Dot */}
      <div
        className="absolute w-[10px] aspect-square bg-accent rounded-full shadow-[0_0_10px_#ffffff] z-20 animate-moveDot"
        style={{ animationDelay }}
      ></div>

      {/* Card */}
      <div className="relative flex flex-col items-center justify-center w-full h-full bg-gradient-radial from-gray-600 to-gray-900 rounded-md border border-gray-800 text-white">
        {/* Ray */}
        <div className="absolute w-[220px] h-12 bg-gray-300 opacity-40 shadow-[0_0_50px_#ffffff] blur-lg rounded-full transform origin-left rotate-40"></div>

        {/* Icon */}
        {icon}

        {/* Counter */}
        <div className="text-4xl font-bold bg-clip-text text-white ">
          {count}+
        </div>
        <div className="mt-2 font-extrabold text-2xl">{description}</div>
      </div>
    </div>
    </>
  );
};

export default Card;
