import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchRestaurent = createAsyncThunk('restaurentList/fetchRestaurent',()=>{
    //api call
    const result = axios.get('/restaurant.json').then(response=>response.data.restaurants)
    console.log(result);
    return result
})

const restaurentSlice = createSlice({
    name:'restaurentList',
    initialState:{
        loading:false, //pending
        allrestaurent: [], //resolve
        searchRestaurent:[],
        error:"" //reject
    },
    extraReducers:(builder)=>{
        //builder holds values/response from thunk
        builder.addCase(fetchRestaurent.pending, (state)=>{
            state.loading=true
        })
        builder.addCase(fetchRestaurent.fulfilled, (state, action)=>{
            state.loading=false
            state.allrestaurent=action.payload
            state.searchRestaurent=action.payload
            state.error=""
        })
        builder.addCase(fetchRestaurent.rejected, (state, action)=>{
            state.loading=false
            state.allrestaurent=""
            state.error=action.error.message
        })
    },reducers:{
        search :(state, action)=>{
            state.allrestaurent = state.searchRestaurent.filter(item=>item.neighborhood.toLowerCase().includes(action.payload.toLowerCase()))
        }
    }
})

export const {search} = restaurentSlice.actions
export default restaurentSlice.reducer