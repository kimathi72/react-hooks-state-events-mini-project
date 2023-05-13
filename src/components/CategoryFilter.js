import React from "react";

function CategoryFilter({categories, handleCategoryfilter}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */
      categories.map((category, index )=> <button key={index} value={category} onClick={(e)=>handleCategoryfilter(e)}>{category}</button> )
      }
    </div>
  );
}

export default CategoryFilter;
