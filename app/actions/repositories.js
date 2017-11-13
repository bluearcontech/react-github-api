import * as types from './types'

export const getUserReposRequest = (username) => ({
    type: types.GET_USER_REPO_REQUEST,
    username
})

export const setUserReposInfo = (repositories) => ({
    type: types.GET_USER_REPO_INFO,
    repositories
})