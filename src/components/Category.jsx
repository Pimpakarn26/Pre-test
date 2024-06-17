import React from "react";

const Category = ({ allCategories, filterItem }) => {
  return (
    <div className="btn-container">
      {allCategories.map((category, index) => {
        return (
          <button
            className="filter-btn"
            key={index}
            onClick={() => filterItem(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
