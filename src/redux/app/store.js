import { configureStore } from "@reduxjs/toolkit";
import { getCountry } from "../countries/countrySlice";

export default configureStore({
  reducer: {
    country: getCountry,
  },
});
