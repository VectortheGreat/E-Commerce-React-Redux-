import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleItemClick = (category) => {
    setCategory(category);
    setActiveItem(category);
  };

  return (
    <div className="col-2">
      <ul className="list-group">
        <li className="list-group-item disabled">Categories</li>
        {categories?.map((category, i) => {
          const words = category.split(" ");
          const capitalizedWords = words.map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1)
          );
          const formattedCategory = capitalizedWords.join(" ");

          return (
            <li
              onClick={() => handleItemClick(category)}
              key={i}
              className={`list-group-item addPointerCursor ${
                activeItem === category ? "active" : ""
              }`}
            >
              {formattedCategory}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
