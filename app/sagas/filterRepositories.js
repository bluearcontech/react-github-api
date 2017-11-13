import { call, put, takeEvery } from 'redux-saga/effects'
import { showMessageRequest } from '../actions/messages'
import { setUserFilterReposInfo } from '../actions/filterRepositories'
import * as types from '../actions/types'

export function* getUserFilterRepoRequest(action) {
    const filterRepositories = action.filterRepositories
    const filterString = action.filterString
    yield put(setUserFilterReposInfo(filterRepositories, filterString))
}

export function* watchGetUserFilterRepoRequest() {
    yield takeEvery(types.GET_USER_FILTER_REPO_REQUEST, getUserFilterRepoRequest)
}