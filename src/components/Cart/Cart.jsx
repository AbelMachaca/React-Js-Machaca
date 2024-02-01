import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import { serverTimestamp, doc, setDoc,collection, updateDoc,increment } from "firebase/firestore";
import  db from "../../utils/firebaseConfig";



const Cart=()=>{
    const ctx=  useContext(CartContext);
    const itemsDb=ctx.cartList.map(item=>({
      id:item.id,
      title:item.title,
      price:item.price,
      quantity:item.quantity,
    }))
    const createOrder= async() =>{
      let order={
          buyer:{
              name:"Leo Messi",
              email:"LeoM@gmail.com",
              phone:"123456789"
          },
          items:itemsDb,
          date: serverTimestamp(),
          total:ctx.priceTotal(),
      }
      const newOrder=doc(collection(db,"orders"))
        await setDoc(newOrder, order);
        ctx.cartList.forEach(async(item) => {
      const itemRef = doc(db, "products", item.id);
        await updateDoc(itemRef, {
        stock:increment(-item.quantity) 
    });
     });
        ctx.clear()
        alert('Your order has been created! This is your ID\'s order:' +newOrder.id)
        }
      
     if (ctx.cartList.length===0){
      return (
        <div className="cart-container">
          <h2>Carrito</h2>
          <div className="cart-empty">
            <h3>No hay ningún producto en el carrito.</h3>
            <Link to='/'>Regresar para Comprar</Link>
          </div>
        </div>
      );
    }
  
    return (
      <div className="cart-container cart-buttons">
        <h1>Carrito</h1>
        <button onClick={ctx.clear}>Borrar Todo</button>
        {ctx.cartList.map(product => (
          <div className="cart-product" key={product.id}>
            <img src={product.pictureUrl} style={{ width: "150px",}} alt="" />
            <div className="cart-product-info">
              <p>Telefono: {product.title}</p>
              <p>Precio: ${product.price}</p>
              <p>Cantidad: {product.quantity}</p>
              <button onClick={() => ctx.removeItem(product.id)}>Borrar Producto</button>
            </div>
          </div>
        ))}
        <div className="cart-total">
          <h3>Cantidad de productos agregados: {ctx.productsTotal()}</h3>
          <h3>Subtotal: ${ctx.priceTotal()}</h3>
          <h3>Total: ${ctx.priceTotal()}</h3>
          <button onClick={createOrder}>Terminar compra</button>
        </div>
      </div>
    );
  }

export default Cart;