import Item from '../Item/Item';

const ItemList = ({ListProducts}) => {
     
    return (
        <>
        {ListProducts.map((data) => (
            <Item data={data} key={data.id} />
        ))
        }
        
        </>
    );
};

export default ItemList;