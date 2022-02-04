import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function MyShelf () {
    const dispatch = useDispatch();
    const myItems = useSelector ((store) => store.myItemReducer);
    const user = useSelector ((store) => store.user);
    console.log('user is', user);


    useEffect(() => {
        dispatch({
            type: 'GET_MY_ITEMS',
            payload: user.id
        })
    }, []);


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
                      {/* {
                        btnStatus ? 
                        <>
                            <tr key={newId}>
                                <td><input value={newDescription} onChange={(event) => setNewDescription(event.target.value)}></input></td>
                                <td><input value={newImageUrl} onChange={(event) => setNewImageUrl(event.target.value)}></input></td>
                                <td><button onClick={handleSave}>Save Changes</button></td>
                            </tr> 
                        </>
                        : */}
                        <>{myItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.description}</td>
                                <td><img width={200} src={item.image_url} /></td>
                                {/* <td><button onClick={event => {handleUpdate(item)}}>Edit</button></td>
                                <td><button onClick={() => removeShelfItem(item.id)} >Remove Item</button></td> */}
                            </tr>
                        ))}</>

                      {/* } */}
                </tbody>
            </table>


        </>
    )
}; // end of MyShelf

export default MyShelf;