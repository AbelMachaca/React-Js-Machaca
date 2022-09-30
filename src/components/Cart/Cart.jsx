import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';

const Cart = () => {
    const ctx = useContext(CartContext);

  return (
    <>
        <h1>Soy un Carrito</h1>
        <button onClick={ctx.clear}>Borrar Todo</button>
        {
            ctx.cartList.map(item => <div> 
            <div>
            <img src={item.pictureUrl} alt="" width="150px" height="200px" />
          </div>
          <div>
            <h3>Telefono: {item.title}</h3>
            <p>Precio: ${item.price} </p>
            <p>Cantidad: {item.qty} </p>
          </div>
            
            
            
            
            
            <button onClick={() => ctx.removeItem (item.id)}>Borrar Producto</button></div>)
        }
    </>
  );
}

export default Cart;