import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import Title from "./Title";

const HotDeals = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="text-3xl">
          <Title text1={"HOT"} text2={"DEAL'S"} />
        </div>

        <NavLink to="/collection" className="flex flex-col items-end gap-1">
          <button className="bg-blue-600 text-white font-semibold py-1 px-2 mr-2 rounded-md shadow hover:bg-blue-700 transition duration-200 ease-in-out">
            View All
          </button>
        </NavLink>
      </div>
      <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 mb-8 h-auto md:h-[500px]">
        {/* First div (KidWere with 2x2 grid) */}
        <div className="w-full h-[400px] md:h-full object-cover rounded-lg p-4 border border-gray-300 shadow-lg">
          {/* Title for men's section */}
          <div className="flex justify-between items-center mb-4">
            <div className="text-3xl">
              <h2 className="text-sm sm:text-base md:text-lg text-gray-500">
                KID{"’"}S
                <span className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">
                  WERE
                </span>
              </h2>
            </div>

            <NavLink
              to="/collection?category=women"
              className="flex flex-col items-end gap-1"
            >
              <button className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full shadow hover:bg-blue-700 transition duration-200 ease-in-out">
                {">"}
              </button>
            </NavLink>
          </div>
          {/* 2x2 grid inside kid's collection */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[calc(100%-2.5rem)]">
            {[
              { title: "T-shirt", discount: "30%", img: assets.littlegirl },
              { title: "Jeans", discount: "25%", img: assets.littlegirl },
              { title: "Jacket", discount: "40%", img: assets.littlegirl },
              { title: "Shoes", discount: "20%", img: assets.littlegirl },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-center text-white">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>{item.discount} OFF</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second div (menswear with 2x2 grid) */}
        <div className="w-full h-[400px] md:h-full object-cover rounded-lg p-4 border border-gray-300 shadow-lg">
          {/* Title for men's section */}
          <div className="flex justify-between items-center mb-4">
            <div className="text-3xl">
              <h2 className="text-sm sm:text-base md:text-lg text-gray-500">
                MOBILE{"’"}S
                <span className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">
                  ACCESSORIES
                </span>
              </h2>
            </div>

            <NavLink
              to="/collection?category=women"
              className="flex flex-col items-end gap-1"
            >
              <button className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full shadow hover:bg-blue-700 transition duration-200 ease-in-out">
                {">"}
              </button>
            </NavLink>
          </div>
          {/* 2x2 grid inside men's collection */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[calc(100%-2.5rem)]">
            {[
              { title: "Headphones", discount: "30%", img: assets.headphones },
              { title: "Mobile", discount: "25%", img: assets.headphones },
              { title: "Cover", discount: "40%", img: assets.headphones },
              { title: "Charger", discount: "20%", img: assets.headphones },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-center text-white">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>{item.discount} OFF</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Third div (womenswear with 2x2 grid) */}
        <div className="w-full h-[400px] md:h-full object-cover rounded-lg p-4 border border-gray-300 shadow-lg">
          {/* Title for women's section */}
          <div className="flex justify-between items-center mb-4">
            <div className="text-3xl">
              <h2 className="text-sm sm:text-base md:text-lg text-gray-500">
                KICHEN{"’"}S
                <span className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">
                  ITEMS
                </span>
              </h2>
            </div>

            <NavLink
              to="/collection?category=women"
              className="flex flex-col items-end gap-1"
            >
              <button className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full shadow hover:bg-blue-700 transition duration-200 ease-in-out">
                {">"}
              </button>
            </NavLink>
          </div>
          {/* 2x2 grid inside women's collection */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[calc(100%-2.5rem)]">
            {[
              { title: "pressure cooker", discount: "35%", img: assets.kichen },
              { title: "Pan", discount: "50%", img: assets.kichen },
              { title: "Knife", discount: "20%", img: assets.kichen },
              { title: "Fork", discount: "15%", img: assets.kichen },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-pink-400 rounded-lg overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-center text-white">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>{item.discount} OFF</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HotDeals;
