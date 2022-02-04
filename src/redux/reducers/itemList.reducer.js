// Reducer for gathering data in array and then will
// render to the DOM
const itemListReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_ITEMS':
            return action.payload;
        default:
            return state;
    }
};

export default itemListReducer;