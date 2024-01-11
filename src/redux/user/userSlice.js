import { createSlice } from '@reduxjs/toolkit';
import SignIn from '../../Pages/Sign_In/SignIn';

const initialState = {
    currentUser: null,
    error: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        SignInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.error = null;
        },
        SignInFailure: (state, action) => {
            state.error = action.payload;
        },
        SignOut: (state) => {
            state.currentUser = null
        }
    }
});

export const { SignInSuccess, SignInFailure, SignOut } = userSlice.actions;

export default userSlice.reducer;