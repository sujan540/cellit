import {takeLatest} from 'redux-saga';
import {fork} from 'redux-saga/effects';

import {usersFetchList} from './users';

/**
 * main saga generator
 */
export function* sagas(){
    yield[
        fork(takeLatest, 'usersFetchList', usersFetchList),
    ];
}