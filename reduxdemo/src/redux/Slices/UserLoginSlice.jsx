import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin = createAsyncThunk("userLogin", async (userCredentials) => {
    console.log("action");
    const request = await axios.post("http://localhost:8080/api/gaming/userlogin", userCredentials)
    const res = request.data.data;

    localStorage.setItem("gmail",res.gmail)
    localStorage.setItem("name", res.username)
    return res;
})

const userLoginSlice = createSlice({
    name: "userLogin",
    initialState:{
        loading:false,
        user:null,
        gmail:null,
        error:null
    },
    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state, action) => {
            console.log("pending reducers");
            state.loading = true;
            state.user = null;
            state.gmail = null;
            state.error = null

        })
        .addCase(userLogin.fulfilled, (state, action) => {
            console.log("fullfilled reducers");
            state.loading = false;
            state.user = action.payload.username;
            state.gmail = action.payload.gmail;
            state.error = null
        })
        .addCase(userLogin.rejected, (state, action) => {
            console.log("reject reducers");
            state.loading = false;
            state.user = null;
            state.gmail = null;
            console.log("rejected: ", action);
            state.error = "Access Denied Inavlid Credentials"
    
        })
    }
})

export default userLoginSlice.reducer;