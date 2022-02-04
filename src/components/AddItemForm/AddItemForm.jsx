
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function AddItemForm () {
    const dispatch = useDispatch();
    const history = useHistory();

    const [newItem, setNewItem] = useState({ 
        description: '',
        image_url: ''
    })

    const handleChange = (event, property) => {
        console.log('event happened');
        setNewItem({ ...newItem, [property]: event.target.value})
    }

    const addItem = (evt) => {
        evt.preventDefault();
        
        dispatch({
            type: 'ADD_NEW_ITEM',
            payload: newItem
        })
    }

    return (
        <>
        <form onSubmit={addItem}>
            <input
                required
                type="text"
                placeholder="description"
                value={newItem.description}
                onChange={(event) => handleChange(event, "description")}
            />
            <input
                required
                type="text"
                placeholder="image_url"
                value={newItem.image_url}
                onChange={(event) => handleChange(event, "image_url")}
            />
            <button>Add Item</button>
        </form>
        </>
    )
}; // end of AddItemForm

export default AddItemForm;