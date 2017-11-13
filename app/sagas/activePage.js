import { call, put, takeEvery } from 'redux-saga/effects'
import { getActivePageInfo } from '../actions/activePage'
import * as types from '../actions/types'

export function* setActivePageRequest(action) {
    const activePage = action.activePage
    yield put(getActivePageInfo(activePage))
}

export function* watchSetActivePageRequest() {
    yield takeEvery(types.SET_ACTIVE_PAGE_REQUEST, setActivePageRequest)
}