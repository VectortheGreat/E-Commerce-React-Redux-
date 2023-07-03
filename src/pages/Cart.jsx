import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cardSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);
  console.log("carts: ", carts, totalAmount, itemCount);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>
      {carts?.length >= 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart}></CartComp>
          ))}
          <div className="d-flex align-items-center justify-content-end">
            Total Amount: <span>{totalAmount}</span>
          </div>
        </div>
      ) : (
        <div>Kartınız Boş</div>
      )}
    </div>
  );
};

export default Cart;
