import React, { useEffect ,useState} from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'



const Home = () => {
  const dispatch = useDispatch()  // useDispatch hook is used to fetch the actions from the redux . it returns a funtion .
  const {allProducts,loading,errorMsg} = useSelector(state=>state.productReducer) //useSelector hook is used to fetch the states from the redux store.
  // the data is stored in the productReducer key in the store.

  // pagination
  const [currentPage,setCurrentPage]=useState(1)
  const productPerPage = 8;
  const totalPages = Math.ceil(allProducts?.length/productPerPage)
  const currentPageProductLastIndex = currentPage*productPerPage 
  const currntPageProductFirstIndex = currentPageProductLastIndex-productPerPage
  const visibleAllProducts = allProducts?.slice(currntPageProductFirstIndex,currentPageProductLastIndex)

  console.log(allProducts,loading,errorMsg);
  
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  const navigateToNextPage = () => {
    if(currentPage != totalPages){
      setCurrentPage(currentPage+1)
    }
  }
  const navigateToPreviousPage = () => {
    if(currentPage != 1){
      setCurrentPage(currentPage-1)
    }
  }

  return (
    <>
    <Header insideHome={true}/>

<div>
  {
    loading?
    <div className='flex flex-col justify-center items-center my-10 text-3xl'>
      <img width={'200px'} height={'200px'} src="https://i.pinimg.com/originals/b2/d4/b2/b2d4b2c0f0ff6c95b0d6021a430beda4.gif" alt="" />
      Loading...
    </div>
    :
<>
      <div className='grid grid-cols-4 gap-4'>
        {
          allProducts.length>0?
          visibleAllProducts?.map(product=>(
            <div className='rounded border p-2 shadow'>
            <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="no image" />
            <div className='text-center'>
              <h3 className='text-xl font-bold'>{product?.title}</h3>
              <Link to={`/${product?.id}/view`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>
              View More...
              </Link>
            </div>
  
          </div>
          ))
          :
          <div className='flex justify-center items-center font-bold text-red-600 my-5 text-lg'>
            products not found !
          </div>
        }
  
      </div>
</>

  }
</div>

<div className='text-2xl text-center font-bold mt-20'>
  <span onClick={navigateToPreviousPage} className='cursor-pointer'><i className='fa-solid fa-backward me-5'></i></span>
  <span>{currentPage} of {totalPages} </span>
  <span onClick={navigateToNextPage}  className='cursor-pointer'><i className='fa-solid fa-forward me-5'></i></span>
</div>




    </>
  )
}

export default Home