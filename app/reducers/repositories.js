import * as types from '../actions/types'

const initialState = null

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER_REPO_REQUEST:
            return action.username
        case types.GET_USER_REPO_INFO:
            return action.repositories
        default:
            return state
    }
}
