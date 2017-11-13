import * as types from './types'

export const showMessageRequest = (message, requestType) => ({
    type: types.SHOW_MESSAGE_REQUEST,
    message,
    requestType
})

export const showMessage = (messageId, message, requestType) => ({
    type: types.SHOW_MESSAGE,
    messageId,
    message,
    requestType
})

export const hideMessage = messageId => ({
    type: types.HIDE_MESSAGE,
    messageId,
})
