import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../services/axiosInstance";
import { loginUserCredentials, registerUserCred } from "./authApi";

const initialState = {
  user: null,
  token: localStorage.getItem("token"),
  loading: false,
  error: null,

};

export const loginUser = createAsyncThunk("auth/loginUser", async(credentials, { rejectWithValue }) => {
    try {
        return await loginUserCredentials(credentials);
    } catch (error) {
        return rejectWithValue(
            error.response?.data?.message || "Login failed"
        );
    }
});

export const registerUser = createAsyncThunk("auth/register", async(credentials, { rejectWithValue }) => {
    try {
        return await registerUserCred(credentials);
    } catch (error) {
        return rejectWithValue(
            error.response?.data?.message || "Registration failed"
        );
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            //register
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export default authSlice.reducer;