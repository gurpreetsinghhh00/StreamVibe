import React from "react";

const CategoryList = ({ name }) => {
  return (
    <li className="py-1 px-3 bg-gray-200 rounded-md hover:bg-gray-300 cursor-pointer">
      {name}
    </li>
  );
};

export default CategoryList;
