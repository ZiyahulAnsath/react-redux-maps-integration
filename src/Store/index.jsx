import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "./slices/eventSlice";


// Combination of multiple reducer
export const store = configureStore({
    reducer:{
        event:eventSlice
        
    }
})

