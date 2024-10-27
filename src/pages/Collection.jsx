import { useContext, useEffect, useState, useCallback } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItems from "../components/ProductItems";
import { Filter } from "lucide-react";
import PropTypes from "prop-types";

const Collection = () => {
  const { products, searchQuery } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortBy, setSortBy] = useState("relevant");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [isLoading, setIsLoading] = useState(true);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const handlePriceRangeChange = (type, value) => {
    // Allow empty input for better user experience
    if (value === "") {
      setPriceRange((prev) => ({
        ...prev,
        [type]: "",
      }));
      return;
    }

    const numValue = Number(value);

    // Prevent negative values
    if (numValue < 0) return;

    setPriceRange((prev) => {
      const newRange = {
        ...prev,
        [type]: numValue,
      };

      // Ensure min doesn't exceed max and max doesn't go below min
      if (type === "min" && numValue > prev.max) {
        newRange.min = prev.max;
      }
      if (type === "max" && numValue < prev.min) {
        newRange.max = prev.min;
      }

      return newRange;
    });
  };

  const sortProducts = useCallback((products, sortType) => {
    const sortedProducts = [...products];

    switch (sortType) {
      case "low-high":
        return sortedProducts.sort((a, b) => a.price - b.price);
      case "high-low":
        return sortedProducts.sort((a, b) => b.price - a.price);
      case "rating":
        return sortedProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case "newest":
        return sortedProducts.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
      default:
        return sortedProducts;
    }
  }, []);

  const handleSort = (value) => {
    setSortBy(value);
    setFilterProducts((prevProducts) => sortProducts(prevProducts, value));
  };

  const applyFilter = useCallback(() => {
    setIsLoading(true);
    let productsCopy = products.slice();

    // Apply category filter
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    // Apply subcategory filter
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    // Apply price range filter
    const minPrice = Number(priceRange.min);
    const maxPrice = Number(priceRange.max);
    productsCopy = productsCopy.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    // Apply sorting
    const sortedProducts = sortProducts(productsCopy, sortBy);
    setFilterProducts(sortedProducts);
    setIsLoading(false);
  }, [products, category, subCategory, priceRange, sortBy, sortProducts]);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [applyFilter]);

  const clearFilters = () => {
    setCategory([]);
    setSubCategory([]);
    setPriceRange({ min: 0, max: 5000 });
    setSortBy("relevant");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filter Sidebar */}
        <div className="lg:w-64">
          <div className="flex items-center justify-between lg:justify-start gap-2 mb-6">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Filter className="h-4 w-4" />
              <span className="font-medium">Filters</span>
            </button>
            <button
              onClick={clearFilters}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Clear All
            </button>
          </div>

          <div
            className={`${
              showFilter ? "block" : "hidden lg:block"
            } space-y-6 bg-white rounded-lg shadow-sm border p-4`}
          >
            {/* Categories */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Categories</h3>
              <div className="space-y-3">
                {["men", "women", "kid"].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={item}
                      onChange={toggleCategory}
                      checked={category.includes(item)}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 capitalize">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Types */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Product Type</h3>
              <div className="space-y-3">
                {["topwear", "bottomwear", "footwear"].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={item}
                      onChange={toggleSubCategory}
                      checked={subCategory.includes(item)}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 capitalize">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Price Range</h3>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  value={priceRange.min}
                  onChange={(e) =>
                    handlePriceRangeChange("min", e.target.value)
                  }
                  min="0"
                  className="w-24 px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Min"
                />
                <span className="text-gray-500">to</span>
                <input
                  type="number"
                  value={priceRange.max}
                  onChange={(e) =>
                    handlePriceRangeChange("max", e.target.value)
                  }
                  min={priceRange.min}
                  className="w-24 px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Max"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-900">
                {searchQuery
                  ? `Search Results for "${searchQuery}"`
                  : "All Collection"}
              </h1>
              <span className="text-sm text-gray-500">
                ({filterProduct.length} products)
              </span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => handleSort(e.target.value)}
              className="px-4 py-2 bg-white border rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest First</option>
            </select>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
          ) : filterProduct.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No products found{" "}
                {searchQuery
                  ? "matching your search"
                  : "matching your criteria"}
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 text-blue-600 hover:text-blue-800"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filterProduct.map((item) => (
                <ProductItems key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Collection.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.arrayOf(PropTypes.string).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      originalPrice: PropTypes.number,
      discount: PropTypes.string,
      rating: PropTypes.number,
      category: PropTypes.string,
      subCategory: PropTypes.string,
    })
  ),
};

export default Collection;
