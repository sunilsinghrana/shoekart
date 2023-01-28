import React from 'react'
import Carditem from './Carditem'

const Products = () => {
  return (
    <div className='p-12 my-5'>
      <div className="products ml-24"><p className='text-3xl font-bold underline underline-offset-8'>All Categories</p></div>
      <div>
        <Carditem/>
      </div>
    </div>
  )
}

export default Products
