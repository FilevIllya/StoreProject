import React from "react";

const CategoryFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="mb-4">
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <button
          className={`px-4 py-2 my-2 rounded ${
            !selectedCategory ? "bg-blue-700" : "bg-violet-400"
          }`}
          onClick={() => setSelectedCategory("")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 my-2 mx-0 rounded ${
              selectedCategory === category ? "bg-blue-700" : "bg-violet-400"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
