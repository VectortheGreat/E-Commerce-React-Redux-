import React from "react";
import { removeFromCart } from "../../redux/cardSlice";
import { useDispatch } from "react-redux";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="d-flex align-items-center justify-content-between">
      <img
        src={cart?.image}
        alt=""
        style={{ width: "200px", height: "200px" }}
      />

      <div>{cart?.title}</div>
      <div>{cart?.price}</div>
      <button onClick={() => dispatch(removeFromCart(cart?.id))}>
        Remove Product
      </button>
    </div>
  );
};

export default CartComp;
