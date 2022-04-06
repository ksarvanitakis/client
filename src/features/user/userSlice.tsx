import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001';

// export const fetchUserBookings = createAsyncThunk(
//     "user/fetchUserBookings",
//     async () => {
//         const data = await fetch(`${baseUrl}/api/users/....?`);
//         return (await data.json()) as Booking2[]
//     }
// )

const initialState: User = {
    user: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        upDateUserCredentials(state, action) {
            state = action.payload
          },
    },
})

export const { upDateUserCredentials } = userSlice.actions;
export default userSlice.reducer;