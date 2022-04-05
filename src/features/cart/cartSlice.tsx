import { createSlice, current } from "@reduxjs/toolkit";

// const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001';

// export const fetchChefs = createAsyncThunk(
//   "chefs/fetchChefs",
//   async () => {
//     const data = await fetch(`${baseUrl}/chefs`);
//     return (await data.json()) as Chef[]
//   }
// ) 
const mockChefData = {
  _id: -1,
  name: '',
  description: '',
  cusine: [],
  price: 0,
  travelDistance: 0,
  email: '',
  rating: 1,
  phone: 1,
  menu:[],
  address: '',
  profileImage: '',
  heroImages: [],
  bookedDates: [],
}
const initialState: Cart = {
  user: 'Mr.Bean',
  chef: mockChefData,
  booking: undefined,
  totalPrice: 0,
  totalhours: 0,
  dishes: [],
  date: new Date().toLocaleDateString()
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
    },
    updateDish(state, action) {

      const addedDish = state.dishes.find(d => d.id === action.payload.id);

      if (addedDish) {
        console.log(state.totalhours)
        let timeCalc;
        if (action.payload.serving === 1) {
          timeCalc = action.payload.time
        } else {
          timeCalc = (action.payload.time - 10) * action.payload.serving
        }

        console.log(timeCalc, 'time for each dish')
        const updateCart = {
          ...action.payload,
          time: timeCalc
        }
        state.dishes.splice(action.payload.id, 1, updateCart)
      } else state.dishes.push(action.payload)
      let totalTime = 0
      state.dishes.forEach(el => {
        totalTime += el.time
      })
      console.log(totalTime)
      state.totalhours = totalTime
      console.log('dish cart', current(state))

    },
    setSelectedDate(state, action) {
      state.date = action.payload
    },
    updatePrice(state, action) {
      state.totalPrice = action.payload;
    }
  }
})

export const { createEmptyCart, setChef, updateDish, setSelectedDate, updatePrice } = cartSlice.actions;
export default cartSlice.reducer;