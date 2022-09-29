import React from 'react'
import { Link } from 'react-router-dom'

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
          <Link to={`/item/${product.id}`}>
            <button>Detalle de Item</button>
          </Link>
    </div>
    </>
  );
}

export default Item;