
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Pnf from './pages/pnf'
import Footer from './components/Footer'
import View from './pages/View'

function App() {

  return (
    <>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/wishlist' element={<Wishlist/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/:id/view' element={<View/>} />  
      <Route path='/' element={<Pnf/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
