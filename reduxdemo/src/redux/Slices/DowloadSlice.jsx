import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const downloadGame = createAsyncThunk("downloadGAme", async (downloadRequirments) => {
    const request = await axios.post("http://localhost:8080/api/gaming/downloadgames",downloadRequirments)
    const response = request.data;
    console.log("download game",request);
    return response;
})

export const downloadSlice = createSlice({
    name:"downloadGame",
    initialState: {
        loading: false,
        data: null,
        error: null,
      },
      extraReducers: (builder) => {
        builder.addCase(downloadGame.pending, (state, action) => {
            state.loading = true;
            state.data = null;
            state.error = null;
        })
        builder.addCase(downloadGame.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        })
        builder.addCase(downloadGame.rejected, (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.error.message;
        })
    }
});

export default downloadSlice.reducer;