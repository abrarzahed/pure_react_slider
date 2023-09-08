"use client";
import { useEffect, useState } from "react";

const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  // prev
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  // next
  //   const next = () => setCurr(curr === slides.length - 1 ? 0 : curr + 1);
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden rounded-md relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="bg-opacity-80 bg-gray-800 p-2 rounded-lg px-4 flex items-center justify-center text-white"
        >
          prev
        </button>
        <button
          onClick={next}
          className="bg-opacity-80 bg-gray-800 p-2 rounded-lg px-4 flex items-center justify-center text-white"
        >
          next
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`transition-all cursor-pointer p-2  rounded-full bg-white ${
                curr === i ? "p-[9.5px]" : "bg-opacity-50"
              }`}
              onClick={() => setCurr(i)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
