import React, { useState } from "react";

const Cart = ({ cart, setcart }) => {
  const [price, setprice] = useState(0);
  const Removeritem = (Id) =>{
        cart.filter((item) => (
          setcart(item.id !== Id)
     ))
  }
  return (
    <div>
      {cart?.map((item) => (
        <div className="cart-Box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
          </div>
          <div className="cart_desc">
            <p>Book Name: {item.title}</p>
            <p>Book Author: {item.author}</p>
            <p>Price: {item.price} Rs</p>
          </div>
          <div className="btn-container">
            <button className="btn">+</button>
            <button className="btn">-</button>
          </div>
          <div className="btn-container">
            <button className="btn2" onClick={() =>Removeritem(item.id)}>remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
