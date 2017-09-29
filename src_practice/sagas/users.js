import {call, put} from 'redux-saga/effects';

import ApiUsers from '../api/users';

export function* usersFetchList(action){
    //call the api to get the users

    const users = yield call(ApiUsers.getList);

    //dispatch the success action with the uses attached
    yield put({
        type: 'users.fetchListSuccess',
        users: users
    });
}