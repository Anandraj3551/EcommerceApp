import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "₹";
  const delivery_fee = 40;
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Helper function to normalize text for searching
  const normalizeText = (text) => {
    return (
      text
        .toLowerCase()
        // Remove special characters and replace with spaces
        .replace(/[^a-z0-9\s]/g, " ")
        // Replace multiple spaces with single space
        .replace(/\s+/g, " ")
        // Remove spaces at start and end
        .trim()
    );
  };

  // Helper function to check if a product matches search terms
  const productMatchesSearch = (product, searchTerms) => {
    // Normalize product fields
    const normalizedName = normalizeText(product.name);
    const normalizedCategory = product.category
      ? normalizeText(product.category)
      : "";
    const normalizedSubCategory = product.subCategory
      ? normalizeText(product.subCategory)
      : "";

    // Additional keywords for common variations
    const keywords = [
      normalizedName,
      normalizedCategory,
      normalizedSubCategory,
      // Add common variations and abbreviations
      normalizedName.replace("shirt", "tshirt"),
      normalizedName.replace("tshirt", "t shirt"),
      normalizedName.replace("t shirt", "tee"),
      normalizedName.replace("trousers", "pants"),
      normalizedName.replace("sneakers", "shoes"),
    ];

    // Check if all search terms match any of the keywords
    return searchTerms.every((term) =>
      keywords.some((keyword) => keyword.includes(term))
    );
  };

  // Enhanced search function
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredProducts(products);
      return;
    }

    // Normalize and split the search query into terms
    const searchTerms = normalizeText(query).split(" ");

    const searchResults = products.filter((product) =>
      productMatchesSearch(product, searchTerms)
    );

    setFilteredProducts(searchResults);
  };

  const value = {
    products: filteredProducts,
    allProducts: products,
    currency,
    delivery_fee,
    searchQuery,
    handleSearch,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
