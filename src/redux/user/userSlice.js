import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    error: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        SignInSuccess: (state, action) => {
            console.log("action.payload: ", action.payload);
            
            state.currentUser = action.payload;
            state.error = null;
        },
        SignInFailure: (state, action) => {
            state.error = action.payload;
        },
        SignOut: (state, action) => {
            state.currentUser = action.payload;
        }
    }
});

export const { SignInSuccess, SignInFailure, SignOut } = userSlice.actions;

export default userSlice.reducer;