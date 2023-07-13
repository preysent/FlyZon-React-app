import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
    name: "Mode",
    initialState: "light",
    reducers: {
        toggleMode: (state, action) => {
            return (state === "light")
                ? state = "dark"
                : state = "light";
        }
    }
});

export const { toggleMode } = modeSlice.actions

export default modeSlice.reducer