import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gray-200 text-center text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.delivery} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Free Shipping</p>
        <p className="text-gray-400">No one rejects</p>
      </div>
      <div>
        <img src={assets.payment} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Online Payment</p>
        <p className="text-gray-400">100% Safe and secure payments</p>
      </div>
      <div>
        <img src={assets.delivery} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Fast Delivery </p>
        <p className="text-gray-400">All product fast delivery</p>
      </div>
      <div>
        <img src={assets.original} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">100% Original Gurantee For</p>
        <p className="text-gray-400">All product at XFashion</p>
      </div>
    </div>
  );
};

export default OurPolicy;
