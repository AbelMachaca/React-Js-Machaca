import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => { 

    const [cartList, setCartList] = useState([]);

    const isInCart = (id) => {
        return cartList.find(producto => id === producto.id);
    }


    const addItem = (product, qty) => {
        if (isInCart (product.id) === undefined){
            product.qty = qty;
        
        setCartList([...cartList, product]);
        } else product.qty += qty;
    }

    const clear = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id))

    }

    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem}}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;