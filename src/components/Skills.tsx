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
  //Configure carousel setting
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, //tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, //mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="flex items-center justify-center px-20 py-12 ">
      <div className=" relative rounded-lg p-12 max-w-4x1 w-full">
        {/*background vid */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10 rounded-2xl"
          /*inset 0 align video at all 4 edges of relative container, w-full h-full take up 100% of available space within positioned boundary*/
          /*without object cover -> video take 100% container space but display at natural dimension within space -> not fill whole screen */
        >
          <source src="/BG-Code.mp4" type="video/mp4" />
          Your browser does not support Video tag
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 rounded-2xl -z-5"></div>

        {/*Content*/}
        <div className="relative z-20">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white">Skills</h2>
          </div>
        </div>

        {/*Slider SKill Cards*/}
        <Slider {...settings}>
          {skillsData.map((skill) => {
            const Card = skill.icon;
            return (
              <div key={skill.id} className="px-3">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-gray-700/50 transition-all duration-300">
                  <Card size={80} className="text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white">
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
