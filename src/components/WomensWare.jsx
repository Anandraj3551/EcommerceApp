import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItems from "./ProductItems";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";

const WomensWare = () => {
  const { products } = useContext(ShopContext);
  const [mensProducts, setMensProducts] = useState([]);

  useEffect(() => {
    // Filter for men's products and take first 10
    const filteredProducts = products
      .filter((product) => product.category === "women")
      .slice(0, 10);
    setMensProducts(filteredProducts);
  }, [products]);

  return (
    <div className="my-10 relative">
      <div className="flex justify-between items-center">
        <div className="text-3xl">
          <Title text1={"WOMEN'S"} text2={"COLLECTION"} />
        </div>

        <NavLink
          to="/collection?category=women"
          className="flex flex-col items-end gap-1"
        >
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
          {mensProducts.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductItems
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
                originalPrice={item.originalPrice}
                discount={item.discount}
                rating={item.rating}
                numberOfReviews={item.numberOfReviews}
                category={item.category}
                selectedCategory="women"
              />
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

export default WomensWare;
