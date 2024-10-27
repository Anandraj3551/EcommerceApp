import { useContext } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItems = ({
  id,
  image,
  name,
  price,
  originalPrice,
  discount,
  rating,
  numberOfReviews,
  category, // Add category prop
  selectedCategory, // Add selectedCategory prop to filter items
}) => {
  const { currency } = useContext(ShopContext);

  // Only render if item matches selected category or if no category is selected
  if (selectedCategory && category !== selectedCategory) {
    return null;
  }

  return (
    <div className="border-gray-200 border-4 rounded-md shadow-md">
      <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
        <div className="overflow-hidden flex justify-center items-center w-full h-40 md:h-80 lg:h-64 rounded-md">
          <img
            className="hover:scale-110 transition ease-in-out w-full h-full object-cover rounded-md"
            src={image[0]}
            alt={name}
          />
        </div>
        <p className="pt-3 pb-1 text-sm text-center">{name}</p>
        <div className="text-sm font-medium text-center">
          {discount ? (
            <>
              <span className="text-red-500">
                {currency}
                {price}
              </span>
              <span className="line-through text-gray-500 ml-2">
                {currency}
                {originalPrice}
              </span>
              <span className="ml-2 text-green-500">{discount}</span>
            </>
          ) : (
            <span>
              {currency}
              {price}
            </span>
          )}
        </div>
        {rating && (
          <p className="text-sm text-center text-yellow-500">
            {rating}★ ({numberOfReviews} reviews){" "}
          </p>
        )}
      </Link>
    </div>
  );
};

ProductItems.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number,
  discount: PropTypes.string,
  rating: PropTypes.number,
  numberOfReviews: PropTypes.number,
  category: PropTypes.string.isRequired, // Add category prop type
  selectedCategory: PropTypes.string, // Add selectedCategory prop type (optional)
};

export default ProductItems;
