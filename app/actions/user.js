import * as types from './types'

export const getUserRequest = (username) => ({
    type: types.GET_USER_REQUEST,
    username
})

export const setUserInfo = (user) => ({
    type: types.GET_USER_INFO,
    user
})