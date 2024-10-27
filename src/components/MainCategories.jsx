import Title from "./Title";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { assets } from "../assets/assets";

const MainCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Men's Were",
      image: assets.men,
    },
    {
      id: 2,
      title: "Women's Ware",
      image: assets.women,
    },
    {
      id: 3,
      title: "Kid's Ware",
      image: assets.kid,
    },
    {
      id: 4,
      title: "FootWare",
      image: assets.shoes,
    },
    {
      id: 5,
      title: "Mobile's Accessories",
      image: assets.mobile,
    },
    {
      id: 6,
      title: "Beauty",
      image: assets.beauty,
    },
  ];

  return (
    <div className="my-10 relative">
      <div className="flex justify-between items-center">
        <div className="text-3xl">
          <Title text1={"MAIN"} text2={"CATEGORIES"} />
        </div>

        <NavLink to="/collection" className="flex flex-col items-end gap-1">
          <button className="bg-blue-600 text-white font-semibold py-1 px-2 mr-2 rounded-md shadow hover:bg-blue-700 transition duration-200 ease-in-out">
            View All
          </button>
        </NavLink>
      </div>

      <div className="relative px-2">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          navigation={{
            enabled: true,
            prevEl: ".custom-prev-button",
            nextEl: ".custom-next-button",
          }}
          className="product-slider py-2"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-lg font-semibold">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <h3 className="mt-2 text-center text-gray-800 font-medium">
                  {category.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-10 flex justify-between pointer-events-none">
            <button className="custom-prev-button w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center pointer-events-auto transition-all hover:bg-gray-50">
              <span className="sr-only">Previous</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button className="custom-next-button w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center pointer-events-auto transition-all hover:bg-gray-50">
              <span className="sr-only">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default MainCategories;
