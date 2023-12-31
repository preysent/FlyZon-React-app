import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const host = process.env.REACT_APP_API_URL //enviroment variable for api
 

// creating async action to fetch product  |  search products
export const fetchProducts = createAsyncThunk('fetchProducts', async ({ctgry, searchStr}) => {
    if(ctgry){
    const responce = await fetch(`${host}/api/product/fetch/${ctgry}`)
    return responce.json()
    }
    else{
        const responce = await fetch(`${host}/api/product/search/${searchStr}`)
        return responce.json()
    }
})


// getting one product
export const fetchOneProduct = createAsyncThunk('fetchOneProduct', async (id) => {
    const responce = await fetch(`${host}/api/product/${id}`)
    return responce.json()
})






const productSlice = createSlice({
    name: "products",
    initialState: {
        product: null,
        items: [],
        isLoading: false,
        isError: false
    },

    reducers:{
        clearOneProduct:(state, action)=>{
            state.product = null
        }
    },

    //extra reducers use for async funtion result case
    extraReducers: (builder) => {

        // case for loading products by category
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload
            state.product = null // whenaver we come back to home page product details = NULL
            state.isLoading = false
        })
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            console.log("error ", action.payload)
            state.isError = true
            state.isLoading = false
        })


        // case for loading single product 
        builder.addCase(fetchOneProduct.fulfilled, (state, action) => {
            state.product = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchOneProduct.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchOneProduct.rejected, (state, action) => {
            console.log("error ", action.payload)
            state.isError = true
            state.isLoading = false
        })

    }
})


export default productSlice.reducer