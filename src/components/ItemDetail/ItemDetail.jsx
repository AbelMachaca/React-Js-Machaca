import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';





const ItemDetail = ({ item }) => {
  
  const [itemCount, setItemCount] = useState(0);
  

  const onAdd = (qty) => {
    alert("You have selected " + qty + " items");
    setItemCount(qty);
    
  }
    
  return (
    <>
      {
      item && item.pictureUrl
      ?
      <div>
      <div>
          <div>
            <img src={item.pictureUrl} alt="" width="150px" height="200px" />
          </div>
          <div>
            <h3>Telefono: {item.title}</h3>
            <p>Descripcion: {item.description}</p>
            <p>Precio: ${item.price} </p>
            <p>Cantidad disponible: {item.stock} </p>
          </div>
          
            {
                itemCount === 0
                ? <ItemCount  stock={item.stock} initial={itemCount} onAdd={onAdd} />
                : <Link to='/cart'><button>Ver Carrito</button> </ Link>
            }
      </div>
      </div>
        : <p>Load...</p>
        }
    </>
  );
}

export default ItemDetail;










