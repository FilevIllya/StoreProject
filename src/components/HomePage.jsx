import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchInput from "./SearchInput";
import CategoryFilter from "./CategoryFilter";
import axios from "axios";

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

const HomePage = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  if (isLoading) {
    return <div className="text-4xl">Loading...</div>;
  }

  if (isError) {
    return <div className="text-4xl">Error: {error.message}</div>;
  }

  const categories = [...new Set(data.map((product) => product.category))];

  const filteredProducts = data.filter((product) => {
    const matchesSearchTerm = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    return matchesSearchTerm && matchesCategory;
  });

  //console.log(data);
  return (
    <>
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 border-4 border-blue-500 rounded-lg shadow-md hover:bg-gray-300 transition duration-300"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain"
                />
                <h2 className="text-gray-700 text-lg font-semibold mt-2 underline">
                  Category: {product.category}
                </h2>
                <h2 className="text-gray-700 text-lg font-semibold mt-2">
                  {product.title}
                </h2>
                <p className="text-gray-700 mt-1">${product.price}</p>
              </Link>
            </div>
          ))
        ) : (
          <h3 className="text-center text-gray-500 mt-4">No products found.</h3>
        )}
      </div>
    </>
  );
};

export default HomePage;
