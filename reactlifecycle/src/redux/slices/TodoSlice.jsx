import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("fetchData", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    if(!res.ok){
        throw new Error("something went wrong")
    }
    return res.json();
})

const todoSlice = createSlice({
    name: "todo",
    initialState:{
        isLoading: false,
        data: null,
        error: null
    },
    extraReducers (builder) {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.error = null;
        })
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.isLoading = false;
            state.error = true;
        })
    }
})

export default todoSlice.reducer;