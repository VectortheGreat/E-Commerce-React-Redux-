import React from "react";
import { removeFromCart } from "../../redux/cardSlice";
import { useDispatch } from "react-redux";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <th scope="col">
        <img
          src={cart?.image}
          alt=""
          style={{ width: "100px", height: "100px" }}
        />
      </th>
      <th scope="col">
        {" "}
        <div>{cart?.title}</div>
      </th>
      <th scope="col">
        <div>{cart?.quantity}</div>
      </th>
      <th scope="col">
        {" "}
        <div>{cart?.price}</div>
      </th>
      <th scope="col">
        {" "}
        <button
          className="btn btn-danger"
          onClick={() => dispatch(removeFromCart(cart?.id))}
        >
          Remove
        </button>
      </th>
    </tr>
  );
};

export default CartComp;
