import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import fetchItemsSaga from './itemList.saga';
import updateItemSaga from './updateItem.saga';
import newItemSaga from './newItem.saga';
import deleteItemSaga from './deleteItem.saga';
import myItemSaga from './myItems.saga'

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    fetchItemsSaga(), // to fetch items, to be called anywhere
    updateItemSaga(),
    newItemSaga(),
    deleteItemSaga(),
    myItemSaga(),
  ]);
}
