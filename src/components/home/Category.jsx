import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="col-2">
      <div>Category</div>
      {categories?.map((category, i) => (
        <div onClick={() => setCategory(category)} key={i}>
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
