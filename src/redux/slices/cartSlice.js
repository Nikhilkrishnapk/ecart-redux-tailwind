import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cartItems',
    initialState:[],
    reducers:{
        // (state) :- ee cart ndyy ullill endhoky states undo athinokke define cheyyan aahnu reducer ndyy ullill action dyy argument aayi verunna states.
        // actionName : reducer function
        // evade 2 components nnum actions verununnde. athukondanu particular aayi another slice ill cheytha pole (actionFromView/actionFromWishlist) onnum kodukanju.
        addToCart : (state,actionFromComponent)=>{
            const existingProduct = state.find(item=>item.id==actionFromComponent.payload.id)
            if(existingProduct){
                existingProduct.quantity++
                existingProduct.totalPrice=existingProduct.quantity*existingProduct.price

                const remainingProducts = state.filter(item=>item.id!=existingProduct.id)

                state = [...remainingProducts,existingProduct]

            }else{
                state.push({...actionFromComponent.payload,quantity:1,totalPrice:actionFromComponent.payload.price})
            }
        },
        incrementQuantity:(state,actionByCart)=>{
            const existingProduct = state.find(item=>item.id==actionByCart.payload)

            existingProduct.quantity++
            existingProduct.totalPrice=existingProduct.quantity*existingProduct.price

            const remainingProducts = state.filter(item=>item.id!=existingProduct.id)

            state = [...remainingProducts,existingProduct]
        },
        removeCartItem:(state,actionByCart)=>{
            return state.filter(item=>item.id!=actionByCart.payload)
        },        
        decrementQuantity:(state,actionByCart)=>{
            const existingProduct = state.find(item=>item.id==actionByCart.payload)

            existingProduct.quantity--
            existingProduct.totalPrice=existingProduct.quantity*existingProduct.price

            const remainingProducts = state.filter(item=>item.id!=existingProduct.id)

            state = [...remainingProducts,existingProduct]
        },
        emptyCart:(state)=>{
            return state=[]
        }

    }
})

export const {addToCart,incrementQuantity,removeCartItem,decrementQuantity,emptyCart} = cartSlice.actions
export default cartSlice.reducer