import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div style={{height:'250px',marginTop:'100px'}} className='mt-5 bg-violet-600 text-white p-4  w-full'>
    <div className='flex justify-between p-4'>
      {/* intro */}
      <div style={{width:'400px'}} className='intro'>
        <h5 className='text-xl font-bold'><i class="fa-solid fa-music me-2"></i> Media Player</h5>
        <p>Designed and build with all the love in the world by the luminar team with the help of out contributers.</p>
        <p>Code licenced luminar, docs CC BY 3.0</p>
        <p>Currnetly v5.3.2</p>
      </div>
      {/* links */}
      <div className='flex flex-col'>
        <h5 className='text-xl font-bold'>Links</h5>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
        <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
        <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>History Page</Link>
      </div>
      {/* guide */}
      <div className='flex flex-col'>
        <h5 className='text-xl font-bold'>Guides</h5>
        <a href="https://react.dev/"  style={{textDecoration:'none',color:'white'}}>React</a>
        <a href="https://react-bootstrap.github.io/"  style={{textDecoration:'none',color:'white'}}>React Bootstrap</a>
        <a href="https://reactrouter.com/"  style={{textDecoration:'none',color:'white'}}>React Router</a>
      </div>
      {/* contact */}
      <div >
        <h5 className='text-xl font-bold'>Contact Us</h5>
        <div className='flex flex-column'>
          <input style={{height:'30px',width:'150px'}} type="text" placeholder='Enter Your Email' className='rounded p-1'/>
          <button className='btn btn-info ms-2'><i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className='flex justify-between icons mt-3'>
          <a href="#" style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-square-twitter"></i> </a>
          <a href="#" style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-square-instagram"></i> </a>
          <a href="#" style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin"></i> </a>
          <a href="#" style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-square-facebook"></i> </a>
          <a href="#" style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-square-github"></i> </a>
          <a href="#" style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-phone"></i> </a>
        </div>
      </div>
    </div>
    <p className='text-center mt-3 text-white'>copyright &copy; may 2024 batch,e-cart.built with react.</p>
  </div>
  )
}

export default Footer