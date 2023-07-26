import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const host = process.env.REACT_APP_API_URL //enviroment variable for api 
// const host = "https://flyzon-backend-api.onrender.com"


// creating async action to fetch product
export const placeOrder = createAsyncThunk('placeOrder', async ({object, type="cart"}) => {

    console.log({object, type})

    const requestBody = JSON.stringify(object)

    const responce = await fetch(`${host}/api/order/${type}`, {
        method: "POST",
        body: requestBody,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "authToken": localStorage.getItem('authToken')
        }
    })
    return await responce.json()
})


// fetching order details order details 
export const fetchOrder = createAsyncThunk('fetchOrder', async (oId) => {

    const responce = await fetch(`${host}/api/order/${oId}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "authToken": localStorage.getItem('authToken')
        }
    })
    return await responce.json()
})



const orderSlice = createSlice({
    name: "orders",
    initialState: {
        Order: {},
        isLoading: false,
        isError: false
    },


    //extra reducers use for async funtion result case
    extraReducers: (builder) => {

        //  case for order placing 
        builder.addCase(placeOrder.fulfilled, (state, action) => {
            if (action.payload.status === "ok") {
                alert("order placed sussefully")
            } else {
                console.log(action.payload)
                alert("Failed to place order..!")
            }
        })


        //adding case for fetchOrder
        builder.addCase(fetchOrder.pending, (state, action) => {
            state.isLoading = true
        })

        builder.addCase(fetchOrder.fulfilled, (state, action) => {
            if (action.payload.status === "ok") {
                state.Order = action.payload.order
                state.isError = false
            }
            else {state.isError = true
              console.log(action.payload)
            }
            state.isLoading = false
        })

        builder.addCase(fetchOrder.rejected, (state, action) => {
                 
            state.isError = true
            state.isLoading = false
        })

    }
})


export default orderSlice.reducer