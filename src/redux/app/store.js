import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../categorySlice";
import productSlice from "../productSlice";
import cardSlice from "../cardSlice";

export default configureStore({
  reducer: {
    categories: categorySlice,
    products: productSlice,
    carts: cardSlice,
  },
});
