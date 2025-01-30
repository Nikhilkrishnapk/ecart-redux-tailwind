import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";

const view = () => {
  const dispatch = useDispatch()
  const userWishlist=useSelector(state=>state.wishlistReducer)
  const userCart=useSelector(state=>state.cartReducer)



  const [product,setProduct] = useState({})
  const {id}=useParams()
  console.log(id);

// when page will refresh all the data's are spoiled. so that, the session storage is used for storing the data.

  useEffect(()=>{
    // checking for the data is available on the allproducts in the sessionStorage.
    // JSON.parse is used to convert the string data into object form.
    if(sessionStorage.getItem("allProducts")){
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
      console.log(allProducts.find(item=>item.id==id));
      setProduct(allProducts.find(item=>item.id==id)) 
    }
  },[])

  const handleWishlist = () => {
    const existingProduct = userWishlist?.find(item=>item?.id==id)
    if(existingProduct){
      alert('already exist in wishlist')
    }else{
      dispatch(addToWishlist(product))
    }
  }

  const handleCart=()=>{
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item=>item.id==id)
    if(existingProduct){
      alert('product quantity incremented')
    }else{
      alert('product added to your cart')
    }
  }
  
  
  return (
    <>
      <Header />
      <div className="flex flex-col mx-5">
        <div className="grid grid-cols-2 items-center h-screen">
          <div>
            <img
              className="ms-40"
              width={"350px"}
              height={"250px"}
              src={product?.thumbnail}
              alt=""
            />

            <div className="flex justify-between mt-5">
              <button onClick={handleWishlist} className="bg-blue-600 rounded text-white p-2">
                Add to wishlist
              </button>
              <button onClick={handleCart} className="bg-green-600 rounded text-white p-2">
                Add to cart
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-bold">PID : {product?.id}</h3>
            <h1 className="text-5xl font-bold">{product?.title}</h1>
            <h4 className="font-bold text-red-600 text-2xl">$ {product?.price}</h4>
            <h4>Brand : {product?.brand}</h4>
            <h4>Category : {product?.category}</h4>
            <p>
              <span className="font-bold">Discription : </span> {product?.description}
            </p>
            <h3 className="font-bold mt-4"> Client Reviews
              {
                product?.reviews?.length>0?
                product?.reviews?.map(item=>(
                  <div key={item?.date} className="shadow rounded p-2 mb-2">
                    <h5>
                      <span className="font-bold">
                        {item?.reviewerName}
                      </span> :
                      {item?.comment}
                    </h5>
                    <p>Rating : {item?.rating} <i className="fa-solid fa-star text-yellow-500"></i></p>
                  </div>
                ))
                :
                <div className="font-bold text-red-600">No Reviews Yet...</div>
              }
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default view;
