
// productSlice is used to showing the product details in the home page.

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// api call ndyy action types aaya "pending/fullfilled/rejected" states nne handle cheyyunethum store cheyyunathum oru slice aahnu ahh slice ndyy name aahnu "products" {that defines in the productSlice} ethanu first aargument aayi thunk ille action type string ndyy first part. next part is the action ndy name ahnu "fetchProducts" .
// next argument oru function ahnu. aah function ill ahnu api call verunathhh
// products -> slice name
// fetchProducts -> returned actions such as {pending,fulfilled,rejected}
// 2nd argument is a call back fun() that returns an api call
export const fetchProducts = createAsyncThunk("products/fetchProducts",async ()=>{
    const result = await axios.get("https://dummyjson.com/products")
    // console.log(result.data.products);

    // sessionStorage.setItem is used to store the data temporarly for when dont loss the data to not get lost refreshing the page.
    // the data is store on the allproducts key 
    // the fetched data is in object form we want to convert it into string for storing the data into the sessionstorage (JSON.stringify is used)
    sessionStorage.setItem('allProducts',JSON.stringify(result.data.products))
    return result.data.products
})

const productSlice=createSlice({
    name:"products",
    initialState:{
        allProducts:[],
        dummyAllProducts:[],
        loading:false,
        errorMsg:""
    },
    //reducers nnu normal aaya actions nne aahnu return cheyyan pattullu.async actions aaya api call handle cheyyan kazhyilla athinannu extraReducers nnu use cheyyunathh
    reducers:{ 
        searchProduct:(state,actionByHeader) => {
            state.allProducts=state.dummyAllProducts.filter(item=>item.title.toLowerCase().includes(actionByHeader.payload))
        }   
    },
    // eee extraReducer ndyy ullill callback aayi verunathh oru builder aahnu . builder ndy ullill ahnu ooro cases nne handle cheyyan pattullu...
    // addcase() is a predefined method of builder . different cases nne handle cheyyan ahnu handle use cheyyunath.
    // first argument aayi use cheyyunathh fetchProducts aahnu .fetchProducts is a asyncThunk method they have different cases . athukondannu addcase method ndyy ullill fetchmethod nnu use cheyyunath. "addcase(fetchProducts)"
    // second argument oru callback aahnu athill state, apiResult umm undavum . callback ill verunna ee apiResult ill ahnu nammade api call ill fetch cheyytha "result" lle data undavaa..
    // oru action ill 2 argument vannal athinde resultdata aayi verunnath result."payload" ill ahnu.
    // fetchproduct.fulfilled case aaya -> state.allproducts ("allproducts defines in the initial state")
    extraReducers:(builder)=>{

        // (state) :- ee cart ndyy ullill endhoky states undo athinokke define cheyyan aahnu reducer ndyy ullill action dyy argument aayi verunna states.
        // actionName : reducer function

        builder.addCase(fetchProducts.fulfilled,(state,apiResult)=>{
            state.allProducts=apiResult.payload
            state.dummyAllProducts=apiResult.payload
            state.loading=false
            state.errorMsg=""
        })
        builder.addCase(fetchProducts.pending,(state)=>{
            state.allProducts=[]
            state.dummyAllProducts=[]
            state.loading=true
            state.errorMsg=""
        })
        builder.addCase(fetchProducts.rejected,(state)=>{
            state.allProducts=[]
            state.dummyAllProducts=[]
            state.loading=false
            state.errorMsg="api call failed"
        })
    }
})
export const {searchProduct} = productSlice.actions
export default productSlice.reducer