import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
          let removeitem=  state.items.map((item=>{
            // return item.info.id === action.payload.card.info.id
            console.log(item.card,"itemactions")
          }))
          state.items.pop(removeitem)
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions
export default cartSlice.reducer