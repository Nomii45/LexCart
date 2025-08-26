import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductList from '../features/product_list/components/ProductList'
import HeroSection from '../features/HeroSection/HeroSection'
import Categories from '../features/categories/Categories'
import Footer from '../features/footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar>
        <HeroSection />
        <ProductList/>
        <Categories/>
        <Footer />
      </Navbar>
    </div>
  )
}

export default Home
