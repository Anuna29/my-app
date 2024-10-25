import React from 'react'
import { ProductCard } from '../product-card'


export const ProductList = (props) => {
  const { data } = props;

  if (!data) {
    return <p>No products found.</p>
  }

  return (
    <div>
      {data.map((product, index) => (
        <div key={index}>
          <ProductCard product={product} index={index} />
        </div>
      ))}
    </div>
  )
}
