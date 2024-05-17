import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import ad1 from "../Assets/bg.jpg";
import ad2 from "../Assets/bg1.jpg";
import ad3 from "../Assets/placeholder.jpg";

const HomeAds = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transitioning, setTransitioning]=useState(false);
  const ads = [ad1, ad2, ad3];

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ads.length);
  };

  const showPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + ads.length) % ads.length
    );
  };
  useEffect(() => {
    const interval = setInterval(showNextImage, 3000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <section id="ads" className="flex justify-center items-center w-full absolute top-48">
      <div className="bg-[#011936] flex justify-center items-center gap-7 p-7 w-[75%] rounded-lg">
        <div onClick={showPreviousImage} className="cursor-pointer text-3xl font-extrabold w-[5%]">
          <Icon
            icon="oui:arrow-left"
            className="cursor-pointer text-blue-200 hover:text-blue-400 hover:text-2xl"
          />
        </div>
        <div className="flex rounded-md w-[90%] items-center justify-center">
            <img
              src={ads[currentImageIndex]}
              alt=""
              className="w-[90%] h-72"
            />
        </div>
        <div onClick={showNextImage} className="cursor-pointer text-3xl font-extrabold w-[5%]">
          <Icon
            icon="oui:arrow-right"
            className="cursor-pointer text-blue-200 hover:text-blue-400 hover:text-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAds;
