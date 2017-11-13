import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'
import { showMessage, hideMessage } from '../actions/messages'
import * as types from '../actions/types'

let globalMessageId = 0

export function* showMessageRequest(action) {
    if(action.requestType == "user") {
        globalMessageId += 1

        const messageId = globalMessageId
        yield put(showMessage(messageId, action.message))
        yield call(delay, action.timeout || 3000)
        yield put(hideMessage(messageId))
    }
}

export function* watchShowMessageRequest() {
    yield takeEvery(types.SHOW_MESSAGE_REQUEST, showMessageRequest)
}
