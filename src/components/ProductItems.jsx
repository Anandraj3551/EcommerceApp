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
  numberOfReviews, // Add numberOfReviews prop
}) => {
  const { currency } = useContext(ShopContext);

  return (
    <div className="border-gray-200 border-4 rounded-md shadow-md">
      <Link className=" text-gray-700 cursor-pointer" to={`/product/${id}`}>
        <div className="overflow-hidden flex justify-center items-center w-full h-40 md:h-80 lg:h-64 rounded-md">
          <img
            className="hover:scale-110 transition ease-in-out w-full h-full object-cover rounded-md"
            src={image[0]} // Assuming `image` is an array and we're showing the first one
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
        {/* Show Rating and Number of Reviews if available */}
        {rating && (
          <p className="text-sm text-center text-yellow-500">
            {rating}★ ({numberOfReviews} reviews){" "}
            {/* Display number of reviews */}
          </p>
        )}
      </Link>
    </div>
  );
};

ProductItems.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // `id` can be string or number
  image: PropTypes.arrayOf(PropTypes.string).isRequired, // `image` should be an array of strings (URLs)
  name: PropTypes.string.isRequired, // `name` is a required string
  price: PropTypes.number.isRequired, // `price` is a required number
  originalPrice: PropTypes.number, // `originalPrice` is an optional number
  discount: PropTypes.string, // `discount` is an optional string
  rating: PropTypes.number, // `rating` is an optional number
  numberOfReviews: PropTypes.number, // Add numberOfReviews prop
};

export default ProductItems;
