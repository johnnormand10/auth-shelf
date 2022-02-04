import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* addNewItem (action) {
    console.log('in addItemSaga', action);
    try{
        yield axios.post('/api/shelf', action.payload);

        yield put({
            type: 'FETCH_ITEMS'
        });
    }
    catch {
        console.log('get all error in addNewAnimal');
    };

}; //end of addNewItem




function* addItemSaga (){    
    yield takeEvery('ADD_NEW_ITEM', addNewItem)
}; // end of addItemSaga


export default addItemSaga;