import React from 'react'

const Item = ({product}) => {
    console.log(product.title)
  return (
    <>
    <div>
        <div>
          <img src={product.pictureUrl} alt="" width="150px" height="200px" />
        </div>
          <h3>{product.title}</h3>
          <p>{product.price} </p>
    </div>
    </>
  )
}

export default Item;