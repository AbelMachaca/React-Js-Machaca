import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import { CustomFetch } from '../CustomFetch/CustomFetch';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = (props) => {

    const [ListProducts, setListProducts] = useState ([])

    useEffect(() => {
        CustomFetch(Products)
        .then(data=> setListProducts(data))

    },[])

    
    console.log(ListProducts)
    return (
        <>

        <div><ItemList ListProducts = {ListProducts}/></div>
        </>
    );
}

export default ItemListContainer;