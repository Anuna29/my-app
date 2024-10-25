import React from 'react'
import "./Home.css"
import { Footer, Header, ProductList } from '../../components'
import { ProductsData } from '../../data'
import { useUserContext } from '../../context'

export const Home = () => {
  const { user } = useUserContext();
  console.log(user);
  return (
    <div> 
      <Header />
      <ProductList data={ProductsData} />
      <Footer  />
    </div>
  )
}
