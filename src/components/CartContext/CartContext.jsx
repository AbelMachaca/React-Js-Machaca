import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => { 

    const [ cartList , setCartList] = useState([]);
  

    const calcItemsQty=()=>{
        let qtys= cartList.map(prod=> prod.quantity);
        return qtys.reduce(((previousValue, currentValue)=> previousValue + currentValue),0)
    }
        const priceTotal=()=>{
            return cartList.reduce((acc,act)=>acc+act.quantity*act.price,0)
        }
        const productsTotal=()=>{
            let prodQuantity= cartList.map(prod=> prod.quantity);
           return prodQuantity.reduce(((previousValue, currentValue)=> previousValue + currentValue),0)
        }


    


    const isInCart = (id) => {
        return cartList.find(producto => id === producto.id);
    }





    const addItem=(prod,quantity)=>{
        if(isInCart(prod.id)){
                 setCartList(cartList.map(product=>{ 
                    return product.id ===prod.id ? {...product,quantity: product.quantity+quantity}:product
                    }));
                 }else{
                   
                    setCartList([...cartList,{...prod,quantity}])
                 }
           
                    }

    const clear = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id))

    }

    return( 
        <CartContext.Provider value={{
         cartList,
         addItem, 
         clear, 
         isInCart,
         calcItemsQty,
         priceTotal,
         productsTotal,
         removeItem}}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;