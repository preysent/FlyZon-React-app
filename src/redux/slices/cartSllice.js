import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const host = process.env.REACT_APP_API_URL //enviroment variable for api 


// Fetching cart items from db
export const getCartItems = createAsyncThunk('getCartItems', async () => {
    const responce = await fetch(`${host}/api/cart`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "authToken": localStorage.getItem('authToken')
        }
    })
    return await responce.json()
})






const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
        subtotal: 0,
        loading: false,
        error: false,
        cartStatue: false
    },

    extraReducers: (builder) => {

        // case for fetching cart items 
        builder.addCase(getCartItems.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(getCartItems.fulfilled, (state, action) => {
            state.cartList = action.payload

            // calculating the total price of products 
            if(action.payload.length>0)
            state.subtotal = action.payload.reduce((total, cart) => {
                return total + cart.product.price * cart.quantity
            }, 0)
            else state.subtotal = 0
            state.loading = false
            state.error = false
        })

        builder.addCase(getCartItems.rejected, (state, aciton) => {
            state.loading = false
            state.error = true
        })


    }
})

export default cartSlice.reducer