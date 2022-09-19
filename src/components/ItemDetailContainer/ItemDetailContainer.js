import React, { useEffect, useState } from 'react';
import { CustomFetch } from '../CustomFetch/CustomFetch';
import ItemDetail from '../ItemDetail/ItemDetail';
import Products from '../Products/Products';

const ItemDetailContainer = (props) => {
    const [ListProducts, setListProducts] = useState({});

    useEffect(() => {
        CustomFetch(Products[1])
            .then(result => setListProducts(result))
            
    }, []);

    console.log(ListProducts)


  return (
    <>
    <div>
        <ItemDetail item = {ListProducts}/>
    </div>
    </>
  );
}

export default ItemDetailContainer;



