import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const gameDetails = createAsyncThunk("userDetails", async () => {
  const request = await axios.get("http://localhost:8080/api/gaming/getgames");
  const response = request.data.data;
  return response;
});

const initialState =  {
  loading: false,
  data: [],
  error: null,
}

const homeSlice = createSlice({
  name: "gameSlice",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(gameDetails.pending, (state = initialState, action) => {
        state.loading = true;
        state.data = null;
        state.error = null;
    })
    builder.addCase(gameDetails.fulfilled, (state = initialState, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null
    })
    builder.addCase(gameDetails.rejected, (state = initialState, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
    })
  },
});



export default homeSlice.reducer;
