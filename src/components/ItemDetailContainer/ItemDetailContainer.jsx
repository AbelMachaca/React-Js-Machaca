import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Products from '../Products/Products';



const ItemDetailContainer = (props) => {
    const [ListProducts, setListProducts] = useState({});

    const {id} = useParams ()
    console.log(id)

    const CustomFetch = (itemF) => {
      return new Promise ((resolve, reject) => {
          setTimeout(() => {
              if (id) {
                resolve(Products.find((item)=> item.id == id));
                } else resolve(itemF);
              
                 
              },2000);
      });
  };

    useEffect(() => {
        CustomFetch(id)
            .then(result => setListProducts(result))
            
    }, [id]);

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



