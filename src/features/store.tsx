import { configureStore } from '@reduxjs/toolkit';
import chefSlice from './chefs/chefSlice';
import cartSlice from './cart/cartSlice';
import modalSlice from './modal/modalSlice';
import userSlice from './user/userSlice';

const store = configureStore({
  reducer: {
    chefs: chefSlice,
    cart: cartSlice,
    modal: modalSlice,
    user: userSlice
  },
});

export default store;