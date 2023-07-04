import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let favorites = localStorage.getItem("favorites");
  if (favorites) {
    return JSON.parse(localStorage.getItem("favorites"));
  } else {
    return [];
  }
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("favorites", JSON.stringify(data));
};

const initialState = {
  favorites: fetchFromLocalStorage(),
  itemCount: 0,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      console.log(action);
      const isItemFav = state.favorites.find(
        (item) => item.id === action.payload.id
      );
      if (isItemFav) {
        console.log("favorilere zaten eklendi");
      } else {
        state.favorites.push(action.payload);
        storeInLocalStorage(state.favorites);
        console.log("favori eklendi", state.favorites);
      }
    },
  },
});

export const { addToFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
