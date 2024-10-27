import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import Title from "./Title";

const Flower = () => {
  // Create an array of flower objects with names and corresponding images
  const flowers = [
    { name: "Rose", image: assets.card2 },
    { name: "Lily", image: assets.card2 },
    { name: "Tulip", image: assets.card2 },
    { name: "Orchid", image: assets.card2 },
    { name: "Sunflower", image: assets.card2 },
    { name: "Daisy", image: assets.card2 },
  ];

  return (
    <div className="container mx-auto px-2 py-2 bg-[#F88379] rounded-md mb-4">
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
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-2">
        {/* First large image that spans 2 rows and 2 columns on medium+ screens */}
        <NavLink
          to="/collection"
          className="col-span-2 row-span-1 md:row-span-2 h-[400px] md:h-[500px]"
        >
          <img
            src={assets.card2}
            alt="Featured Flower"
            className="w-full h-full object-cover rounded-lg"
          />
        </NavLink>

        {/* Remaining 6 images with names */}
        {flowers.map((flower, index) => (
          <NavLink
            to="/collection"
            className="col-span-1 h-60 md:h-60 relative"
            key={index}
          >
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-white p-2 rounded-b-lg">
              <h3 className="text-center font-semibold text-black">
                {flower.name}
              </h3>
            </div>
            <img
              src={flower.image}
              alt={flower.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Flower;
