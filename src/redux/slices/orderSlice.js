import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const host = process.env.REACT_APP_API_URL //enviroment variable for api 



// creating async action to fetch product
export const placeOrder = createAsyncThunk('placeOrder', async (object) => {


    const requestBody = JSON.stringify(object)

    const responce = await fetch(`${host}/api/order`, {
        method: "POST",
        body: requestBody,
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
        orderList: [],
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
                alert("Failed to place order..!")
            }
        })

    }
})


export default orderSlice.reducer