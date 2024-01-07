import { configureStore } from "@reduxjs/toolkit";
import restaurentSlice from '../redux/restaurentSlice'



const store = configureStore({
    reducer:{
        restaurentSlice
    }
})

export default store