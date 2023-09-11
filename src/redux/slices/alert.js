import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
    name: "Alert",
    initialState: {
        show : false,
        message : '',
    },
    reducers: {
        toggleAlert: (state, action) => {
            console.log(action)
            if(state.show){
                state.show = false
                state.message = ''
            }else{
             state.message = action.payload
             state.show = true
            }
        },
    }
});

export const  {toggleAlert}  = alertSlice.actions

export default alertSlice.reducer