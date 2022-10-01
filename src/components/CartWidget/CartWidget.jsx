import { useContext } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { CartContext } from '../CartContext/CartContext';

const CartWidget = () => {
    const test = useContext(CartContext);
    

    return (
      <>
      
       
        <div >
          <MdShoppingCart />{test.calcItemsQty()}
        </div>
          
       
        
      </>
    );
  }

export default CartWidget;