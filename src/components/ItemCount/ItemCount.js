
import { useState } from 'react'

const ItemCount = ({initial, stock}) => {

        const [contador, setContador] = useState(initial);

        const sumar = () => {
            if (contador < stock) {
            setContador(contador + 1);
            }
        };


        const restar = () => {
            if (contador > initial) {
            setContador(contador - 1); 
            }
        };

        const agregarAlCarrito = () => {
            setContador(contador);

            console.log("Se agregó al carrito")
        };



    return (

        <> 
        <button onClick={()=> sumar()}> + </button>

        <button onClick={()=> restar()}> - </button> 
        <span> {contador} </span>
        <button onClick={()=> agregarAlCarrito()}> Agregar al Carrito </button>
        
        </>

    )
}

export default ItemCount;