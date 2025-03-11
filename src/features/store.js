import { configureStore } from "@reduxjs/toolkit";
import theme from "./theme/themeSlice";
import coin from "./coins/coinSlice";
import cart from "./cart/cartSlice";
import auth from "./auth/authSlice";

const store = configureStore({
  reducer: { theme, coin, cart, auth },
});

export default store;
