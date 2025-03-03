import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "../../services/authService";

// Register user
export const registerUserThunk = createAsyncThunk("auth/registerUser", async (userData, { rejectWithValue }) => {
    try {
        return await registerUser(userData);
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

// Login user (same as before)
export const loginUserThunk = createAsyncThunk("auth/loginUser", async (credentials, { rejectWithValue }) => {
    try {
        const data = await loginUser(credentials);
        localStorage.setItem("token", data.token);
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState: { user: null, token: localStorage.getItem("token") || "", loading: false, error: null },
    reducers: {
        logout: (state) => {
            localStorage.removeItem("token");
            state.user = null;
            state.token = "";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUserThunk.pending, (state) => { state.loading = true; })
            .addCase(registerUserThunk.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.user = payload;
            })
            .addCase(registerUserThunk.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
