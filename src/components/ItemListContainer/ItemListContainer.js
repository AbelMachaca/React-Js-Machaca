import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {

    const [ListProducts, setListProducts] = useState ([])
    const {categoria} = useParams()
    console.log(categoria)

    const CustomFetch = (itemF) => {
        return new Promise ((resolve, reject) => {
            setTimeout(()=> {

                if(categoria ) {
                    resolve(Products.filter((item)=> item.categoria == categoria));
                } else resolve(itemF);
                }, 2000);
        });
    }




    useEffect(() => {
        CustomFetch(Products)
        .then(data=> setListProducts(data));

    },[categoria])

    
    console.log(ListProducts)
    return (
        <>

        <div><ItemList ListProducts = {ListProducts}/></div>
        </>
    );
}

export default ItemListContainer;