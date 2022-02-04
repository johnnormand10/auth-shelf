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
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
};

export default ShelfList;