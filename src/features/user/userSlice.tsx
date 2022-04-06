import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001';

export const fetchUserBookings = createAsyncThunk(
    "user/fetchUserBookings",
    async () => {
        const data = await fetch(`${baseUrl}/api/users/....?`);
        return (await data.json()) as Booking2[]
    }
)

const initialState: User = {
    _id: '',
    username: 'Mr.Bean'
};

const chefSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserBookings.fulfilled, (state, action) => {
            const data = {
                ...state,
                user: {
                    _id: state._id,
                    username: state.username,
                    bookings: action.payload,
                }
            }
            return data.user
        })
    }
})

export default chefSlice.reducer;