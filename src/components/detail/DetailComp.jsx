import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cardSlice";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const increaseQuantity = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };
  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
        quantity: quantity,
      })
    );
  };
  return (
    <div className="d-flex gap-5">
      <img
        src={productDetail?.image}
        alt=""
        style={{ width: "600px", height: "600px" }}
      />
      <div>
        <div>{productDetail?.title}</div>
        <div>Desc: {productDetail?.description}</div>
        <div>Rate: {productDetail?.rating?.rate}</div>
        <div>Count: {productDetail?.rating?.count}</div>
        <div>
          {productDetail?.price}
          <span>$</span>
        </div>
        <div className="d-flex align-items-center gap-5">
          <div onClick={decreaseQuantity}>-</div>
          <input type="text" value={quantity} />
          <div onClick={increaseQuantity}>+</div>
        </div>
        <button onClick={addBasket}>Sepete Ekle</button>
      </div>
    </div>
  );
};

export default DetailComp;
