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
  menu: [],
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
        let timeCalc;
        if (action.payload.serving === 1) {
          timeCalc = action.payload.time
        } else {
          timeCalc = (action.payload.time - 10) * action.payload.serving
        }

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

      state.totalhours = totalTime;

      const totalPrice = Math.floor((totalTime / 60) * state.chef.price);
      state.totalPrice = totalPrice;

      console.log('dish cart', current(state))
    },
    setSelectedDate(state, action) {
      state.date = action.payload
    },
    removeDishe(state, action) {
      if (action.payload.serving === 0) {
        const index = state.dishes.findIndex((ob: any) => {
          return ob.name === action.payload.name;
        });
        state.dishes.splice(index, 1);
      }
    }
  }
})

export const { createEmptyCart, setChef, updateDish, setSelectedDate, removeDishe } = cartSlice.actions;
export default cartSlice.reducer;