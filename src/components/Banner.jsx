import { useState, useEffect } from "react";

import banner_1 from "../assets/banner_1.jpg";
import banner_2 from "../assets/banner_2.jpg";
import banner_3 from "../assets/banner_3.jpg";
import banner_4 from "../assets/banner_4.jpg";
import banner_5 from "../assets/banner_5.jpg";

const bannerImages = [banner_1, banner_2, banner_3, banner_4, banner_5];

// Custom hook to detect menu visibility
const useMenuVisibility = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    const checkMenuVisibility = () => {
      const menuElement = document.querySelector(
        ".absolute.top-0.right-0.bottom-0.bg-white"
      );
      if (menuElement) {
        setIsMenuVisible(menuElement.classList.contains("w-full"));
      }
    };

    checkMenuVisibility();

    const observer = new MutationObserver(checkMenuVisibility);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  return isMenuVisible;
};

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState("left");
  const isMenuVisible = useMenuVisibility();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDirection("left");
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % bannerImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(intervalId);
  }, []);

  const goToNextImage = () => {
    setDirection("left");
    setCurrentImageIndex((prevIndex) =>
      prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setDirection("right");
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    );
  };

  if (isMenuVisible) {
    return null; // Don't render anything if the menu is visible
  }

  return (
    <div className="w-full h-32 sm:h-40 md:h-48 relative overflow-hidden">
      {bannerImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Banner ${index + 1}`}
          className={`absolute top-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out
            ${index === currentImageIndex ? "z-10" : "z-0"}
            ${
              index === currentImageIndex
                ? "translate-x-0"
                : direction === "left"
                ? "translate-x-full"
                : "-translate-x-full"
            }`}
        />
      ))}
      <button
        onClick={goToPreviousImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-20"
      >
        &#10094;
      </button>
      <button
        onClick={goToNextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-20"
      >
        &#10095;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {bannerImages.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
              index === currentImageIndex
                ? "bg-black scale-125"
                : "bg-gray-400 scale-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
