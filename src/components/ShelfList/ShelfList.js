// Imports
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


function ShelfList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_ITEMS' });
    }, []);
    
    const shelfList = useSelector(store => store.itemList);
    console.log('shelf list is', shelfList);

    const removeShelfItem = (id) => {
        console.log('In removeShelfItem');
        dispatch({
            type:   'DELETE_ITEM',
            payload: {id: id}
        })
    }
    
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Item Description</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {shelfList.map((item) => (
                        <tr key={item.id}>
                            <td>{item.description}</td>
                            <td><img width={200} src={item.image_url} /></td>
                            <td><button onClick={() => removeShelfItem(item.id)} >Remove Item</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
};

export default ShelfList;