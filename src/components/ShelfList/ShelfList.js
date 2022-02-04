// Imports
import { useSelector } from 'react-redux';

function ShelfList() {

    const shelfList = useSelector(store => store.itemList);
    console.log(shelfList);

    return (
        <>
            <p>Eventual List of Items</p>
        </>
    )
};

export default ShelfList;