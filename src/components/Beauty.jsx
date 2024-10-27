import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import Title from "./Title";

const Beauty = () => {
  const beautyItems = [
    { name: "Lipstick", image: assets.beauty },
    { name: "Foundation", image: assets.beauty },
    { name: "Mascara", image: assets.beauty },
    { name: "Blush", image: assets.beauty },
    { name: "Moisturizer", image: assets.beauty },
    { name: "Serum", image: assets.beauty },
  ];

  return (
    <div className="container mx-auto px-2 py-2 bg-[#a0d2eb] rounded-md mb-4">
      {/* Title and View All button section */}
      <div className="flex justify-between items-center border-b-2 border-black pb-2 mb-4">
        <div className="text-3xl">
          <Title text1={"ELEGANT"} text2={"FLOWERS"} />
        </div>

        <NavLink to="/collection" className="flex flex-col items-end gap-1">
          <button className="bg-white text-[#1f74ba] font-semibold py-1 px-2 mr-2 rounded-md shadow hover:bg-gray-200 transition duration-200 ease-in-out">
            View All{">>"}
          </button>
        </NavLink>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        {/* First three items */}
        {beautyItems.slice(0, 3).map((item, index) => (
          <NavLink
            to="/collection"
            className="col-span-1 h-60 relative"
            key={index}
          >
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-white p-2 rounded-b-lg">
              <h3 className="text-center font-semibold text-black">
                {item.name}
              </h3>
            </div>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </NavLink>
        ))}

        {/* Second three items */}
        {beautyItems.slice(3, 6).map((item, index) => (
          <NavLink
            to="/collection"
            className="col-span-1 h-60 relative"
            key={index + 3}
          >
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-white p-2 rounded-b-lg">
              <h3 className="text-center font-semibold text-black">
                {item.name}
              </h3>
            </div>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </NavLink>
        ))}

        {/* Large image */}
        <NavLink
          to="/collection"
          className={`
            relative 
            col-span-2 row-span-2 
            h-[400px]
            order-last
            md:order-none 
            md:h-[500px]
            md:col-start-4 md:row-start-1
          `}
        >
          <img
            src={assets.beauty}
            alt="Special Collection"
            className="w-full h-full object-cover rounded-lg"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Beauty;
