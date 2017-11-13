import { call, put, takeEvery } from 'redux-saga/effects'
import { showMessageRequest } from '../actions/messages'
import * as Api from '../services/repositories'
import { setUserReposInfo } from '../actions/repositories'
import * as types from '../actions/types'

export function* getUserRepoRequest(action) {
    try {
        const repsitories = yield call(Api.getRepositories, action.username)
        yield put(setUserReposInfo(repsitories))
    } catch (e) {
        yield put(showMessageRequest(e))
    }
}

export function* watchGetUserRepoRequest() {
    yield takeEvery(types.GET_USER_REPO_REQUEST, getUserRepoRequest)
}