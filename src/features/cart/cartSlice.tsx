import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

// const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001';

// export const fetchChefs = createAsyncThunk(
//   "chefs/fetchChefs",
//   async () => {
//     const data = await fetch(`${baseUrl}/chefs`);
//     return (await data.json()) as Chef[]
//   }
// ) 

const initialState: Cart = {
  user: '',
  chef: undefined,
  booking: undefined,
  totalPrice: 0,
  totalhours: 0,
  dishes: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    createEmptyCart(state, action) {
      state = initialState;
      console.log('empty cart', state)
    },
    setChef(state, action) {
      console.log('action', action)
      state.chef = action.payload
      console.log('cart setChef', current(state))
    },
    addDishe(state, action) {

    },
    deleteDish(state, action) {

    }
  }
})

export const { createEmptyCart, setChef } = cartSlice.actions;
export default cartSlice.reducer;