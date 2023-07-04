import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`products/${product?.id}`)}
      className="position-relative p-2 m-2 addPointerCursor"
      style={{ width: "200px" }}
    >
      <div className="position-absolute top-0 end-0 rounded-md p-1 bg-secondary text-white font-weight-bold">
        {product?.price}
        <span>$</span>
      </div>
      <img
        className="img-fluid border "
        style={{ width: "200px", height: "200px" }}
        src={product?.image}
        alt=""
      />
      <div className="text-center">{product?.title}</div>
    </div>
  );
};

export default Product;
