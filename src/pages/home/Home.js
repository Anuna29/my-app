import React from 'react'
import "./Home.css"
import { Footer, Header, ProductList } from '../../components'
import { ProductsData } from '../../data'

export const Home = () => {
  return (
    <div id='home'> 
      <Header />
      <ProductList data={ProductsData} />
      <Footer  />
    </div>
  )
}
