import { call, put, takeEvery } from 'redux-saga/effects'
import { showMessageRequest } from '../actions/messages'
import * as Api from '../services/user'
import { setUserInfo } from '../actions/user'
import * as types from '../actions/types'

export function* getUserRequest(action) {
    try {
        const user = yield call(Api.getUser, action.username)
        yield put(setUserInfo(user))
    } catch (e) {
        yield put(showMessageRequest(e))
    }
}

export function* watchGetUserRequest() {
    yield takeEvery(types.GET_USER_REQUEST, getUserRequest)
}