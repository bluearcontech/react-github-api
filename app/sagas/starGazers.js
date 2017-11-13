import { call, put, takeEvery } from 'redux-saga/effects'
import { showMessageRequest } from '../actions/messages'
import * as Api from '../services/starGazers'
import { setStarGazers } from '../actions/starGazers'
import * as types from '../actions/types'

export function* getRepoStarGazersRequest(action) {
    try {
        const starGazers = yield call(Api.getRepoStarGazers, action.info)
        yield put(setStarGazers(starGazers))
    } catch (e) {
        yield put(showMessageRequest(e))
    }
}

export function* watchRepoStarGazersRequest() {
    yield takeEvery(types.GET_REPO_STAR_GAZERS_REQUEST, getRepoStarGazersRequest)
}