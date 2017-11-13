import * as types from './types'

export const getUserFilterReposRequest = (filterRepositories, filterString) => ({
    type: types.GET_USER_FILTER_REPO_REQUEST,
    filterRepositories,
    filterString
})

export const setUserFilterReposInfo = (filterRepositories, filterString) => ({
    type: types.GET_USER_FILTER_REPO_INFO,
    filterRepositories,
    filterString
})