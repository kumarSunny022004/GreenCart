import React from 'react'
import ProductCart from './ProductCard'

const BestSeller = () => {
  return (
    <div className='mt-16'>
        <p className='text-2xl md:text-3xl font-medium'>Best Sellers </p>
        <div>
          <ProductCart/>
        </div>
    </div>
  )
}

export default BestSeller