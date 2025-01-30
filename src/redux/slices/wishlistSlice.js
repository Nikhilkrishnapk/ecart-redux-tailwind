import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        // addtowishlist is an action . the action from view 
        // (state) :- ee cart ndyy ullill endhoky states undo athinokke define cheyyan aahnu reducer ndyy ullill action dyy argument aayi verunna states.
        // actionName : reducer function
        addToWishlist:(state,actionFromView)=>{
            state.push(actionFromView.payload)  //state is the initialized array "initialState:[]"
        },
        removeItem:(state,actionFromWishlist)=>{
            return state.filter(item=>item.id!=actionFromWishlist.payload)
        }
    }
})

export const{addToWishlist,removeItem}=wishlistSlice.actions   //different actions that performs some jobs like add to wishlist ,remove from wishlist etc...
export default wishlistSlice.reducer    // state that is used to store the wishlist added items