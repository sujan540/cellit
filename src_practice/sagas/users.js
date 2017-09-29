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


/**
 * Add a users
 * @param action
 */
export function* usersAdd(action){
    yield call(ApiUsers.add, action);
}

/**
 * Edit a users
 * @param action
 */
export function* usersEdit(action){
    yield call(ApiUsers.edit, action);
}

/**
 * delete a users
 * @param action
 */
export function* usersDelete(action){
    yield call(ApiUsers.delete, action);
}