import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addGame = createAsyncThunk("addGame", async (gameDetails) => {
    const req = await axios.post("http://localhost:8080/api/gaming/addgame",gameDetails);
    const res = req.data;
    return res;
})

const gameSlice = createSlice({
    name:"addGame",
    initialState:{
        loading:false,
        data:null,
        error:null
    },
    extraReducers: (builder) => {
        builder.addCase(addGame.pending, (state, action) => {
            state.loading = true;
            state.data = null;
            state.error = null
        })
        builder.addCase(addGame.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null
        })
        builder.addCase(addGame.rejected, (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.error.message
        })
    }
})
export default gameSlice.reducer;