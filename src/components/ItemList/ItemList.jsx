import Item from '../Item/Item';

function ItemList ({item}){
    return (
       <div >
       {item.map(product=>(< Item key= {product.id}
        id={product.id}
        title={product.title}
        pictureUrl={product.pictureUrl}
          description={product.description}
          price={product.price}/>
))}
</div>
    );
}

export default ItemList;

