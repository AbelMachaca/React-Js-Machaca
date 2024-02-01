import Item from '../Item/Item';

function ItemList ({item}){
    return (
        <div className="container">
       <div className="test">
       {item.map(product=>(< Item key= {product.id}
        id={product.id}
        title={product.title}
        pictureUrl={product.pictureUrl}
          description={product.description}
          price={product.price}/>
))}
</div>
</div>
    );
    
}

export default ItemList;

