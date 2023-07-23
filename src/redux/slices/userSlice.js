import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const host = process.env.REACT_APP_API_URL //enviroment variable for api 


// 1.creating the user
export const createUser = createAsyncThunk("createUser", async ({ firstName, lastName, email, password, number, address }) => {

    //Destructuring the data form credentials
    // const  = credentials
    const requestBody = JSON.stringify({ firstName, lastName, email, password, number, address })

    const responce = await fetch(`${host}/api/user/create`, {
        method: "POST",
        body: requestBody,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    return await responce.json()

})



// 2.login the user
// create async thunk's finction take one obj of value
export const loginUser = createAsyncThunk('loginUser', async ({ credentials }) => {

    //Destructuring the data form credentials
    const { email, password } = credentials

    const responce = await fetch(`${host}/api/user/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    return responce.json()

})


// 3.Getting user details if use logged in
export const getUserDetails = createAsyncThunk("getUserDetails", async (_, { getState }) => {
    
    // getState is second argument of createAsyncThunk function use to access state of the slice 
    const authToken = getState().user.authToken;


    const responce = await fetch(`${host}/api/user/getUser`, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "authToken": authToken
        }
    });
    return responce.json()

});




// 4.Adding to cart 
export const addToCart = createAsyncThunk('addToCart', async ({ productId, quantity }) => {
    const requestBody = JSON.stringify({ productId, quantity })

    const responce = await fetch(`${host}/api/cart`, {
        method: "POST",
        body: requestBody,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "authToken": localStorage.getItem('authToken')
        }
    })
    return await responce.json()

})

// 5. deleteing the cart element
export const deleteTheCartElement = createAsyncThunk("deleteTheCartElement", async (id) => {
    const responce = await fetch(`${host}/api/cart/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "authToken": localStorage.getItem('authToken')
        }
    })
    return await responce.json()
})


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        authToken: localStorage.getItem("authToken"),
        error: false,
        login: false,
        msg: ""
    },

    // Reducer for logout user 
    reducers: {
        logOutUser: (state, action) => {
            state.user = {}
            state.login = false
            state.authToken = null
            localStorage.clear()
        }
    },
    extraReducers: (builder) => {

        // case for creating user
        builder.addCase(createUser.fulfilled, (state, action) => {
            if (action.payload.login) {
                state.authToken = action.payload.token
                state.login = action.payload.login
                state.user = action.payload.User
            
                localStorage.setItem("authToken", action.payload.token)
                state.error = false
            }
            else {
                state.error = true
                state.msg = action.payload
            }
        })



        // case for login user
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.authToken = action.payload.token;
            localStorage.setItem("authToken", action.payload.token);
            state.error = false
        });

        builder.addCase(loginUser.rejected, (state, action) => {
            console.log(action.payload)
            state.error = true
        })



        // case if user is logded ing 
        builder.addCase(getUserDetails.fulfilled, (state, action) => {
            console.log(action.payload)
            state.user = action.payload.User
            state.login = action.payload.login

        })

        builder.addCase(getUserDetails.rejected, (state, action) => {
            state.error = true
            state.login = false
        })





        // case for add to cart 
        builder.addCase(addToCart.fulfilled, (state, action) => {

            state.user = action.payload
            state.error = false
            alert("add to cart sussefully")
        })
        builder.addCase(addToCart.rejected, (state, action) => {
            state.error = true
        })


        // case for delete form cart 
        builder.addCase(deleteTheCartElement.fulfilled, (state, action) => {
            state.user.cart = action.payload
            state.error = false
            alert("cart deleted sussefully")
        })
        builder.addCase(deleteTheCartElement.rejected, (state, action) => {
            state.error = true
        })


    }
})

export const { logOutUser } = userSlice.actions
export default userSlice.reducer