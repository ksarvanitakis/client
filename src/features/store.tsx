import { configureStore } from '@reduxjs/toolkit';
import chefSlice from './chefs/chefSlice';
import orderSlice from './order/orderSlice';

const store = configureStore({
  reducer: {
    chefs: chefSlice,
    order: orderSlice
  },
});

export default store;