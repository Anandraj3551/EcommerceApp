import banner_3 from "../assets/banner_3.jpg";
import banner_4 from "../assets/banner_4.jpg";
import banner_2 from "../assets/banner_2.jpg";

const BannerThree = () => {
  return (
    <div className="flex justify-around space-x-4 mb-4">
      <div className="w-full h-full sm:h-40 md:h-48 relative overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-md transform transition-transform duration-500 ease-in-out hover:scale-110"
          src={banner_3}
          alt=""
        />
      </div>
      <div className="w-full h-full sm:h-40 md:h-48 relative overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-md transform transition-transform duration-500 ease-in-out hover:scale-110"
          src={banner_4}
          alt=""
        />
      </div>
      <div className="w-full h-full sm:h-40 md:h-48 relative overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-md transform transition-transform duration-500 ease-in-out hover:scale-110"
          src={banner_2}
          alt=""
        />
      </div>
    </div>
  );
};

export default BannerThree;
