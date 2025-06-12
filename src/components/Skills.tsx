"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaCode,
  FaServer,
  FaMobile,
  FaUsers,
  FaCloud,
  FaComments,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const skillsData = [
  { id: 1, title: "Software Development", icon: FaCode },
  { id: 2, title: "Fullstack Development", icon: FaServer },
  { id: 3, title: "Mobile Development", icon: FaMobile },
  { id: 4, title: "Cloud Development", icon: FaCloud },
  { id: 5, title: "Teamwork", icon: FaUsers },
  { id: 6, title: "Communication", icon: FaComments },
];

export function Skills() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-5">
      <div className="relative rounded-lg p-6 sm:p-8 md:p-12 max-w-8xl w-full bg-black/40 ">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Skills
          </h2>
          <h3 className="text-white">My Core Skillset</h3>
        </div>

        <Slider {...settings}>
          {skillsData.map((skill) => {
            const Card = skill.icon;
            return (
              <div key={skill.id} className="px-2 sm:px-3">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center hover:bg-gray-700/50 transition-all duration-300 h-full overflow-hidden">
                  <Card
                    size={50}
                    className="text-white mx-auto mb-4 sm:w-16 sm:h-16 md:w-20 md:h-20"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-white break-words">
                    {skill.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
