import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";

const storeCart = configureStore({
    reducer :{
        cart: CartSlice
    }

})

export default storeCart;