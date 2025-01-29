import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart";

export let store = configureStore({
  reducer: {
    'cart': cart,
  },
});

