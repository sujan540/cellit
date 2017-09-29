import {call, put} from 'redux-saga/effects';

import ApiUsers from '../api/users';

export function* usersFetchList(action){
    //call the api to get the users

    const users = yield call(ApiUsers.getList);

    // save the users in state
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

    const users = yield call(ApiUsers.getList);

    // update the state by adding the user
    yield put({
        type: 'usersAdd',
        users: action.user,
    });
}

/**
 * Edit a users
 * @param action
 */
export function* usersEdit(action){
    yield call(ApiUsers.edit, action);

    // update the state by editing the user
    yield put({
        type: 'usersEdit',
        user: action.user,
    });
}

/**
 * delete a users
 * @param action
 */
export function* usersDelete(action){
    yield call(ApiUsers.delete, action);

    // update the state by removing the user
    yield put({
        type: 'usersEdit',
        user_id: action.user_id,
    });
}