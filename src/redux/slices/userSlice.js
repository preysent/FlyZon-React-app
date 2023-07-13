import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const host = process.env.REACT_APP_API_URL //enviroment variable for api 


//creating the user
export const createUser = createAsyncThunk("createUser", async ({ credentials }) => {

    //Destructuring the data form credentials
    const { name, email, password, address, seller } = credentials

    const responce = await fetch(`${host}/api/user/create`, {
        method: "POST",
        body: JSON.stringify({ name, email, password, address, seller }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    return responce.json()
})



// login the user
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


// Getting user details if use logged in
export const getUserDetails = createAsyncThunk("getUserDetails", async (_, { getState }) => {

    // getState is second argument of createAsyncThunk function use to access state of the slice 
    const authToken = getState().user.authToken;

    
    const responce = await fetch(`${host}/api/user/getUser`, {
        method: "POST",
        // body: JSON.stringify({ email, password }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "authToken": authToken
        }
    });
    return responce.json()

});


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        authToken: localStorage.getItem("authToken"),
        error: false,
        login:false
    },
    extraReducers: (builder) => {

        // case for creating user
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.authToken = action.payload.token
            localStorage.setItem("authToken", action.payload.token)
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
        builder.addCase(getUserDetails.fulfilled, (state, action)=>{
            state.user = action.payload.User
            state.login = action.payload.login            
        })

        
        builder.addCase(getUserDetails.rejected, (state, action)=>{
            state.error = true
            state.login = false
        })

    }
})

export default userSlice.reducer