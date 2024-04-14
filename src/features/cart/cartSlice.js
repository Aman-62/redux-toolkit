import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [
    {
      id: "rec1JZlfCIBOPdcT2",
      title: "Samsung Galaxy S23",
      price: "70000",
      img: "https://images2.imgbox.com/c2/14/zedmXgs6_o.png",
      amount: 1,
    },
    {
      id: "recB6qcHPxb62YJ75",
      title: "google pixel",
      price: "32000",
      img: "https://images2.imgbox.com/fb/3d/O4TPmhlt_o.png",
      amount: 1,
    },
    {
      id: "recdRxBsE14Rr2VuJ",
      title: "Xiaomi Redmi Note 2",
      price: "16000",
      img: "https://images2.imgbox.com/4f/3d/WN3GvciF_o.png",
      amount: 1,
    },
    {
      id: "recwTo160XST3PIoW",
      title: "Samsung Galaxy S20",
      price: "35000 ",
      img: "https://images2.imgbox.com/2e/7c/yFsJ4Zkb_o.png",
      amount: 1,
    },
  ],
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, actions) => {
      const itemId = actions.payload;

      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount - 1;
    },
    calcTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calcTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
