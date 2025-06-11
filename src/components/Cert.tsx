"use client";
import React from "react";
import { FaAws, FaReact } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";
import { FaLink, FaChevronUp, FaChevronDown } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the type for a single certification object
type CertType = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link: string;
  Icon: React.ElementType;
};

const certs: CertType[] = [
  {
    id: 1,
    title: "Certification 1: AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "June 2024",
    link: "https://www.credly.com/badges/2cdb0591-9186-44d8-b8e6-3166549f943e",
    Icon: FaAws,
  },
  {
    id: 2,
    title: "Certification 2: AWS Cloud Practitioner Course",
    issuer: "Udemy",
    date: "June 2024",
    link: "https://www.udemy.com/certificate/UC-74dcb9e6-470d-4dc5-969f-3528c4611188/",
    Icon: SiUdemy,
  },
  {
    id: 3,
    title: "Certification 3: The Ultimate React Course",
    issuer: "Udemy",
    date: "June 2025",
    link: "https://www.udemy.com/certificate/UC-3330f705-6e2c-4382-b149-50f39e3e550b/",
    Icon: FaReact,
  },
];

// Custom Up Arrow Component
function UpArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 z-10 cursor-pointer text-white hover:text-gray-300 transition-colors transform -translate-y-4"
      onClick={onClick}
    >
      <FaChevronUp className="text-sm" />
    </div>
  );
}

// Custom Down Arrow Component (no circle, close to up arrow)
function DownArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 z-10 cursor-pointer text-white hover:text-gray-300 transition-colors transform translate-y-1"
      onClick={onClick}
    >
      <FaChevronDown className="text-sm" />
    </div>
  );
}

export function Cert() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: true,
    nextArrow: <DownArrow />,
    prevArrow: <UpArrow />,
    autoplay: true,
    speed: 400,
  };

  return (
    <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto py-4">
      <Slider {...settings}>
        {certs.map(({ id, title, issuer, date, link, Icon }) => (
          <div key={id} className="px-2">
            <div className="bg-black bg-opacity-80 rounded-xl shadow-lg p-4 sm:p-6 relative h-20 sm:h-24 md:h-28">
              <div className="flex items-center gap-4 sm:gap-6 md:gap-8 h-full">
                {/* Icon Section */}
                <div className="flex-shrink-0">
                  <Icon
                    size={24}
                    className="text-white sm:w-6 sm:h-6 md:w-8 md:h-8"
                  />
                </div>

                {/* Content Section */}
                <div className="flex-grow min-w-0 mr-12 sm:mr-16">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1">
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white truncate">
                      {title}
                    </h3>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 transition-colors flex-shrink-0"
                    >
                      <FaLink className="text-xs sm:text-sm" />
                    </a>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300 truncate">
                    {issuer}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">{date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
