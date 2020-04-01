import React from "react";
import "./search-box.css";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;