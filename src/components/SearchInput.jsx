import React from "react";

const SearchInput = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-4">
      <input
        id="search-input"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter product name here..."
        className="border border-gray-300 p-2 rounded w-full"
      />
    </div>
  );
};

export default SearchInput;
