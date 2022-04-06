import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false,
    type: ''
}

const modalSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeModalShowState(state, action) {
            return state = action.payload
          },
    },
})

export const { changeModalShowState } = modalSlice.actions;
export default modalSlice.reducer;