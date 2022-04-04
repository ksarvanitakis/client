import { configureStore } from '@reduxjs/toolkit';
import chefSlice from './chefs/chefSlice';
import cartSlice from './cart/cartSlice';

const store = configureStore({
  reducer: {
    chefs: chefSlice,
    cart: cartSlice
  },
});

export default store;