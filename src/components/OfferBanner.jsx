import banner_3 from "../assets/banner_3.jpg";

const OfferBanner = () => {
  return (
    <div className="w-full h-full sm:h-40 md:h-48 relative overflow-hidden mb-4">
      <img
        className="transform transition-transform duration-500 ease-in-out hover:scale-110"
        src={banner_3}
        alt=""
      />
    </div>
  );
};

export default OfferBanner;
