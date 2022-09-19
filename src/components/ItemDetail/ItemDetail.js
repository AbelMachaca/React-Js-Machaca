import React from 'react';

const ItemDetail = ({item}) => {
    
  return (
    <>
    <div>
        <div>
          <img src={item.pictureUrl} alt="" width="150px" height="200px" />
        </div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>{item.price} </p>
    </div>
    </>
  );
}

export default ItemDetail;










