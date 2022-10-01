import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const ctx = useContext(CartContext);
    if (ctx.cartList.length===0){
        return (<>
        <div>
            <div>
            <h2> Carrito</h2>
            <h3>No hay ningún producto en el carrito.</h3>
            <Link to='/' >Regresar para Comprar</Link>
        
            </div>
        </div>
                
        </>)
       }


  return (
    <>
        <h1>Soy un Carrito</h1>
        <table>
        <button onClick={ctx.clear}>Borrar Todo</button>
        {
            ctx.cartList.map(item => 
        <div> 
            <tr>
                <td>
                    <img src={item.pictureUrl} alt="" width="150px" height="200px" />
                </td>
            
                <td>Telefono: {item.title}</td>
                <br /><br />
                <td>Precio: ${item.price} </td>
                <br />
                <td>Cantidad: {item.qty} </td>
            
                <div>
                <button onClick={() => ctx.removeItem (item.id)}>Borrar Producto</button>
                </div>
            </tr>
        </div>)
        }
        </table>


<div >
      <div>
          <div>
              <h3>Cantidad de productos agregados:  {ctx.productsTotal()}</h3>
          </div>
      </div>
      <div >
          <div>
              <h3>Subtotal: $ {ctx.priceTotal()}</h3>
          </div>
      </div>
      <div>
          <div>
          <h3>Total : $ {ctx.priceTotal()}</h3>
          </div>
      </div>
    
      </div>
    </>
  );
}

export default Cart;