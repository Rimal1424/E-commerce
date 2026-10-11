"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];
const Slider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000 "
        style={{ transform: `translatex(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row `}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="flex h-1/2 w-full flex-col items-center justify-center gap-4 px-6 text-center xl:h-full xl:w-1/2 xl:gap-6 xl:px-16">
              <h2 className="text-base font-medium text-gray-700 sm:text-xl lg:text-2xl">
                {slide.description}
              </h2>
              <h1 className="max-w-xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl 2xl:text-7xl">
                {slide.title}
              </h1>
              <Link
                href={slide.url}
                className="rounded-md bg-black px-5 py-3 font-medium text-white transition-colors hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                SHOP NOW
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-full xl:w-1/2 relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""} `}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="h-1.5 w-1.5 bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
