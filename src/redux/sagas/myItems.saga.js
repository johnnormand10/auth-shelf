import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* myItemSaga () {
    yield takeEvery('GET_MY_ITEMS', fetchMyItems)
}

function* fetchMyItems (action) {
    try {
        const response = yield axios.get(`/api/shelf/${action.payload}`)

        yield put({
            type: 'SET_MY_ITEMS',
            payload: response.data
        })
    }
    catch (error) {
        console.log('get my item saga failed', error);
    }
}

export default myItemSaga;