import React from 'react'
import { Link } from 'react-router-dom'

function Item({id,title,pictureUrl,price, description}){
  return(
      <div id={id}>
          <div>
            <img src={pictureUrl}  alt={title} width="150px" height="200px"/>
          </div>
          <div>
            <h3>{title}</h3>
              <p>Descripción:{description}</p>
              <p>Precio: ${price}</p>
            <Link to={`/item/${id}`}><button type="button" > Detalle del producto</button> </Link>
          </div>
      </div>
  )
}

export default Item;