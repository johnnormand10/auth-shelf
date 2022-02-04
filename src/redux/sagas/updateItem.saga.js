import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { useSelector } from 'react-redux';


function* updateItemSaga() {
    yield takeEvery('SET_SELECTED_ITEM', updateItem);
}

function* updateItem (action){
    try{
   
    yield axios.put(`/api/shelf/${action.payload.id}`, action.payload);
    
    yield put({
        type: 'FETCH_ITEMS'
    })
    }
    catch (error){
        console.error('ERROR in updateItem.saga', error);
    }   
    
}

export default updateItemSaga;