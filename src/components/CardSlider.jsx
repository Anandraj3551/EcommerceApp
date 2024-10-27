import { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";

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

const CardSlider = () => {
  const sliderRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const lastTimestampRef = useRef(0);
  const currentTranslateRef = useRef(0);
  const isMenuVisible = useMenuVisibility();

  const cards = [
    {
      title: "Card 1",
      image: assets.card1,
    },
    {
      title: "Card 2",
      image: assets.card2,
    },
    {
      title: "Card 3",
      image: assets.card3,
    },
    {
      title: "Card 4",
      image: assets.card4,
    },
    {
      title: "Card 5",
      image: assets.headphones,
    },
    {
      title: "Card 6",
      image: assets.card1,
    },
    {
      title: "Card 7",
      image: assets.card1,
    },
  ];

  useEffect(() => {
    if (!isInitialized) {
      setIsInitialized(true);
      return;
    }

    const slider = sliderRef.current;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!isPaused) {
        if (!lastTimestampRef.current) lastTimestampRef.current = timestamp;
        const elapsed = timestamp - lastTimestampRef.current;

        const pixelsPerMs = 0.03;
        const delta = elapsed * pixelsPerMs;

        currentTranslateRef.current -= delta;
        const cardWidth = slider.children[0].offsetWidth;
        const totalWidth = cardWidth * cards.length;

        if (Math.abs(currentTranslateRef.current) >= totalWidth) {
          currentTranslateRef.current = 0;
        }

        slider.style.transform = `translateX(${currentTranslateRef.current}px)`;
        lastTimestampRef.current = timestamp;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
        lastTimestampRef.current = 0;
      } else {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const handleResize = () => {
      cancelAnimationFrame(animationFrameId);
      lastTimestampRef.current = 0;
      currentTranslateRef.current = 0;
      slider.style.transform = `translateX(0)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", handleResize);
    };
  }, [isInitialized, cards.length, isPaused]);

  // Don't render anything if the menu is visible
  if (isMenuVisible) {
    return null;
  }

  return (
    <div className="relative overflow-hidden w-full p-4">
      <div className="text-center pb-2">
        <h1 className="font-medium text-3xl pb-2">All Deal Categories</h1>
      </div>
      <div className="max-w-7xl mx-auto">
        <div
          ref={sliderRef}
          className="flex gap-4 transition-transform"
          style={{ willChange: "transform" }}
          onMouseEnter={() => {
            setIsPaused(true);
          }}
          onMouseLeave={() => {
            setIsPaused(false);
            lastTimestampRef.current = 0;
          }}
        >
          {/* Original cards */}
          {cards.map((card, index) => (
            <div key={`original-${index}`} className="flex-shrink-0 w-40">
              <div className="bg-white text-center overflow-hidden transform transition-transform hover:scale-105 duration-300">
                <div className="relative w-full h-40">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-medium text-gray-800 truncate">
                    {card.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}

          {/* Duplicated cards for smooth loop */}
          {cards.map((card, index) => (
            <div key={`duplicate-${index}`} className="flex-shrink-0 w-40">
              <div className="bg-white text-center overflow-hidden transform transition-transform hover:scale-105 duration-300">
                <div className="relative w-full h-40">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-medium text-gray-800 truncate">
                    {card.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
