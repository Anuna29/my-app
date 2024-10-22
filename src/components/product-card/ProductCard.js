import React from 'react'

export const ProductCard = (props) => {
  
  const { product, index } = props;

  return (
    <div key={index} id='product-card'>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
  )
}
