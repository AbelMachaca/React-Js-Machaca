import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';





const ItemDetail = ({ item }) => {
  
  const [itemCount, setItemCount] = useState(0);
  const ctx = useContext(CartContext);
  

  const onAdd = (qty) => {
    alert("Has seleccionado " + qty + " items");
    setItemCount(qty);
    ctx.addItem(item, qty);
    
  }
    
  return (
    <>
    {
      item && item.pictureUrl ? (
        <div className="item-detail">
          <div className="item-detail-content">
            <div className="item-detail-image">
              <img src={item.pictureUrl} alt="" width="150px" height="200px" />
            </div>
            <div className="item-detail-info">
              <h3 className="item-detail-title">Telefono: {item.title}</h3>
              <p className="item-detail-description">Descripcion: {item.description}</p>
              <p className="item-detail-price">Precio: ${item.price}</p>
              <p className="item-detail-stock">Cantidad disponible: {item.stock}</p>
              <div className="item-detail-buttons">
                {itemCount === 0 ? (
                  <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                ) : (
                  <Link to='/cart'>
                  <button className="item-detail-cart-button">Ver Carrito</button>
                </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Load...</p>
      )
    }
  </>
  );
}

export default ItemDetail;










