// Imports
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';


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
    

    const [btnStatus, setBtnStatus] = useState(false);
    //default false for future change

    const [newDescription, setNewDescription] = useState('');
    const [newImageUrl, setNewImageUrl] = useState('');
    const [newId, setNewId] = useState('');

    const handleUpdate = (item) => {
        console.log('in handleUpdate');
        //update status on click
        setBtnStatus(true);
        console.log('UPDATE btnStatus is:', btnStatus);

        setNewDescription(item.description);
        setNewImageUrl(item.image_url);
        setNewId(item.id);

        console.log('they are:', newDescription, newImageUrl, newId)
    }



    const handleSave = () => {
        console.log('in handleSave');
        //revert status on click
        setBtnStatus(false);
        console.log('save btnStatus is:', btnStatus);

        console.log('THEY ARE:', newId, newDescription, newImageUrl);
        
         dispatch({
            type: 'SET_SELECTED_ITEM',
            payload: {
                id: newId,
                description: newDescription,
                image_url: newImageUrl
            }
        })

        dispatch({
            type: 'UPDATE_ITEM'
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
                      {
                        btnStatus ? 
                        <>
                            <tr key={newId}>
                                <td><input value={newDescription} onChange={(event) => setNewDescription(event.target.value)}></input></td>
                                <td><input value={newImageUrl} onChange={(event) => setNewImageUrl(event.target.value)}></input></td>
                                <td><button onClick={handleSave}>Save Changes</button></td>
                            </tr> 
                        </>
                        :
                        <>{shelfList.map((item) => (
                            <tr key={item.id}>
                                <td>{item.description}</td>
                                <td><img width={200} src={item.image_url} /></td>
                                <td><button onClick={event => {handleUpdate(item)}}>Edit</button></td>
                                <td><button onClick={() => removeShelfItem(item.id)} >Remove Item</button></td>
                            </tr>
                        ))}</>

                      }
                </tbody>
            </table>
        </>
    )
};

export default ShelfList;