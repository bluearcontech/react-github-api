import * as types from './types'

export const getStarGazers = (info) => ({
    type: types.GET_REPO_STAR_GAZERS_REQUEST,
    info
})

export const setStarGazers = (starGazers) => ({
    type: types.GET_REPO_STAR_GAZERS_INFO,
    starGazers
})