import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

// Function to grab all the items from DB
function* fetchItems() {
    try {
        // request that asks to get the data
        const response = yield axios.get('/api/shelf');
        console.log('response data is:', response.data);
        // yield put({ type: 'SET_ITEMS', payload: response.data });

    }
    catch (error) {
        console.log('Item get request failed', error);
    }
};