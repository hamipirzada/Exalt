

const ProfileCard = () => {
  const profileData = [
    {
      img: "https://images.pexels.com/photos/30236440/pexels-photo-30236440/free-photo-of-businessman-using-smartphone-in-black-and-white-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Showkat Bhat",
      role: "Technical Architect",
      description:
      "GoExalt System is a top technology firm specializing in R&D, SaaS, PaaS, and innovative software solutions for clients worldwide."
       
    },
    {
      img: "https://images.pexels.com/photos/30217125/pexels-photo-30217125/free-photo-of-contemplative-portrait-of-a-man-in-monochrome.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Mudassir Dar",
      role: "Lead Developer",
      description:
        "Tech StartUp is Innovation War and Innovation is Everything and Everything is Software and GoExalt System is In War",
    },
    {
      img: "https://images.pexels.com/photos/30207232/pexels-photo-30207232/free-photo-of-moody-portrait-of-a-man-with-a-beard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Mohammad Iqbal Dar",
      role: "Web Developer",
      description:
        "Depending on Your dedication, the first thing a python developer must do master in python.",
    },
    {
      img: "https://images.pexels.com/photos/30205578/pexels-photo-30205578/free-photo-of-contemplative-black-and-white-portrait-in-turkiye.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Mohammad Azhar",
      role: "Marketing Manager",
      description:
        "We guarantee and assure the full spectrum of services to help organizations work better. Everything from creating standards of excellence to training your people.",
    },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Carousel Container */}
      <div className="flex gap-8 bg-transparent border-white w-[60%] mb-4  rounded-full animate-scroll">
        {[...profileData, ...profileData].map((profile, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[70%] sm:w-full h-[400px] sm:h-full bg-transparent rounded-full border border-white shadow-lg flex items-center sm:items-center sm:justify-center p-8 flex-col"
          >
            {/* Profile Image */}
            <img
              src={profile.img}
              alt={profile.name}
              className="w-64 h-64 sm:w-40 sm:h-40 object-cover rounded-full border-4 border-collapse"
            />
            {/* Profile Details */}
            <div className=" mt-2 text-center flex flex-col">
              <h4 className="text-xl font-semibold text-accent ">{profile.name}</h4>
              <p className="text-md text-primary">{profile.role}</p>
              <p className="text-sm  overflow-clip mt-2">{profile.description}</p>
            </div>
          </div>
        ))}
      </div>

 
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 25s linear infinite;
          will-change: transform;
        }
        @media (max-width: 768px) {
          .flex-shrink-0 {
            width: 100%;
            height: auto;
            padding: 16px; /* Ensure spacing inside the card */
          }
        }
        @media (min-width: 769px) {
          .flex-shrink-0 {
            flex-direction: row;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfileCard;
