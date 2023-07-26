import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const host = process.env.REACT_APP_API_URL //enviroment variable for api
// const host = "https://flyzon-backend-api.onrender.com" 

// creating async action to fetch product
export const fetchProducts = createAsyncThunk('fetchProduct', async () => {
    const responce = await fetch(`${host}/api/product/fetch/Electronics`)
    return responce.json()
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

        // case for loading home page
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