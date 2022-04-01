import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001';

// export const fetchChefs = createAsyncThunk(
//   "chefs/fetchChefs",
//   async () => {
//     const data = await fetch(`${baseUrl}/chefs`);
//     return (await data.json()) as Chef[]
//   }
// ) 

const initialState: Order = {
  numberOfDishes: 0,
  totalPrice: 0,
  hours: 0
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    
  },
  // extraReducers: (builder) => {
    // builder.addCase(fetchChefs.fulfilled, (state, action) => {
    //   const data = {
    //     ...state,
    //     chefs: action.payload,
    //   }
    //   return data.chefs
    // })
  // }
})

export default orderSlice.reducer;