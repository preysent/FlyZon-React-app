import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./slices/modeSlice";
import productReducer from "./slices/productSlice";
import userReducer from "./slices/userSlice"
import cartReducer from "./slices/cartSllice";

export const store = configureStore({
    reducer:{
        mode : modeReducer,
        products : productReducer,
        user : userReducer,
        cart : cartReducer      
    }
})