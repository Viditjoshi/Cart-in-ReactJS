import React from 'react'
import list from '../list'
import Card from './Card'

const Shop = ({handleclick}) => {
  return (
    <div>
        <section>
            {list.map((item) =>{
              return <Card item={item} key={item.id} handleclick={handleclick}/>
            })}
        </section>
    </div>
  )
}

export default Shop
