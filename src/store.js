import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import modalSlice from "./features/modal/modalSlice";
import usersSlice from "./features/users/usersSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    modal: modalSlice,
    users: usersSlice,
  },
});
