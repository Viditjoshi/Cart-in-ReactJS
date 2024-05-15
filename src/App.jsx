import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Shop from './Components/Shop'
import './style/index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './Components/Cart';


const App = () => {
  const [cart,setcart] = useState([])
  const [show,setshow] = useState(true)
  

  const handleclick = (items) =>{
      let ispresent = false;
      cart.forEach((products) =>{
       if(items.id === products.id) 
        ispresent = true;
      })
      if(ispresent){
        setTimeout(()=>{
          toast.error("item already present")
        },200)
        return 
      }
      setcart([...cart,items])
  }
  return (
    <div>
       <ToastContainer />
         <Navbar size={cart.length} setshow={setshow}/> 
         {
           show ? <Shop handleclick={handleclick}/> : <Cart cart={cart} setcart={setcart}/>
         }   
    </div>
  )
}

export default App
