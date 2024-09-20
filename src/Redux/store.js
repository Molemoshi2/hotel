import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from './newSlice'


export const store = configureStore(
    {
        reducer:{
            rooms:roomsReducer
        }
    }
);