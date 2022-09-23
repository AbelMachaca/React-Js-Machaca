import Item from '../Item/Item';

const ItemList = ({ListProducts}) => {
     
    return (
        <>
        {ListProducts.map((product) => (
            <Item product={product} key={product.id} />
        ))
        }
        
        </>
    );
};

export default ItemList;