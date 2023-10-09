import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";

const initialState = []
export const  productSlice = createSlice({
    name : "product",
    initialState,
        reducers :  {
            setDataProduct : (state,action)=>{
                console.log(action)
                state = [...action.payload]
            }
    }
})

export const {setDataProduct} = productSlice.actions

export default productSlice.reducer