import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import chefSlice from './chefs/chefSlice';

const store = configureStore({
  reducer: {
    chefs: chefSlice
  },
  
});

export default store;