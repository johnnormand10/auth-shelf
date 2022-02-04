import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import { useEffect } from 'react';

function* deleteItemSaga() {
    yield takeEvery('DELETE_ITEM', deleteItem);
}

function* deleteItem(action) {
    try {
        console.log('In deleteItem saga', action.payload);
        let response = yield axios.delete(`/api/shelf/${action.payload.id}` );
        yield put({
            type: 'FETCH_ITEMS',
        });
    }
    catch (err) {
        console.error('DELETE failed', err);
    }
}

export default deleteItemSaga;