import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const host = process.env.REACT_APP_API_URL


// fucntin to getting product list of the seller
export const getProductList = createAsyncThunk('getProductList', async () => {
    const responce = await fetch(`${host}/api/seller/products`, {
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "authToken": localStorage.getItem('authToken')
        }
    })
    return await responce.json()

})


// function to add new product 
export const addNewProduct = createAsyncThunk('addNewProduct', async (details) => {
    const requestBody = JSON.stringify(details)
    
    const responce = await fetch(`${host}/api/product`, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "authToken": localStorage.getItem('authToken')
        },
        body: requestBody
    })
    return await responce.json()   
})



// function to update product 
export const updateProduct = createAsyncThunk('updateProduct', async ({details,id}) => {
    const requestBody = JSON.stringify(details)

    const responce = await fetch(`${host}/api/product/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "authToken": localStorage.getItem('authToken')
        },
        body: requestBody
    })
    return await responce.json()   
})

const sellerSlice = createSlice({
    name: 'seller',
    initialState: {
        productList: [],
        seller: false,
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) => {

        // case for productList 
        builder.addCase(getProductList.pending, (state) => {
            state.isLoading = true
            state.isError = false
        })
        builder.addCase(getProductList.fulfilled, (state, action) => {
            state.isLoading = false
            if (action.payload.status) {
                state.isError = false
                state.productList = action.payload.productList
            }
            else state.isError = true
        })
        builder.addCase(getProductList.rejected, (state) => {
            state.isError = true
            state.isLoading = false

        })

    }
})

export default sellerSlice.reducer