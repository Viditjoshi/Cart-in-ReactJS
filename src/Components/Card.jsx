import React from 'react'

const Card = ({item,handleclick}) => {
    const {title ,author ,img,price} = item;
  return (
    <div className='container'>
        <div className="img">
        <img src={img} alt="image" />
        </div>
        <div className="details">
            <p>Book Name: {title}</p>
            <p>Book Author: {author}</p>
            <p>Price:{price}Rs</p>
            <button onClick={() => handleclick(item)}>Add to Cart</button>
        </div>

    </div>
  )
}

export default Card
