import React from 'react'
import { Link } from 'react-router-dom'

function Item({id,title,pictureUrl,price, description}){
  return(
    <div className='col  mb-4'>
      <div className="card items h-100">
      <img src={pictureUrl} className='card-img-top' style={{ width: "150px", margin:"auto"}} alt={title} />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>Descripción: {description}</p>
          <p className='card-text'>Precio: ${price}</p>
        </div>
        <div className='card-footer'>
          <Link to={`/item/${id}`} className='btn btn-primary'>Detalle del producto</Link>
        </div>
      </div>
    </div>
  )
}

export default Item;