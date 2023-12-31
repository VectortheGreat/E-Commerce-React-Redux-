import React, { useState } from "react";
import SliderComp from "../components/home/SliderComp";
import Sorting from "../components/home/Sorting";
import Category from "../components/home/Category";
import Products from "../components/home/Products";

const Home = () => {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div>
      <SliderComp></SliderComp>
      <Sorting setSort={setSort}></Sorting>
      <div className="row flex-nowrap">
        <Category className="col-3" setCategory={setCategory}></Category>
        <Products className="col-9" category={category} sort={sort}></Products>
      </div>
    </div>
  );
};

export default Home;
