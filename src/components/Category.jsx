import { assets } from "../assets/assets";

const Category = () => {
  return (
    <div>
      <div className="px-3 py-3 bg-white flex flex-wrap justify-center">
        <div className="shrink-0 hover:cursor-pointer hover:text-[#2874F4] mx-2 my-2 text-center font-semibold text-sm">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={assets.men}
              alt="Men's Fashion"
            />
          </div>
          <p className="mt-1">Men</p>
        </div>
        <div className="shrink-0 hover:cursor-pointer hover:text-[#2874F4] mx-2 my-2 text-center font-semibold text-sm">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={assets.women}
              alt="Women's Fashion"
            />
          </div>
          <p className="mt-1">Women</p>
        </div>
        <div className="shrink-0 hover:cursor-pointer hover:text-[#2874F4] mx-2 my-2 text-center font-semibold text-sm">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={assets.kid}
              alt="Kids' Fashion"
            />
          </div>
          <p className="mt-1">Kids</p>
        </div>
        <div className="shrink-0 hover:cursor-pointer hover:text-[#2874F4] mx-2 my-2 text-center font-semibold text-sm">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={assets.shoes}
              alt="Footwear"
            />
          </div>
          <p className="mt-1">Footwear</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
