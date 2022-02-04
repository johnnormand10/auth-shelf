const itemToUpdate = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SELECTED_ITEM':
            return action.payload;
    }
    return state;
}

export default itemToUpdate;