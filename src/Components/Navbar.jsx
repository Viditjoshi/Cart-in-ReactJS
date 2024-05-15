import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({size,setshow}) => {
  return (
    <div className='nav-bar'>
        <div className='logo'>
        <span onClick={()=>setshow(true)}>VNG</span>
        </div>
        <div className='cart'>
            <span><FaShoppingCart onClick={()=>setshow(false)}/></span>
            <span>{size}</span>
        </div>
    </div>
  )
}

export default Navbar
