import React from 'react';
import { useState } from 'react';

const ItemCount = ({initial, stock, onAdd}) => {

        const [contador, setContador] = useState(0);

        const sumar = () => {
            if (contador < stock) {
            setContador(contador + 1);
            }
        };


        const restar = () => {
            if (contador === 0) return;
            setContador(contador - 1);
        };

        



    return (

        <> 
            <div>
                <button onClick={()=> sumar()}> + </button>
                <span> {contador} </span>
                <button onClick={()=> restar()}> - </button> 
                {
                stock && contador
                ? <button onClick={()=> onAdd(contador)}> Agregar al Carrito </button>
                : <button disabled> Agregar al carrito</button>
                }
                
            </div>
            
            
        </>




    );
};

export default ItemCount;