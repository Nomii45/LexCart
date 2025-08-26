import React from 'react'
import ProductDetails from '../features/product_list/components/productDetails'
import Navbar from '../features/navbar/Navbar'

const productDetailsPage = () => {
  return (
    <div>
    <Navbar>
        <ProductDetails></ProductDetails>
    </Navbar>
    </div>
  )
}

export default productDetailsPage