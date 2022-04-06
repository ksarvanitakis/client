import { createSlice } from "@reduxjs/toolkit";

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