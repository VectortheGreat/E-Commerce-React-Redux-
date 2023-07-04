import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCartTotal } from "../redux/cardSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);
  // console.log("carts: ", carts, totalAmount, itemCount);
  const clearLocalStorage = () => {
    localStorage.clear(); // localStorage'i sıfırla
    console.log(true);
  };
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>
      {carts?.length > 0 ? (
        <table className="table table-hover">
          <thead>
            <tr className="mb-2">
              <th scope="col">Image</th>
              <th scope="col">Product</th>
              <th scope="col">Amount</th>
              <th scope="col">Price</th>
              <th scope="col">
                {" "}
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => dispatch(clearCart(carts))}
                >
                  Clear Cart
                </button>{" "}
                <button onClick={clearLocalStorage}>Clear Storage</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {carts?.map((cart, i) => (
              <CartComp key={i} cart={cart}></CartComp>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Total Amount:</td>
              <td>{totalAmount}</td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <div>Empty Cart</div>
      )}
    </div>
  );
};

export default Cart;
