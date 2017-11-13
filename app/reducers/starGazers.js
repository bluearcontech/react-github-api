import * as types from '../actions/types'

const initialState = null

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_REPO_STAR_GAZERS_REQUEST:
            return action.info
        case types.GET_REPO_STAR_GAZERS_INFO:
            return action.starGazers
        default:
            return state
    }
}
