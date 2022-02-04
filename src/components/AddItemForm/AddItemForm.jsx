import React , { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function AddItemForm () {
    const dispatch = useDispatch();
    const history = useHistory();

    const [newItem, setNewItem] = useState({ 
        description: '',
        image_url: ''
    })

    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
        axios.get('/api/user')
            .then(res => {
                setUser(res.data);
            })
            .catch((err) => {
                setUser(null);
                console.log('failed to get user', err);
            })
    }

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
        { user?
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
        :
        <p>Please log in to add items.</p>
        }
        </>
    )
}; // end of AddItemForm

export default AddItemForm;